// import { useState } from 'react';
// import { useGreenMode } from '../context/GreenModeContext';
// import { Layout } from './shared/Layout';
// import { Card } from './shared/Card';
// // import { theme } from '../styles/theme';

// // Example dataset type
// interface Dataset {
//   country: string;
//   organisation: string;
//   purposeOfOrganisation: string;
//   dataset: string;
//   purposeOfDataset: string;
//   link: string;
//   lastUpdated: string;
//   frequency: string;
// }

// // Sample data for the directory
// const initialData: Dataset[] = [
//   {
//     country: 'India',
//     organisation: 'Ministry of Health',
//     purposeOfOrganisation: 'Public Health Research',
//     dataset: 'COVID-19 Statistics',
//     purposeOfDataset: 'Tracking cases and vaccination progress',
//     lastUpdated: '2025-01-10',
//     frequency: 'Daily',
//   },
//   {
//     country: 'USA',
//     organisation: 'CDC',
//     purposeOfOrganisation: 'Disease Control',
//     dataset: 'Flu Surveillance',
//     purposeOfDataset: 'Monitoring flu activity',
//     lastUpdated: '2025-01-09',
//     frequency: 'Weekly',
//   },
// ];

// export function Datasets() {
//   const { isGreenMode } = useGreenMode();
//   const [data, setData] = useState(initialData);
//   const [filters, setFilters] = useState<{ column: keyof Dataset; value: string }>({
//     column: 'country',
//     value: '',
//   });

//   // Handle filter changes
//   const handleFilterChange = (column: keyof Dataset, value: string) => {
//     setFilters({ column, value });
//     if (value) {
//       setData(initialData.filter((row) => row[column].toLowerCase().includes(value.toLowerCase())));
//     } else {
//       setData(initialData);
//     }
//   };

//   return (
//     <Layout
//       title={
//         <span className="flex items-center justify-center gap-2">
//           <span>📊</span>
//           <span>Datasets Directory</span>
//         </span>
//       }
//       description="Explore datasets with detailed metadata and filtering options."
//     >
//       <div className="mb-4">
//         <label htmlFor="filter-column" className="block font-semibold">
//           Filter by:
//         </label>
//         <div className="flex gap-4 mt-2">
//           <select
//             id="filter-column"
//             value={filters.column}
//             onChange={(e) => handleFilterChange(e.target.value as keyof Dataset, filters.value)}
//             className="p-2 border rounded"
//           >
//             <option value="country">Country</option>
//             <option value="organisation">Organisation</option>
//             <option value="purposeOfOrganisation">Purpose of Organisation</option>
//             <option value="dataset">Dataset</option>
//             <option value="purposeOfDataset">Purpose of Dataset</option>
//             <option value="lastUpdated">Dataset Last Updated</option>
//             <option value="frequency">Frequency of Update</option>
//           </select>

//           <input
//             type="text"
//             placeholder="Enter value to filter"
//             value={filters.value}
//             onChange={(e) => handleFilterChange(filters.column, e.target.value)}
//             className="p-2 border rounded w-full"
//           />
//         </div>
//       </div>

//       <div className="grid gap-4">
//         {data.map((row, index) => (
//           <Card key={index}>
//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <strong>Country:</strong> {row.country}
//               </div>
//               <div>
//                 <strong>Organisation:</strong> {row.organisation}
//               </div>
//               <div>
//                 <strong>Purpose of Organisation:</strong> {row.purposeOfOrganisation}
//               </div>
//               <div>
//                 <strong>Dataset:</strong> {row.dataset}
//               </div>
//               <div>
//                 <strong>Purpose of Dataset:</strong> {row.purposeOfDataset}
//               </div>
//               <div>
//                 <strong>Last Updated:</strong> {row.lastUpdated}
//               </div>
//               <div>
//                 <strong>Frequency:</strong> {row.frequency}
//               </div>
//             </div>
//           </Card>
//         ))}
//       </div>
//     </Layout>
//   );
// }


import { useState } from 'react';
// import { useGreenMode } from '../context/GreenModeContext';
import { Layout } from './shared/Layout';
import { Card } from './shared/Card';
import { datasets } from '../data/datasets';
// import { theme } from '../styles/theme'


// Example dataset type
interface Dataset {
  country: string;
  organisation: string;
  purposeOfOrganisation: string;
  dataset: string;
  purposeOfDataset: string;
  link: string;
  lastUpdated: string;
  frequency: string;
}

export function Datasets() {
  // const { isGreenMode } = useGreenMode();
  const [data, setData] = useState(datasets);
  const [filters, setFilters] = useState<{ column: keyof Dataset; value: string }>({
    column: 'country',
    value: '',
  });

  // Handle filter changes
  const handleFilterChange = (column: keyof Dataset, value: string) => {
    setFilters({ column, value });
    if (value) {
      setData(datasets.filter((row) => row[column].toLowerCase().includes(value.toLowerCase())));
    } else {
      setData(datasets);
    }
  };

  return (
    <Layout
      title={
        <span className="flex items-center justify-center gap-2">
          <span>📊</span>
          <span>Datasets Directory</span>
        </span>
      }
      description="Explore datasets with detailed metadata and filtering options."
    >
      <div className="mb-4">
        <label htmlFor="filter-column" className="block font-semibold">
          Filter by:
        </label>
        <div className="flex gap-4 mt-2">
          <select
            id="filter-column"
            value={filters.column}
            onChange={(e) => handleFilterChange(e.target.value as keyof Dataset, filters.value)}
            className="p-2 border rounded"
          >
            <option value="country">Country</option>
            <option value="organisation">Organisation</option>
            <option value="purposeOfOrganisation">Purpose of Organisation</option>
            <option value="dataset">Dataset</option>
            <option value="purposeOfDataset">Purpose of Dataset</option>
            <option value="link">Link to Dataset</option>
            <option value="lastUpdated">Dataset Last Updated</option>
            <option value="frequency">Frequency of Update</option>
          </select>

          <input
            type="text"
            placeholder="Enter value to filter"
            value={filters.value}
            onChange={(e) => handleFilterChange(filters.column, e.target.value)}
            className="p-2 border rounded w-full"
          />
        </div>
      </div>

      <div className="grid gap-4">
        {data.map((row, index) => (
          <Card key={index}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <strong>Country:</strong> {row.country}
              </div>
              <div>
                <strong>Organisation:</strong> {row.organisation}
              </div>
              <div>
                <strong>Purpose of Organisation:</strong> {row.purposeOfOrganisation}
              </div>
              <div>
                <strong>Dataset:</strong> {row.dataset}
              </div>
              <div>
                <strong>Purpose of Dataset:</strong> {row.purposeOfDataset}
              </div>
              <div>
                <strong>Link to the Dataset:</strong> {row.link}
              </div>
              <div>
                <strong>Last Updated:</strong> {row.lastUpdated}
              </div>
              <div>
                <strong>Frequency:</strong> {row.frequency}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Layout>
  );
}
