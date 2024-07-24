import {configureStore} from '@reduxjs/toolkit'
import reducer from './CartSlice'
// ...
const store = configureStore({
    reducer: {
        userCart: reducer
    }
})


export type RootState = ReturnType < typeof store.getState > 
export default store
