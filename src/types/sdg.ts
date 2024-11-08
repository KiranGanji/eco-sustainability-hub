export interface SDGMetric {
  indicator: string
  target: string
  currentStatus: string
}

export interface SDGAction {
  title: string
  description: string
  impact: string
}

export interface SDGGoal {
  id: number
  title: string
  description: string
  icon: string
  color: string
  actions: SDGAction[]
  metrics: SDGMetric[]
}