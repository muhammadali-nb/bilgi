export interface LoginResponse {
  accessToken: string
  expiresIn: number
  refreshToken: string
  tokenType: string
}

export interface IFocusedField {
  applicationId: number | string
  type: string
  value: string | number
}

export interface ISelectedFile {
  file: File
  applicationId: number
}
