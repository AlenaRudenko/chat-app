export type TChannel = {
  userId: string
  channelName: string
  createdAt: string
  id: string
}
export type ColoredChannel = {
  color: string
} & TChannel

export type TJoinChannel = Pick<TChannel, 'userId' & 'channelName'>
