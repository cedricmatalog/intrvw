import { Question } from '../types/question';

export const questions: Question[] = [
  {
    id: '1',
    question: 'Tell me about yourself.',
    category: 'behavioral',
    type: 'behavioral',
    sampleAnswer: `"I'm a software engineer with 3 years of experience building scalable web applications. Currently, I work at XYZ Company where I lead the frontend development for our customer dashboard, serving over 100k users.

I'm passionate about creating intuitive user experiences and writing clean, maintainable code. Outside of work, I contribute to open-source projects and recently built a CLI tool that helps developers automate their deployment workflows.

I'm excited about this opportunity because I want to work on more challenging technical problems and grow as an engineer in a collaborative environment."`,
    keyPoints: [
      'Keep it under 2 minutes',
      'Focus on professional journey',
      'Highlight relevant experience',
      'End with why you\'re interested in THIS role',
    ],
    whatToAvoid: [
      'Reciting your entire resume',
      'Personal life details',
      'Negative comments about past employers',
      'Being too modest or too arrogant',
    ],
    tips: [
      'Use the Present-Past-Future framework',
      'Practice out loud beforehand',
      'Tailor to the job description',
    ],
  },
  {
    id: '2',
    question: 'What is your biggest weakness?',
    category: 'strengths-weaknesses',
    type: 'behavioral',
    sampleAnswer: `"I tend to be overly detail-oriented, which sometimes slows me down on tasks that don't require perfection. I've learned to recognize when 'good enough' is actually good enough.

For example, when writing documentation, I used to spend hours perfecting every sentence. Now I set a timer for 30 minutes to get the first draft done, then come back later for refinement if needed. This has helped me ship features faster while still maintaining quality where it matters."`,
    keyPoints: [
      'Choose a REAL weakness (they can tell if you\'re lying)',
      'Show self-awareness',
      'Explain what you\'re doing to improve',
      'Demonstrate progress',
    ],
    whatToAvoid: [
      '"I\'m a perfectionist" (cliché)',
      '"I work too hard" (not a weakness)',
      'Critical flaws for the role',
      'No improvement plan',
    ],
    tips: [
      'Pick a minor skill weakness, not character flaw',
      'Frame it as growth opportunity',
      'Show concrete steps you\'re taking',
    ],
  },
  {
    id: '3',
    question: 'Describe a time you faced a conflict with a team member. How did you handle it?',
    category: 'conflict-resolution',
    type: 'situational',
    sampleAnswer: `"During a sprint at my last company, a backend engineer and I disagreed on the API design. They wanted to return all data in one call, but I needed pagination for better UX.

Instead of escalating, I scheduled a quick call to understand their perspective. They were concerned about development time. I proposed we implement basic pagination now and optimize later if needed.

I created a quick prototype showing the user experience difference, and they agreed it was worth it. We compromised on a simpler pagination approach that took less time to build. The feature launched successfully and we maintained a strong working relationship."`,
    keyPoints: [
      'Use STAR method (Situation, Task, Action, Result)',
      'Focus on YOUR actions',
      'Show empathy and active listening',
      'Highlight positive outcome',
    ],
    whatToAvoid: [
      'Blaming the other person',
      'Being defensive',
      'Unresolved conflicts',
      'Personal attacks',
    ],
    followUpQuestions: [
      'What would you do differently?',
      'How did this change your approach to teamwork?',
    ],
  },
  {
    id: '4',
    question: 'Why do you want to work here?',
    category: 'company-specific',
    type: 'culture-fit',
    sampleAnswer: `"I'm really excited about your company's mission to make education accessible. I've been following your product for the past year and I'm impressed by how you've scaled to serve millions of students.

Specifically, I'm drawn to the technical challenges you're solving around real-time collaboration and personalization. Your engineering blog post about building a distributed architecture really resonated with my experience.

I also value your commitment to open source and developer growth. The opportunity to work with talented engineers while contributing to a meaningful mission is exactly what I'm looking for in my next role."`,
    keyPoints: [
      'Research the company beforehand',
      'Mention specific products/projects',
      'Align with company mission',
      'Show genuine enthusiasm',
    ],
    whatToAvoid: [
      'Generic answers that could apply anywhere',
      'Only mentioning salary/benefits',
      'Saying "I need a job"',
      'Bad-mouthing current employer',
    ],
    tips: [
      'Read recent news, blog posts, product updates',
      'Connect your skills to their needs',
      'Mention people you\'d work with if you know',
    ],
  },
  {
    id: '5',
    question: 'Tell me about a project you\'re proud of.',
    category: 'projects',
    type: 'technical',
    sampleAnswer: `"I led the redesign of our analytics dashboard that processes millions of events daily. The old system was slow and users complained about 30-second load times.

I proposed moving to a real-time streaming architecture using Kafka and Redis. I built a proof of concept in two weeks, demonstrated the performance gains, and got buy-in from leadership.

Over three months, I worked with two other engineers to implement the solution. We reduced load times from 30 seconds to under 2 seconds and saw user engagement increase by 40%. The architecture now handles 10x more traffic than the old system.

I'm proud not just of the technical solution, but how I gathered requirements from users, convinced stakeholders, and delivered measurable impact."`,
    keyPoints: [
      'Choose a project with measurable impact',
      'Explain the problem clearly',
      'Highlight YOUR specific contributions',
      'Include quantitative results',
    ],
    whatToAvoid: [
      'Taking credit for team work without acknowledgment',
      'Projects with no business impact',
      'Too technical without context',
      'No clear outcome',
    ],
    tips: [
      'Prepare 2-3 project stories in advance',
      'Have metrics ready (users, speed, revenue)',
      'Show problem-solving process',
    ],
  },
  {
    id: '6',
    question: 'Where do you see yourself in 5 years?',
    category: 'career-goals',
    type: 'behavioral',
    sampleAnswer: `"In 5 years, I see myself as a technical lead or senior engineer who mentors junior developers and drives architectural decisions. I want to deepen my expertise in distributed systems while also improving my leadership skills.

I'm drawn to roles where I can balance hands-on coding with strategic technical planning. I'd love to contribute to open source, speak at conferences, and help build a strong engineering culture.

I see this role as a great step toward that goal because you encourage engineers to take ownership of projects and grow into leadership positions."`,
    keyPoints: [
      'Show ambition but be realistic',
      'Align with company growth path',
      'Balance technical and soft skills',
      'Show commitment (not job-hopping)',
    ],
    whatToAvoid: [
      '"I want your job" (or interviewer\'s boss)',
      'Completely unrelated career path',
      '"I don\'t know"',
      'Goals that don\'t fit the company',
    ],
    tips: [
      'Research typical career paths at the company',
      'Show you\'ve thought about growth',
      'Connect to the opportunity at hand',
    ],
  },
  {
    id: '7',
    question: 'How do you handle failure or mistakes?',
    category: 'problem-solving',
    type: 'behavioral',
    sampleAnswer: `"Last year, I pushed a bug to production that broke the checkout flow for an hour during peak traffic. I immediately rolled back the deployment and posted in our incident channel.

I took ownership, led the postmortem, and identified three issues: insufficient testing, rushed deployment, and no monitoring alerts. I proposed and implemented solutions for each: added end-to-end tests, enforced a deployment checklist, and set up alerting.

I shared the learnings with the entire team so everyone could benefit. This experience taught me the importance of thorough testing and monitoring. Since then, we haven't had a similar incident, and I'm more careful about production deployments."`,
    keyPoints: [
      'Take responsibility (don\'t blame others)',
      'Show what you learned',
      'Explain preventive measures',
      'Demonstrate growth mindset',
    ],
    whatToAvoid: [
      'Claiming you never make mistakes',
      'Blaming others or circumstances',
      'No lesson learned',
      'Minimizing the impact',
    ],
  },
  {
    id: '8',
    question: 'Why are you leaving your current job?',
    category: 'career-goals',
    type: 'behavioral',
    sampleAnswer: `"I've learned a lot at my current company and I'm grateful for the experience. After three years, I'm ready for new challenges and opportunities to grow.

I'm specifically looking for a role where I can work on larger-scale systems and have more impact on architecture decisions. Your company's focus on building distributed systems and the opportunity to work with cutting-edge technology aligns perfectly with my career goals.

I'm not running away from anything—I'm running toward the chance to grow as an engineer and contribute to meaningful projects."`,
    keyPoints: [
      'Stay positive about current employer',
      'Focus on what you\'re moving TOWARD',
      'Connect to new opportunity',
      'Show growth mindset',
    ],
    whatToAvoid: [
      'Complaining about boss/company/colleagues',
      'Salary as only reason',
      'Vague "seeking new challenges"',
      'Burning bridges',
    ],
  },
];