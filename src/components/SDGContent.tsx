import { useState } from 'react'
import { useGreenMode } from '../context/GreenModeContext'
import { Layout } from './shared/Layout'
import { Card } from './shared/Card'
import { theme } from '../styles/theme'
import { sdgGoals } from '../data/sdgGoals'
import type { SDGGoal } from '../types/sdg'

export function SDGContent() {
  const { isGreenMode } = useGreenMode()
  const [selectedGoal, setSelectedGoal] = useState<SDGGoal | null>(null)

  return (
    <Layout
      title={
        <span className="flex items-center justify-center gap-2">
          <span>🌍</span>
          <span>UN SDG Goals</span>
        </span>
      }
      description="Track progress and take action on the UN SDGs"
    >
      {!selectedGoal ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sdgGoals.map((goal) => (
            <button
              key={goal.id}
              onClick={() => setSelectedGoal(goal)}
              className={`p-6 rounded-lg transition-all ${goal.color} hover:opacity-90`}
            >
              <div className="text-3xl mb-2">{goal.icon}</div>
              <div className="text-white font-semibold">Goal {goal.id}</div>
              <div className="text-white text-sm">{goal.title}</div>
            </button>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSelectedGoal(null)}
              className={`${theme.text.primary(isGreenMode)} hover:opacity-80`}
            >
              ← Back to goals
            </button>
            <div className="flex items-center gap-2">
              <span className="text-3xl">{selectedGoal.icon}</span>
              <h3 className={theme.text.heading(isGreenMode)}>
                Goal {selectedGoal.id}: {selectedGoal.title}
              </h3>
            </div>
          </div>

          <Card>
            <div className="text-3xl mb-4">{selectedGoal.icon}</div>
            <p className={theme.text.secondary(isGreenMode)}>
              {selectedGoal.description}
            </p>

            <div className="space-y-6 mt-6">
              <div>
                <h4 className={`mb-4 ${theme.text.heading(isGreenMode)}`}>
                  Key Actions
                </h4>
                <div className="grid gap-4">
                  {selectedGoal.actions.map((action, index) => (
                    <Card key={index} highlight>
                      <h5 className={theme.text.subheading(isGreenMode)}>
                        {action.title}
                      </h5>
                      <p className={`mt-2 ${theme.text.body(isGreenMode)}`}>
                        {action.description}
                      </p>
                      <p className={`mt-2 font-medium ${theme.text.secondary(isGreenMode)}`}>
                        Impact: {action.impact}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h4 className={`mb-4 ${theme.text.heading(isGreenMode)}`}>
                  Metrics & Targets
                </h4>
                <div className="grid gap-4">
                  {selectedGoal.metrics.map((metric, index) => (
                    <Card key={index} highlight>
                      <h5 className={theme.text.subheading(isGreenMode)}>
                        {metric.indicator}
                      </h5>
                      <div className="grid grid-cols-2 gap-4 mt-2">
                        <div>
                          <p className={theme.text.muted(isGreenMode)}>
                            Target
                          </p>
                          <p className={theme.text.secondary(isGreenMode)}>
                            {metric.target}
                          </p>
                        </div>
                        <div>
                          <p className={theme.text.muted(isGreenMode)}>
                            Current Status
                          </p>
                          <p className={theme.text.secondary(isGreenMode)}>
                            {metric.currentStatus}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </Layout>
  )
}