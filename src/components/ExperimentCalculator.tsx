import { useState, useEffect } from 'react';
import { useGreenMode } from '../context/GreenModeContext';
import { Layout } from './shared/Layout';
import { Card } from './shared/Card';

interface Activity {
  icon: string;
  title: string;
  description: string;
  impact: string;
}

interface ExternalCalculator {
  name: string;
  url: string;
  description: string;
}

interface ExperimentGroup {
  icon: string;
  title: string;
  activities: Activity[];
  calculators: ExternalCalculator[];
}

const experimentGroups: ExperimentGroup[] = [
  {
    icon: "🌳",
    title: "Tree Management",
    activities: [
      { icon: "🌱", title: "Plant a Tree", description: "Start with a small sapling in your backyard", impact: "One tree can absorb ~22kg of CO2 per year" },
      { icon: "🥬", title: "Create a Small Garden", description: "Grow vegetables and herbs in your space", impact: "Reduces food miles and increases carbon absorption" },
      { icon: "♻️", title: "Home Composting", description: "Convert kitchen waste into nutrient-rich soil", impact: "Reduces methane emissions from landfills" },
      { icon: "🌿", title: "Urban Forest", description: "Create mini forests in urban spaces", impact: "Enhances biodiversity and air quality" },
      { icon: "🌏", title: "Vertical Garden", description: "Implement vertical gardening solutions", impact: "Maximizes green space in limited areas" },
      { icon: "🍂", title: "Leaf Composting", description: "Create leaf mold from fallen leaves", impact: "Natural soil enrichment and waste reduction" }
    ],
    calculators: [
      { name: "i-Tree Carbon Calculator", url: "https://planting.itreetools.org/", description: "US specific Calculator - for calculating carbon sequestration by trees" }
    ]
  },
  {
    icon: "🌱",
    title: "Soil Conservation",
    activities: [
      { icon: "🍂", title: "Mulching", description: "Apply organic mulch to garden beds", impact: "Improves soil health and water retention" },
      { icon: "🌱", title: "Cover Cropping", description: "Plant soil-enriching cover crops", impact: "Prevents erosion and adds nutrients" },
      { icon: "🌏", title: "Vermiculture", description: "Start a worm composting system", impact: "Creates rich vermicompost for soil health" },
      { icon: "🌿", title: "No-Till Gardening", description: "Practice no-dig cultivation methods", impact: "Preserves soil structure and microorganisms" },
      { icon: "🧪", title: "Soil Testing", description: "Regular soil quality monitoring", impact: "Optimizes soil management practices" },
      { icon: "🌾", title: "Crop Rotation", description: "Implement crop rotation system", impact: "Maintains soil fertility naturally" }
    ],
    calculators: [
      { name: "COMET-Farm", url: "https://comet-farm.com/login", description: "US specific Land, Animal Agriculture, AgroForestry, Forestry carbon calculator, Registration required" }
    ]
  },
  {
    icon: "🦋",
    title: "Biodiversity",
    activities: [
      { icon: "🐦", title: "Bird Nests", description: "Install bird houses and feeders", impact: "Supports local bird populations and ecosystem health" },
      { icon: "🦋", title: "Butterfly Garden", description: "Plant native flowers for pollinators", impact: "Enhances local biodiversity" },
      { icon: "🐝", title: "Bee Haven", description: "Create bee-friendly gardens", impact: "Supports pollinator populations" }
    ],
    calculators: [
      { name: "Biodiversity Calculator", url: "https://www.biodiversity-metrics.org/metrics-and-methods.html", description: "Measure biodiversity impact on carbon" },
      { name: "Ecosystem Services Tool", url: "https://naturalcapitalproject.stanford.edu/software/invest", description: "Calculate biodiversity benefits" }
    ]
  },
  {
    icon: "♻️",
    title: "Lifestyle Activities",
    activities: [
      { icon: "🥗", title: "Zero-Waste Kitchen", description: "Reduce food waste and packaging", impact: "Minimizes landfill waste and emissions" },
      { icon: "⚡", title: "Energy Monitoring", description: "Track and optimize home energy use", impact: "Reduces household carbon footprint" },
      { icon: "🔋", title: "Smart Power", description: "Use smart power strips and timers", impact: "Reduces standby power consumption" }
    ],
    calculators: [  
{ name: "Personal Carbon Calculator", url: "https://www.carbonfootprint.com/calculator.aspx", description: "Calculate lifestyle carbon impact" },
{ name: "Diet Carbon Calculator", url: "https://www.bbc.com/future/bespoke/follow-the-food/calculate-the-environmental-footprint-of-your-food.html", description: "Measure food choices impact" },
{ name: "EPA DIY Calculator", url: "https://www.epa.gov/energy/greenhouse-gases-equivalencies-calculator-calculations-and-references", description: "DIY US EPA Calculator Measure food choices impact" }
    ]
  },
  {
    icon: "🤝",
    title: "Community Action",
    activities: [
      { icon: "🧹", title: "Local Clean-up", description: "Organize community clean-up events", impact: "Improves local environment and awareness" },
      { icon: "🔄", title: "Sharing Economy", description: "Start a tool or resource sharing network", impact: "Reduces consumption and waste" },
      { icon: "📚", title: "Education", description: "Organize environmental workshops", impact: "Spreads awareness and knowledge" }
    ],
    calculators: [
      // { name: "Community Impact Calculator", url: "https://example.com/community-calculator", description: "Estimate community action's environmental impact." }
    ]
  },
  {
    icon: "💧",
    title: "Water Conservation",
    activities: [
      { icon: "🌧️", title: "Rainwater Harvesting", description: "Collect and use rainwater", impact: "Reduces water consumption and energy use" },
      { icon: "💧", title: "Greywater System", description: "Reuse household water", impact: "Maximizes water efficiency" },
      { icon: "🚿", title: "Water-Efficient Fixtures", description: "Install low-flow devices", impact: "Reduces water waste" }
    ],
    calculators: [
      { name: "Blue Carbon Calculator", url: "https://www.mass.gov/info-details/use-the-blue-carbon-calculator", description: "Calculate marine ecosystem carbon storage" }
    ]
  },
  {
    icon: "☀️",
    title: "Renewable Energy",
    activities: [
      { icon: "☀️", title: "Solar Energy", description: "Install small solar panels or solar-powered devices", impact: "Reduces reliance on fossil fuels" },
      { icon: "♨️", title: "Biogas", description: "Set up small-scale biogas production", impact: "Converts organic waste to clean energy" },
      { icon: "🔋", title: "Energy Storage", description: "Implement battery storage solutions", impact: "Optimizes renewable energy use" }
    ],
    calculators: [
      // { name: "Renewable Energy Calculator", url: "https://example.com/renewable-calculator", description: "Estimate the impact of renewable energy installations." }
    ]
  }
];

export function ExperimentCalculator() {
  const { isGreenMode } = useGreenMode();
  const [selectedGroup, setSelectedGroup] = useState<ExperimentGroup | null>(null);

  useEffect(() => {
    // Scroll to top whenever a new group is selected
    if (selectedGroup) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedGroup]);

  return (
    <Layout
      title="Sustainability Experiments"
      description="Practical experiments and activities for environmental impact"
    >
      {!selectedGroup ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experimentGroups.map((group) => (
            <Card key={group.title}>
              <button
                onClick={() => setSelectedGroup(group)}
                className="w-full text-left"
              >
                <div className="text-3xl mb-2">{group.icon}</div>
                <h3 className={`text-xl font-semibold mb-4 ${isGreenMode ? 'text-white' : 'text-gray-900'}`}>
                  {group.title}
                </h3>
                <p className={`text-sm ${isGreenMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {group.activities.length} activities available
                </p>
              </button>
            </Card>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {/* Tabbed Navigation with sticky positioning */}
          <div className="flex gap-4 overflow-x-auto border-b border-gray-200 pb-4 bg-white sticky top-0 z-10">
            {experimentGroups.map((group) => (
              <button
                key={group.title}
                onClick={() => setSelectedGroup(group)}
                className={`px-4 py-2 ${
                  selectedGroup.title === group.title
                    ? (isGreenMode ? 'text-green-300' : 'text-green-700')
                    : (isGreenMode ? 'text-gray-300' : 'text-gray-600')
                } hover:underline`}
              >
                {group.icon} {group.title}
              </button>
            ))}
          </div>

          {/* Selected Group Content */}
          <div className="grid gap-6">
            {selectedGroup.activities.map((activity, index) => (
              <Card key={index}>
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">{activity.icon}</div>
                  <div className="flex-1">
                    <h4 className={`text-lg font-semibold mb-2 ${isGreenMode ? 'text-white' : 'text-gray-900'}`}>
                      {activity.title}
                    </h4>
                    <p className={`mb-4 ${isGreenMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {activity.description}
                    </p>
                    <div className={`p-3 rounded-lg ${isGreenMode ? 'bg-green-900' : 'bg-green-50'}`}>
                      <p className={`text-sm ${isGreenMode ? 'text-green-300' : 'text-green-700'}`}>
                        <strong>Impact:</strong> {activity.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid gap-6">
            <h4 className={`text-lg font-semibold ${isGreenMode ? 'text-white' : 'text-gray-900'}`}>External Calculators</h4>
            {selectedGroup.calculators.map((calculator, index) => (
              <Card key={index}>
                <h5 className={`text-lg font-semibold mb-2 ${isGreenMode ? 'text-white' : 'text-gray-900'}`}>
                  {calculator.name}
                </h5>
                <p className={`mb-2 ${isGreenMode ? 'text-gray-300' : 'text-gray-600'}`}>{calculator.description}</p>
                <a
                  href={calculator.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-blue-500 hover:underline ${isGreenMode ? 'text-blue-300' : 'text-blue-600'}`}
                >
                  Open Calculator →
                </a>
              </Card>
            ))}
          </div>
        </div>
      )}
    </Layout>
  );
}