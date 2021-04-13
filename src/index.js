import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import reportWebVitals from './reportWebVitals'

// Redux
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './redux/reducers'
import { getMovies } from './redux/actions/movieAction'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

store.dispatch(getMovies())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      < App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
