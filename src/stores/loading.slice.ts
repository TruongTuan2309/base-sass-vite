import { createSlice } from '@reduxjs/toolkit'

const initialState: { isLoading: boolean } = {
  isLoading: false
}

export const loadingPage = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true
    },
    hideLoading: (state) => {
      state.isLoading = false
    }
  }
})

export const { showLoading, hideLoading } = loadingPage.actions
export default loadingPage.reducer
