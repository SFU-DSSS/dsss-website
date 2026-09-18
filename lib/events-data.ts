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
    pricing?: string
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
    id: "sassa-wow-2026",
    title: "SASSA WoW Event",
    description: "Join SASSA for an evening event from 4:30pm to 7:30pm.",
    date: "Thursday, September 24, 2026",
    time: "4:30pm - 7:30pm",
    location: "SFU Burnaby Campus",
    status: "registration-open",
    category: "Social",
    registrationLink: "NA",
  },
  {
    id: "globalytics-2026",
    title: "Globalytics 2026 (AIESEC x DSSS)",
    tagline: "Solve global challenges with data",
    description:
      "Globalytics 2026 brings Business, Data Science, and Computer Science students together for a team-based analytics competition.",
    longDescription:
      "AIESEC and DSSS are bringing students together for Globalytics 2026. Register through the event form, complete RSVP Round 1 and RSVP Round 2, then compete in teams of four through a cohort-based challenge judged by professionals and senior students.",
    date: "Sunday, October 25, 2026",
    time: "10:00am - 7:30pm",
    location: "Ballroom, TASC 9204",
    capacity: "100 participants",
    status: "registration-open",
    category: "Hackathon",
    registrationLink: "NA",
    details: {
      eligibility: "Open to Business, Data Science, and Computer Science students.",
      teamSize: "Teams of 4. The event will accommodate up to 25 teams.",
      pricing: "Early bird: $10 per person. Regular: $15 per person. Four-person group: $35 early bird or $55 regular.",
      prizes: "The top 5 teams will be recognized, alongside the professional judges.",
    },
    highlights: [
      "Registration Form followed by RSVP Round 1 and RSVP Round 2",
      "25 teams organized into 5 cohorts",
      "Each cohort is supported by 1 professional judge and 1 senior student",
      "Target capacity of 100 participants",
      "Top 5 teams and the professional judges recognized at the event",
    ],
    schedule: [
      { time: "9:30 AM - 10:00 AM", title: "Setup & Venue Preparation", description: "Setup and venue preparation" },
      { time: "10:00 AM - 10:30 AM", title: "Check-in & Registration Begins", description: "Participant check-in and registration" },
      { time: "10:30 AM - 11:00 AM", title: "Opening Ceremony & Event Briefing & OGX Presentation", description: "Opening ceremony, event briefing, and OGX presentation" },
      { time: "11:00 AM - 12:00 PM", title: "Round 1 Presentations", description: "Round 1 team presentations" },
      { time: "12:00 PM - 1:00 PM", title: "Round 2 Presentations", description: "Round 2 team presentations" },
      { time: "1:00 PM - 2:30 PM", title: "Lunch Break", description: "Lunch break while judges deliberate in a separate room; blank time for participants" },
      { time: "2:30 PM - 3:15 PM", title: "Hacking Session", description: "Finalists prepare for their final presentations" },
      { time: "3:15 PM - 4:30 PM", title: "Finalist Presentations", description: "Finalists present their projects" },
      { time: "5:30 PM - 6:30 PM", title: "Judge Deliberation Period + Snacks", description: "Judges deliberate while participants enjoy snacks" },
      { time: "6:30 PM - 7:00 PM", title: "Winner Announcement & Closing Ceremony", description: "Winners are announced and the event concludes" },
      { time: "7:00 PM - 7:30 PM", title: "Clean-up", description: "Venue clean-up" },
    ],
  },
  {
    id: "datajam-2026",
    title: "DataJam 2026",
    tagline: "Build Practical Data Science Solutions",
    description:
      "DataJam 2026 brings students together for a weekend of data science, machine learning, and rapid prototyping.",
    longDescription:
      "Join us for a hands-on hackathon where teams build data-driven solutions to real-world problems. Whether you are looking to sharpen your modeling skills, explore new tools, or collaborate with other students, DataJam 2026 will combine mentorship, teamwork, and friendly competition across a full day of development.",
    date: "Sunday, November 8, 2026",
    time: "10:00am - 7:30pm",
    location: "SFU Burnaby Campus: SUB Ballroom",
    capacity: "100 participants",
    status: "registration-open",
    category: "Hackathon",
    registrationLink: "NA",
    details: {
      eligibility: "Open to all SFU students. All experience levels are welcome.",
      teamSize: "Teams of 1-4 people. You can register individually and form teams on site.",
      prizes: "Prizes will be announced closer to the event.",
      food: "Meals and refreshments will be provided throughout the day.",
    },
    schedule: [
      { time: "10:00 AM - 10:30 AM", title: "Check-in & Registration Begins", description: "Participant check-in and registration" },
      { time: "10:30 AM - 11:00 AM", title: "Opening Ceremony", description: "Welcome and event overview" },
      { time: "11:00 AM - 12:30 PM", title: "Round 1 Presentations", description: "Preliminary round of presentations" },
      { time: "12:30 PM - 1:30 PM", title: "Judge Deliberation Period + Finalist Announcement", description: "Judges deliberate and finalists are announced" },
      { time: "1:30 PM - 2:30 PM", title: "Lunch Break", description: "Lunch break and networking" },
      { time: "2:30 PM - 3:00 PM", title: "Hacking Session", description: "Finalists prepare for their final presentations" },
      { time: "3:00 PM - 4:45 PM", title: "Finalist Presentations", description: "Finalists present their projects" },
      { time: "4:45 PM - 5:45 PM", title: "Judge Deliberation Period + Snacks", description: "Judges deliberate while participants enjoy snacks" },
      { time: "5:45 PM - 6:00 PM", title: "Winner Announcement & Closing Ceremony", description: "Winners are announced and the event concludes" },
      { time: "6:00 PM - 6:30 PM", title: "Clean-up", description: "Venue clean-up" },
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
    id: "study-cafe-summer-2026",
    title: "DSSS Study Session",
    description:
      "Pre-finals: recharge, refocus, and study with us — cozy lock‑in vibes, free snacks, and a calm space to get things done.",
    date: "April 7, 2026",
    location: "SFU Burnaby Campus",
    status: "completed",
    category: "Social",
  },
  {
    id: "industry-panel-summer-2026",
    title: "Data Science Career Panel",
    description:
      "Hear from data science professionals about their career journeys, industry insights, and practical advice for students entering the field.",
    date: "June 28, 2026",
    location: "SFU Burnaby Campus",
    status: "completed",
    category: "Panel",
  },
  {
    id: "study-cafe-spring-2026",
    title: "DSSS Study Cafe: 'Tea Test'",
    description:
      "Need a space to study for finals or finish up assignments? Join us for a relaxed, drop-in study session with tea and snacks provided.",
    date: "April 7, 2026",
    location: "SFU Burnaby Campus",
    status: "completed",
    category: "Social",
  },
  {
    id: "boardgame-social-spring-2026",
    title: "Board Game Social",
    description:
      "Come play board games and meet fellow data science enthusiasts in a relaxed setting.",
    date: "April 2, 2026",
    location: "SFU Burnaby Campus",
    status: "completed",
    category: "Social",
  },
  {
    id: "hackml-2026",
    title: "HackML 2026",
    tagline: "Build the Future with Machine Learning",
    description:
      "HackML 2026 was the first machine-learning-focused hackathon at SFU, where teams attempted to construct the best ML-models for each given question.",
    longDescription:
      "An intensive 12-hour hackathon focused on machine learning and artificial intelligence. Whether you're a beginner or an experienced ML practitioner, HackML offers opportunities to learn, collaborate, and innovate. Work in teams of up to 4 people to develop ML-powered applications, receive mentorship from industry professionals, and compete for small prizes.",
    date: "January 31, 2026",
    time: "12 hours",
    location: "SFU Burnaby Campus",
    status: "completed",
    category: "Hackathon",
    highlights: [
      "100+ participants from SFU and UBC",
      "Special Guest Mentor: Efe Erhan",
      "$200 in small prizes awarded",
    ],
    winners: [
      {
        place: "First",
        team: "The Optimizers",
        project: "Fraud",
        description: "Classify a level of a fraud from the given features like amount and type of transaction. Predict whether a transaction is a fraud.",
      },
      {
        place: "First",
        team: "DengGang",
        project: "Deng AI",
        description: "Build a model to predict the number of dengue fever cases reported each week in two cities using environmental and climate-related data.",
      },
      {
        place: "First",
        team: "LE COOKED FAM/WINNER",
        project: "NGS",
        description: "Predict whether recent graduates are underemployed (overqualified for their current position) based on their educational background, demographics, and other characteristics.",
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
    id: "wow-fall-2025",
    title: "Jeopardy Night",
    description:
      "Trivia, pizza, and good vibes — all in one place.",
    date: "September 24, 2025",
    location: "SFU Burnaby Campus",
    status: "completed",
    category: "Social",
  },
  {
    id: "industry-panel-summer-2025",
    title: "Data Science Career Panel",
    description:
      "Hear from data science professionals about their career journeys, industry insights, and practical advice for students entering the field.",
    date: "July 12, 2025",
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
