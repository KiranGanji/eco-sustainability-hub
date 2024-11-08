import { useGreenMode } from '../context/GreenModeContext'

export function GreenModeToggle() {
  const { isGreenMode, toggleGreenMode } = useGreenMode()

  return (
    <button
      onClick={toggleGreenMode}
      className="fixed bottom-4 right-4 p-3 rounded-full shadow-lg transition-colors duration-200 bg-white dark:bg-gray-800 hover:bg-green-50 dark:hover:bg-green-900"
      aria-label="Toggle Green Mode"
    >
      {isGreenMode ? '🌱' : '🌿'}
    </button>
  )
}