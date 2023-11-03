import {
  industryimg1,
  industryimg2,
  industryimg3,
  industryimg4,
  productImg1,productImg2,productImg3,productImg4,productImg5,productImg6,productImg7,
  ind1,ind2,ind3, ind4, ind5, ind6, ind7, ind8, ind9,sol1,sol2,sol3,sol4,sol5,sol6,sol7,sol8,sol9, new1 , new2, blank, sol10, productImg10, productImg11, productImg12, productImg8, productImg9
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
    title: "FUEL CELL",
    image: productImg4,
    desc: "Fuel cells are the top choice for defence, outperforming IC engines. With high efficiency, enduring power, compact size, light portability, quiet operation, durability, wide range, and eco-friendliness, they excel in various applications.",
    path: "/products/fuel-cell"
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
    image: productImg8,
    desc: "J. Schneider's DC uninterruptible power supplies guarantee safe process continuity during voltage interruptions or fluctuations, complemented by chargers for ultracapacitors and batteries, plus essential accessories.",
    path: "/products/ac-and-dc"
  },
  {
    title: "FLYWHEEL",
    image: productImg9,
    desc: "A flywheel, a mechanical component, stores energy through its spinning motion. When torque is applied, it accelerates, accumulating more rotational energy and becoming a kinetic energy reservoir.",
    path: "/products/flywheel"
  },
  {
    title: "LOAD CHECKER",
    image: productImg10,
    desc: "Load Checker automatically cuts off power if excessive current is detected and seamlessly restores power when the load is disconnected for a brief period, with no manual intervention needed. Its soft-blocking technology ensures longevity.",
    path: "/products/load-checker"
    
  },
  {
    title: "SOLAR DESIGN & SERVICES",
    image: productImg11,
    desc: "Aartech Solonics passionately harnesses solar power for sustainable energy, committing to engineering excellence. They offer tailored solar solutions, from design to installation and maintenance, catering to residential and industrial clients.",
    path: "/products/solar-design-and-services"
  },
  {
    title: "SOLID WASTE TREATMENT",
    image: productImg12,
    desc: "WTC rapidly converts organic waste to odourless compost using natural processes and microorganisms for large-scale decomposition. The incinerator meets emission standards, reducing waste to ash at 800-1,200°C while producing energy, leaving no residues.",
    path: "/products/solid-waste-treatment"
  },
];

const solution = [
  {
    title: "POWER BACKUP UNIT",
    image: blank,
    desc: "A Power Backup Unit is a device that provides temporary electrical power during outages or fluctuations, ensuring uninterrupted operation of critical equipment and appliances in homes, offices, or other settings.",
    path: "/solutions/power-backup-unit"
  },
  {
    title: "SOLAR DESIGN & ENGINEERING",
    image: sol2,
    desc: "Aartech Solonics delivers innovative solar design, engineering, and consultancy services dedicated to crafting tailored, sustainable solutions for industries and individuals, fostering a greener future with expertise and commitment.",
    path: "/solutions/solar-design-engineering"
  },
  {
    title: "UNINTERRUPTED POWER SUPPLY",
    image: blank,
    desc: "UPS, or Uninterruptible Power Supply, is essential for safeguarding sensitive electrical loads, offering superior power quality, reduced Total Cost of Ownership, and full facility protection for critical installations.",
    path: "/solutions/uninterrupted-power-supply"
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
    path: "/solutions/customised-plastic-case"
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
  {
    title: "ENERGY STORAGE",
    image: blank,
    desc: "Energy storage tech harnesses solar, wind, and hydropower via micro sources like PV panels and turbines. It fuels portable devices and aids various sectors, such as Marine, Defense, Space, Telecom, and Real Estate, boosting efficiency.",
    path: "/solutions/energy-storage"
  },
  {
    title: "LOAD LIMITING",
    image: sol10,
    desc: "Load limiting, a crucial strategy for equitable energy distribution, addresses supply challenges by controlling electricity usage. It promotes fairness and reduces losses for utilities in high-demand regions.",
    path: "/solutions/load-limiting"
  },
];

export { industry, product, solution };
