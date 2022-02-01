import React, { useEffect, useState } from 'react'
import {
  db,
  doc,
  getDoc,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithCredential,
} from '../../firebase'
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import { GCLOUD_CLIENT_ID, GCLOUD_STATE } from '@env'
import { User, UserContextInterface } from './types'

WebBrowser.maybeCompleteAuthSession()

export const UserContext = React.createContext<UserContextInterface | null>(
  null
)

const UserContextProvider: React.FC = (props) => {
  const [user, setUser] = useState<User | null>(null)
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: GCLOUD_CLIENT_ID,
    responseType: 'id_token',
    state: GCLOUD_STATE,
  })

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authenticatedUser) => {
      if (authenticatedUser) {
        getUserFromDb(authenticatedUser.email!)
      }
    })

    return unsubscribe
  }, [])

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params
      const credential = GoogleAuthProvider.credential(id_token)

      signInWithCredential(auth, credential)
    }
  }, [response])

  const handleSignup = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        getUserFromDb(userCredentials.user.email!)
      })
      .catch((err) => alert(err.message))
  }

  const handleLogin = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        getUserFromDb(userCredentials.user.email!)
      })
      .catch((err) => {
        console.log('error')
        alert(err.message)
      })
  }

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        setUser(null)
      })
      .catch((error) => alert(error.message))
  }

  const getUserFromDb = async (email: string) => {
    const userRef = doc(db, 'users', email)
    const userSnap = await getDoc(userRef)
    if (userSnap.exists()) {
      setUser(userSnap.data() as User)
    } else {
      console.log('user not saved in firestore')

      // createNewUser(name, email)
    }
  }

  const userContext: UserContextInterface = {
    user: user!,
    setUser,
    handleSignup,
    handleLogin,
    handleLogout,
    getUserFromDb,
    promptAsync,
  }

  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
