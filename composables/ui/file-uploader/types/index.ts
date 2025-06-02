export interface IPropsFileUploader {
  accept?: string
  label?: string
  url?: string
  invalid?: boolean
  warning?: boolean
  hideDocumentIcon?: boolean
}

export interface IEmitsFileUploader {
  (e: 'update', files: File): void
}
