export interface User {
  firstName: string
  lastName: string
  email: string
  favorites: string[]
  tags: string[]
  account: {
    type: string
    payment: string
    expires: Date
    notifications: boolean
  }
}

export interface UserContextInterface {
  user: User
  setUser: React.Dispatch<React.SetStateAction<User | null>>
  handleSignup: (email: string, password: string) => void
  handleLogin: (email: string, password: string) => void
  handleLogout: () => void
  getUserFromDb: (email: string) => Promise<void>
  promptAsync: any
  createAccount: (user: User, password: string) => Promise<void>
}
