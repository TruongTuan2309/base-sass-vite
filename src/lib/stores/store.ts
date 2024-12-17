import { loadingPage } from '@/lib/stores/loading.slice'
import { errorLogin } from '@/lib/stores/middlewares/errorLogin'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const reducer = {
  loadingReducer: loadingPage.reducer
}

export const store = configureStore({
  reducer: combineReducers<typeof reducer>(reducer),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(errorLogin)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
