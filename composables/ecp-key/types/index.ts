export interface CertificateInfo {
  alias: string
  disk: string
  name: string
  path: string
}

export interface ParsedCertificateInfo {
  fullName?: string
  country?: string
  serialNumber: string
}
