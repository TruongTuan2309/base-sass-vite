import i18n from '@/locales/i18n'
import AppRoute from '@/routers/AppRouter'
import { store } from '@/stores/store'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import { ThirdwebProvider } from 'thirdweb/react'
import './styles/index.scss'

const App = () => {
  return (
    <ThirdwebProvider>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <AppRoute />
        </I18nextProvider>
      </Provider>
    </ThirdwebProvider>
  )
}

export default App
