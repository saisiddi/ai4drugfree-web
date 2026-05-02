export type EventItem = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  teamSize: string;
  schedule: string;
  venue: string;
  rules: string[];
  structure: string[];
  judging: string[];
  submissions: string[];
  notes: string[];
};

export const events: EventItem[] = [
  {
    id: "poster-presentation",
    title: "Poster Presentation (AI Poster Showcase)",
    tagline: "Visualize AI-driven strategies for a drug-free nation.",
    description:
      "Showcase research-backed concepts that merge AI, public health, and behavioral change through compelling poster narratives.",
    teamSize: "1-3 members",
    schedule: "May 8, 2026 · 10:00 AM - 12:00 PM",
    venue: "S-Vyasa Deemed to be University (School of Engineering and Technology)",
    rules: [
      "Original work only; cite sources clearly.",
      "Poster size limit: A1 digital or print.",
      "AI assistance must be acknowledged.",
    ],
    structure: ["Submission screening", "Live poster walk-through", "Jury Q&A"],
    judging: [
      "Research depth and accuracy",
      "Impact of AI integration",
      "Visual storytelling and clarity",
    ],
    submissions: ["Poster PDF", "Abstract (150-200 words)", "Team member list"],
    notes: ["Bring a 2-minute pitch for the jury walkthrough."],
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot",
    tagline: "Build empathetic AI that supports recovery journeys.",
    description:
      "Design a chatbot prototype that guides users toward help, resources, and hope.",
    teamSize: "1-4 members",
    schedule: "May 8, 2026 · 1:30 PM - 4:30 PM",
    venue: "S-Vyasa Deemed to be University (School of Engineering and Technology)",
    rules: [
      "Chatbot must include escalation paths.",
      "Safety and ethics checks mandatory.",
      "Demo time: 5 minutes.",
    ],
    structure: ["Prototype build", "Live demo", "Jury review"],
    judging: [
      "Empathy of responses",
      "Technical robustness",
      "Ethical safeguards",
    ],
    submissions: ["Prototype link", "Feature summary", "Test script"],
    notes: ["Bring laptops and test data."],
  },
  {
    id: "escape-room",
    title: "Escape Room & Treasure Hunt",
    tagline: "Decode a path to freedom using AI-driven clues.",
    description:
      "Teams solve immersive puzzles powered by AI hints, spotlighting prevention and recovery milestones.",
    teamSize: "3-6 members",
    schedule: "May 8, 2026 · 10:30 AM - 1:00 PM",
    venue: "S-Vyasa Deemed to be University (School of Engineering and Technology)",
    rules: [
      "Teams must stay together for all rounds.",
      "No external devices besides provided tools.",
      "Respect time limits and safety cues.",
    ],
    structure: ["Briefing", "Escape rounds", "Final treasure task"],
    judging: ["Completion time", "Puzzle accuracy", "Team synergy"],
    submissions: ["Team roster"],
    notes: ["Comfortable shoes required."],
  },
  {
    id: "prompt-engineering-battle",
    title: "Prompt Engineering Battle",
    tagline: "Prompt your way to bold, ethical AI outputs.",
    description:
      "Compete in real-time prompt challenges focused on awareness messaging and empathetic communication.",
    teamSize: "1-2 members",
    schedule: "May 8, 2026 · 3:00 PM - 4:30 PM",
    venue: "S-Vyasa Deemed to be University (School of Engineering and Technology)",
    rules: [
      "Live rounds with time limits.",
      "Prompts must comply with safety guidelines.",
      "Explain your prompt strategy.",
    ],
    structure: ["Qualifier", "Semi-finals", "Final duel"],
    judging: ["Output quality", "Prompt strategy", "Ethical compliance"],
    submissions: ["Prompt log", "Output samples"],
    notes: ["Bring a laptop with your preferred tools."],
  },
  {
    id: "ai-meme-warfare",
    title: "AI Meme Warfare",
    tagline: "Stay High on Life, Not Drugs",
    description:
      "Create impactful and relatable AI-powered memes that spread awareness about drug-free living through humor and storytelling.",
    teamSize: "1-4 members",
    schedule: "May 11, 2026 · 01:00 PM - 03:00 PM",
    venue: "Seminar Hall, S-VYASA",
    rules: [
      "Memes must align with anti-drug awareness themes.",
      "Use AI tools (ChatGPT, Canva AI, etc.).",
      "No offensive or inappropriate content.",
      "Original content only (no plagiarism).",
    ],
    structure: [
      "AI tools introduction session",
      "Round 1: AI-generated meme creation",
      "Shortlisting of top entries",
      "Round 2: Final meme creation using AI + real images",
    ],
    judging: [
      "Creativity & originality",
      "Effective use of AI tools",
      "Humor and message impact",
      "Relatability to student life",
    ],
    submissions: [
      "Final meme (JPEG/PNG)",
      "AI prompt proof (Round 1)",
      "Original campus-based content (Final Round)",
    ],
    notes: [
      "Report 30 minutes early.",
      "Only one submission per team.",
      "Carry college ID.",
    ],
  },
  {
    id: "debate-battle",
    title: "Debate Battle",
    tagline: "Put AI on the stand to defend or challenge its impact.",
    description:
      "Teams debate AI's responsibility in preventing drug abuse, backed by evidence and narratives.",
    teamSize: "2-4 members",
    schedule: "May 8, 2026 · 4:00 PM - 5:30 PM",
    venue: "S-Vyasa Deemed to be University (School of Engineering and Technology)",
    rules: [
      "Follow timed rebuttal rounds.",
      "Use citations and real cases.",
      "Respectful discourse only.",
    ],
    structure: ["Opening", "Cross-exam", "Closing statements"],
    judging: ["Argument strength", "Evidence use", "Team coordination"],
    submissions: ["Outline", "Evidence list"],
    notes: ["Bring printed notes for judges."],
  },
  {
    id: "ai-music-fusion",
    title: "AI Music Fusion",
    tagline: "Compose a sonic narrative that sparks recovery and hope.",
    description:
      "Create a musical piece using AI tools blended with human performance to inspire a drug-free future.",
    teamSize: "1-4 members",
    schedule: "May 8, 2026 · 12:30 PM - 2:00 PM",
    venue: "S-Vyasa Deemed to be University (School of Engineering and Technology)",
    rules: [
      "Track length: 2-4 minutes.",
      "AI-generated elements must be documented.",
      "Lyrics must promote positive recovery themes.",
    ],
    structure: ["Sound check", "Live performance", "Audience vote"],
    judging: [
      "Originality of composition",
      "Integration of AI tools",
      "Emotional resonance",
    ],
    submissions: ["Audio file", "Toolchain summary", "Lyrics sheet"],
    notes: ["Bring instrument or controller if needed."],
  },
  {
    id: "ai-short-film",
    title: "AI Short Film",
    tagline: "Direct a cinematic short that turns data into empathy.",
    description:
      "Produce a 3-5 minute short film using AI-enhanced workflows to narrate recovery, resilience, and social impact.",
    teamSize: "2-6 members",
    schedule: "May 8, 2026 · 2:15 PM - 4:00 PM",
    venue: "S-Vyasa Deemed to be University (School of Engineering and Technology)",
    rules: [
      "Length cap: 5 minutes.",
      "No graphic content; focus on hope.",
      "AI usage must be disclosed.",
    ],
    structure: ["Screening", "Director Q&A", "Jury scoring"],
    judging: [
      "Narrative strength",
      "Production quality",
      "Ethical AI storytelling",
    ],
    submissions: ["Film file", "Synopsis", "Crew list"],
    notes: ["Subtitles encouraged for accessibility."],
  },
  {
    id: "ai-hackathon",
    title: "AI Hackathon",
    tagline: "Prototype the future of recovery in a rapid sprint.",
    description:
      "Build AI solutions that prevent abuse, support recovery, and empower communities.",
    teamSize: "3-6 members",
    schedule: "May 8, 2026 · 9:00 AM - 6:00 PM",
    venue: "S-Vyasa Deemed to be University (School of Engineering and Technology)",
    rules: [
      "Working prototype required.",
      "Focus on impact and feasibility.",
      "Pitch deck limited to 6 slides.",
    ],
    structure: ["Kickoff", "Build sprint", "Demo day pitch"],
    judging: ["Impact potential", "Technical execution", "Scalability"],
    submissions: ["Prototype link", "Pitch deck", "Team roster"],
    notes: ["Snacks and power strips provided."],
  },
];

const normalizeSlug = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const getEventBySlug = (slug: string) => {
  const normalized = normalizeSlug(decodeURIComponent(slug));
  return events.find(
    (event) =>
      event.id === slug ||
      event.id === normalized ||
      normalizeSlug(event.title) === normalized,
  );
};
