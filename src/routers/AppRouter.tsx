import ToastMessage from '@/components/common/ToastMessage'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const HomePage = React.lazy(() => import('@/pages/Home/Home'))

const AppRoute = () => {
  return (
    <>
      <ToastMessage />
      <Routes>
        <Route index path='/' element={<HomePage />} />
      </Routes>
    </>
  )
}

export default AppRoute
