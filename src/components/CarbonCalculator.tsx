import { useState } from 'react';
import { useGreenMode } from '../context/GreenModeContext';
import { Layout } from './shared/Layout';
import { Card } from './shared/Card';
import { theme } from '../styles/theme';

interface ActivityCalculator {
  id: string;
  icon: string;
  title: string;
  unit: string;
  factor: number;
  tooltip: string;
}

const humanActivities: ActivityCalculator[] = [
  { id: 'food-waste', icon: '🍽️', title: 'Food Wastage', unit: 'kg', factor: 2.5, tooltip: '2.5 kg CO₂ per kg wasted' },
  { id: 'energy', icon: '⚡', title: 'Energy', unit: 'kWh', factor: 0.92, tooltip: '0.92 kg CO₂ per kWh used' },
  { id: 'water', icon: '💧', title: 'Water', unit: 'liters', factor: 0.001, tooltip: '0.001 kg CO₂ per liter used' },
  { id: 'shopping', icon: '🛍️', title: 'Shopping', unit: 'items', factor: 5.0, tooltip: '5.0 kg CO₂ per item bought' },
  { id: 'car', icon: '🚗', title: 'Car Travel', unit: 'km', factor: 0.12, tooltip: '0.12 kg CO₂ per km driven' },
  { id: 'flight', icon: '✈️', title: 'Flight', unit: 'km', factor: 0.24, tooltip: '0.24 kg CO₂ per km flown' },
  { id: 'train', icon: '🚂', title: 'Train', unit: 'km', factor: 0.03, tooltip: '0.03 kg CO₂ per km traveled' },
  { id: 'ride-hailing', icon: '🚖', title: 'Ride Hailing', unit: 'km', factor: 0.15, tooltip: '0.15 kg CO₂ per km traveled' },
  { id: 'ride-sharing', icon: '🚌', title: 'Ride Sharing', unit: 'km', factor: 0.08, tooltip: '0.08 kg CO₂ per km shared' },
  { id: 'bike-hailing', icon: '🚲', title: 'Bike Hailing', unit: 'km', factor: 0.02, tooltip: '0.02 kg CO₂ per km cycled' },
  { id: 'tuk-tuk', icon: '🛺', title: 'Tuk Tuk Rickshaw', unit: 'km', factor: 0.07, tooltip: '0.07 kg CO₂ per km traveled' },
  { id: 'public-transport', icon: '🚇', title: 'Public Transport', unit: 'km', factor: 0.04, tooltip: '0.04 kg CO₂ per km traveled' },
  { id: 'tram', icon: '🚊', title: 'Tram', unit: 'km', factor: 0.02, tooltip: '0.02 kg CO₂ per km traveled' },
  { id: 'ferry', icon: '⛴️', title: 'Ferry', unit: 'km', factor: 0.19, tooltip: '0.19 kg CO₂ per km traveled' },
  { id: 'underground', icon: '🚇', title: 'Underground', unit: 'km', factor: 0.03, tooltip: '0.03 kg CO₂ per km traveled' },
  { id: 'music', icon: '🎵', title: 'Music Streaming', unit: 'hours', factor: 0.055, tooltip: '0.055 kg CO₂ per hour streamed' },
  { id: 'media', icon: '🎬', title: 'Media Streaming', unit: 'hours', factor: 0.075, tooltip: '0.075 kg CO₂ per hour streamed' },
  { id: 'wearables', icon: '⌚', title: 'Wearables', unit: 'hours', factor: 0.001, tooltip: '0.001 kg CO₂ per hour used' },
  { id: 'personal-devices', icon: '📱', title: 'Personal Devices', unit: 'hours', factor: 0.05, tooltip: '0.05 kg CO₂ per hour used' },
  { id: 'work-devices', icon: '💻', title: 'Work Devices', unit: 'hours', factor: 0.08, tooltip: '0.08 kg CO₂ per hour used' },
  { id: 'portable-devices', icon: '🎮', title: 'Portable Devices', unit: 'hours', factor: 0.03, tooltip: '0.03 kg CO₂ per hour used' }
];

const industryActivities: ActivityCalculator[] = [
  { id: 'industrial-energy', icon: '⚡', title: 'Energy Consumption', unit: 'MWh', factor: 920, tooltip: '920 kg CO₂ per MWh consumed' },
  { id: 'industrial-water', icon: '💧', title: 'Water Use', unit: 'kiloliters', factor: 1, tooltip: '1 kg CO₂ per kiloliter used' },
  { id: 'industrial-waste', icon: '🗑️', title: 'Industrial Waste', unit: 'tons', factor: 2500, tooltip: '2500 kg CO₂ per ton of waste' },
  { id: 'manufacturing', icon: '🏭', title: 'Manufacturing Process', unit: 'hours', factor: 850, tooltip: '850 kg CO₂ per hour of operation' }
];

export function CarbonCalculator() {
  const [selectedCategory, setSelectedCategory] = useState<'human' | 'industry' | null>(null);
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [activityValue, setActivityValue] = useState<number>(0);
  const [humanValues, setHumanValues] = useState<Array<{ id: string; value: number }>>([]);
  const [industryValues, setIndustryValues] = useState<Array<{ id: string; value: number }>>([]);
  const [showTotal, setShowTotal] = useState(false);
  const { isGreenMode } = useGreenMode();

  const calculateActivityFootprint = () => {
    const activity = [...humanActivities, ...industryActivities].find(a => a.id === selectedActivity);
    return activity ? (activityValue * activity.factor).toFixed(2) : '0';
  };

  const saveActivityValue = () => {
    if (!selectedActivity || !activityValue) return;

    const activity = [...humanActivities, ...industryActivities].find(a => a.id === selectedActivity);
    if (!activity) return;

    if (humanActivities.some(a => a.id === selectedActivity)) {
      setHumanValues(prev => {
        const existing = prev.find(v => v.id === selectedActivity);
        if (existing) {
          return prev.map(v => v.id === selectedActivity ? { ...v, value: activityValue } : v);
        }
        return [...prev, { id: selectedActivity, value: activityValue }];
      });
    } else {
      setIndustryValues(prev => {
        const existing = prev.find(v => v.id === selectedActivity);
        if (existing) {
          return prev.map(v => v.id === selectedActivity ? { ...v, value: activityValue } : v);
        }
        return [...prev, { id: selectedActivity, value: activityValue }];
      });
    }
  };

  const calculateTotalFootprint = (category: 'human' | 'industry') => {
    const values = category === 'human' ? humanValues : industryValues;
    const activities = category === 'human' ? humanActivities : industryActivities;

    return values.reduce((total, current) => {
      const activity = activities.find(a => a.id === current.id);
      if (!activity) return total;
      return total + (current.value * activity.factor);
    }, 0).toFixed(2);
  };

  return (
    <Layout
      title="Carbon Footprint Calculator"
      description="Calculate your carbon footprint by category"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <button
            onClick={() => {
              setSelectedCategory('human');
              setSelectedActivity(null);
              setShowTotal(false);
            }}
            className={`w-full p-6 rounded-lg border-2 transition-all ${
              selectedCategory === 'human' 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            <div className="text-4xl mb-2">👤</div>
            <h3 className="text-lg font-semibold">Human Footprint</h3>
          </button>

          {selectedCategory === 'human' && (
            <div className="mt-6 space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-medium">Individual Activities</h4>
                <button
                  onClick={() => setShowTotal(true)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Calculate Total
                </button>
              </div>
              {showTotal ? (
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Total Human Footprint</h3>
                  <p className="text-lg font-medium text-blue-800">
                    {calculateTotalFootprint('human')} kg CO₂
                  </p>
                  <button
                    onClick={() => setShowTotal(false)}
                    className="mt-4 text-blue-600 hover:text-blue-800"
                  >
                    ← Back to activities
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  {humanActivities.map((activity) => (
                    <button
                      key={activity.id}
                      onClick={() => setSelectedActivity(activity.id)}
                      className="relative p-4 rounded-lg border-2 border-gray-200 hover:border-blue-300 transition-all group"
                      title={activity.tooltip}
                    >
                      <div className="text-2xl mb-2 group-hover:opacity-0 transition-opacity">
                        {activity.icon}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs p-2 rounded-lg">
                        {activity.tooltip}
                      </div>
                      <div className="text-sm font-medium">{activity.title}</div>
                      {humanValues.find(v => v.id === activity.id) && (
                        <div className="mt-2 text-xs text-green-600">✓ Value added</div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </Card>

        <Card>
          <button
            onClick={() => {
              setSelectedCategory('industry');
              setSelectedActivity(null);
              setShowTotal(false);
            }}
            className={`w-full p-6 rounded-lg border-2 transition-all ${
              selectedCategory === 'industry' 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            <div className="text-4xl mb-2">🏭</div>
            <h3 className="text-lg font-semibold">Industry Footprint</h3>
          </button>

          {selectedCategory === 'industry' && (
            <div className="mt-6 space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-medium">Industrial Activities</h4>
                <button
                  onClick={() => setShowTotal(true)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Calculate Total
                </button>
              </div>
              {showTotal ? (
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Total Industry Footprint</h3>
                  <p className="text-lg font-medium text-blue-800">
                    {calculateTotalFootprint('industry')} kg CO₂
                  </p>
                  <button
                    onClick={() => setShowTotal(false)}
                    className="mt-4 text-blue-600 hover:text-blue-800"
                  >
                    ← Back to activities
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  {industryActivities.map((activity) => (
                    <button
                      key={activity.id}
                      onClick={() => setSelectedActivity(activity.id)}
                      className="relative p-4 rounded-lg border-2 border-gray-200 hover:border-blue-300 transition-all group"
                      title={activity.tooltip}
                    >
                      <div className="text-2xl mb-2 group-hover:opacity-0 transition-opacity">
                        {activity.icon}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs p-2 rounded-lg">
                        {activity.tooltip}
                      </div>
                      <div className="text-sm font-medium">{activity.title}</div>
                      {industryValues.find(v => v.id === activity.id) && (
                        <div className="mt-2 text-xs text-green-600">✓ Value added</div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </Card>
      </div>

      {selectedActivity && (
        <Card className="mt-6">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSelectedActivity(null)}
                className="text-blue-500 hover:text-blue-700"
              >
                ← Back to activities
              </button>
              <h3 className="text-xl font-semibold">
                {[...humanActivities, ...industryActivities].find(a => a.id === selectedActivity)?.title}
              </h3>
            </div>

            <div>
              <label
                htmlFor="activityValue"
                className="block text-sm font-medium text-gray-700"
              >
                Enter {[...humanActivities, ...industryActivities].find(a => a.id === selectedActivity)?.unit}
              </label>
              <input
                type="number"
                id="activityValue"
                value={activityValue}
                onChange={(e) => setActivityValue(Number(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="flex space-x-4">
              <button
                onClick={saveActivityValue}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Save Value
              </button>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-lg font-medium text-blue-900">
                Carbon footprint: {calculateActivityFootprint()} kg CO₂
              </p>
            </div>
          </div>
        </Card>
      )}

      <Card className="mt-6">
        <p className="text-sm text-gray-500">
          Note: This is a simplified calculation. Actual carbon footprint may vary based on many factors.
          
          Measurement periods vary by activity type:
          - Transport activities (car, flight, etc.): Per kilometer
          - Device usage: Annual emissions
          - Consumables (food, water): Per unit consumed
          - Energy usage: Per unit of energy
          
          Note: Reference consideration has been taken into ICE engines and not electric 2 wheelers / 4 wheelers at this time.
        </p>
      </Card>
    </Layout>
  );
}