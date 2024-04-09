import { toast } from 'react-toastify'

export const MessageSuccess = (message: string) => {
  return toast.success(message)
}
export const MessageError = (message: string) => {
  return toast.error(message)
}
