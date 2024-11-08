import { SDGGoal } from '../types/sdg'

export const sdgGoals: SDGGoal[] = [
  {
    id: 1,
    title: "No Poverty",
    description: "End poverty in all its forms everywhere",
    icon: "💰",
    color: "bg-red-600",
    actions: [
      {
        title: "Social Protection Systems",
        description: "Implement social protection systems for all",
        impact: "Coverage of poor and vulnerable populations"
      },
      {
        title: "Economic Resources Access",
        description: "Equal rights to economic resources",
        impact: "Increased access to basic services"
      }
    ],
    metrics: [
      {
        indicator: "Population below poverty line",
        target: "0% by 2030",
        currentStatus: "9.2% globally"
      },
      {
        indicator: "Social protection coverage",
        target: "100% coverage",
        currentStatus: "45% global coverage"
      }
    ]
  },
  {
    id: 2,
    title: "Zero Hunger",
    description: "End hunger, achieve food security and improved nutrition",
    icon: "🌾",
    color: "bg-yellow-500",
    actions: [
      {
        title: "Sustainable Agriculture",
        description: "Promote sustainable agricultural practices",
        impact: "Increased food production sustainability"
      },
      {
        title: "Food Security",
        description: "Ensure access to safe and nutritious food",
        impact: "Reduced malnutrition rates"
      }
    ],
    metrics: [
      {
        indicator: "Prevalence of undernourishment",
        target: "0% by 2030",
        currentStatus: "8.9% globally"
      },
      {
        indicator: "Sustainable agriculture area",
        target: "100% of agricultural land",
        currentStatus: "29% of agricultural land"
      }
    ]
  },
  {
    id: 3,
    title: "Good Health and Well-being",
    description: "Ensure healthy lives and promote well-being for all at all ages",
    icon: "❤️",
    color: "bg-green-500",
    actions: [
      {
        title: "Universal Health Coverage",
        description: "Achieve universal health coverage",
        impact: "Improved access to healthcare services"
      }
    ],
    metrics: [
      {
        indicator: "Maternal mortality ratio",
        target: "<70 per 100,000 live births",
        currentStatus: "211 per 100,000 live births"
      }
    ]
  },
  {
    id: 4,
    title: "Quality Education",
    description: "Ensure inclusive and equitable quality education",
    icon: "📚",
    color: "bg-red-500",
    actions: [
      {
        title: "Universal Education",
        description: "Free primary and secondary education",
        impact: "Increased literacy rates"
      }
    ],
    metrics: [
      {
        indicator: "Primary education completion rate",
        target: "100%",
        currentStatus: "89%"
      }
    ]
  },
  {
    id: 5,
    title: "Gender Equality",
    description: "Achieve gender equality and empower all women and girls",
    icon: "⚖️",
    color: "bg-orange-500",
    actions: [
      {
        title: "End Discrimination",
        description: "Eliminate discrimination against women and girls",
        impact: "Increased gender parity"
      }
    ],
    metrics: [
      {
        indicator: "Gender wage gap",
        target: "0%",
        currentStatus: "23%"
      }
    ]
  },
  {
    id: 6,
    title: "Clean Water and Sanitation",
    description: "Ensure availability and sustainable management of water and sanitation",
    icon: "💧",
    color: "bg-blue-500",
    actions: [
      {
        title: "Safe Water Access",
        description: "Universal access to safe drinking water",
        impact: "Reduced waterborne diseases"
      }
    ],
    metrics: [
      {
        indicator: "Population with safe water access",
        target: "100%",
        currentStatus: "74%"
      }
    ]
  },
  {
    id: 7,
    title: "Affordable and Clean Energy",
    description: "Ensure access to affordable, reliable, sustainable energy",
    icon: "⚡",
    color: "bg-yellow-600",
    actions: [
      {
        title: "Renewable Energy",
        description: "Increase renewable energy share",
        impact: "Reduced carbon emissions"
      }
    ],
    metrics: [
      {
        indicator: "Renewable energy share",
        target: "Substantial increase",
        currentStatus: "17%"
      }
    ]
  },
  {
    id: 8,
    title: "Decent Work and Economic Growth",
    description: "Promote sustained, inclusive economic growth",
    icon: "💼",
    color: "bg-amber-600",
    actions: [
      {
        title: "Job Creation",
        description: "Promote job creation and entrepreneurship",
        impact: "Reduced unemployment"
      }
    ],
    metrics: [
      {
        indicator: "Annual GDP growth",
        target: "7% for LDCs",
        currentStatus: "Varies by region"
      }
    ]
  },
  {
    id: 9,
    title: "Industry, Innovation and Infrastructure",
    description: "Build resilient infrastructure, promote inclusive industrialization",
    icon: "🏭",
    color: "bg-orange-600",
    actions: [
      {
        title: "Infrastructure Development",
        description: "Develop quality infrastructure",
        impact: "Enhanced industrial productivity"
      }
    ],
    metrics: [
      {
        indicator: "Manufacturing value added",
        target: "Double in LDCs",
        currentStatus: "Varies by region"
      }
    ]
  },
  {
    id: 10,
    title: "Reduced Inequalities",
    description: "Reduce inequality within and among countries",
    icon: "🤝",
    color: "bg-pink-500",
    actions: [
      {
        title: "Income Growth",
        description: "Promote income growth for bottom 40%",
        impact: "Reduced income inequality"
      }
    ],
    metrics: [
      {
        indicator: "Income inequality (Gini)",
        target: "Reduction",
        currentStatus: "Varies by country"
      }
    ]
  },
  {
    id: 11,
    title: "Sustainable Cities and Communities",
    description: "Make cities inclusive, safe, resilient and sustainable",
    icon: "🏙️",
    color: "bg-amber-500",
    actions: [
      {
        title: "Sustainable Transport",
        description: "Provide sustainable transport systems",
        impact: "Improved urban mobility"
      }
    ],
    metrics: [
      {
        indicator: "Urban population in slums",
        target: "Reduction",
        currentStatus: "24%"
      }
    ]
  },
  {
    id: 12,
    title: "Responsible Consumption and Production",
    description: "Ensure sustainable consumption and production patterns",
    icon: "♻️",
    color: "bg-yellow-700",
    actions: [
      {
        title: "Waste Reduction",
        description: "Reduce waste generation",
        impact: "Improved resource efficiency"
      }
    ],
    metrics: [
      {
        indicator: "Material footprint",
        target: "Sustainable level",
        currentStatus: "85.9 billion tons"
      }
    ]
  },
  {
    id: 13,
    title: "Climate Action",
    description: "Take urgent action to combat climate change and its impacts",
    icon: "🌍",
    color: "bg-green-600",
    actions: [
      {
        title: "Emission Reduction",
        description: "Reduce greenhouse gas emissions",
        impact: "Decreased global carbon footprint"
      },
      {
        title: "Climate Resilience",
        description: "Strengthen resilience to climate hazards",
        impact: "Improved adaptation capabilities"
      }
    ],
    metrics: [
      {
        indicator: "Global GHG emissions",
        target: "Net-zero by 2050",
        currentStatus: "51.8 billion tonnes CO2e"
      },
      {
        indicator: "Climate finance",
        target: "$100B annually",
        currentStatus: "$79.6B"
      }
    ]
  },
  {
    id: 14,
    title: "Life Below Water",
    description: "Conserve and sustainably use the oceans, seas and marine resources",
    icon: "🌊",
    color: "bg-blue-600",
    actions: [
      {
        title: "Marine Protection",
        description: "Protect marine ecosystems",
        impact: "Improved ocean health"
      }
    ],
    metrics: [
      {
        indicator: "Marine protected areas",
        target: "10% of coastal areas",
        currentStatus: "7.74%"
      }
    ]
  },
  {
    id: 15,
    title: "Life on Land",
    description: "Protect, restore and promote sustainable use of terrestrial ecosystems",
    icon: "🌳",
    color: "bg-green-700",
    actions: [
      {
        title: "Forest Protection",
        description: "Halt deforestation",
        impact: "Preserved biodiversity"
      }
    ],
    metrics: [
      {
        indicator: "Forest area",
        target: "Increase",
        currentStatus: "31% of land area"
      }
    ]
  },
  {
    id: 16,
    title: "Peace, Justice and Strong Institutions",
    description: "Promote peaceful and inclusive societies for sustainable development",
    icon: "⚖️",
    color: "bg-blue-700",
    actions: [
      {
        title: "Rule of Law",
        description: "Promote rule of law at all levels",
        impact: "Reduced violence"
      }
    ],
    metrics: [
      {
        indicator: "Violence-related deaths",
        target: "Significant reduction",
        currentStatus: "5.8 per 100,000"
      }
    ]
  },
  {
    id: 17,
    title: "Partnerships for the Goals",
    description: "Strengthen the means of implementation and revitalize the global partnership",
    icon: "🤝",
    color: "bg-blue-800",
    actions: [
      {
        title: "Global Cooperation",
        description: "Enhance international cooperation",
        impact: "Strengthened partnerships"
      }
    ],
    metrics: [
      {
        indicator: "Official development assistance",
        target: "0.7% of GNI",
        currentStatus: "0.32% of GNI"
      }
    ]
  }
]