import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import store from './store/index.ts'
import { setCards } from './store/action.ts'
import { Provider } from 'react-redux'

store.dispatch(setCards())

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
