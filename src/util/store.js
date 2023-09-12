import { configureStore } from '@reduxjs/toolkit'
import timeReducer from '../components/handleTimeChange'
export default configureStore({
  reducer: {
    time: timeReducer
  }
})