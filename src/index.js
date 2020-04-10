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
import 'firebase/firestore'
//import 'firebase/functions' // <- needed if using httpsCallable
import { createStore, applyMiddleware } from 'redux'
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import { createFirestoreInstance, getFirestore } from 'redux-firestore'


// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
}

// Initialize firebase instance
firebase.initializeApp(fbConfig)
firebase.firestore()

const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),)

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