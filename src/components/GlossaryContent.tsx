{/* Update GlossaryContent to use shared components */}
import { Layout } from './shared/Layout'
import { Card } from './shared/Card'
import { theme } from '../styles/theme'
import { useGreenMode } from '../context/GreenModeContext'
import { glossaryData } from '../data/glossary'

export function GlossaryContent() {
  const { isGreenMode } = useGreenMode()

  return (
    <Layout
      title="Climate Change & Sustainability Glossary"
      description="Essential terms and concepts in climate science and sustainability"
    >
      <div className="space-y-8">
        {glossaryData
          .sort((a, b) => a.term.localeCompare(b.term))
          .map((item) => (
            <Card key={item.term}>
              <h3 className={`text-xl font-semibold mb-2 ${theme.text.primary(isGreenMode)}`}>
                {item.term}
              </h3>
              <p className={theme.text.secondary(isGreenMode)}>
                {item.definition}
              </p>
            </Card>
          ))}
      </div>

      <Card className="mt-8">
        <p className={theme.text.muted(isGreenMode)}>
          Note: This glossary is regularly updated to reflect the latest scientific understanding and terminology in climate science and sustainability.
        </p>
      </Card>
    </Layout>
  )
}