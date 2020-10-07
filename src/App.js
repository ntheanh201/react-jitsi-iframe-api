import React, { useEffect } from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

import {
  AuthenticationProvider,
  oidcLog,
  useReactOidc,
  WebStorageStateStore
} from '@axa-fr/react-oidc-context'

import VideoConference from './VideoConference'
import { client } from './config'

const VideoConferenceLayer = () => {
  const { oidcUser, login } = useReactOidc()
  useEffect(() => {
    if (!oidcUser) {
      login()
    }
  }, [])

  if (!oidcUser) {
    return null
  }

  const userInfo = {
    email: oidcUser?.profile?.email,
    displayName:
      oidcUser?.profile?.given_name + ' ' + oidcUser?.profile?.family_name
  }

  return <VideoConference userInfo={userInfo} roomName='test room name' />
}

const LoadingIndicator = () => {
  return <div>Loading...</div>
}

const App = () => {
  return (
    <>
      <Router>
        <AuthenticationProvider
          configuration={client}
          loggerLevel={oidcLog.NONE}
          UserStore={WebStorageStateStore}
          callbackComponentOverride={LoadingIndicator}
        >
          <VideoConferenceLayer />
        </AuthenticationProvider>
      </Router>
      <VideoConference />
    </>
  )
}

export default App
