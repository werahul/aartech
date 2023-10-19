import {
  industryimg1,
  industryimg2,
  industryimg3,
  industryimg4,
  productImg1,productImg2,productImg3,productImg4,productImg5,productImg6,productImg7,
  ind1,ind2,ind3, ind4, ind5, ind6, ind7, ind8, ind9,sol1,sol2,sol3,sol4,sol5,sol6,sol7,sol8,sol9, new1 , new2
} from "../assets/industryimages";

const industry = [
  {
    title: "RENEWABLE ENERGY",
    image: ind1,
    desc: "Dive into the future of renewable energy with Aartech Solonics. Leveraging our extensive expertise, global network, and robust infrastructure, we collaborate with clients to tailor comprehensive unitized power management solutions.",
    path: "/industries/renewable-energy"
  },
  {
    title: "POWER T&D",
    image: ind2,
    desc: "Whether you're an expert in distribution, EPC contracting, or system integration, or system integration, our solutions address pressing concerns like deregulation, privatization, power quality, and more, to optimize energy management.",
    path: "/industries/power-transmission-and-distribution"
  },
  {
    title: "HEAVY ENGINEERING",
    image: ind3,
    desc: "We pioneer solutions in industries like petrochemical, mining, textile, and cement. We optimize operations through reactive power compensation, cutting-edge control & automation via CRPS, and fault current limiting for enhanced safety.",
    path: "/industries/heavy-engineering-industries"
  },
  {
    title: "DEFENCE & EXPLORATION",
    image: ind4,
    desc: "Elevate defense capabilities with Aartech Solonics. Empowering space, marine, and remote sensing sectors through cutting-edge solutions. Our solutions offer uninterrupted power supply and advanced control systems that redefine reliability.",
    path: "/industries/defence-and-exploration"
  },
  {
    title: "HEALTHCARE",
    image: ind5,
    desc: "For consulting, EPC, and integration, Aartech Solonics optimizes power quality in health care industry. Our solutions address inter-dependency challenges & enhance plant utilization, revenue, productivity, and overall system improvements.",
    path: "/industries/health-care"
  },
  {
    title: "IT & TELECOM",
    image: ind6,
    desc: "IT & Telecom demand top power quality. We offer advanced solutions to address high TCO associated with conventional UPS. Our facility protection surpasses load-only safeguarding, aligning with criticality and interdependence.",
    path: "/industries/it-and-telecom"
  },
  {
    title: "WASTE MANAGEMENT",
    image: ind7,
    desc: "The waste management sector involves varied tasks: collecting, processing, recycling, and disposal of waste. It's vital for health, environment, & sustainable resource use. Aartech offers innovative solutions & products for this sector.",
    path: "/industries/waste-management"
  },
  {
    title: "NON RENEWABLES",
    image: ind8,
    desc: "We drive non-renewable industries forward. From nuclear & thermal to diesel power, we empower critical sectors. Our expertise lies in fault current limiting, ensuring system stability, distributed automation, & remote telemetry-based solutions.",
    path: "/industries/non-renewable-energy"
   
  },
  {
    title: "TRANSPORTATION",
    image: ind9,
    desc: "We offer innovations for the transport industry in engine starting, load limiting, and pulse power solutions. Our KranKing™ Ultracapacitors stand out for ensuring dependable engine starts and enhancing peripherals performance.",
    path: "/industries/transportation"
  },

];

const product = [
  {
    title: "BTS 2000",
    image: productImg1,
    desc: "BTS 2000 ensures uninterrupted power to critical plant motors. With precision timing and advanced features like fast transfer, phase prediction, and more, BTS 2000 excels in both thermal and nuclear power generation, as well as other sectors.",
    path: "/products/BTS-2000"
  },
  {
    title: "CONTROL RELAY PANEL",
    image: productImg2,
    desc: "Engineered for effortless control of transformers & lines through outdoor switchgear at 11KV & 33KV substations. Complete with main relays, fuses, switches, and more, these panels ensure efficient equipment monitoring.",
    path: "/products/control-relay-panels"
  },
  {
    title: "KRANKING ULTRACAPACITORS",
    image: productImg3,
    desc: "Innovative KranKing® range of Ultracapacitors, specifically designed to transform engine cranking applications. They improve battery performance and extend its lifespan by reducing the burden on lead-acid batteries during engine starting.",
    path: "/products/kranking-ultracapacitors"
  },
  {
    title: "AUXILIARY POWER UNIT",
    image: productImg4,
    desc: "WTC transforms organic waste into compost in just a day, through natural and biological processes. For larger capacities, our specialized microorganisms ensure thorough decomposition. Enjoy a noiseless and odorless experience WTC.",
    path: ""
  },

  {
    title: "CLiP FAULT CURRENT LIMITORS",
    image: productImg5,
    desc: "It has been safeguarding global systems for 25+ years. It offers protection up to 38kV, with high current ratings (5000A) & fault interruption up to 300kA rms symmetrical at 15.5kV. It is electronically sensed &  triggers to limit current.",
    path: "/products/clip-fault-current-limiters"
  },
  {
    title: "BEST CASE",
    image: productImg6,
    desc: "Best case is beyond just an enclosure, it's your product's image. For lab cuts, demos, to crucial meets, we ensure your Best Case Scenario! We offer the right, durable & affordable enclosure that is customised as per your products.",
    path: "/products/best-case"
  },
  {
    title: "AC & DC UPS",
    image: productImg7,
    desc: "The incinerator employs controlled thermal destruction to convert waste into ash, meeting emission standards. Operating at 800°C to 1,200°C, it reduces volume, and generates energy. Our solution ensures complete incineration with no residues.",
  },
  {
    title: "FLYWHEEL",
    image: productImg7,
    desc: "The incinerator employs controlled thermal destruction to convert waste into ash, meeting emission standards. Operating at 800°C to 1,200°C, it reduces volume, and generates energy. Our solution ensures complete incineration with no residues.",
  },
  {
    title: "LOAD CHECKER",
    image: productImg7,
    desc: "The incinerator employs controlled thermal destruction to convert waste into ash, meeting emission standards. Operating at 800°C to 1,200°C, it reduces volume, and generates energy. Our solution ensures complete incineration with no residues.",
  },
  {
    title: "SOLAR DESIGN & SERVICES",
    image: productImg7,
    desc: "Aartech Solonics passionately harnesses solar power for sustainable energy, committing to engineering excellence. They offer tailored solar solutions, from design to installation and maintenance, catering to residential and industrial clients.",
  },
  {
    title: "SOLID WASTE TREATMENT PRODUCT",
    image: productImg7,
    desc: "Aartech Solonics passionately harnesses solar power for sustainable energy, committing to engineering excellence. They offer tailored solar solutions, from design to installation and maintenance, catering to residential and industrial clients.",
  },
];

const solution = [
  {
    title: "POWER BACKUP UNIT",
    image: sol1,
    desc: "We understand the importance of maintaining optimal load levels, and our expertise lies in the creation of load limiters. These solutions offer exceptional reliability and performance, specifically catering to low-rating (< 100W) requirements.",
    path: ""
  },
  {
    title: "PULSE POWER",
    image: sol2,
    desc: "Our FaraDigm® Ultracapacitors excel in pulse power applications. From remote solar power to automotive needs, our solution offers high reliability, long life, and maintenance-free operation. We customize integrated solutions for diverse industries.",
    path: ""
  },
  {
    title: "ENERGY EFFICIENCY",
    image: sol3,
    desc: "We pioneer energy harvesting, harnessing micro sources like Solar, Wind, and Hydro power for portable devices via PV/micro-turbines. Versatile in Marine, Defense, Telecom, and more. FaraDigm™ Ultracapacitors offer tailored solutions.",
    path: ""
  },
  {
    title: "SOLID WASTE TREATMENT",
    image: new1,
    desc: "Solid waste treatment involves responsible collection, treatment, and disposal. Aartech provides solutions like Waste to Compost machines, Plastic Shredders, and General Waste Incinerators, contributing to eco-friendly waste management.",
    path: "/solutions/solid-waste-treatment"
  },
  {
    title: "CONTROL & AUTOMATION",
    image: sol5,
    desc: "From affordable distribution solutions to advanced customizations, we seamlessly blend technology. We craft control solutions by integrating components, adding value through solid-state & microprocessor-based controls for unique needs.",
    path: "/solutions/control-and-automation"
  },
  {
    title: "CUSTOMIZED PLASTIC CASES",
    image: new2,
    desc: "Plastic cases safeguard against dust, impact, and more. Aartech offers a range of innovative & customized solutions to cater to various needs. Ideal for transportation and storage, these cases ensure items remain secure and intact during transit.",
    path: "/solutions/customised-professional-case"
  },
  {
    title: "RELIABLE ENGINE STARTING",
    image: sol7,
    desc: "Our KranKing™ Ultracapacitors are a long-term solution for IC Engine cranking. Alongside batteries, they provide a powerful cranking current during the first moments of ignition, surmounting initial friction and energizing the starter motor.",
    path: "/solutions/reliable-engine-starting"
  },
  {
    title: "FAULT CURRENT LIMITING",
    image: sol8,
    desc: "Aartech, in partnership with M/s G&W Elec. Co. USA, is a trusted integrator of CLiP® Fault Current Limiter solutions. It excels with high continuous current ratings & rapid operation. Its versatility extends to system upgrades, reactor bypass, & more.",
    path: "/solutions/fault-current-limiting"
  },
  {
    title: "PROCESS CONTINUITY",
    image: sol9,
    desc: "We work with consultants, equipment manufacturers, contractors, and end users to address process continuity challenges. For sectors like Thermal Power, Nuclear Power, etc, our BTS 2000 Numerical Fast Bus Transfer Systems offer proven solutions.",
    path: "/solutions/process-continuity"
  },
];

export { industry, product, solution };
