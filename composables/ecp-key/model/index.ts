import type { ParsedCertificateInfo } from '@composables/ecp-key/types';

export const parseCertificateInfo = (alias: string): ParsedCertificateInfo => {
  const result: ParsedCertificateInfo = { };

  alias.split(',').forEach((part) => {
    const [key, value] = part.split('=');
    if (!key || !value) return;

    switch (key.toLowerCase()) {
      case 'cn':
        result.fullName = value;
        break;
      case 'serialnumber':
      result.serialNumber = value;
      break;
    }
  });
  return result;
};
