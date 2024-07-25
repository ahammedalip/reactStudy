import React from 'react'
import { Store } from './components/store/store'
import { Provider } from 'react-redux'
import ReduxCounter from './components/ReduxCounter'
import { ContextCreator, ContextProvider } from './components/contextApi/CounterContext'
import NormalParent from './components/contextReview/Normal'
import CallbackParent from './components/react.memo.useCallback/usecallback'
import Samplecustom from './components/customhoook/samplecustom'

export default function App() {

  return (
    <div>
      {/* <Provider store={Store}>
        <ReduxCounter />
      </Provider>


      <ContextProvider>
        <NormalParent />
      </ContextProvider>

      <CallbackParent/> */}
      <Samplecustom/>
    </div>

  )
}
