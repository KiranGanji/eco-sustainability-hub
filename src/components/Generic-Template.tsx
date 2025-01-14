import { useState } from 'react'
import { useGreenMode } from '../context/GreenModeContext'
import { Layout } from '../components/shared/Layout'
import { Card } from '../components/shared/Card'
import { theme } from '../styles/theme'

type ContentType = {
  id: number
  title: string
  description: string
  metadata: string
}

type TemplateProps = {
  title: string
  description: string
  data: ContentType[]
}

export function GenericContentTemplate({ title, description, data }: TemplateProps) {
  const { isGreenMode } = useGreenMode()
  const [selectedItem, setSelectedItem] = useState<ContentType | null>(null)

  return (
    <Layout title={title} description={description}>
      {!selectedItem ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`p-6 rounded-lg transition-all bg-gray-100 hover:shadow-lg`}
            >
              <div
                className={`mb-2 ${theme.text.heading(isGreenMode)} text-xl font-bold`}
              >
                {item.title}
              </div>
              <div className={`${theme.text.secondary(isGreenMode)} text-sm`}>
                {item.description}
              </div>
              <div className="mt-4 text-xs text-gray-500">{item.metadata}</div>
            </button>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSelectedItem(null)}
              className={`${theme.text.primary(isGreenMode)} hover:opacity-80`}
            >
              ← Back
            </button>
            <h3 className={theme.text.heading(isGreenMode)}>
              {selectedItem.title}
            </h3>
          </div>

          <Card>
            <div className="space-y-4">
              <p className={theme.text.secondary(isGreenMode)}>
                {selectedItem.description}
              </p>
              <div className="text-xs text-gray-500">{selectedItem.metadata}</div>
            </div>
          </Card>
        </div>
      )}
    </Layout>
  )
}