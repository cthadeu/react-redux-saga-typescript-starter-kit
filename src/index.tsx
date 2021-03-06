import { gen } from './generator_check'

const foo: string = 'bar'

console.log('this is foo: ', foo)

const it = gen(5);

// note: not sending anything into `next()` here
console.log(it.next());       // { value:6, done:false }
console.log(it.next(12));   // { value:8, done:false }
console.log(it.next(13));   // { value:42, done:true }

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import routes from './store/routes'
import configureStore from './store/configureStore'

const INITIAL_STATE = {
  counter: 1,
}

const store = configureStore(INITIAL_STATE, browserHistory)

declare let __DEV__: boolean;
if (__DEV__) {
  window['store'] = store
}

// create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => state.router,
})

ReactDOM.render(
  <div>
    <Provider store={ store }>
      <Router history={ history }>
        { routes }
      </Router>
    </Provider>
  </div>,
  document.getElementById('root')
);

