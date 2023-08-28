import type { ISecurityRole } from "./ISecurityRole";

export interface ISecurityRoleResults {
  totalCount: number;
  responseCount: number;
  securityRoles: ISecurityRole[];
}
