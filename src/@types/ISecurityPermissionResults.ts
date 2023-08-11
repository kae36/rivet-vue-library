import type { ISecurityPermission } from "./ISecurityPermission"

export interface ISecurityPermissionResults {
  totalCount: number
  responseCount: number
  securityPermissions: ISecurityPermission[]
}
