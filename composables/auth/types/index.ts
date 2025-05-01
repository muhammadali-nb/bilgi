export interface LoginResponse {
  accessToken: string
  expiresIn: number
  refreshToken: string
  tokenType: string
}

export interface IFocusedField {
  applicationId: number
  type: string
  value: string | number
}
