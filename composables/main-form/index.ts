import type { IFocusedField } from '@composables/auth/types';
import type { IMainForm, StatusField } from '@composables/main-form/types';
import { creditSecurityTypeOptionsData, monthsForm } from '@composables/main-form/data';
import { setFormModel } from '@composables/main-form/model';
import { PropertyStatus } from '@composables/main-form/types';
import { useValidationRules } from '@composables/ui/validation-rules';
import { useApi } from '@composables/use-api';
import { getYearFromMonthLength } from '@utils/years-counter';
import useVuelidate from '@vuelidate/core';
import { useRoute } from 'nuxt/app';

// const { $i18n } = useNuxtApp();
export const useMainForm = () => {
  const { t } = useI18n();
  const $route = useRoute();

  const activeStep = computed<number>(() => {
    const step = Number($route.query.step);
    return Number.isNaN(step) ? 1 : step;
  });

  const { requiredField } = useValidationRules();
  const formObj = ref<IMainForm>(setFormModel());
  const formStatuses = ref<StatusField[]>([]);
  const focusedField = ref<IFocusedField>();
  const applicationId = useCookie('applicationId');

  const creditSecurityTypeOptions = computed(() =>
    creditSecurityTypeOptionsData.map(type => ({
      name: `${t(type.name)}`,
      value: type.value,
    })),
  );

  const gracePeriodOptions = computed(() =>
    monthsForm.map((month) => {
      const monthValue = getYearFromMonthLength(month);
      return {
        name: `${t(monthValue.type, monthValue.value)}`,
        value: month,
      };
    }),
  );

  const rules = [
    {
      targetCreditAmount: { ...requiredField() },
      youngSpecialistsCount: { ...requiredField() },
      gracePeriod: { ...requiredField() },
      creditReturnPeriodYears: { ...requiredField() },
      creditSecurityType: { ...requiredField() },
      plannedCreditReturnSchedule: { ...requiredField() },
      creditReturnFrequency: { ...requiredField() },
      projectDescription: { ...requiredField() },
      ownFundsAmount: { ...requiredField() },
      organizationSocialIndicators: { ...requiredField() },
      contactPersonFullName: { ...requiredField() },
      mobilePhone: { ...requiredField() },
      workPhone: { ...requiredField() },
      homePhone: { ...requiredField() },
      email: { ...requiredField() },
      directorFullName: { ...requiredField() },
      applicantQuestionnaireDocumentUrl: { ...requiredField() },
    },
    {
      certificateOfStateRegistration: { ...requiredField() },
      organizationCharter: { ...requiredField() },
      foundingAgreement: { ...requiredField() },
      foundersDecisionToOpenOrganization: { ...requiredField() },
      foundersDecisionOnTargetLoan: { ...requiredField() },
      orderOnTargetLoan: { ...requiredField() },
      ceoAuthorityConfirmation: { ...requiredField() },
      chiefAccountantAuthorityConfirmation: { ...requiredField() },
      ceoPassport: { ...requiredField() },
      chiefAccountantPassport: { ...requiredField() },
      itParkResidencyCertificate: { ...requiredField() },
      educationActivityPermission: { ...requiredField() },
    },
    {
      financialStatements: { ...requiredField() },
      taxDebtAbsenceCertificate: { ...requiredField() },
      bankAccountCertificate: { ...requiredField() },
      projectBusinessPlan: { ...requiredField() },
      targetFundSpendingEstimate: { ...requiredField() },
      leaseAgreement: { ...requiredField() },
    },
    {
      landCadastrePassport: { ...requiredField() },
      ownershipDocuments: { ...requiredField() },
      realEstateValuationReport: { ...requiredField() },
      vehicleRegistrationCertificate: { ...requiredField() },
      vehicleValuationReport: { ...requiredField() },
      shareholderResolution: { ...requiredField() },
      guarantorFinancialAndFoundingDocs: { ...requiredField() },
      auditorOpinion: { ...requiredField() },
      guarantorLetter: { ...requiredField() },
      insuranceCompanyLetter: { ...requiredField() },
    },
  ];

  const currentRules = computed(() => rules[activeStep.value - 1]);

  const $v = useVuelidate(currentRules, formObj);

  const { refresh: saveFieldFn } = useApi('api/properties', {
    method: 'post',
    body: focusedField,
  });

  const saveField = async (field: keyof IMainForm, value: string | number) => {
    if (applicationId && (!field || !value)) return;

    focusedField.value = {
      applicationId: applicationId.value ?? 0,
      type: field,
      value: value.toString(),
    };

    await saveFieldFn();
    focusedField.value = undefined;
  };

  const saveFile = async (field: keyof IMainForm, file: File) => {
    if (!file && applicationId.value) return;

    const formData = new FormData();
    formData.append('applicationId', applicationId.value ?? '0');
    formData.append('file', file);

    const { data: fileData, status } = await useFetch<string>('/api/files', {
      method: 'POST',
      body: formData,
    });

    if (status.value === 'success' && fileData.value) {
      (formObj.value as Record<string, any>)[field] = fileData.value;
      await saveField(field, fileData.value);
    }
  };

  const fieldToStepMap = ref<Record<string, number>>({});

  const generateFieldToStepMap = () => {
    const map: Record<string, number> = {};

    rules.forEach((stepRules, stepIndex) => {
      Object.keys(stepRules).forEach((fieldName) => {
        map[fieldName] = stepIndex + 1;
      });
    });

    fieldToStepMap.value = map;
  };

  const getRejectedFields = (): string[] => {
    return formStatuses.value
      .filter(p => p.status === PropertyStatus.Rejected)
      .map(p => p.name);
  };

  const getFirstInvalidStep = async (): Promise<number | null> => {
    for (let i = 0; i < rules.length; i++) {
      const stepRules = rules[i];
      const v$ = useVuelidate(stepRules, formObj);
      await nextTick();
      await v$.value.$validate();

      if (v$.value.$invalid) {
        return i + 1;
      }
    }

    return null;
  };

  function getStepByRejectedField(): number | null {
    for (const field of formStatuses.value) {
      if (field.status === PropertyStatus.Rejected) {
        const step = fieldToStepMap.value[field.name];
        if (step) return step;
      }
    }
    return null;
  }

  return {
    $v, rules,
    formObj,
    gracePeriodOptions,
    creditSecurityTypeOptions,
    saveField, saveFile, activeStep, formStatuses,
    applicationId, currentRules, generateFieldToStepMap, fieldToStepMap,
    getRejectedFields,
    getFirstInvalidStep,
    getStepByRejectedField,
  };
};
