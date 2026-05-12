export interface FAQ {
  q: string
  a: string
}

export const faqs: FAQ[] = [
  {
    q: 'How long does a typical project take from brief to production?',
    a: "Most production builds run 6–12 weeks from kickoff to live deploy. Smaller prototypes (a working RAG widget, a LINE OA agent) can ship in 2–3 weeks. We'll quote you a fixed timeline within 48 hours of our first call — no fishing expeditions.",
  },
  {
    q: 'Do you do one-off projects or ongoing retainers?',
    a: "Both. Most projects start as a fixed-scope build, then transition into a monthly retainer for ops, tuning, and new features. Some clients just want us to ship and hand off — that's fine too. We don't lock you in.",
  },
  {
    q: 'Can you work alongside our existing engineering team?',
    a: "Yes — half of what we ship lives inside larger codebases. We integrate into your Git, your CI, your standup. We're senior enough to drop in without ramp-up, and small enough to stay out of the way.",
  },
  {
    q: "What's the typical budget for a Nexable project?",
    a: 'Prototypes start around $10k. Production builds run $30k–$80k. Multi-phase platforms (3x3 league, custom RAG infra) sit at $80k+. We share a fixed estimate with the architecture doc — no surprises on invoice day.',
  },
  {
    q: 'Where are you based and what time zones do you work?',
    a: 'Bangkok-based (GMT+7), with most clients in APAC and EU. We run async by default but join your standups when it matters. For US clients, expect 4–6 overlap hours a day.',
  },
  {
    q: 'Do you sign NDAs and data-handling agreements?',
    a: "Always. Send us yours, or use our standard mutual NDA. For projects touching PII, payment data, or health records — we'll walk you through our data-handling SOPs before we touch a line of code.",
  },
]
