import { createContext, useContext, useState, ReactNode } from 'react'

interface GreenModeContextType {
  isGreenMode: boolean
  toggleGreenMode: () => void
}

const GreenModeContext = createContext<GreenModeContextType | undefined>(undefined)

export function GreenModeProvider({ children }: { children: ReactNode }) {
  const [isGreenMode, setIsGreenMode] = useState(false)

  const toggleGreenMode = () => {
    setIsGreenMode(prev => !prev)
  }

  return (
    <GreenModeContext.Provider value={{ isGreenMode, toggleGreenMode }}>
      {children}
    </GreenModeContext.Provider>
  )
}

export function useGreenMode() {
  const context = useContext(GreenModeContext)
  if (context === undefined) {
    throw new Error('useGreenMode must be used within a GreenModeProvider')
  }
  return context
}