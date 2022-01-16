import React, { createContext, useContext, useState } from 'react'

const SidenavContext = createContext({ isOpen: false, setIsOpen: () => {} })

export const useSidenav = () => {
  const sidenavContext = useContext(SidenavContext)

  return sidenavContext
}

export const SidenavProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <SidenavContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SidenavContext.Provider>
  )
}

export default SidenavProvider
