import { combineReducers } from 'redux'
import UpdateSlice from './update'
import filterSLICE from './filter'
import UserSlice from './PushSlice'
const RootReducers =combineReducers({
  updateTask:UpdateSlice.reducer,
  filter:filterSLICE.reducer,
  userslice:UserSlice.reducer

  })
export default RootReducers