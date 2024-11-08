import { useGreenMode } from '../../context/GreenModeContext'
import { theme } from '../../styles/theme'

export function Header() {
  const { isGreenMode } = useGreenMode()

  return (
    <header className={`w-full py-4 ${theme.background.secondary(isGreenMode)} shadow-md`}>
      <div className="w-[80%] mx-auto">
        <div className="flex items-center justify-center gap-2">
          <span className="text-2xl">🌍</span>
          <h1 className={`text-xl font-bold ${theme.text.primary(isGreenMode)}`}>
            Climate Change & Sustainability Hub
          </h1>
        </div>
      </div>
    </header>
  )
}