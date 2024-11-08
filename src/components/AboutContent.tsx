{/* Update AboutContent to use shared components */}
import { Layout } from './shared/Layout'
import { Card } from './shared/Card'
import { theme } from '../styles/theme'
import { useGreenMode } from '../context/GreenModeContext'

export function AboutContent() {
  const { isGreenMode } = useGreenMode()

  return (
    <Layout
      title="About Our Climate Initiative"
      description="Welcome to our comprehensive climate action platform. We're dedicated to providing tools and resources that help individuals and organizations understand and reduce their environmental impact while promoting sustainable practices."
    >
      <section className="space-y-4">
        <h3 className={`text-xl font-semibold ${theme.text.primary(isGreenMode)}`}>
          Our Mission
        </h3>
        <p className={theme.text.secondary(isGreenMode)}>
          To empower everyone with knowledge and tools to make informed decisions about their environmental impact and take meaningful action against climate change.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <Card>
          <h3 className={`text-xl font-semibold mb-4 ${theme.text.primary(isGreenMode)}`}>
            🎯 What We Offer
          </h3>
          <ul className={`space-y-2 ${theme.text.secondary(isGreenMode)}`}>
            <li>• Carbon footprint calculators for individuals and industries</li>
            <li>• Carbon sink measurement tools</li>
            <li>• Practical sustainability experiments</li>
            <li>• Comprehensive climate glossary</li>
            <li>• SDG alignment resources</li>
          </ul>
        </Card>

        <Card>
          <h3 className={`text-xl font-semibold mb-4 ${theme.text.primary(isGreenMode)}`}>
            🌱 Our Approach
          </h3>
          <ul className={`space-y-2 ${theme.text.secondary(isGreenMode)}`}>
            <li>• Evidence-based calculations</li>
            <li>• User-friendly tools</li>
            <li>• Practical action steps</li>
            <li>• Regular updates with latest research</li>
            <li>• Community-driven initiatives</li>
          </ul>
        </Card>
      </section>

      {/* Rest of the AboutContent remains similar but uses Card and theme utilities */}
    </Layout>
  )
}