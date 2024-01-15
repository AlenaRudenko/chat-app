export type TChannel = {
  userId: string
  channelName: string
  createdAt: string
  id: string
}
export type ColoredChannel = {
  color: string
} & TChannel
