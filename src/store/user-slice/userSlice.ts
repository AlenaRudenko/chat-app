import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ApiService } from '../../services/Api.service'
import  IUser  from '../../interfaces/User';

interface IState {
  users:IUser[];
  status:string | null;
  error:string | null;
}
const initialState:IState= {
  users:[],
  status:null,
  error:null
}

export const fetchUsers = createAsyncThunk('user/fetchUser',async (_, {rejectWithValue}) => {
  try {
    const response = await ApiService.getUsers();
console.log(response.statusText)
if(response.statusText !== 'OK'  ) {
  throw new Error()
}
return response.data
  } catch(error) {
   return rejectWithValue(error)
  }

}) 
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.users.push(action.payload) 
    },
  },
  extraReducers:(builder) => {     
    builder.addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
        state.error = null
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.users = action.payload
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.status = 'rejected';
      // state.error = action.payload
    })
  }
})
export const {setUser} = userSlice.actions
export default userSlice.reducer