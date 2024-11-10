import { useState, useMemo, useEffect } from 'react';
import { useGreenMode } from '../context/GreenModeContext';
import { Layout } from './shared/Layout';
import { Card } from './shared/Card';

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
  const [selectedCategory, setSelectedCategory] = useState<'human' | 'industry'>('human'); // Default to 'human'
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const [activityValue, setActivityValue] = useState<number>(0);
  const [humanValues, setHumanValues] = useState<{ id: string; value: number }[]>(humanActivities.map((a) => ({ id: a.id, value: 0 }))); // Initialize with zero values
  const [industryValues, setIndustryValues] = useState<{ id: string; value: number }[]>(industryActivities.map((a) => ({ id: a.id, value: 0 }))); // Initialize with zero values
  const { isGreenMode } = useGreenMode();
  
  // States for triggering blink
  const [blinkHuman, setBlinkHuman] = useState(false);
  const [blinkIndustry, setBlinkIndustry] = useState(false);

  const saveActivityValue = () => {
    if (!selectedActivity || !activityValue) return;

    const isHumanActivity = humanActivities.some((activity) => activity.id === selectedActivity);

    if (isHumanActivity) {
      setHumanValues((prev) =>
        prev.map((entry) => (entry.id === selectedActivity ? { ...entry, value: activityValue } : entry))
      );
      setBlinkHuman(true);  // Trigger blink for Human
    } else {
      setIndustryValues((prev) =>
        prev.map((entry) => (entry.id === selectedActivity ? { ...entry, value: activityValue } : entry))
      );
      setBlinkIndustry(true);  // Trigger blink for Industry
    }
  };

  const calculateActivityFootprint = () => {
    const activity = [...humanActivities, ...industryActivities].find((a) => a.id === selectedActivity);
    return activity ? (activityValue * activity.factor).toFixed(2) : '0';
  };

  const humanTotalFootprint = useMemo(
    () =>
      humanValues.reduce((total, entry) => {
        const activity = humanActivities.find((a) => a.id === entry.id);
        return activity ? total + entry.value * activity.factor : total;
      }, 0),
    [humanValues]
  );

  const industryTotalFootprint = useMemo(
    () =>
      industryValues.reduce((total, entry) => {
        const activity = industryActivities.find((a) => a.id === entry.id);
        return activity ? total + entry.value * activity.factor : total;
      }, 0),
    [industryValues]
  );

  const selectedActivityData = [...humanActivities, ...industryActivities].find(
    (activity) => activity.id === selectedActivity
  );

  // Trigger the blinking effect when total footprint changes
  useEffect(() => {
    if (blinkHuman || blinkIndustry) {
      const timer = setTimeout(() => {
        setBlinkHuman(false);
        setBlinkIndustry(false);
      }, 1000); // Blink duration of 1 second
      return () => clearTimeout(timer); // Clean up the timeout
    }
  }, [blinkHuman, blinkIndustry]);

  return (
    <Layout title="Carbon Footprint Calculator" description="Calculate your carbon footprint by category">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Human Footprint Section */}
        <div>
          <Card>
            <button
              onClick={() => {
                setSelectedCategory('human');
                setSelectedActivity(null);
              }}
              className={`w-full p-4 rounded-lg border-2 transition-all ${
                selectedCategory === 'human' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <div className="text-3xl mb-2">👤</div>
              <h3 className="text-md font-semibold">Human Footprint</h3>
            </button>

            {/* Show Human Activities in Row Layout */}
            {selectedCategory === 'human' && (
              <div className="mt-6 flex flex-wrap gap-2">
                {humanActivities.map((activity) => (
                  <div key={activity.id} className="flex flex-col items-center w-16">
                    <button
                      onClick={() => setSelectedActivity(activity.id)}
                      className="p-2 rounded-lg border-2 border-gray-200 hover:border-blue-300 transition-all text-xs"
                      title={activity.tooltip}
                    >
                      <span className="text-lg">{activity.icon}</span>
                    </button>
                    <div className="text-xs font-medium text-center">{activity.title}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Total Human Footprint in Red with Blinking Effect */}
            <div className="mt-4">
              <h3 className="text-md font-semibold">Total Human Footprint</h3>
              <p
                className={`text-sm font-bold text-yellow-500 ${blinkHuman ? 'animate-blink highlight' : ''}`}
              >
                {humanTotalFootprint.toFixed(2)} kg CO₂
              </p>
            </div>

            {/* Show Input Panel in Industry Section If Human Selected */}
            {selectedCategory === 'industry' && selectedActivity && (
              <div className="mt-6">
                <Card>
                  <h3 className="text-md font-semibold mb-4">
                    {selectedActivityData?.title}
                  </h3>
                  <p className="text-gray-600 mb-2 text-xs">
                    {selectedActivityData?.tooltip}
                  </p>
                  <label htmlFor="activityValue" className="block text-xs font-medium text-gray-700 mb-2">
                    Enter value in {selectedActivityData?.unit}
                  </label>
                  <input
                    type="number"
                    id="activityValue"
                    value={activityValue}
                    onChange={(e) => setActivityValue(Number(e.target.value))}
                    className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 mb-4 text-sm ${
                      isGreenMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
                    }`}
                  />
                  <button
                    onClick={saveActivityValue}
                    className="px-4 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm mb-4"
                  >
                    Save Value
                  </button>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className={`text-sm font-medium text-red-500`}>
                      Carbon footprint: {calculateActivityFootprint()} kg CO₂
                    </p>
                  </div>
                </Card>
              </div>
            )}
          </Card>
        </div>

        {/* Industry Footprint Section */}
        <div>
          <Card>
            <button
              onClick={() => {
                setSelectedCategory('industry');
                setSelectedActivity(null);
              }}
              className={`w-full p-4 rounded-lg border-2 transition-all ${
                selectedCategory === 'industry' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              <div className="text-3xl mb-2">🏭</div>
              <h3 className="text-md font-semibold">Industry Footprint</h3>
            </button>

            {/* Show Industry Activities in Row Layout */}
            {selectedCategory === 'industry' && (
              <div className="mt-6 flex flex-wrap gap-2">
                {industryActivities.map((activity) => (
                  <div key={activity.id} className="flex flex-col items-center w-16">
                    <button
                      onClick={() => setSelectedActivity(activity.id)}
                      className="p-2 rounded-lg border-2 border-gray-200 hover:border-blue-300 transition-all text-xs"
                      title={activity.tooltip}
                    >
                      <span className="text-lg">{activity.icon}</span>
                    </button>
                    <div className="text-xs font-medium text-center">{activity.title}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Total Industry Footprint in Red with Blinking Effect */}
            <div className="mt-4">
              <h3 className="text-md font-semibold">Total Industry Footprint</h3>
              <p
                className={`text-sm font-bold text-yellow-500 ${blinkIndustry ? 'animate-blink highlight' : ''}`}
              >
                {industryTotalFootprint.toFixed(2)} kg CO₂
              </p>
            </div>

            {/* Show Input Panel in Human Section If Industry Selected */}
            {selectedCategory === 'human' && selectedActivity && (
              <div className="mt-6">
                <Card>
                  <h3 className="text-md font-semibold mb-4">
                    {selectedActivityData?.title}
                  </h3>
                  <p className="text-gray-600 mb-2 text-xs">
                    {selectedActivityData?.tooltip}
                  </p>
                  <label htmlFor="activityValue" className="block text-xs font-medium text-gray-700 mb-2">
                    Enter value in {selectedActivityData?.unit}
                  </label>
                  <input
                    type="number"
                    id="activityValue"
                    value={activityValue}
                    onChange={(e) => setActivityValue(Number(e.target.value))}
                    className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 mb-4 text-sm ${
                      isGreenMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
                    }`}
                  />
                  <button
                    onClick={saveActivityValue}
                    className="px-4 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm mb-4"
                  >
                    Save Value
                  </button>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className={`text-sm font-medium text-red-500`}>
                      Carbon footprint: {calculateActivityFootprint()} kg CO₂
                    </p>
                  </div>
                </Card>
              </div>
            )}
          </Card>
        </div>
      </div>
    </Layout>
  );
}