// Event data management
// Add new events here and they'll automatically appear on the events page

export interface Event {
  id: string
  title: string
  tagline?: string
  description: string
  longDescription?: string
  date: string
  time?: string
  location: string
  capacity?: string
  status: "registration-open" | "registration-closed" | "completed"
  category: "Hackathon" | "Workshop" | "Panel" | "Social" | "Other"
  registrationLink?: string
  details?: {
    eligibility?: string
    teamSize?: string
    prizes?: string
    food?: string
  }
  schedule?: Array<{
    time: string
    title: string
    description: string
  }>
  faq?: Array<{
    question: string
    answer: string
  }>
  highlights?: string[]
  winners?: Array<{
    place: string
    team: string
    project: string
    description: string
  }>
}

export const events: Event[] = [
  {
    id: "datajam-2026",
    title: "DataJam 2026",
    tagline: "Build Practical Data Science Solutions",
    description:
      "DataJam 2026 brings students together for a weekend of data science, machine learning, and rapid prototyping.",
    longDescription:
      "Join us for a hands-on hackathon where teams build data-driven solutions to real-world problems. Whether you are looking to sharpen your modeling skills, explore new tools, or collaborate with other students, DataJam 2026 will combine mentorship, teamwork, and friendly competition across a full day of development.",
    date: "October 17, 2026",
    time: "10:00 AM - 10:00 PM",
    location: "SFU Burnaby Campus",
    capacity: "100 participants",
    status: "registration-open",
    category: "Hackathon",
    registrationLink: "/contact",
    details: {
      eligibility: "Open to all SFU students and students from other universities. All experience levels are welcome.",
      teamSize: "Teams of 1-4 people. You can register individually and form teams on site.",
      prizes: "Prizes will be announced closer to the event.",
      food: "Meals and refreshments will be provided throughout the day.",
    },
    schedule: [
      { time: "10:00 AM", title: "Check-In", description: "Arrival, swag pickup, and team setup" },
      { time: "10:30 AM", title: "Opening Remarks", description: "Welcome, rules, and event overview" },
      { time: "11:00 AM", title: "Hacking Begins", description: "Teams start building their projects" },
      { time: "1:00 PM", title: "Lunch", description: "Lunch break and networking" },
      { time: "4:00 PM", title: "Mentor Check-In", description: "Project feedback and support from mentors" },
      { time: "7:00 PM", title: "Dinner", description: "Dinner break and final push" },
      { time: "9:30 PM", title: "Submissions Due", description: "Final project uploads and demo prep" },
      { time: "10:00 PM", title: "Demos and Awards", description: "Team presentations and prize announcements" },
    ],
    faq: [
      {
        question: "Do I need prior hackathon experience?",
        answer: "No. We welcome first-time hackers and will have support available throughout the day.",
      },
      {
        question: "Can I come without a team?",
        answer: "Yes. You can register solo and form a team at the event.",
      },
      {
        question: "What should I bring?",
        answer: "Bring your laptop, charger, and anything else you need to work comfortably.",
      },
      {
        question: "Will food be provided?",
        answer: "Yes. Meals and refreshments will be available during the event.",
      },
    ],
  },
  {
    id: "hackml-2026",
    title: "HackML 2026",
    tagline: "Build the Future with Machine Learning",
    description:
      "HackML 2026 was the first machine-learning-focused hackathon at SFU, where teams attempted to construct the best ML-models for each given question.",
    longDescription:
      "An intensive 12-hour hackathon focused on machine learning and artificial intelligence. Whether you're a beginner or an experienced ML practitioner, HackML offers opportunities to learn, collaborate, and innovate. Work in teams of up to 4 people to develop ML-powered applications, receive mentorship from industry professionals, and compete for small prizes.",
    date: "January 31st, 2026",
    time: "12 hours",
    location: "SFU Burnaby Campus - SUB Ballroom",
    status: "completed",
    category: "Hackathon",
    highlights: [
      "100+ participants from SFU and UBC",
      "___ project submissions",
      "Special Guest Mentor: _____",
      "$200 in small prizes awarded",
    ],
    winners: [
      {
        place: "",
        team: "",
        project: "",
        description: "",
      },
      {
        place: "",
        team: "",
        project: "",
        description: "",
      }
    ],
  },
  {
    id: "DataJam-2025",
    title: "DataJam 2025",
    tagline: "Our Inaugural ML Hackathon",
    description: "The first-ever DataJam hackathon with 80+ participants and 15 amazing project submissions.",
    longDescription:
      "DataJam 2025 was our inaugural machine learning hackathon that brought together over 80 students from SFU and surrounding universities. Participants worked on diverse ML projects ranging from image classification to natural language processing.",
    date: "October 21, 2025",
    time: "12 hours",
    location: "SFU Burnaby Campus",
    status: "completed",
    category: "Hackathon",
    highlights: [
      "100+ participants from SFU and UBC",
      "14 project submissions",
      "4 industry mentors",
      "$400 in prizes awarded",
    ],
    winners: [
      {
        place: "Best Beginner Team",
        team: "Enerlytics",
        project: "ClimaZoneAI",
        description: "Turning Canada's daily weather data into solar, wind, and hydro forecasts, empowering industries and policymakers to plan smarter, cleaner, and more cost-efficient renewable energy.",
      },
      {
        place: "Best Presentation",
        team: "Swing Effect",
        project: "Swing Efficiency Disruption Analysis",
        description: "Our mission is to revolutionize batter development by moving beyond simple outcomes like batting average and quantifying the hidden mechanical battles happening on every swing.",
      },
      {
        place: "Most Effective Solution",
        team: "Data Dingers",
        project: "Data Dingers",
        description: "Analyzes a variety of batting and pitching related factors with machine learning to maximize hard hit rate and minimize whiffs so teams can hit dingers while avoiding strikeouts.",
      },
      {
        place: "Most Creative Solution",
        team: "Mixed Doubles",
        project: "Mixed Doubles Curling Analysis",
        description: "The best strategies on impressing your date with Olympic Data compiled statistics.",
      }
    ],
  },
  {
    id: "industry-panel-spring-2026",
    title: "Data Science Career Panel",
    description:
      "Hear from data science professionals about their career journeys, industry insights, and practical advice for students entering the field.",
    date: "February 2026",
    location: "SFU Burnaby Campus",
    status: "completed",
    category: "Panel",
  },
]

// Helper functions
export function getAllEvents(): Event[] {
  return events
}

export function getEventById(id: string): Event | undefined {
  return events.find((event) => event.id === id)
}

export function getUpcomingEvents(): Event[] {
  return events.filter((event) => event.status !== "completed")
}

export function getPastEvents(): Event[] {
  return events.filter((event) => event.status === "completed")
}
