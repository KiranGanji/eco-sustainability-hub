import { ReactNode } from 'react'
import { useGreenMode } from '../../context/GreenModeContext'
import { theme } from '../../styles/theme'

interface LayoutProps {
  title: ReactNode | string
  description?: string
  children: ReactNode
}

export function Layout({ title, description, children }: LayoutProps) {
  const { isGreenMode } = useGreenMode()

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="text-center">
        <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold mb-2 ${theme.text.primary(isGreenMode)}`}>
          {title}
        </h2>
        {description && (
          <p className={`text-base sm:text-lg ${theme.text.secondary(isGreenMode)} max-w-3xl mx-auto`}>
            {description}
          </p>
        )}
      </div>
      <div className={`${theme.text.body(isGreenMode)} w-full`}>
        {children}
      </div>
    </div>
  )
}