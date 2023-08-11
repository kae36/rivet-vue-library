export interface ILink {
  display: string
  title: string
  routeTo: string | { name?: string; query?: any; params?: any }
}
