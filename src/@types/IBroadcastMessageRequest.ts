export interface IBroadcastMessageRequest {
  target: string | null
  title: string | null
  body: string
  supportingLink: string | null
  supportingLinkText: string | null
  style: string | null
  dismissible: boolean
  persistent: boolean
}
