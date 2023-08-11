import type { ISecurityUser } from "./ISecurityUser"

export interface ISecurityUserResults {
  totalCount: number
  responseCount: number
  securityUsers: ISecurityUser[]
}
