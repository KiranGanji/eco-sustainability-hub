import { useGreenMode } from '../../context/GreenModeContext'
import { theme } from '../../styles/theme'

export function Footer() {
  const { isGreenMode } = useGreenMode()

  return (
    <footer className={`w-full py-8 ${theme.background.secondary(isGreenMode)} mt-auto`}>
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pl-4">
        <div>
          <h3 className={`text-lg font-semibold mb-4 ${theme.text.primary(isGreenMode)}`}>
            Social Media
          </h3>
          <div className="flex flex-col gap-4">
            <a href="#" className={theme.text.link(isGreenMode)}>Twitter</a>
            <a href="#" className={theme.text.link(isGreenMode)}>Facebook</a>
            <a href="#" className={theme.text.link(isGreenMode)}>Instagram</a>
            <a href="#" className={theme.text.link(isGreenMode)}>LinkedIn</a>
          </div>
        </div>

        <div>
          <h3 className={`text-lg font-semibold mb-4 ${theme.text.primary(isGreenMode)}`}>
            Feedback
          </h3>
          <button 
            className={`px-4 py-2 rounded-lg ${theme.button.primary(isGreenMode)}`}
            onClick={() => window.open('https://forms.gle/SvbYybzkzi89KB2i9', '_blank')}
          >
            Share Feedback
          </button>
        </div>

        <div>
          <h3 className={`text-lg font-semibold mb-4 ${theme.text.primary(isGreenMode)}`}>
            Contact
          </h3>
          <p className={theme.text.secondary(isGreenMode)}>
            Email: contact@ecosustainabilityhub.com
          </p>
        </div>

        <div className="col-span-1 md:col-span-3 mt-8 text-center">
          <p className={theme.text.muted(isGreenMode)}>
            © {new Date().getFullYear()} Climate Change & Sustainability Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}