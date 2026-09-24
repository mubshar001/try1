import { ServiceItem } from '../types';

export const ALL_SERVICES: ServiceItem[] = [
  {
    id: '1',
    slug: 'leak-detection',
    name: 'Leak Detection',
    shortDesc: 'Comprehensive non-invasive acoustic, thermal, and electronic water leak detection across residential and commercial properties in Leesburg.',
    priority: true,
    category: 'residential',
    subServices: [
      'Digital Acoustic Pipe Listening',
      'Infrared Thermal Imaging Inspections',
      'Helium Tracer Gas Micro-Leak Detection',
      'Electronic Pressure Decay Diagnostics',
      'Whole-Home Potable Plumbing Surveys'
    ],
    problems: [
      'Unexplained spikes in monthly Leesburg utility bills',
      'Persistent sound of rushing water when faucets are off',
      'Damp carpet, warm baseboards, or buckling hardwood floors',
      'Mold growth, musty odors, and drywall discoloration'
    ],
    symptoms: [
      'City meter flow indicator spinning continuously',
      'Loss of hot or cold tap water pressure',
      'Cracks appearing in foundation walls or ceramic tile grout',
      'Puddling on slab perimeter or around interior thresholds'
    ],
    process: [
      { step: '01', title: 'System Isolation & Static Pressure Audit', desc: 'We install calibrated pressure gauges on main hose bibbs and verify whether pressure decays across isolated domestic branches.' },
      { step: '02', title: 'Acoustic Ground Microphone Scanning', desc: 'Using multi-frequency ground hydrophones, technicians pinpoint high-frequency vibrations emitted by pressurized pipe fissures.' },
      { step: '03', title: 'High-Resolution FLIR Thermal Mapping', desc: 'Infrared imaging detects microscopic temperature differences behind sheetrock, tiled showers, and concrete floors.' },
      { step: '04', title: 'Pinpoint Mapping & Documentation', desc: 'We mark the exact leak coordinate to within inches, minimizing invasive wall or slab penetrations during spot repair.' }
    ],
    benefits: [
      'Zero unnecessary wall or flooring demolition',
      'Immediate mitigation of structural foundation subsidence',
      'Significant reduction in monthly water and sewage billing',
      'Certified insurance inspection documentation for homeowner claims'
    ],
    homeownerTips: [
      'Perform the 30-minute meter check: turn off all indoor water fixtures and check if the small triangular leak dial rotates.',
      'Check toilet flappers quarterly with food coloring before calling for concealed pipe line leak tests.',
      'Always locate and test your main emergency water shutoff valve twice per year.'
    ],
    faqs: [
      { q: 'How does non-invasive leak detection work?', a: 'We utilize sensitive ultrasonic audio amplifiers, thermal imaging cameras, and inert tracer gas to locate buried or concealed leaks without breaking walls or slabs.' },
      { q: 'How quickly can your technicians arrive in Leesburg?', a: 'Our emergency leak detection vans are stationed locally and arrive on-site within 30 to 45 minutes for urgent water events.' },
      { q: 'Will my homeowners insurance cover leak detection?', a: 'Most Florida policies cover the cost of locating and accessing a hidden pipe leak when accompanied by certified non-invasive documentation.' },
      { q: 'Can you detect leaks under 6 inches of concrete?', a: 'Yes. Our specialized ground microphones and dual-sensor correlators isolate acoustic frequencies through dense concrete, tile, and sub-slab soils.' }
    ]
  },
  {
    id: '2',
    slug: 'water-meter-leak-detection',
    name: 'Water Meter Leak Detection',
    shortDesc: 'Calibrated diagnostic audits to isolate city supply lines from private property leaks at the municipal meter vault.',
    priority: false,
    category: 'residential',
    subServices: [
      'City Meter Vault Flow Verification',
      'Low-Flow Telltale Indicator Testing',
      'Main Curb Stop Isolation Audits',
      'Private vs Municipal Responsibility Mapping'
    ],
    problems: [
      'City water meter spins when all interior valves are shut',
      'Disputes with City of Leesburg Utilities over billing tiers',
      'Standing water inside the sidewalk water meter box'
    ],
    symptoms: [
      'Continuous ticking noise at the curb meter box',
      'Soggy ground between the street meter and house foundation',
      'Pressure fluctuations inside the home'
    ],
    process: [
      { step: '01', title: 'Meter Vault Inspection', desc: 'Inspect the meter register, curb stop valve, and check valves for weeping packing nuts.' },
      { step: '02', title: 'House Main Isolation', desc: 'Close the main house shut-off valve to determine if the leak is between the meter and home or inside the structure.' },
      { step: '03', title: 'Flow Log Audit', desc: 'Record rotation rate to calculate exact hourly water loss in gallons.' },
      { step: '04', title: 'Utility Coordination', desc: 'Provide verified documentation if the leak occurs on the city connection side.' }
    ],
    benefits: [
      'Clarifies property owner versus utility responsibility',
      'Prevents utility overcharges and tier-rate penalties',
      'Stops subterranean soil erosion near city sidewalks'
    ],
    homeownerTips: [
      'Clear dirt and mulch away from your water meter lid so it remains accessible for monthly meter readers and diagnostics.',
      'If the meter spins while your main home valve is closed, your underground yard service line has a break.'
    ],
    faqs: [
      { q: 'Who is responsible for leaks at the water meter in Leesburg?', a: 'The City of Leesburg maintains the main and the meter up to the outlet coupling; everything past the outlet coupling into your yard is private homeowner responsibility.' },
      { q: 'What does a spinning triangle on my water meter indicate?', a: 'The red or silver triangle is a low-flow indicator; any rotation when water fixtures are off indicates pressurized leakage downstream.' }
    ]
  },
  {
    id: '3',
    slug: 'high-water-bill-leak-detection',
    name: 'High Water Bill Leak Detection',
    shortDesc: 'Fast forensic leak audits to identify the concealed causes behind sudden spikes in residential and commercial utility bills.',
    priority: true,
    category: 'residential',
    subServices: [
      'Forensic Flow Calculation & Rate Audits',
      'Hidden Sub-Slab Line Diagnostics',
      'Continuous Running Toilet & Fixture Tests',
      'Irrigation Zone Solenoid Audits'
    ],
    problems: [
      'Water bills suddenly doubling or tripling without lifestyle changes',
      'Receiving high consumption alert letters from Leesburg Utilities',
      'Sewer usage billing charges escalating dramatically'
    ],
    symptoms: [
      'Meter index showing thousands of excess gallons used',
      'Hissing sounds inside walls or under toilets',
      'Warm concrete floors indicating continuous hot water flow'
    ],
    process: [
      { step: '01', title: 'Billing Usage Pattern Review', desc: 'Analyze historic seasonal usage versus current month spikes to calculate continuous flow rate.' },
      { step: '02', title: 'Sub-System Isolation', desc: 'Methodically isolate irrigation, domestic hot, domestic cold, and pool autofill loops.' },
      { step: '03', title: 'Acoustic & Thermal Localization', desc: 'Pinpoint the exact underground or in-wall rupture responsible for the continuous consumption.' },
      { step: '04', title: 'Utility Credit Assistance', desc: 'Supply certified repair letters and diagnostic proof required by Leesburg Utilities for leak fee adjustments.' }
    ],
    benefits: [
      'Stops thousands of gallons of wasted water immediately',
      'Qualifies homeowners for municipal sewer/water bill rebates',
      'Protects property foundations from long-term washout'
    ],
    homeownerTips: [
      'Keep copies of the last 3 utility statements so our technicians can match flow rates with system diagnostics.',
      'Check irrigation controller back-up batteries; power outages often reset timers to run daily cycles without notification.'
    ],
    faqs: [
      { q: 'Can I get a credit on my Leesburg water bill after a leak is fixed?', a: 'Yes. The City of Leesburg offers an adjustment program for documented subterranean or plumbing leaks upon receipt of licensed contractor invoices.' },
      { q: 'How many gallons can a hidden slab leak waste per day?', a: 'A pinhole leak in a 1/2-inch copper pipe at 60 PSI can lose between 3,000 and 10,000 gallons per day.' }
    ]
  },
  {
    id: '4',
    slug: 'slab-leak-detection',
    name: 'Slab Leak Detection',
    shortDesc: 'Precision acoustic and infrared tracking to pinpoint pressurized copper and PEX pipe leaks beneath monolithic concrete slabs.',
    priority: true,
    category: 'underground',
    subServices: [
      'Sub-Slab Acoustic Ground Amplification',
      'Thermographic Slab Heat Signature Mapping',
      'Ultrasonic Pipe Frequency Correlators',
      'Direct Spot Repair Access Engineering'
    ],
    problems: [
      'Foundation cracking and floor tile tenting',
      'Warm areas on carpet, tile, or laminate flooring',
      'Sounds of running water inside interior hallways',
      'Mildew odor radiating from baseboards'
    ],
    symptoms: [
      'Water heater running continuously without hot water usage',
      'Damp concrete around exterior building footer',
      'Sudden jump in gas or electric heating bills'
    ],
    process: [
      { step: '01', title: 'Thermal Imaging Walkthrough', desc: 'We scan floor surfaces with high-resolution FLIR cameras to detect hot-water thermal plumes blossoming through concrete.' },
      { step: '02', title: 'Acoustic Triangulation', desc: 'Using multi-channel ground contact microphones, we listen to acoustic frequency signatures across the foundation floor.' },
      { step: '03', title: 'Line Trace & Depth Verification', desc: 'Electromagnetic line transmitters trace the exact path and depth of the sub-slab pipe run.' },
      { step: '04', title: 'Precise Target Marking', desc: 'Technicians mark a 1-foot square target on the floor, avoiding extensive jackhammering.' }
    ],
    benefits: [
      'Prevents structural foundation shifting and sinkhole initiation',
      'Eliminates need to trench or jackhammer entire rooms',
      'Saves thousands compared to blind foundation excavation'
    ],
    homeownerTips: [
      'If you notice a warm spot on the floor, shut off your water heater inlet valve. If the sound stops, you have a hot-water slab leak.',
      'Never allow an uninsured contractor to jackhammer your slab without prior electronic acoustic location.'
    ],
    faqs: [
      { q: 'What causes slab leaks in Leesburg Florida homes?', a: 'Florida homes commonly experience slab leaks due to aggressive soil chemistry, pipe friction against limestone, poor initial installation, and thermal expansion of soft copper tubing.' },
      { q: 'Do you have to tear up my entire floor to find the leak?', a: 'No. Our non-invasive acoustic sensors pinpoint the leak location from above the floor, allowing minimal spot excavation or alternative overhead re-piping.' }
    ]
  },
  {
    id: '5',
    slug: 'water-service-line-leak-detection',
    name: 'Water Service Line Leak Detection',
    shortDesc: 'Acoustic and tracer gas pinpointing for underground main supply lines running between the city water meter and home exterior.',
    priority: true,
    category: 'underground',
    subServices: [
      'Electromagnetic Underground Pipe Tracing',
      'Ground Microphone Listening Surveys',
      'Helium Tracer Gas Injection for Deep Mains',
      'Service Line Pressure Decay Verification'
    ],
    problems: [
      'Soggy lawns and standing water when it has not rained',
      'Low domestic water pressure across all interior fixtures',
      'Settling or sinkhole depression in front yard or driveway'
    ],
    symptoms: [
      'City meter running with house shutoff closed',
      'Patches of hyper-green grass along supply trench',
      'Sediment or discolored water entering fixtures'
    ],
    process: [
      { step: '01', title: 'Supply Line Pressure Isolation', desc: 'Isolate the main line between curb stop and house inlet valve with test gauges.' },
      { step: '02', title: 'Electromagnetic Line Location', desc: 'Induce high-frequency signal onto conductive pipe to map path under lawn and driveway.' },
      { step: '03', title: 'Ground Listening Survey', desc: 'Walk pipe path with acoustic ground sensor to detect subterranean spray frequencies.' },
      { step: '04', title: 'Excavation Point Flagging', desc: 'Place physical flags indicating exact dig point and pipe burial depth.' }
    ],
    benefits: [
      'Preserves expensive driveway pavers, turf, and landscape beds',
      'Restores full municipal water volume and operating pressure',
      'Prevents subsurface erosion and sinkhole destabilization'
    ],
    homeownerTips: [
      'Always call 811 before doing any yard trenching or deep planting near your water service easement.',
      'If you have large oak or palm trees near your main line, root encroachment is the leading cause of service line ruptures in Lake County.'
    ],
    faqs: [
      { q: 'How deep are main water service lines buried in Leesburg?', a: 'Most residential water service lines in Lake County are buried 12 to 24 inches below grade, depending on driveway crossings and local municipal codes.' },
      { q: 'Can you detect leaks under concrete driveways without cutting them?', a: 'Yes. Our specialized acoustic sensors and tracer gas instruments can identify the rupture coordinate directly through poured concrete and interlocking pavers.' }
    ]
  },
  {
    id: '6',
    slug: 'commercial-leak-detection',
    name: 'Commercial Leak Detection',
    shortDesc: 'Industrial and commercial potable, hydronic, and fire line leak audits for Leesburg business complexes, restaurants, and medical centers.',
    priority: true,
    category: 'commercial',
    subServices: [
      'Commercial Fire Line & Backflow Inspections',
      'Multi-Story Tenant Risers & Hydronic Loops',
      'Restaurant Grease Trap & Floor Drain Lines',
      'Industrial Boiler & Chilled Water Loop Diagnostics'
    ],
    problems: [
      'Business disruption and safety hazards for customers',
      'Massive municipal utility surcharges on commercial water meters',
      'Fire sprinkler low-pressure alarm activations'
    ],
    symptoms: [
      'Loss of cooling efficiency in commercial chiller loops',
      'Water seepage across commercial slab floors or warehouse bays',
      'Unexplained drop in domestic booster pump pressures'
    ],
    process: [
      { step: '01', title: 'Facility Mechanical Audit', desc: 'Review mechanical blueprints and isolate commercial zones to minimize tenant interruption.' },
      { step: '02', title: 'Correlation & Acoustic Logging', desc: 'Deploy digital data loggers overnight on valves and hydrants for continuous acoustic monitoring.' },
      { step: '03', title: 'Pressure Profiling', desc: 'Monitor zone pressure drops across high-capacity backflow assemblies.' },
      { step: '04', title: 'Executive Summary Report', desc: 'Deliver comprehensive engineering reports for facilities directors and corporate insurers.' }
    ],
    benefits: [
      'Avoids unscheduled business closures and revenue losses',
      'Maintains NFPA fire sprinkler pressure compliance',
      'Reduces corporate carbon and water conservation footprint'
    ],
    homeownerTips: [
      'Ensure your facilities team logs water meter registers at the start and end of business daily to spot early deviations.',
      'Schedule annual commercial pipe surveys before Lake County peak tourism and hospitality seasons.'
    ],
    faqs: [
      { q: 'Can you perform commercial inspections after business hours?', a: 'Yes. We provide 24/7 commercial scheduling to inspect retail, restaurant, and medical facilities during zero-traffic night hours.' },
      { q: 'Do you inspect dedicated fire suppression main lines?', a: 'Yes. We test private underground fire service mains and detect leaks without discharging fire suppression systems.' }
    ]
  },
  {
    id: '7',
    slug: 'wall-leak-detection',
    name: 'Wall Leak Detection',
    shortDesc: 'Non-destructive infrared thermal imaging and acoustic scoping to pinpoint hidden plumbing leaks inside interior and exterior walls.',
    priority: true,
    category: 'residential',
    subServices: [
      'FLIR Thermal Wall Scans',
      'In-Wall Acoustic Probe Scoping',
      'Borescope Optical Cavity Inspection',
      'Drywall Moisture Mapping'
    ],
    problems: [
      'Peeling paint, bubbling wallpaper, and warped drywall',
      'Black mold stains along baseboards and bathroom walls',
      'Hissing sounds inside wall studs when water is running'
    ],
    symptoms: [
      'Soft or spongy sheetrock when pressed',
      'Musty odors concentrated in closets or adjacent rooms',
      'Sudden drop in shower valve pressure'
    ],
    process: [
      { step: '01', title: 'Infrared Thermal Scan', desc: 'High-sensitivity thermal cameras detect evaporative cooling patterns indicating hidden moisture blooms.' },
      { step: '02', title: 'Dielectric Moisture Metering', desc: 'Non-invasive pinless moisture meters quantify wall saturation depth without surface puncture.' },
      { step: '03', title: 'Acoustic Pipe Stethoscope', desc: 'Microphonic probes track the highest vibration frequency along copper or PEX supply lines.' },
      { step: '04', title: 'Surgical Access Marking', desc: 'We outline the exact single-stud bay containing the rupture for clean, minimal drywall opening.' }
    ],
    benefits: [
      'Prevents massive drywall demolition across entire rooms',
      'Stops dangerous black mold colonization before it spreads into HVAC ducts',
      'Pinpoints slow weeping pinhole leaks before catastrophic wall blowouts'
    ],
    homeownerTips: [
      'Never drive picture hanging nails or drywall screws into walls directly above or below sinks and shower valves.',
      'If you notice wall paint blistering, do not pop the bubble; call for leak detection to prevent localized water release.'
    ],
    faqs: [
      { q: 'Can thermal cameras see through drywall to find water?', a: 'Thermal cameras detect surface temperature differentials caused by moisture evaporation and hot/cold water pipe dissipation, revealing hidden leak plumes.' },
      { q: 'How long does a wall leak detection inspection take?', a: 'Most residential wall leak inspections in Leesburg are completed within 45 to 90 minutes.' }
    ]
  },
  {
    id: '8',
    slug: 'ceiling-leak-detection',
    name: 'Ceiling Leak Detection',
    shortDesc: 'Overhead acoustic and moisture diagnostics to trace water stains to their true origin—second-floor plumbing, attic pipes, or AC condensation.',
    priority: false,
    category: 'residential',
    subServices: [
      'Upstairs Bathroom Fixture Isolation',
      'Second-Story Drain Pan Scans',
      'Overhead PEX & Copper Riser Tracing',
      'Attic HVAC Drain Line Diagnostics'
    ],
    problems: [
      'Brown water rings appearing on living room or kitchen ceilings',
      'Sagging drywall and water dripping from light fixtures',
      'Ceiling plaster crumbling or peeling'
    ],
    symptoms: [
      'Drips coinciding with upstairs shower or toilet usage',
      'Ceiling moisture spikes during AC operation on hot Florida days',
      'Damp smells in downstairs bedrooms'
    ],
    process: [
      { step: '01', title: 'Ceiling Moisture Mapping', desc: 'Map saturation perimeter and locate the epicenter with non-destructive radio-frequency meters.' },
      { step: '02', title: 'Fixture Dye & Pressure Test', desc: 'Test upstairs tubs, shower pans, and toilet seals with non-toxic tracer dyes.' },
      { step: '03', title: 'Attic Pipe & HVAC Inspection', desc: 'Examine overhead supply risers, condensate drain lines, and overflow float switches.' },
      { step: '04', title: 'Accurate Diagnosis', desc: 'Confirm whether the water source is pressurized potable plumbing, drainage, or HVAC overflow.' }
    ],
    benefits: [
      'Prevents dangerous ceiling collapses onto furniture or occupants',
      'Stops electrical short-circuits in ceiling light and fan boxes',
      'Eliminates guesswork between plumbing and HVAC issues'
    ],
    homeownerTips: [
      'If a ceiling begins sagging from water weight, place a bucket beneath it and gently pierce the center with a pencil to release water safely.',
      'Regularly pour 1/2 cup of distilled white vinegar down your air handler condensate drain line to prevent clogs.'
    ],
    faqs: [
      { q: 'Is water leaking from my ceiling always a roof leak?', a: 'No. In Florida, over 60% of ceiling water stains originate from upstairs plumbing lines, overflowing AC condensate pans, or failing wax toilet rings.' },
      { q: 'Can water travel along ceiling joists away from the leak?', a: 'Yes. Water follows the path of least resistance along wood joists and drywall seams, which is why infrared detection is essential to find the true source.' }
    ]
  },
  {
    id: '9',
    slug: 'crawlspace-leak-detection',
    name: 'Under-House & Crawlspace Leak Detection',
    shortDesc: 'Specialized inspection of raised foundation crawlspaces, pier-and-beam plumbing, and subterranean sub-floor supply lines.',
    priority: false,
    category: 'residential',
    subServices: [
      'Pier & Beam Subfloor Inspections',
      'Crawlspace Sewer Line Integrity Testing',
      'Vapor Barrier Water Intrusion Mapping',
      'Suspended Potable Pipe Acoustic Audits'
    ],
    problems: [
      'Spongy floorboards and soft spots in older Leesburg homes',
      'Damp, musty smells rising into living spaces',
      'High interior humidity and termite attraction'
    ],
    symptoms: [
      'Standing pools of water under foundation vents',
      'Rusting pipe hangers and corroded galvanized unions',
      'Rotting wood subfloor framing'
    ],
    process: [
      { step: '01', title: 'Crawlspace Visual & Camera Survey', desc: 'Inspect suspended pipe network, drain hangers, and vapor barriers for active leakage.' },
      { step: '02', title: 'Pressure Testing Lines', desc: 'Pressurize isolated segments to confirm pressurized versus gravity-drain origins.' },
      { step: '03', title: 'Acoustic Subfloor Listening', desc: 'Utilize directional microphones in tight spaces to pinpoint small pinholes.' },
      { step: '04', title: 'Moisture Remediation Blueprint', desc: 'Provide step-by-step guidance on structural pipe repairs and dry-out protocols.' }
    ],
    benefits: [
      'Protects expensive historic wood flooring from permanent warping',
      'Eliminates pest breeding grounds under living spaces',
      'Maintains foundation stability on older Florida homes'
    ],
    homeownerTips: [
      'Ensure crawlspace perimeter vents remain unobstructed to allow natural cross-ventilation in humid Lake County months.',
      'Check under-house access hatches after heavy Florida thunderstorms to verify ground drainage.'
    ],
    faqs: [
      { q: 'Are crawlspace plumbing leaks common in Leesburg?', a: 'Yes, particularly in historic Downtown Leesburg and lakefront properties built with raised pier-and-beam construction where original cast iron and galvanized pipes age.' },
      { q: 'Do your technicians enter tight crawlspaces?', a: 'Yes, our certified technicians are trained and equipped with safety gear, optical borescopes, and remote inspection rovers for tight crawlspaces.' }
    ]
  },
  {
    id: '10',
    slug: 'irrigation-sprinkler-leak-detection',
    name: 'Irrigation & Sprinkler Leak Detection',
    shortDesc: 'Subsurface zone testing and solenoid valve leak detection to stop lawn washouts and extreme irrigation water waste.',
    priority: true,
    category: 'outdoor',
    subServices: [
      'Irrigation Zone Pressure Testing',
      'Electromagnetic Solenoid & Wire Tracing',
      'Underground Lateral Pipe Acoustic Listening',
      'Sprinkler Head Pressure Regulation Audits'
    ],
    problems: [
      'Massive irrigation water bills on reclaimed or potable city meters',
      'Flooded patches of grass and mulch bed washouts',
      'Sprinkler heads sputtering or having weak spray patterns'
    ],
    symptoms: [
      'Irrigation meter spins when sprinkler controller is in off position',
      'Lawn depressions and bubbling mud near solenoid boxes',
      'Dry, yellow turf in zones with active irrigation'
    ],
    process: [
      { step: '01', title: 'Master Valve & Backflow Isolation', desc: 'Test pressure between backflow preventer and zone manifolds.' },
      { step: '02', title: 'Sequential Zone Pressure Decay', desc: 'Test each lateral zone individually with compressed air or water pressure to identify the damaged sector.' },
      { step: '03', title: 'Acoustic Turf Scanning', desc: 'Scan along buried PVC pipes with turf-probe microphones to locate subsurface cracks.' },
      { step: '04', title: 'Flag & Depth Mark', desc: 'Pinpoint the exact break location for quick shovel spot repair.' }
    ],
    benefits: [
      'Saves thousands of dollars annually on Lake County irrigation billing',
      'Protects landscaping, sod, and delicate root systems from drown-out',
      'Prevents sidewalk cracking from subsurface soil erosion'
    ],
    homeownerTips: [
      'Check sprinkler heads every spring for mower damage or misaligned nozzles spraying onto hard surfaces.',
      'Inspect irrigation valve boxes periodically; standing water inside a dry valve box indicates a weeping diaphragm valve.'
    ],
    faqs: [
      { q: 'Why is my irrigation leak wasting water when the timer is off?', a: 'If a zone valve diaphragm is torn or a master valve is stuck open, water under continuous pressure leaks 24 hours a day through lateral lines.' },
      { q: 'Can you find irrigation leaks buried under turf without digging up the lawn?', a: 'Yes. We use acoustic ground sensors and tracer gas to find the exact pipe fracture through grass and topsoil.' }
    ]
  },
  {
    id: '11',
    slug: 'underground-buried-line-leak-detection',
    name: 'Underground & Buried Line Leak Detection',
    shortDesc: 'Deep geophysical pipe locating and tracer gas technology to locate concealed pressurized pipes under soil, turf, and asphalt.',
    priority: false,
    category: 'underground',
    subServices: [
      'Deep Subsurface Line Locating',
      'Tracer Gas Micro-Sniffer Surveys',
      'High-Power Acoustic Geophone Correlators',
      'Ground Penetrating Radar Pipe Depth Scans'
    ],
    problems: [
      'Unexplained ground settlement near buried utility runs',
      'Mystery water pooling in yards days after rainfall',
      'Drop in building main supply water pressure'
    ],
    symptoms: [
      'Continuous flow registered at property meter',
      'Damp asphalt or cracked concrete driveway pads',
      'Hissing sounds audible at outdoor hose spigots'
    ],
    process: [
      { step: '01', title: 'Electromagnetic Path Tracing', desc: 'Transmit electronic radio frequency along the buried pipe to pinpoint alignment and depth.' },
      { step: '02', title: 'Inert Gas Injection', desc: 'Charge line with safe 5% hydrogen / 95% nitrogen tracer gas that escapes through the smallest fracture.' },
      { step: '03', title: 'Surface Gas Sensing', desc: 'Sweep the ground surface with high-sensitivity molecular gas sniffers to locate the exact leak plume.' },
      { step: '04', title: 'Coordinate Flagging', desc: 'Provide precise depth and GPS/visual markers for precision excavation.' }
    ],
    benefits: [
      'Eliminates blind trenching and yard destruction',
      'Works through soil, asphalt, concrete, and paver driveways',
      'Locates pinholes that acoustic sensors cannot hear due to ambient noise'
    ],
    homeownerTips: [
      'Document the location of all buried water and irrigation lines when installing new landscaping or pools.',
      'Address buried line leaks immediately in Central Florida to prevent sinkhole stimulation in karst limestone.'
    ],
    faqs: [
      { q: 'What is tracer gas leak detection?', a: 'We introduce a safe, non-toxic, non-flammable gas mixture into the pipe; because hydrogen molecules are smaller than water, they rise rapidly through the soil to our surface detector.' },
      { q: 'How deep can your underground sensors detect pipes?', a: 'Our equipment can trace and detect leaks up to 10 to 12 feet deep in typical Florida sandy loam soil.' }
    ]
  },
  {
    id: '12',
    slug: 'pool-leak-detection',
    name: 'Pool Leak Detection',
    shortDesc: 'Comprehensive dye testing, pressure checks, and acoustic listening for swimming pool structural shells, skimmers, and underground plumbing.',
    priority: true,
    category: 'outdoor',
    subServices: [
      'Bucket Evaporation Verification Test',
      'Skimmer & Light Conduit Dye Testing',
      'Suction & Return Line Pressure Tests',
      'Underwater Hydrophone Acoustic Scanning'
    ],
    problems: [
      'Pool losing more than 1/4 inch of water per day',
      'Autofill valve running continuously',
      'Air bubbles blowing out of return jets',
      'Cracking in pool deck pavers or sinking coping stones'
    ],
    symptoms: [
      'Dramatic increase in monthly water and pool chemical expenses',
      'Algae blooms caused by rapid chlorine dilution',
      'Soggy soil around pool pump equipment pad'
    ],
    process: [
      { step: '01', title: 'Evaporation Differential Audit', desc: 'Perform calibrated bucket tests to distinguish normal Florida evaporative loss from genuine structural leaks.' },
      { step: '02', title: 'Underwater Hydrophone Scan', desc: 'Submerge sensitive hydrophones to listen for suction and pressure leaks around main drains and lights.' },
      { step: '03', title: 'Precision Dye Testing', desc: 'Inject specialized heavy fluorochemical dye around skimmer throats, returns, and structural plaster cracks.' },
      { step: '04', title: 'Plumbing Pressure Isolation', desc: 'Plug suction and return lines and pressurize each loop with air/water to isolate subterranean line breaks.' }
    ],
    benefits: [
      'Prevents pool deck subsidence and costly structural shell cracking',
      'Saves hundreds in wasted pool chemicals, salt, and water utility bills',
      'Locates underground plumbing breaks without breaking up the decorative pool deck'
    ],
    homeownerTips: [
      'Perform the 24-hour bucket test: fill a bucket with pool water, mark water levels inside and outside, and compare drops to verify leakage.',
      'Check the pool pump lid O-ring and union gaskets regularly; dry seals pull air into the system and cause suction leaks.'
    ],
    faqs: [
      { q: 'How much water loss in a Florida pool is considered normal?', a: 'Normal evaporation in Lake County ranges from 1/8 to 1/4 inch per day depending on temperature, humidity, and solar covers. Anything exceeding 1/4 inch per day indicates an active leak.' },
      { q: 'Do you have to drain the pool to find leaks?', a: 'No! All of our dye testing, acoustic hydrophone scanning, and plumbing pressure tests are conducted with the pool full of clean water.' }
    ]
  },
  {
    id: '13',
    slug: 'spa-leak-detection',
    name: 'Spa & Hot Tub Leak Detection',
    shortDesc: 'Acoustic, dye, and pressure diagnostics for portable hot tubs, in-ground spas, spillover features, and jet manifolds.',
    priority: false,
    category: 'outdoor',
    subServices: [
      'In-Ground Spa Spillover Inspections',
      'Jet Manifold & Air Blower Pressure Tests',
      'Hot Tub Cabinet & Pack Moisture Scans',
      'Shell & Light Niche Dye Location'
    ],
    problems: [
      'In-ground spa water draining down into attached pool overnight',
      'Hot tub water level dropping below jet openings',
      'Wet concrete pad around hot tub skirt'
    ],
    symptoms: [
      'Spa pump sucking air and surging',
      'Chemicals depleting rapidly',
      'Erosion underneath spa concrete pad'
    ],
    process: [
      { step: '01', title: 'Spillover & Check Valve Test', desc: 'Inspect automated Jandy valves and check valves that prevent spa water back-siphoning.' },
      { step: '02', title: 'Plumbing Jet Pressure Test', desc: 'Isolate venturi jet lines to detect cracked buried flex PVC.' },
      { step: '03', title: 'Dye Testing Shell Penetrations', desc: 'Inspect light niches, suction drains, and grout seams with dye.' },
      { step: '04', title: 'Targeted Repair Roadmap', desc: 'Deliver exact leak locations to simplify repair without demolishing surrounding tile.' }
    ],
    benefits: [
      'Prevents heater element burn-out from low water conditions',
      'Protects spa pads from ground undermining and settling',
      'Stops continuous municipal water autofill costs'
    ],
    homeownerTips: [
      'If your in-ground spa drains only down to the level of the jets, the leak is located on that specific jet line.',
      'Keep tree roots trimmed away from buried flexible PVC spa plumbing lines.'
    ],
    faqs: [
      { q: 'Why does my spa drain into my pool when the pump is off?', a: 'This is usually caused by a failed check valve on the spa return line allowing gravity backflow, or a leak in the spillover suction line.' },
      { q: 'Can you detect leaks in both portable acrylic hot tubs and concrete spas?', a: 'Yes, we service in-ground gunite spas, spillover water features, and standalone portable acrylic hot tubs.' }
    ]
  },
  {
    id: '14',
    slug: 'yard-meter-box-leak-detection',
    name: 'Yard & Meter-Box Leak Detection',
    shortDesc: 'Specialized testing for pooling water inside municipal meter vaults, curb stops, and private service line connections.',
    priority: false,
    category: 'residential',
    subServices: [
      'Meter Box Vault Moisture Testing',
      'Curb Stop Valve Packing Inspection',
      'Compression Fitting Pressure Audits',
      'Main Yard Supply Line Acoustic Checks'
    ],
    problems: [
      'Standing muddy water filling the green or cast-iron meter box',
      'Water bubbling up through lawn near the street curb',
      'Soggy ground along front sidewalk or driveway apron'
    ],
    symptoms: [
      'Meter dial continually rotating with house shut off',
      'Low water pressure inside home faucets',
      'Mosquito breeding in persistently wet meter vault'
    ],
    process: [
      { step: '01', title: 'Vault Pumping & Cleaning', desc: 'Pump standing water from the meter vault to inspect the meter body, couplings, and valves directly.' },
      { step: '02', title: 'Curb Valve Isolation', desc: 'Test whether water originates from the city curb cock valve or the private discharge coupling.' },
      { step: '03', title: 'Acoustic Yard Survey', desc: 'Survey the first 15 feet of private supply line with acoustic listening probes.' },
      { step: '04', title: 'Repair Notification', desc: 'Clearly demarcate city versus owner responsibility and provide urgent repair steps.' }
    ],
    benefits: [
      'Eliminates utility meter reading estimation disputes',
      'Prevents sinkholes along the street right-of-way',
      'Stops costly private water loss at the point of entry'
    ],
    homeownerTips: [
      'Keep yard mowers and edgers away from the meter box rim to avoid cracking the cast iron or polymer lid.',
      'If standing water in the meter box is clear and odorless, it is treated municipal water, not groundwater.'
    ],
    faqs: [
      { q: 'Why is there water in my water meter box if it has not rained?', a: 'Water in the meter box almost always indicates a leak at the meter couplings, the shutoff valve packing nut, or the private line entering your yard.' },
      { q: 'Will the City of Leesburg fix a leak in the meter box?', a: 'The city repairs leaks on the meter body and city shutoff valve; if the leak is on the private tailpiece coupling, the homeowner must have a licensed plumber repair it.' }
    ]
  },
  {
    id: '15',
    slug: 'attic-leak-detection',
    name: 'Attic Leak Detection',
    shortDesc: 'Comprehensive overhead diagnostics for pressurized attic plumbing runs, expansion tanks, and HVAC condensate systems in Leesburg homes.',
    priority: false,
    category: 'residential',
    subServices: [
      'Overhead PEX & CPVC Pipe Pressure Checks',
      'Attic Water Heater & Expansion Tank Scans',
      'HVAC Condensate Primary & Secondary Drain Tests',
      'Thermal Imaging of Ceiling Joists'
    ],
    problems: [
      'Water stains expanding on top-floor ceilings',
      'Wet fiberglass attic insulation and rotten roof decking',
      'Damp smells circulating through ceiling air vents'
    ],
    symptoms: [
      'Sounds of dripping in the ceiling during quiet nights',
      'AC unit shutting off repeatedly due to float switch trips',
      'Mildew staining around ceiling HVAC supply grilles'
    ],
    process: [
      { step: '01', title: 'Attic Framing Inspection', desc: 'Inspect elevated pipe runs, fittings, and thermal expansion tanks for slow weeping.' },
      { step: '02', title: 'Thermal Roof & Ceiling Scan', desc: 'Use infrared cameras from both the attic space and the living rooms below to identify moisture paths.' },
      { step: '03', title: 'Condensate Drain Line Flush Test', desc: 'Flow-test AC primary and secondary emergency drain lines to check for algae blockages.' },
      { step: '04', title: 'Pinpoint Location', desc: 'Isolate the defective pipe or drain elbow before catastrophic ceiling collapse occurs.' }
    ],
    benefits: [
      'Protects expensive attic insulation from compaction and mold',
      'Prevents structural drywall collapse into living areas below',
      'Prevents electrical fire hazards in attic junction boxes'
    ],
    homeownerTips: [
      'Inspect your attic HVAC secondary drain pan twice every summer; it should always be bone dry.',
      'Replace aging polybutylene or brittle CPVC piping installed in hot Florida attics before high pressure creates blowouts.'
    ],
    faqs: [
      { q: 'Why do CPVC pipes crack in Florida attics?', a: 'Attic temperatures in Central Florida regularly exceed 130°F, which causes older CPVC plastic to become brittle over time and develop micro-cracks under normal water pressure.' },
      { q: 'How do I know if an attic leak is from plumbing or my roof?', a: 'Plumbing leaks leak continuously 24/7 regardless of weather, while roof leaks typically only appear during or shortly after heavy rain.' }
    ]
  },
  {
    id: '16',
    slug: 'main-line-clog-detection',
    name: 'Main Line Clog Detection',
    shortDesc: 'High-definition video sewer camera inspections and line transmitters to locate deep root intrusions, collapsed pipes, and severe sewer blockages.',
    priority: false,
    category: 'drainage',
    subServices: [
      'High-Definition Sewer Camera Scans',
      'Electromagnetic Sonde Depth Locating',
      'Cast Iron Scale & Pipe Deterioration Mapping',
      'Sewer Gas & Odor Smoke Testing'
    ],
    problems: [
      'Toilets bubbling or backing up into shower basins',
      'Multiple plumbing fixtures draining slowly throughout the building',
      'Sewer smells emerging from household drains'
    ],
    symptoms: [
      'Washing machine discharge causing toilet gurgling',
      'Sewage pooling around outside cleanout plug',
      'Frequent toilet clogs requiring plunging'
    ],
    process: [
      { step: '01', title: 'Main Cleanout Access', desc: 'Open primary exterior cleanout and insert calibrated sewer camera with digital footage counter.' },
      { step: '02', title: 'Full Pipe Video Inspection', desc: 'Push camera through main line to municipal sewer or septic tank, recording pipe condition.' },
      { step: '03', title: 'Sonde Surface Tracing', desc: 'Activate radio sonde transmitter at the obstruction and pinpoint exact surface coordinates with locator receiver.' },
      { step: '04', title: 'Digital Video Report', desc: 'Provide homeowner with full HD video footage showing cause and exact depth of the blockage.' }
    ],
    benefits: [
      'Know the exact problem before spending money on unnecessary digging',
      'Identifies root intrusion, bellies, or collapsed pipe sections accurately',
      'Prevents devastating sewage backups into living quarters'
    ],
    homeownerTips: [
      'Never flush wet wipes, paper towels, or feminine products down the toilet, even if labeled flushable.',
      'Keep trees with aggressive root systems like oaks and weeping willows at least 25 feet away from sewer line paths.'
    ],
    faqs: [
      { q: 'How do you pinpoint the location of an underground sewer clog?', a: 'Our sewer cameras have built-in 512 Hz radio transmitters (sondes). As the camera reaches the obstruction, our technicians use a handheld receiver on the lawn or slab above to pinpoint the exact location and depth within inches.' },
      { q: 'Can tree roots grow into underground PVC pipes?', a: 'Yes, roots can penetrate solvent-weld glue joints, rubber coupling seals, and cracked fittings seeking water and nutrients.' }
    ]
  },
  {
    id: '17',
    slug: 'yard-drain-cleaning',
    name: 'Yard Drain Cleaning',
    shortDesc: 'Hydro-flushing and camera diagnostics for French drains, catch basins, downspout conductors, and yard drainage channels in Leesburg.',
    priority: false,
    category: 'drainage',
    subServices: [
      'Catch Basin Silt & Debris Removal',
      'Hydro-Jetting Corrugated & PVC Yard Drains',
      'Downspout Conductor Video Inspections',
      'Laser Slope & Elevation Drainage Audits'
    ],
    problems: [
      'Stormwater flooding landscape beds and entering patio doors',
      'Water pooling around foundation footers after afternoon Florida storms',
      'Yard drain catch basins overflowing with silt and leaves'
    ],
    symptoms: [
      'Water standing in lawn 24 hours after heavy rain',
      'Downspout adapters overflowing during thunderstorms',
      'Mosquito breeding in stagnant yard pipes'
    ],
    process: [
      { step: '01', title: 'Grates & Basins Clearance', desc: 'Manually remove surface debris and vac-extract packed sediment from catch basins.' },
      { step: '02', title: 'High-Pressure Hydro-Flush', desc: 'Feed specialized rear-facing jetter nozzles through drain lines to flush sand and root blockages.' },
      { step: '03', title: 'Borescope Pipe Check', desc: 'Inspect drain lines for crushed corrugated pipes or root penetration.' },
      { step: '04', title: 'Discharge Flow Verification', desc: 'Flood system to confirm rapid, unobstructed discharge at the street or pop-up emitter.' }
    ],
    benefits: [
      'Prevents costly storm water damage to home foundations and drywall',
      'Restores rapid drainage capacity before hurricane season',
      'Eliminates standing water mosquito breeding grounds'
    ],
    homeownerTips: [
      'Clean gutter leaf guards and downspouts every autumn to prevent leaves from washing into buried yard drains.',
      'Install pop-up discharge emitters with gravel drainage bases to prevent grass from growing over pipe outlets.'
    ],
    faqs: [
      { q: 'How often should yard drains be cleaned in Florida?', a: 'Due to Central Florida sandy soil and intense summer downpours, residential yard drains and French drains should be inspected and flushed annually.' },
      { q: 'Can tree roots crush flexible corrugated yard pipes?', a: 'Yes, corrugated polyethylene pipe is thin-walled and easily crushed or penetrated by roots. We often recommend replacing damaged sections with rigid PVC.' }
    ]
  },
  {
    id: '18',
    slug: 'underground-pipe-leak-detection',
    name: 'Underground Pipe Leak Detection',
    shortDesc: 'Acoustic correlation and electronic locating for high-pressure potable, fire service, and sewer pipe lines beneath ground level.',
    priority: true,
    category: 'underground',
    subServices: [
      'Dual-Sensor Acoustic Leak Correlators',
      'Ground Microphone Surface Surveys',
      'Tracer Gas Micro-Pinhole Detection',
      'Non-Conductive Pipe Tracer Wire Installation'
    ],
    problems: [
      'Mystery sinkholes or ground voids forming in turf or under driveways',
      'Significant water loss registering on municipal billing',
      'Unexplained drop in municipal water pressure'
    ],
    symptoms: [
      'Soggy areas on lawn when surrounding soil is dry',
      'Continuous running water audible on fire hydrants or curb stops',
      'Cracking in asphalt parking stalls or foundation pads'
    ],
    process: [
      { step: '01', title: 'Pipe Material & Route Mapping', desc: 'Determine pipe diameter, material (copper, ductile iron, PVC, PEX), and depth using line locators.' },
      { step: '02', title: 'Acoustic Correlation Deployment', desc: 'Attach magnetic transmitters to two access points on the pipe; computer correlates sound delay to pinpoint the leak coordinate.' },
      { step: '03', title: 'Surface Microphone Verification', desc: 'Confirm correlated point with ground geophone microphone.' },
      { step: '04', title: 'Depth & GPS Marking', desc: 'Mark dig zone on turf or pavement to enable targeted spot excavation.' }
    ],
    benefits: [
      'Pinpoint accuracy within inches saves thousands in excavation costs',
      'Avoids tearing up extensive driveways, lawns, or roadways',
      'Prevents catastrophic sinkhole formation in fragile Florida karst terrain'
    ],
    homeownerTips: [
      'Never ignore persistent damp spots in your yard during dry Florida winter months.',
      'Ensure tracer wire is installed alongside any new underground non-metallic water pipes for easy future locating.'
    ],
    faqs: [
      { q: 'What is acoustic correlation?', a: 'Acoustic correlation uses dual computer sensors attached to pipe access points. By measuring the precise speed of sound through the pipe material and the arrival time of leak noise at both sensors, it calculates the exact distance to the leak.' },
      { q: 'Can you detect leaks under asphalt parking lots?', a: 'Yes. Our specialized ground microphones and correlation systems locate pressurized leaks through thick asphalt and concrete.' }
    ]
  },
  {
    id: '19',
    slug: 'commercial-floor-drain-lift-pump-repair',
    name: 'Commercial Floor Drain & Lift Pump Repair',
    shortDesc: 'Industrial diagnostics, hydro-clearing, and lift station pump diagnostics for commercial kitchens, warehouses, and multi-tenant facilities.',
    priority: false,
    category: 'commercial',
    subServices: [
      'Commercial Sump & Sewage Ejector Diagnostics',
      'High-Capacity Lift Pump Float Calibration',
      'Commercial Kitchen Grease Interceptor Line Scans',
      'Backwater Valve Emergency Testing'
    ],
    problems: [
      'Commercial kitchen floor drains backing up during peak service hours',
      'Lift pump station high-water alarms sounding',
      'Foul sewage odors permeating retail or dining customer areas'
    ],
    symptoms: [
      'Slow drainage in restaurant dishwashing and prep stations',
      'Lift pump cycling continuously or failing to engage',
      'Grease accumulation visible in drain sumps'
    ],
    process: [
      { step: '01', title: 'Emergency On-Site Response', desc: 'Immediate dispatch to prevent health code violations and commercial shutdown.' },
      { step: '02', title: 'Pump & Control Panel Diagnostic', desc: 'Test motor amperage, float switches, capacitors, and check valve integrity.' },
      { step: '03', title: 'Heavy-Duty Hydro-Jetting', desc: 'Clear hardened grease, scale, and foreign matter from commercial floor drain lines.' },
      { step: '04', title: 'Operational Certification', desc: 'Conduct simulated high-volume discharge tests to ensure total system reliability.' }
    ],
    benefits: [
      'Prevents Florida Department of Health shutdowns and citations',
      'Protects expensive restaurant and retail flooring from grease saturation',
      'Extends the operating life of commercial lift station pumps'
    ],
    homeownerTips: [
      'Enforce strict kitchen grease disposal procedures: never pour used cooking oils or fats down floor sinks.',
      'Test lift station backup alarm batteries monthly to prevent silent pump failures.'
    ],
    faqs: [
      { q: 'What causes commercial floor drains to back up?', a: 'The most frequent culprits in commercial facilities are hardened fats, oils, and grease (FOG), mop string clogs, and failed check valves on discharge lines.' },
      { q: 'Do you offer emergency commercial drain clearing on weekends?', a: 'Yes. Our commercial emergency crews operate 24 hours a day, 7 days a week, 365 days a year across Leesburg.' }
    ]
  },
  {
    id: '20',
    slug: 'main-line-clearing',
    name: 'Main Line Clearing',
    shortDesc: 'Heavy-duty mechanical augering and high-pressure hydro-jetting to clear stubborn sewer blockages and restore full gravity flow.',
    priority: false,
    category: 'drainage',
    subServices: [
      'High-Torque Sectional Mechanical Augering',
      'High-Pressure Hydro-Jetting (4000 PSI)',
      'Root Cutter & Chain Flail De-scaling',
      'Post-Clearing Video Camera Verification'
    ],
    problems: [
      'Complete home drainage standstill with waste backing into tubs',
      'Recurrent root blockages every few months',
      'Heavy mineral scale and grease constriction in sewer mains'
    ],
    symptoms: [
      'Water rising out of toilet bases when flushing',
      'Bubbling sounds in sinks when adjacent fixtures drain',
      'Standing waste in exterior sewer cleanout riser'
    ],
    process: [
      { step: '01', title: 'Exterior Cleanout Access', desc: 'Access the main line through exterior cleanouts to protect indoor flooring from contamination.' },
      { step: '02', title: 'Mechanical Snaking / Jetting', desc: 'Deploy carbide root cutters or 4,000 PSI hydro-jetting nozzles to scour the pipe walls clean.' },
      { step: '03', title: 'Full Length Flush', desc: 'Flush entire line to the city sewer main or septic inlet baffle.' },
      { step: '04', title: 'Camera Inspection', desc: 'Run sewer camera through the cleared line to ensure all roots and scale are 100% removed.' }
    ],
    benefits: [
      'Completely clears pipe diameter, not just poking a small hole',
      'Removes years of mineral scale, grease, and invasive tree roots',
      'Provides peace of mind with verifiable post-clearing camera footage'
    ],
    homeownerTips: [
      'Have your main sewer line camera-inspected whenever buying an older home in Leesburg.',
      'Install an exterior cleanout if your home only has roof vent or toilet access to reduce future maintenance costs.'
    ],
    faqs: [
      { q: 'What is the difference between snaking and hydro-jetting?', a: 'Snaking punches a hole through a clog to restore temporary flow, while hydro-jetting scours the entire inside circumference of the pipe with high-pressure water, removing grease, scale, and root mats completely.' },
      { q: 'Can hydro-jetting damage older pipes?', a: 'We perform a camera inspection before jetting to verify the pipe structural condition and calibrate water pressure safely for cast iron, clay, or PVC.' }
    ]
  },
  {
    id: '21',
    slug: 'water-leak-detection',
    name: 'Water Leak Detection',
    shortDesc: 'Comprehensive residential and commercial water leak inspections combining acoustic, thermal, and electronic pressure testing.',
    priority: false,
    category: 'residential',
    subServices: [
      'Whole-Structure Acoustic Leak Audits',
      'Calibrated Line Pressure Decay Testing',
      'Thermal Imaging Moisture Surveys',
      'Fixture & Supply Line Non-Invasive Mapping'
    ],
    problems: [
      'Unexplained moisture damage along baseboards and drywall',
      'Rising water bills without increased water consumption',
      'Damp odors and deteriorating paint or floor finishes'
    ],
    symptoms: [
      'Water meter spinning when all valves are off',
      'Drop in household water pressure at faucets',
      'Warm or hot spots on concrete slab floors'
    ],
    process: [
      { step: '01', title: 'Pressure Testing', desc: 'Test hot and cold supply lines independently to identify the compromised system.' },
      { step: '02', title: 'Acoustic Scanning', desc: 'Listen along pipe runs with high-gain electronic acoustic equipment.' },
      { step: '03', title: 'Thermal Imaging', desc: 'Scan walls, floors, and ceilings to trace water dispersion patterns.' },
      { step: '04', title: 'Pinpoint Location', desc: 'Provide precise coordinates for surgical repair with minimum property disturbance.' }
    ],
    benefits: [
      'Fast, accurate detection stops damage before structural deterioration occurs',
      'Minimizes repair costs by eliminating exploratory demolition',
      'Delivers certified reports for homeowner insurance documentation'
    ],
    homeownerTips: [
      'Check all supply hoses to toilets, washing machines, and ice makers every 6 months for bulging or corrosion.',
      'Know the location of your main water shutoff valve and make sure family members know how to operate it in an emergency.'
    ],
    faqs: [
      { q: 'How accurate is electronic water leak detection?', a: 'Our acoustic and thermal systems pinpoint leaks within a 6 to 12-inch radius, eliminating exploratory demolition.' },
      { q: 'What should I do while waiting for your technician to arrive?', a: 'Turn off your main water shutoff valve to stop active water flow, move valuables away from damp areas, and take photos for insurance.' }
    ]
  },
  {
    id: '22',
    slug: 'sewer-line-epoxy-lining-under-slab',
    name: 'Sewer Line Epoxy Lining Under Slab',
    shortDesc: 'Trenchless CIPP epoxy pipe lining to rehabilitate broken, deteriorated, or root-infested cast iron sewer lines under concrete slabs.',
    priority: true,
    category: 'drainage',
    subServices: [
      'Trenchless Cured-In-Place Pipe (CIPP) Lining',
      'Cast Iron De-Scaling & High-Speed Chain Milling',
      'Epoxy Structural Liner Inversion',
      'Pre- & Post-Lining High-Def Video Verification'
    ],
    problems: [
      'Aging, corroded cast iron sewer pipes under concrete slabs',
      'Recurring sewer backups and foul odors under flooring',
      'Extensive cost and destruction of jackhammering finished interior floors'
    ],
    symptoms: [
      'Sewer camera showing channeled, cracked, or missing pipe bottom',
      'Frequent toilet backups requiring weekly snaking',
      'Sewer flies emerging around bathroom fixtures'
    ],
    process: [
      { step: '01', title: 'Mechanical Milling & Descaling', desc: 'Specialized chain flails scour all rust scale and mineral deposits down to smooth pipe interior.' },
      { step: '02', title: 'High-Definition Video Profiling', desc: 'Camera inspects the descaled pipe and measures exact liner length and branch connections.' },
      { step: '03', title: 'Liner Inversion & Steam/Ambient Cure', desc: 'Epoxy-saturated felt liner is inverted through the pipe from an outside cleanout and cured in place.' },
      { step: '04', title: 'Robotic Branch Reinstatement', desc: 'Internal robotic cutters reopen any incoming fixture branch lines, creating a seamless 50-year pipe.' }
    ],
    benefits: [
      'Zero jackhammering of interior floors, tile, or hardwood',
      'Creates a jointless, root-proof structural pipe with a 50+ year design life',
      'Saves tens of thousands of dollars compared to traditional slab excavation'
    ],
    homeownerTips: [
      'Never pour harsh chemical drain cleaners into older cast iron pipes; acid accelerates bottom-channel corrosion.',
      'If your Leesburg home was built before 1980, schedule a cast iron sewer camera survey before remodeling bathrooms.'
    ],
    faqs: [
      { q: 'How does trenchless sewer pipe lining work under a slab?', a: 'We access the sewer line from an outside cleanout. An epoxy-saturated flexible tube is inserted inside the damaged pipe, inflated, and cured into a rock-hard, seamless structural pipe within the old host pipe.' },
      { q: 'How long does epoxy sewer pipe lining last?', a: 'CIPP epoxy structural liners have an engineered design life of over 50 years, resisting root intrusion, rust, and chemical corrosion.' },
      { q: 'Do I have to move out of my house during the lining process?', a: 'In most cases, no! The entire lining installation is completed within 1 to 2 days from outside access points without tearing up interior flooring.' }
    ]
  }
];

export const TOP_10_PRIORITY_SERVICES: ServiceItem[] = ALL_SERVICES.filter(s => s.priority);
