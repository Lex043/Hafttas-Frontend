import { createContext } from "react"
import { feeds } from "./context.feeds"

const AnonymousContext = createContext(feeds) 

const AppContext = ({ children }: { children: React.ReactNode }) => {
  
  return (
    <AnonymousContext.Provider value={{

    }}>
      {children}
  </AnonymousContext.Provider>
  )
}

export default AppContext