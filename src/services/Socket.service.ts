// import { Socket, io } from "socket.io-client";
// import { SERVER_URI } from "../constants/serverUri";
// import { store } from "../store/store";
// import { ColoredChannel } from "../interfaces/channel";
// import { setCurrentChannel } from "../store/channels-slice/channelsSlice";
// import IUser from "../interfaces/User";
// import { TMessage } from "src/interfaces/message";


// class SocketServizz {
//     public currentChannel:null | ColoredChannel = store.getState().channels.currentChannel
//     public user:null | IUser = store.getState().user.user
//     public socket:null | Socket = null
//     public messages = [] as TMessage[]
//     createConnection() {
//         this.socket = io(SERVER_URI)
//         this.socket.on('connect', () => {
//           return  console.log('user con')
//         })
//     }
//     receiveMessages() {
//         this.socket.on('receive_message', (response) => {
//             Array.isArray(response) ? this.messages = [...response] : this.messages =  [...this.messages, response]
//         })
//     }
//     handleJoinChannel(channel:ColoredChannel)  {
//         console.log('1', this.currentChannel)
//         if (!this.currentChannel) {
//             console.log('firts join', channel, this.user)
//             this.socket.emit('join_channel', { userId: this.user.id, channelId: channel.id })
//             store.dispatch(setCurrentChannel(channel))
//           } else if (this.currentChannel) {
//             console.log('no curcha', channel, 'curcha', this.currentChannel)
//             if (this.currentChannel.id !== channel.id) {
//                 this.messages = []
//               this.socket.emit('leave_channel', {
//                 channelId: this.currentChannel.id,
//               })
//               this.socket.emit('join_channel', { userId: this.user.id, channelId: channel.id })
//               store.dispatch(setCurrentChannel(channel))
              
//             }
//           }
//     }
//     handleSendMessage (value: string){
//         this.socket.emit('send_message', {
//           userId: this.user.id,
//           channelId: this.currentChannel.id,
//           message: value,
//         })
//     }
//     handleLogOut () {
//         this.messages = []
//         console.log('trying disconnecting')
//         if (this.currentChannel) {
//           this.socket.emit('leave_channel', {
//             channelId: this.currentChannel.id,
//           })
//         }
//         this.socket.disconnect()
//         this.socket.on('disconnect', () => {
//           console.log('user disconnected')
//         })
//       }
// }



// export const SocketService = new SocketServizz() 
