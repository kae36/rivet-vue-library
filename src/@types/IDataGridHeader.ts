export interface IDataGridHeader {
  itemKeyName: string
  itemValueFn?: (row: any) => string
  itemRenderFn?: (row: any) => string
  sortable?: boolean
  sortKeyName?: string
  filterable?: boolean
  filterKeyName?: string
  text: string
  class?: string
  itemClass?: string
}
