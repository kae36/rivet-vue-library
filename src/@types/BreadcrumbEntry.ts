export interface BreadcrumbEntry {
  title: string
  route: { name: string; params?: any; query?: any }
  active: boolean
}