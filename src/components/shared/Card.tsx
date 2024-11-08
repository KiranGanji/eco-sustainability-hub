import { ReactNode } from 'react'
import { useGreenMode } from '../../context/GreenModeContext'
import { theme } from '../../styles/theme'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  highlight?: boolean
}

export function Card({ children, className = '', hover = false, highlight = false }: CardProps) {
  const { isGreenMode } = useGreenMode()

  return (
    <div 
      className={`
        p-4 sm:p-6 rounded-lg shadow-lg transition-colors
        ${highlight ? theme.card.highlight(isGreenMode) : theme.card.background(isGreenMode)}
        ${hover ? theme.card.hover(isGreenMode) : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}