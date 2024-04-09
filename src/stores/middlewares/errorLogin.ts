import { MessageError } from '@/utils/toastifyMessage'
import { isRejectedWithValue, Middleware } from '@reduxjs/toolkit'

export const errorLogin: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    MessageError(action.payload as string)
  }

  return next(action)
}
