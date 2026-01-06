import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './context/UserContext.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store'

createRoot(document.getElementById('root')).render(
<Provider store={store}>{/* provider is provided by redux which we have used*/}
<UserContext>
    <App />{/* now app is a children of user usercontext*/}
</UserContext>{/*rapped it using user context*/}
</Provider>
)
