import AppRoute from '@/routers/AppRouter'
import './styles/index.scss'
import { I18nextProvider } from 'react-i18next'
import i18n from '@/locales/i18n'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from '@/stores/store'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <AppRoute />
        </I18nextProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App
