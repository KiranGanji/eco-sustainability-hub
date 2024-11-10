import { Layout } from './shared/Layout'
import { Card } from './shared/Card'
import { theme } from '../styles/theme'
import { useGreenMode } from '../context/GreenModeContext'
import { glossaryData } from '../data/glossary'
import { useMemo, useState } from 'react'

export function GlossaryContent() {
  const { isGreenMode } = useGreenMode()
  const [searchQuery, setSearchQuery] = useState('')

  // Memoize sorted glossary data
  const sortedGlossaryData = useMemo(() => {
    return glossaryData.sort((a, b) => a.term.localeCompare(b.term))
  }, [glossaryData])

  // Filter glossary data based on the search query
  const filteredGlossaryData = useMemo(() => {
    return sortedGlossaryData.filter((item) =>
      item.term.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery, sortedGlossaryData])

  return (
    <Layout
      title="Climate Change & Sustainability Glossary"
      description="Essential terms and concepts in climate science and sustainability"
    >
      {/* Search bar */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search terms..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 w-full border rounded-md"
        />
      </div>

      <section className="space-y-8">
        {filteredGlossaryData.map((item) => (
          <Card key={item.term}>
            <h3 className={`text-xl font-semibold mb-2 ${theme.text.primary(isGreenMode)}`}>
              {item.term}
            </h3>
            <p className={theme.text.secondary(isGreenMode)}>
              {item.definition}
            </p>
          </Card>
        ))}
      </section>

      <Card className="mt-8">
        <p className={theme.text.muted(isGreenMode)}>
          Note: This glossary is regularly updated to reflect the latest scientific understanding and terminology in climate science and sustainability.
        </p>
      </Card>
    </Layout>
  )
}