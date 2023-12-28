import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ApiService } from '../../services/Api.service'
import  IUser  from '../../interfaces/User';
import { LocalService } from '../../services/LocalStore.service';


const initialState= {
  user:{} as IUser,
  status:null as string,
  error:null as string
}

export const authLogin = createAsyncThunk('user/authLogin',async (userLogin:string, {rejectWithValue}) => {
  try {
    const response = await ApiService.getUsers();
    const users = response.data.users;
    const currentUser = users.find((user:IUser) => user.nickName === userLogin);
    if(response.statusText !== 'OK'  ) {
      throw new Error('Server error!')} else if(!currentUser) {
        throw new Error('Пользователя не существует !')
      }
  return response.data
}
 
  catch(error) { console.log(error.message)
   return rejectWithValue(error.message);
  
  }

}) 
const userSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
  },
  extraReducers:(builder) => {     
    builder.addCase(authLogin.pending, (state) => {
        state.status = 'loading';
        state.error = null
    })
    builder.addCase(authLogin.fulfilled, (state, action) => {
      state.status = 'resolved';
      const users = action.payload.users;
      const currentUser = users.find((user:IUser) => user.nickName === "testUser");
      state.user = currentUser;
      LocalService.setUserId(currentUser.id)
      console.log(currentUser)
    })
    builder.addCase(authLogin.rejected, (state, action) => {
      state.status = 'rejected';
        state.error = action.error.message
    })
  }
})
// export const {setUser} = userSlice.actions
export default userSlice.reducer