export interface IBroadcastMessage {
  id: string
  target: string | null
  title: string | null
  body: string
  supportingLink: string | null
  supportingLinkText: string | null
  style: string | null
  dismissible: boolean
  active: boolean
  createdAt: string
  createdBy: string
}
