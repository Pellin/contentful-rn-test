import { useContext } from 'react'
import { UserContext } from '../contexts/user/UserContext'
import ContentfulContextProvider from '../contexts/contentful/ContentfulContext'
import SelectTags from '../screens/SelectTags'
import MainTabs from './MainTabs'
import Header from '../components/Header'
import LoginStack from './LoginStack'

const AuthNavigator = () => {
  const { user } = useContext(UserContext)!

  return !user ? (
    <LoginStack />
  ) : (
    <ContentfulContextProvider>
      <Header />
      {user.tags.length < 3 ? <SelectTags /> : <MainTabs />}
    </ContentfulContextProvider>
  )
}

export default AuthNavigator
