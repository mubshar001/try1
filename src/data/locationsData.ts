import { NeighborhoodItem, ZipItem } from '../types';

export const NEIGHBORHOODS: NeighborhoodItem[] = [
  {
    id: '1',
    slug: 'downtown-city-center',
    name: 'Downtown / City Center',
    zip: '34748',
    description: 'Historic commercial center and residential heritage districts of Leesburg near Venetian Gardens and Main Street, featuring historic properties with vintage copper, galvanized, and cast-iron plumbing.',
    keyFeatures: [
      'Historic commercial structures and vintage residences',
      'Immediate proximity to Venetian Gardens and Lake Harris canal waterways',
      'High incidence of aging galvanized and original copper sub-slab supply lines'
    ],
    localRisks: [
      'Aging cast-iron sewer line bottom channeling',
      'Under-house pier and beam moisture buildup',
      'High utility water pressure variations near municipal booster stations'
    ],
    landmarks: [
      'Historic Main Street Shopping District',
      'Venetian Gardens Park & Marina',
      'Leesburg City Hall & Municipal Complex'
    ]
  },
  {
    id: '2',
    slug: 'briarwood',
    name: 'Briarwood',
    zip: '34748',
    description: 'Established residential community in central Leesburg featuring single-story concrete slab-on-grade homes, extensive irrigation networks, and mature landscaping with aggressive tree root growth.',
    keyFeatures: [
      'Classic Florida slab-on-grade single-family construction',
      'Mature shade oaks and palms impacting underground water mains',
      'High concentration of pressurized domestic hot-water slab lines'
    ],
    localRisks: [
      'Sub-slab copper pinhole pitting from acidic sandy soil contact',
      'Irrigation solenoid manifold weeping under sod',
      'Yard water service line breaks near driveway aprons'
    ],
    landmarks: [
      'Briarwood Residential Corridor',
      'Sleepy Hollow Sports Complex Proximity',
      'Highway 27 & Griffin Road Access'
    ]
  },
  {
    id: '3',
    slug: 'woodland-hills',
    name: 'Woodland Hills',
    zip: '34748',
    description: 'Tranquil suburban neighborhood situated in northeast Leesburg near Lake Griffin, characterized by custom homes, swimming pools, and undulating sandy terrain prone to hidden subterranean leaks.',
    keyFeatures: [
      'High percentage of residential in-ground swimming pools and spas',
      'Sprawling multi-zone lawn sprinkler systems',
      'Porous sandy soils that absorb thousands of gallons of water without pooling'
    ],
    localRisks: [
      'Underground pool return line fractures',
      'High-water-bill surprises with hidden irrigation leaks',
      'Slab foundation shifts caused by sub-slab water erosion'
    ],
    landmarks: [
      'Woodland Hills Subdivision',
      'Lake Griffin State Park Boundary',
      'Radio Road Corridor'
    ]
  },
  {
    id: '4',
    slug: 'rolling-meadows',
    name: 'Rolling Meadows',
    zip: '34748',
    description: 'Charming family neighborhood in west Leesburg featuring mid-century and modern concrete block construction, close to local schools and shopping centers.',
    keyFeatures: [
      'Monolithic concrete slab foundations with copper under-slab plumbing',
      'High density of municipal potable water connections',
      'Active family households with high domestic water usage'
    ],
    localRisks: [
      'Concealed bathroom wall and shower pan leaks',
      'Hot water slab pipe erosion causing warm floor tiles',
      'Water meter vault valve leaks'
    ],
    landmarks: [
      'Rolling Meadows Boulevard',
      'Leesburg High School Vicinity',
      'US-441 Commercial Corridor'
    ]
  },
  {
    id: '5',
    slug: 'southside',
    name: 'Southside',
    zip: '34748',
    description: 'Dynamic residential and commercial growth corridor extending south along US-27 toward Lake Harris and Okahumpka, featuring modern subdivisions and commercial retail plazas.',
    keyFeatures: [
      'Mix of modern residential subdivisions and commercial business centers',
      'Underground high-pressure commercial water service feeds',
      'Multi-story commercial plumbing systems and lift stations'
    ],
    localRisks: [
      'Commercial kitchen floor drain overflows and lift pump failures',
      'Main supply line pressure drops across expansive commercial lots',
      'Deep underground pipe fissures under asphalt parking lots'
    ],
    landmarks: [
      'South US-27 Commercial District',
      'UF Health Leesburg Hospital Area',
      'Singletary Park & Lake Harris Boat Ramps'
    ]
  },
  {
    id: '6',
    slug: 'bridgewater',
    name: 'Bridgewater',
    zip: '34788',
    description: 'Scenic waterfront community on the eastern side of Leesburg along the Lake Harris chain of lakes, with modern executive homes, swimming pools, and complex drainage needs.',
    keyFeatures: [
      'Executive waterfront residences and lakefront canal properties',
      'In-ground pools, infinity spas, and outdoor summer kitchens',
      'Complex landscape French drains and stormwater catch basins'
    ],
    localRisks: [
      'Pool shell and skimmer hairline crack leaks',
      'French drain silt clogs causing patio and foundation flooding',
      'Waterfront groundwater table interactions with sewer lines'
    ],
    landmarks: [
      'Bridgewater Lakefront Community',
      'Lake Harris Waterfront Canals',
      'County Road 44 East Corridor'
    ]
  }
];

export const TARGET_ZIPS: ZipItem[] = [
  {
    code: '34748',
    areaName: 'Leesburg Central, Downtown, Southside & Briarwood',
    type: 'Primary Urban & Residential Hub',
    keySubdivisions: ['Downtown Leesburg', 'Briarwood', 'Rolling Meadows', 'Southside', 'Woodland Hills'],
    emergencyDispatchTime: '30-40 minutes'
  },
  {
    code: '34788',
    areaName: 'Leesburg East, Grand Island & Bridgewater',
    type: 'Waterfront & Suburban Enclave',
    keySubdivisions: ['Bridgewater', 'Silver Lake', 'Lake Square Area', 'Grand Island Border'],
    emergencyDispatchTime: '35-45 minutes'
  },
  {
    code: '34749',
    areaName: 'Leesburg P.O. Box & Municipal Service Logistics',
    type: 'Municipal & Business Logistics Zone',
    keySubdivisions: ['City Center Commercial', 'Municipal Utility Services Hub', 'Pa Walker Rd Service District'],
    emergencyDispatchTime: '30-40 minutes'
  },
  {
    code: '34789',
    areaName: 'Leesburg North & Fruitland Park Border Enclave',
    type: 'Northern Residential Corridor',
    keySubdivisions: ['Lake Griffin Perimeter', 'North Leesburg', 'Sleepy Hollow Sports District'],
    emergencyDispatchTime: '35-45 minutes'
  }
];
