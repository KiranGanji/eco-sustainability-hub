import { Tab } from '@headlessui/react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { clsx } from 'clsx';
import { useGreenMode } from './context/GreenModeContext';
import { theme } from './styles/theme';
import { CarbonCalculator } from './components/CarbonCalculator';
import { CarbonSinkCalculator } from './components/CarbonSinkCalculator';
import { ExperimentCalculator } from './components/ExperimentCalculator';
import { SDGContent } from './components/SDGContent';
import { AboutContent } from './components/AboutContent';
import { GlossaryContent } from './components/GlossaryContent';
import { Header } from './components/shared/Header';
import { Footer } from './components/shared/Footer';
import { useEffect } from 'react';

export default function App() {
  const { isGreenMode, toggleGreenMode } = useGreenMode();
  const categories = [
    { name: 'About', icon: 'ℹ️' },
    { name: 'Climate Glossary', icon: '📚' },
    { name: 'Carbon Footprint Calculator', icon: '🌡️' },
    { name: 'Carbon Sink Calculator', icon: '🌳' },
    { name: 'Experiments', icon: '🧪' },
    { name: 'UN SDG Goals', icon: '🌍' }
  ];

  useEffect(() => {
    // Create the script element
    const script = document.createElement('script');
    script.src = 'https://climateclock.world/widget-v2.js';
    script.async = true;
  
    // Check if the script is already added
    if (!document.querySelector('script[src="https://climateclock.world/widget-v2.js"]')) {
      // Append the script to the document body if not already present
      document.body.appendChild(script);
    }
  
    // Insert the <climate-clock> element if not already present
    const insertClimateClock = () => {
      const container = document.getElementById('climate-clock-container');
      if (container && !container.querySelector('climate-clock')) {
        const climateClock = document.createElement('climate-clock');
        container.appendChild(climateClock);
      }
    };
  
    // Insert the <climate-clock> element once the script is loaded
    script.onload = insertClimateClock;
  
    // Cleanup function to ensure no duplication
    return () => {
      const container = document.getElementById('climate-clock-container');
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);
  

  return (
    <HelmetProvider>
      <Helmet>
        <title>Climate Change & Sustainability Hub | Understanding and Action</title>
        <meta name="description" content="Comprehensive resource for climate change and sustainability. Calculate carbon footprint, explore solutions, and learn about environmental concepts." />
        <meta name="keywords" content="climate change, sustainability, carbon footprint, environmental action, SDGs" />
      </Helmet>

      <div className={`min-h-screen flex flex-col ${theme.background.primary(isGreenMode)}`}>
        <Header />

        <button
          onClick={toggleGreenMode}
          className={`
            fixed top-4 right-[11%] z-50 p-3 rounded-full transition-colors duration-200
            ${theme.button.secondary(isGreenMode)}
          `}
          aria-label="Toggle Green Mode"
        >
          {isGreenMode ? '🌱' : '🌿'}
        </button>

        <div className="flex">
          <div className="w-[10%] h-screen fixed left-0 flex items-center justify-center border-r border-gray-200">
            <span className={`text-sm transform -rotate-90 ${theme.text.muted(isGreenMode)}`}></span>
          </div>

          <div className="w-[80%] mx-auto">
            <div className="h-[20vh] flex flex-col">
              <div className="flex items-center justify-center border-b border-gray-200">
                <div className="text-center">
                  <div id="climate-clock-container" className="text-center"></div>
                </div>
              </div>
              <div className="h-1/2 flex items-center justify-center">
                <span className={`text-sm ${theme.text.muted(isGreenMode)}`}></span>
              </div>
            </div>

            <div className="px-4 py-12">
              <Tab.Group>
                <Tab.List className={`flex space-x-1 rounded-xl p-1 ${theme.background.accent(isGreenMode)}`}>
                  {categories.map((category) => (
                    <Tab
                      key={category.name}
                      className={({ selected }) =>
                        clsx(
                          'w-full rounded-lg py-2.5 text-sm font-medium leading-5 transition-colors',
                          'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                          selected
                            ? `${theme.background.secondary(isGreenMode)} ${theme.text.primary(isGreenMode)} shadow`
                            : `${theme.text.secondary(isGreenMode)} ${theme.card.hover(isGreenMode)}`
                        )
                      }
                    >
                      <span className="flex items-center justify-center gap-2">
                        <span>{category.icon}</span>
                        <span>{category.name}</span>
                      </span>
                    </Tab>
                  ))}
                </Tab.List>
                <Tab.Panels className="mt-8">
                  <Tab.Panel>
                    <AboutContent />
                  </Tab.Panel>
                  <Tab.Panel>
                    <GlossaryContent />
                  </Tab.Panel>
                  <Tab.Panel>
                    <CarbonCalculator />
                  </Tab.Panel>
                  <Tab.Panel>
                    <CarbonSinkCalculator />
                  </Tab.Panel>
                  <Tab.Panel>
                    <ExperimentCalculator />
                  </Tab.Panel>
                  <Tab.Panel>
                    <SDGContent />
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>

          <div className="w-[10%] h-screen fixed right-0 flex items-center justify-center border-l border-gray-200">
            <span className={`text-sm transform rotate-90 ${theme.text.muted(isGreenMode)}`}></span>
          </div>
        </div>

        <Footer />
      </div>
    </HelmetProvider>
  );
}