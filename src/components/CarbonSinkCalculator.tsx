import { useState } from 'react';
import { useGreenMode } from '../context/GreenModeContext';
import { Layout } from './shared/Layout';
import { Card } from './shared/Card';
import { theme } from '../styles/theme';

interface ExternalCalculator {
  name: string;
  url: string;
  description: string;
}

interface Activity {
  icon: string;
  title: string;
  description: string;
  impact: string;
}

interface CarbonSinkActivity {
  title: string;
  description: string;
  icon: string;
  activities: Activity[];
  calculators: ExternalCalculator[];
}

const carbonSinkActivities: CarbonSinkActivity[] = [
  {
    icon: "🌲",
    title: "Forest & Tree Management",
    description: "Manage and enhance forest carbon sinks",
    activities: [
      {
        icon: "🌱",
        title: "Plant Trees",
        description: "Start with saplings in your backyard",
        impact: "One tree absorbs ~22kg CO2 per year"
      },
      {
        icon: "🌿",
        title: "Community Tree Planting",
        description: "Organize local tree planting events",
        impact: "Creates urban carbon sinks and improves air quality"
      },
      {
        icon: "🌳",
        title: "Tree Maintenance",
        description: "Regular care of existing trees",
        impact: "Maximizes carbon absorption capacity"
      },
      {
        icon: "🏡",
        title: "Urban Mini-forests",
        description: "Create dense, multi-layered forests",
        impact: "30x more carbon absorption than traditional plantations"
      },
      {
        icon: "🔍",
        title: "Tree Health Monitoring",
        description: "Regular assessment of tree health",
        impact: "Ensures optimal carbon sequestration"
      },
      {
        icon: "♻️",
        title: "Sustainable Forestry",
        description: "Practice ecological forest management",
        impact: "Maintains long-term carbon storage capacity"
      }
    ],
    calculators: [
      {
        name: "i-Tree Carbon Calculator",
        url: "https://planting.itreetools.org/",
        description: "Calculate carbon sequestration by trees"
      },
      {
        name: "Forest Carbon Calculator",
        url: "https://www.forestresearch.gov.uk/tools-and-resources/ftool/",
        description: "Estimate forest carbon storage"
      }
    ]
  },
  {
    icon: "🌱",
    title: "Soil Carbon Management",
    description: "Enhance soil carbon sequestration",
    activities: [
      {
        icon: "🚜",
        title: "No-till Farming",
        description: "Minimize soil disturbance",
        impact: "Reduces carbon loss by up to 50%"
      },
      {
        icon: "🌾",
        title: "Cover Crops",
        description: "Plant soil-protecting crops",
        impact: "Increases soil carbon by 1% annually"
      },
      {
        icon: "♻️",
        title: "Composting",
        description: "Create and apply organic compost",
        impact: "Enhances soil carbon storage by 25%"
      },
      {
        icon: "🔄",
        title: "Crop Rotation",
        description: "Systematic rotation of crops",
        impact: "Improves soil carbon retention by 15%"
      },
      {
        icon: "🌿",
        title: "Soil Protection",
        description: "Minimize soil disturbance",
        impact: "Prevents carbon loss from exposure"
      },
      {
        icon: "📊",
        title: "Health Monitoring",
        description: "Regular soil testing",
        impact: "Optimizes carbon sequestration potential"
      }
    ],
    calculators: [
      {
        name: "COMET-Farm",
        url: "http://cometfarm.nrel.colostate.edu/",
        description: "Agricultural carbon calculator"
      },
      {
        name: "Soil Carbon Initiative",
        url: "https://soilcarboninitiative.org/",
        description: "Soil carbon measurement tools"
      }
    ]
  },
  {
    icon: "💧",
    title: "Wetland Conservation",
    description: "Protect and restore wetland carbon sinks",
    activities: [
      {
        icon: "🌿",
        title: "Wetland Restoration",
        description: "Restore degraded wetlands",
        impact: "10x more carbon storage than forests"
      },
      {
        icon: "🛡️",
        title: "Protection Measures",
        description: "Safeguard existing wetlands",
        impact: "Preserves vital carbon sinks"
      },
      {
        icon: "🏗️",
        title: "Artificial Wetlands",
        description: "Create new wetland areas",
        impact: "Establishes new carbon sequestration zones"
      },
      {
        icon: "🧪",
        title: "Water Quality",
        description: "Monitor and maintain water quality",
        impact: "Ensures optimal ecosystem function"
      },
      {
        icon: "🌿",
        title: "Species Management",
        description: "Control invasive species",
        impact: "Maintains natural carbon cycles"
      },
      {
        icon: "💧",
        title: "Hydrology Management",
        description: "Maintain water flow patterns",
        impact: "Supports natural carbon absorption"
      }
    ],
    calculators: [
      {
        name: "Wetland Carbon Calculator",
        url: "https://www.wetlandcarbon.com",
        description: "Calculate wetland carbon storage"
      },
      {
        name: "Blue Carbon Initiative",
        url: "https://www.thebluecarboninitiative.org/",
        description: "Coastal carbon sink calculator"
      }
    ]
  },
  {
    icon: "🌿",
    title: "Grassland Management",
    description: "Enhance grassland carbon sequestration",
    activities: [
      {
        icon: "🐄",
        title: "Rotational Grazing",
        description: "Systematic grazing patterns",
        impact: "Increases soil carbon by 30%"
      },
      {
        icon: "🌾",
        title: "Native Grass Protection",
        description: "Maintain indigenous species",
        impact: "2x more carbon storage than non-native"
      },
      {
        icon: "🌿",
        title: "Invasive Control",
        description: "Remove harmful species",
        impact: "Preserves natural carbon cycles"
      },
      {
        icon: "📊",
        title: "Health Monitoring",
        description: "Regular ecosystem assessment",
        impact: "Optimizes carbon sequestration"
      },
      {
        icon: "🚫",
        title: "Overgrazing Prevention",
        description: "Manage grazing intensity",
        impact: "Prevents soil carbon loss"
      },
      {
        icon: "🔄",
        title: "Restoration",
        description: "Rehabilitate damaged areas",
        impact: "Recovers lost carbon storage capacity"
      }
    ],
    calculators: [
      {
        name: "Grassland Carbon Tool",
        url: "https://www.carbonfarming.org.au/calculator",
        description: "Calculate grassland carbon storage"
      },
      {
        name: "Rangeland Carbon Calculator",
        url: "https://www.nrcs.usda.gov/",
        description: "Estimate rangeland carbon sequestration"
      }
    ]
  },
  {
    icon: "🌊",
    title: "Ocean Conservation",
    description: "Protect and restore marine carbon sinks",
    activities: [
      {
        icon: "🐠",
        title: "Coral Restoration",
        description: "Rebuild coral reef systems",
        impact: "Creates new marine carbon sinks"
      },
      {
        icon: "🌿",
        title: "Seagrass Protection",
        description: "Preserve seagrass meadows",
        impact: "35x more carbon storage than rainforests"
      },
      {
        icon: "🌴",
        title: "Mangrove Conservation",
        description: "Protect coastal forests",
        impact: "5x more carbon storage than inland forests"
      },
      {
        icon: "🧪",
        title: "Acidification Monitoring",
        description: "Track ocean pH levels",
        impact: "Maintains ocean carbon absorption"
      },
      {
        icon: "🚯",
        title: "Pollution Reduction",
        description: "Reduce marine pollution",
        impact: "Preserves marine ecosystem function"
      },
      {
        icon: "🎣",
        title: "Sustainable Fishing",
        description: "Practice responsible fishing",
        impact: "Maintains marine carbon cycles"
      }
    ],
    calculators: [
      {
        name: "Blue Carbon Calculator",
        url: "https://oceanservice.noaa.gov/",
        description: "Calculate marine ecosystem carbon storage"
      },
      {
        name: "Marine Carbon Tool",
        url: "https://www.iucn.org/theme/marine-and-polar",
        description: "Estimate ocean carbon sequestration"
      }
    ]
  },
  {
    icon: "🦋",
    title: "Biodiversity Enhancement",
    description: "Promote biodiversity for carbon sequestration",
    activities: [
      {
        icon: "🌳",
        title: "Wildlife Corridors",
        description: "Create habitat connections",
        impact: "Enhances ecosystem resilience"
      },
      {
        icon: "🌺",
        title: "Native Planting",
        description: "Establish indigenous species",
        impact: "20% more carbon storage than non-native"
      },
      {
        icon: "🦁",
        title: "Species Protection",
        description: "Safeguard endangered species",
        impact: "Maintains ecosystem balance"
      },
      {
        icon: "🐝",
        title: "Pollinator Gardens",
        description: "Create pollinator habitats",
        impact: "Supports plant carbon absorption"
      },
      {
        icon: "📊",
        title: "Diversity Monitoring",
        description: "Track species populations",
        impact: "Ensures ecosystem stability"
      },
      {
        icon: "🚫",
        title: "Invasive Control",
        description: "Remove harmful species",
        impact: "Protects native carbon sinks"
      }
    ],
    calculators: [
      {
        name: "Biodiversity Calculator",
        url: "https://www.biodiversitymetrics.org/",
        description: "Measure biodiversity impact on carbon"
      },
      {
        name: "Ecosystem Services Tool",
        url: "https://www.naturalcapitalproject.org/",
        description: "Calculate biodiversity benefits"
      }
    ]
  },
  {
    icon: "🚶",
    title: "Lifestyle",
    description: "Daily activities for carbon reduction",
    activities: [
      {
        icon: "🚶",
        title: "Walking Commute",
        description: "Walk to office within 5km radius",
        impact: "Saves 0.2kg CO2 per kilometer"
      },
      {
        icon: "🧴",
        title: "Natural Cleaning",
        description: "Use eco-friendly cleaning products",
        impact: "Reduces chemical pollution by 90%"
      },
      {
        icon: "🚗",
        title: "Electric Transport",
        description: "Use electric vehicles for commuting",
        impact: "70% less emissions than petrol vehicles"
      },
      {
        icon: "🛍️",
        title: "Eco Shopping",
        description: "Choose sustainable products",
        impact: "Reduces packaging waste by 80%"
      },
      {
        icon: "🥗",
        title: "Sustainable Diet",
        description: "Choose local, plant-based foods",
        impact: "50% lower carbon footprint than meat-based"
      },
      {
        icon: "♻️",
        title: "Minimalist Living",
        description: "Practice reduce, reuse, recycle",
        impact: "Cuts household waste by 70%"
      }
    ],
    calculators: [
      {
        name: "Personal Carbon Calculator",
        url: "https://www.carbonfootprint.com/calculator.aspx",
        description: "Calculate lifestyle carbon impact"
      },
      {
        name: "Sustainable Living Calculator",
        url: "https://www.epa.gov/climate-indicators",
        description: "Measure daily carbon reduction"
      },
      {
        name: "Diet Carbon Calculator",
        url: "https://www.bbc.com/future/bespoke/follow-the-food/calculate-the-environmental-footprint-of-your-food/",
        description: "Measure food choices impact"
      }
    ]
  }
];

export function CarbonSinkCalculator() {
  const { isGreenMode } = useGreenMode();
  const [selectedActivity, setSelectedActivity] = useState<CarbonSinkActivity | null>(null);

  return (
    <Layout
      title={<span className="flex items-center justify-center gap-2">🌳 Carbon Sink Calculator</span>}
      description="Explore and calculate the impact of various carbon sinks"
    >
      {!selectedActivity ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {carbonSinkActivities.map((activity) => (
            <Card key={activity.title} hover>
              <button
                onClick={() => setSelectedActivity(activity)}
                className="w-full text-left"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{activity.icon}</span>
                  <h3 className={theme.text.heading(isGreenMode)}>{activity.title}</h3>
                </div>
                <p className={`mb-4 ${theme.text.secondary(isGreenMode)}`}>
                  {activity.description}
                </p>
                <div className="space-y-2">
                  <div className={theme.text.body(isGreenMode)}>
                    {activity.activities.length} activities available
                  </div>
                  <div className={theme.text.body(isGreenMode)}>
                    {activity.calculators.length} calculators available
                  </div>
                </div>
              </button>
            </Card>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSelectedActivity(null)}
              className={`${theme.text.primary(isGreenMode)} hover:opacity-80`}
            >
              ← Back to categories
            </button>
            <div className="flex items-center gap-2">
              <span className="text-2xl">{selectedActivity.icon}</span>
              <h3 className={theme.text.heading(isGreenMode)}>{selectedActivity.title}</h3>
            </div>
          </div>

          <Card>
            <h4 className={`${theme.text.subheading(isGreenMode)} mb-4`}>Activities</h4>
            <div className="grid gap-4">
              {selectedActivity.activities.map((activity, index) => (
                <Card key={index} highlight>
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">{activity.icon}</div>
                    <div>
                      <h5 className={theme.text.subheading(isGreenMode)}>
                        {activity.title}
                      </h5>
                      <p className={`mt-2 ${theme.text.body(isGreenMode)}`}>
                        {activity.description}
                      </p>
                      <p className={`mt-2 font-medium ${theme.text.secondary(isGreenMode)}`}>
                        Impact: {activity.impact}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Card>

          <Card>
            <h4 className={`${theme.text.subheading(isGreenMode)} mb-4`}>External Calculators</h4>
            <div className="grid gap-4">
              {selectedActivity.calculators.map((calculator, index) => (
                <Card key={index} highlight>
                  <h5 className={theme.text.subheading(isGreenMode)}>
                    {calculator.name}
                  </h5>
                  <p className={`mt-2 ${theme.text.body(isGreenMode)}`}>
                    {calculator.description}
                  </p>
                  <a
                    href={calculator.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-4 inline-block ${theme.text.link(isGreenMode)} font-medium`}
                  >
                    Open Calculator →
                  </a>
                </Card>
              ))}
            </div>
          </Card>
        </div>
      )}
    </Layout>
  );
}