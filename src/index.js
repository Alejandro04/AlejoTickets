import React from 'react'
import './index.css';
import { render } from 'react-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import rootReducer from './store/reducers/rootReducer'
import thunk from 'redux-thunk'
import fbConfig from './config/fbConfig'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore' // <- needed if using firestore
//import 'firebase/functions' // <- needed if using httpsCallable
import { createStore, applyMiddleware } from 'redux'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance  } from 'redux-firestore' // <- needed if using firestore


// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
}

// Initialize firebase instance
firebase.initializeApp(fbConfig)
const store = createStore(rootReducer, applyMiddleware(thunk))

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

function Apps() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

render(<Apps/>, document.getElementById('root'));
registerServiceWorker()