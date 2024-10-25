import datadrive from "../assets/DataDrive-hero.png";
import datadriveimg from "../assets/landing-img.png";
import valhome from "../assets/IMG6-8.png";
import valhero from "../assets/IMG9-8.png";
import valchallenge from "../assets/IMG10-8.png";
import vala from "../assets/IMG11a-8.png";
import valb from "../assets/IMG11b-8.png";
import valc from "../assets/IMG11c-8.png";
import valwhy from "../assets/IMG12-8.png";
import sighthome from "../assets/IMG7-8.png";
import sighthero from "../assets/IMG13-8.png";
import sightchallenge from "../assets/IMG14-8.png";
import sighta from "../assets/IMG15-8.png";
import sightb from "../assets/IMG15b-8.png";
import sightwhy from "../assets/IMG16-8.png";
import nudgehome from "../assets/IMG8-8.png";
import nudgehero from "../assets/IMG17-8.png";
import nudgechal from "../assets/IMG18_1-8.png";
import nudgea from "../assets/19B.png";
import nudgeb from "../assets/IMG19-8.png";
import nudgec from "../assets/19C-8.png";
import nudged from "../assets/19D-8.png";
import nudgewhy from "../assets/IMG20-8.png";
import ankit from "../assets/Ankit.jpg";
import raswinder from "../assets/Raswinder.jpg";

export const products = [
  // DATA VALIDATOR
  {
    name: "Data Validator",
    id: "one",
    checked: "checked",
    headerLand: "Data Validator",
    tagLand:
      "Accurate, Complete and Timely (ACT) People Data, All the Time. \nAlways-ready, reliable people data for reporting, compliance and analysis with our intelligent validation tool. No need to spend hours in polishing the raw material you rely on for actioninig.",
    heroImg: valhero,
    tagHome: "Accurate, Complete and Timely (ACT) People Data, All the Time.",
    imgHome: valhome,
    challengeStatement: "The Challenge of Managing People Data",
    challengeDesc:
      "People data is fragmented and becoming exponentially dynamic. Organizations are investing inordinate efforts in prepping data but old-school data management is slow and error-prone, leaving them stuck with messy, unreliable data that is far from ready for action. Poor-quality data leads to erroneous insights and conclusions, which impacts leadership decisions and their trust in data.",
    challengeImg: valchallenge,
    header2:
      "Meet Data Validator - Your Solution for Clean, Validated People Data",
    tag2: "Data Validator is your go-to platform for clean, actionable people data. It pulls in data and runs it through smart, pre-built rulesets to instantly flag errors. You can fix issues on the spot, add exceptions, and even create new rules, ensuring your data is always accurate and ready to roll.",
    productFeatures: [
      {
        name: "Automated Data Ingestion",
        toggle: true,
        desc: "Collects data from your HR system seamlessly",
        demoLink: "https://sakshamsehgal.com",
        img: vala,
      },
      {
        name: "Error Identification & Correction:",
        toggle: false,
        desc: "Highlights errors and guides you through the correction process.",
        demoLink: "",
        img: valb,
      },
      {
        name: "Downloadable Clean Data for Action",
        toggle: true,
        desc: "After validation, download the updated, error-free data for further reporting, analysis, visualization.",
        demoLink: "",
        img: valc,
      },
    ],

    headerHow: "How Data Validator Works",
    stepsHow: [
      "Data Scraping - Data Validator scrapes people data from your HR system",
      "Initial Validation - Runs data through pre-defined rulesets to identify errors.",
      "Correction & Learning - Prompts you to correct errors, add exceptions, and create new rules.",
      "Ongoing Improvement - Each validation cycle updates the rulesets, learning from your input.",
      "Data Export - Download the validated, clean data for use in reporting, analysis, visualization, and analytics.",
    ],
    howImg: datadriveimg,
    benefitsHead: "Why Choose Data Validator?",
    benefits: {
      head: [
        "Actionable Data :",
        "Trust in Data :",
        "Time and Resource Efficiency :",
        "Your Personal Data Guardian :",
      ],
      desc: [
        "Get your hands on Accurate, Complete, Timely (ACT) Data.",
        "Make better organization decisions with reliable, validated data.",
        "Reduce manual, error-prone data cleaning.",
        "Adapt the tool to your organization realities with custom rulesets.",
      ],
    },
    benefitsImg: valwhy,
    demo: "",
    this: "diff",

    headerShort: "Accurate, (ACT) Data, All the Time",
    tagShort:
      "Always-ready people data for reporting, compliance and analysis with our intelligent validation tool",
    features: [
      "Automated Data Ingestion",
      "Pre-Defined Rulesets",
      "Error Identification & Correction",
      "Adaptive Learning System",
    ],
    imgShort: datadriveimg,

    featureVS: ["Automated Data Ingestion", "Pre-Defined Rulesets", "Error Identification & Correction", "Adaptive Learning System"],
    vendorVS: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    toggle: true,
  },

  // DATA SIGHT
  {
    name: "Data Sight",
    id: "two",
    checked: "checked",
    headerLand: "Data Sight",
    tagLand:
      "Transforming Data into Strategic Advantage. Fuel your organization with curated metrics and insightful dashboards to drive intelligent, data-driven decisions",
    heroImg: sighthero,
    tagHome: "Choose from our Metrics Library as per your organization realities. Insightful dashboards that Transform Data into Strategic Advantage.",
    imgHome: sighthome,
    challengeStatement: "The Challenges of Making Data-Driven Decisions",
    challengeDesc:
      "In today's fast-paced business environment, making the right decision is crucial. The sheer volume of data, coupled with the complexity of choosing the right metrics and making sense of them, can lead to missed opportunities and inefficiencies.",
    challengeImg: sightchallenge,
    header2:
      "Data Sight - Transforming Data into Strategic Advantage",
    tag2: "Data Sight combines the power of expertly curated metrics with intuitive dashboards, ensuring that your organization is always one step ahead. Whether you're refining your measurement strategy or crafting compelling data narratives, Data Sight is your partner in turning data into actionable insights.",
    productFeatures: [
      {
        name: "Metrics Library",
        toggle: true,
        desc: "Laying a Strong Foundation for Data-Driven Decisions. Effective reporting and analytics start with the right metrics. Our Metrics Library offers a selection of 250+ leading and lagging metrics across various industries and talent functions. We provide expert guidance to help you identify the most relevant metrics based on your industry, decision-making needs, function, and maturity level.",
        demoLink: "/products/DataSight/Metrics Library",
        img: sighta,
      },
      {
        name: "DashView",
        toggle: false,
        desc: "Once your metrics are defined, we bring them to life through intuitive, narrative-driven dashboards on platforms like Power BI, Tableau, and Qlik. These aren’t your typical dashboards—our solutions are designed to reveal the insights that matter, enabling every member of your organization to take informed, timely actions.",
        demoLink: "/products/DataSight/DashView",
        img: sightb,
      },
    ],

    headerHow: "How Data Sight Works",
    stepsHow: [
      "Assess Needs - We start by understanding your business, industry, and talent challenges.m",
      "Curate Metrics - We curate a tailored set of metrics that align with your strategic goals.",
      "Correction & Learning - Prompts you to correct errors, add exceptions, and create new rules.",
      "Step 4: Implement & Train - We help integrate the dashboards into your workflows and train your team to maximize their impact.",
    ],
    howImg: datadriveimg,
    benefitsHead: "Why Choose Data Sight?",
    benefits: {
      head: [
        "Strategic Alignment :",
        "Enhanced Decision-Making :",
        "User-Friendly Design :",
        "Proactive Response :",
      ],
      desc: [
        "Ensure your metrics and dashboards are perfectly aligned with your business goals.",
        "Empower your leaders with the insights they need to make data-driven decisions.",
        "Enable everyone in your organization to interact with and understand data, regardless of technical skill.",
        "Stay ahead of the curve with dashboards that allow for rapid, intelligent action.",
      ],
    },
    benefitsImg: sightwhy,
    demo: "",
    this: "diff",

    headerShort: "Transforming Data into Strategic Advantage",
    tagShort:
      "Fuel your organization with curated metrics and insightful dashboards to drive intelligent, data-driven decisions",
    features: [
      "Metrics Library: A Foundation for Data-Driven Decisions",
      "DashView: Metrics that Chatter",
    ],
    imgShort: datadriveimg,

    featureVS: ["Strategic Alignment", "Enhanced Decision-Making", "User-Friendly Design", "Proactive Response"],
    vendorVS: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    toggle: false,
  },

  // NUDGE
  {
    name: "Nudge",
    id: "three",
    checked: "checked",
    headerLand: "Nudge",
    tagLand:
      "Stay Ahead with proactive actions. Tired of cluttered dashboard and reactive decisions. Let Nudge keep you ahead of the game by guiding you to take timely actions to address key organization challenges.",
    heroImg: nudgehero,
    tagHome: "Stay Ahead of the Curve with Bold, Data-Led Moves. Take actions when you need to",
    imgHome: nudgehome,
    challengeStatement: "The Problem with Insights and Visualization",
    challengeDesc:
      "Most companies focus on generating metrics and dashboards to garner insights for people decisions. This approach does not necessary work. With limited real estate on dashboards, organizations design them basis what they believe they should monitor, thereby infusing bias in the process. Further, effective dashboard usage relies on the skills of users - can they slice and dice data to unearth insights from self-serving dashboards. Thus, the focus of the entire process shifts from actual problem solving and actioning to insighting. This creates a perception in the minds of leaders that data has limited actionability. ",
    challengeImg: nudgechal,
    header2:
      "Meet Nudge - Your Guide to Make Bold Moves",
    tag2: "Nudge takes a different approach - it maps the journey by clubbing metrics with insights to ascertain what actions to take. Rather than focusing on limited metrics to draw insights, it ingests your entire org data and automatically identifies the metrics you should track. This transforms the 'Real Estate' problem to the 'Real State' solution. You can further customize them and add tripwires as per your operating envrionment and organization realities. No more guessing or waiting for dashboards to update. Nudge alerts the right stakeholders the moment something goes off track, explaining what’s wrong, why it’s happening, and what actions to take. So rather than look for insights in the heap of data, let data guide you to insights actions.",
    productFeatures: [
      {
        name: "Automatic Metric Identification",
        toggle: true,
        desc: "Nudge identifies the key metrics your organization needs to track, removing the guesswork.",
        demoLink: "https://talenode.com",
        img: nudgea,
      },
      {
        name: "Continous Monitoring",
        toggle: false,
        desc: "Nudge continuously monitors these metrics against your predefined thresholds/tripwires.",
        demoLink: "https://talenode.com",
        img: nudgeb,
      },
      {
        name: "Proactive Alerts",
        toggle: true,
        desc: "Receive instant notifications when metrics deviate from the norm, with clear explanations and action steps.",
        demoLink: "",
        img: nudgec,
      },
      {
        name: "Customizable Thresholds",
        toggle: false,
        desc: "Set your own thresholds and metrics, so you’re always in control of what matters most.",
        demoLink: "",
        img: nudged,
      },
    ],

    headerHow: "How Nudge Keeps You Ahead",
    stepsHow: [
      "Data Ingestion - Nudge ingests data from all your HR systems and identifies key metrics.",
      "Continuous Monitoring - Nudge continuously monitors these metrics against your predefined thresholds/tripwires.",
      "Instant Notifications - When a metric goes off track, Nudge sends real-time alerts with detailed explanations and actionable steps to the relevant leader in the organization.",
      "Empowered Action - Leaders act promptly, guided by Nudge’s insights, ensuring timely and proactive decision-making.",
    ],
    howImg: datadriveimg,
    benefitsHead: "Why Nudge is the Future of Talent Actioning?",
    benefits: {
      head: [
        "Proactive Management :",
        "Focus on What Matters :",
        "Enhanced Efficiency :",
        "Customizable and Scalable :",
      ],
      desc: [
        "Stay ahead of issues with real-time alerts that prompt immediate action.",
        "No more chasing dashboards—Nudge brings the important insights directly to you.",
        "Free up your HR team to focus on strategic decisions rather than reactive problem-solving.",
        "Adapt Nudge to your organization’s unique needs with customizable thresholds and metrics.",
      ],
    },
    benefitsImg: nudgewhy,
    demo: "",
    this: "diff",

    headerShort: "Accurate, (ACT) Data, All the Time",
    tagShort:
      "Always-ready people data for reporting, compliance and analysis with our intelligent validation tool",
    features: [
      "Automated Data Ingestion",
      "Pre-Defined Rulesets",
      "Error Identification & Correction",
      "Adaptive Learning System",
    ],
    imgShort: datadriveimg,

    featureVS: ["Automated Data Ingestion", "Pre-Defined Rulesets", "Error Identification & Correction", "Adaptive Learning System"],
    vendorVS: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    toggle: true,
  },
];

export const subProducts = [
  {
    name: "Metrics Library",
    headerLand: "Metrics Library",
    tagLand:
      "Laying a Strong Foundation for Data-Driven Decisions",
    heroImg: datadrive,
    header2:
      "Metrics Library",
    tag2: "Effective reporting and analytics start with the right metrics. Our Metrics Library offers a selection of 250+ leading and lagging metrics across various industries and talent functions. We provide expert guidance to help you identify the most relevant metrics based on your industry, decision-making needs, function, and maturity level.",
    productFeatures: [
      {
        name: "Curated Metrics",
        toggle: true,
        desc: "Access a comprehensive library of 250+ metrics tailored to your industry and organization realities.",
        demoLink: "https://sakshamsehgal.com",
        img: datadriveimg,
      },
      {
        name: "Expert Advisory",
        toggle: false,
        desc: "Receive personalized advice on which metrics to track to drive impactful decisions.",
        demoLink: "",
        img: datadriveimg,
      },
    ],

    demo: "",
    this: "diff",

    headerShort: "Accurate, (ACT) Data, All the Time",
    tagShort:
      "Always-ready people data for reporting, compliance and analysis with our intelligent validation tool",
    features: [
      "Automated Data Ingestion",
      "Pre-Defined Rulesets",
      "Error Identification & Correction",
      "Adaptive Learning System",
    ],
    imgShort: datadriveimg,
  },

  {
    name: "DashView",
    headerLand: "Dash View",
    tagLand:
      "Metrics that Chatter",
    heroImg: datadrive,
    header2:
      "Dash View",
    tag2: "Once your metrics are defined, we bring them to life through intuitive, narrative-driven dashboards on platforms like Power BI, Tableau, and Qlik. These aren’t your typical dashboards—our solutions are designed to reveal the insights that matter, enabling every member of your organization to take informed, timely actions.",
    productFeatures: [
      {
        name: "Intuitive Dashboards",
        toggle: true,
        desc: "Create user-friendly dashboards that everyone in your organization can leverage, regardless of technical skill.",
        demoLink: "https://sakshamsehgal.com",
        img: datadriveimg,
      },
      {
        name: "Compelling Narratives",
        toggle: false,
        desc: "Craft dashboards that not only present data but also tell a story, guiding leaders to take decisive actions.",
        demoLink: "",
        img: datadriveimg,
      },
    ],

    demo: "",
    this: "diff",

    headerShort: "Accurate, (ACT) Data, All the Time",
    tagShort:
      "Always-ready people data for reporting, compliance and analysis with our intelligent validation tool",
    features: [
      "Automated Data Ingestion",
      "Pre-Defined Rulesets",
      "Error Identification & Correction",
      "Adaptive Learning System",
    ],
    imgShort: datadriveimg,
  },
];

export const useCases = [
  {
    name: "Action On Data",
    headerLand: "Building a Valuable, Forward-Thinking Talent Organization.",
    tagLand:
      "Talenode tackles the complexities of people analytics so that you can focus on what truly matters...",
    landImg: datadriveimg,
    header2: "Establish the Problem Clients Face",
    tag2: "Talenode tackles the complexities of people analytics so that you can focus on what truly matters...",
    problems: [
      "problem 1",
      "problem 2",
      "problem 3",
      "problem 4",
      // "problem 5",
    ],
    solution: "Our Recommendation Approach to Solving",
    viewLink: "",
    callAction: "Call to Action",
    demoLink: "",

    problemStatement: "Elaborate on the problem statement",
    helpPoints: ["How we help 1", "How we help 2", "How we help 3"],
    left: true,
  },

  {
    name: "Visualisation",
    headerLand: "Building a Valuable, Forward-Thinking Talent Organization.",
    tagLand:
      "Talenode tackles the complexities of people analytics so that you can focus on what truly matters...",
    landImg: datadriveimg,
    header2: "Establish the Problem Clients Face",
    tag2: "Talenode tackles the complexities of people analytics so that you can focus on what truly matters...",
    problems: [
      "problem 1",
      "problem 2",
      "problem 3",
      "problem 4",
      // "problem 5",
    ],
    solution: "Our Recommendation Approach to Solving",
    viewLink: "",
    callAction: "Call to Action",
    demoLink: "",

    problemStatement: "Elaborate on the problem statement",
    helpPoints: ["How we help 1", "How we help 2", "How we help 3"],
    left: false,
  },

  {
    name: "Data Cleaning",
    headerLand: "Building a Valuable, Forward-Thinking Talent Organization.",
    tagLand:
      "Talenode tackles the complexities of people analytics so that you can focus on what truly matters...",
    landImg: datadriveimg,
    header2: "Establish the Problem Clients Face",
    tag2: "Talenode tackles the complexities of people analytics so that you can focus on what truly matters...",
    problems: [
      "problem 1",
      "problem 2",
      "problem 3",
      "problem 4",
      // "problem 5",
    ],
    solution: "Our Recommendation Approach to Solving",
    viewLink: "",
    callAction: "Call to Action",
    demoLink: "",

    problemStatement: "Elaborate on the problem statement",
    helpPoints: ["How we help 1", "How we help 2", "How we help 3"],
    left: true,
  },
];

export const leaders = [
  {
    name: "Ankit Abrol",
    designation: "Founder",
    comps: "Swiggy, Aon Consulting, Gartner | XLRI Jamshedpur",
    img: ankit,
    desc: "Ankit has always been passionate about using data to design actionable insights that propel businesses forward. His journey through the complexities of data management inspired him to start Talenode, where he is committed to help organizations rethink how to harness talent data.",
  },

  {
    name: "Raswinder Jit Singh",
    designation: "Advisor",
    comps: "Inmobi, Aon Consulting, Snapdeal, Gartner, Deloitte",
    img: raswinder,
    desc: "Raswinder is a seasoned HR expert with a proven track record in driving organizational growth through strategic human capital initiatives. His zeal for creating meaningful connections between talent and business outcomes led him to partner on the journey of building Talenode.",
  },
];

export const blogs = [
  {
    header: "",
    tag: "",
  },
];

export const CaseStudies = [
  {
    SNO: 1,
    img: "",
    heading: "How Talenode Helped a Consumer Tech Unicorn Achieve 16% Wage Bill Saving",
    tag: "A leading Consumer Tech Unicorn aimed to enhance profitability, but...",
    objective: ""

  }
];