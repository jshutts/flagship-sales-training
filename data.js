// ─────────────────────────────────────────────────────────────
//  Flagship Front Desk — Sales Training content.
//  Edit text, prices, objections and quiz questions here.
// ─────────────────────────────────────────────────────────────

window.TRAINING = {
  company: {
    name: 'Flagship Front Desk',
    tagline: 'Never miss another job.',
    promise: 'Every call becomes a captured lead.',
    area: 'Erie and Northwest PA (Erie, Millcreek, Harborcreek, Fairview, Edinboro, North East, Meadville). Always say "Erie," never "Waterford."',
    who: 'Erie-area home-service contractors with 1–15 employees (HVAC, plumbing, roofing, electrical, landscaping, cleaning) come first. We also sell to any local business that runs on the phone: auto shops, dental and medical offices, salons and barbers, pet groomers, and other small hustle businesses.',
    buyer:
      'The owner. Busy, often on a job site, wary of tech and of agencies, reads on a phone. Talks in jobs and dollars. Hates being "sold."',
    goal: 'Every call has one goal: book the free missed-call audit. Not to close a plan on the phone.',
  },

  // ── Industries beyond contractors ──────────────────────────
  // Contractors stay the main target. These are the other local businesses
  // that live and die by the phone. Values marked "rough" are ballparks:
  // always ask for THEIR number on the call.
  industries: [
    {
      name: 'Contractors (main target)',
      who: 'HVAC, plumbing, roofing, electrical, landscaping, cleaning. 1–15 employees.',
      pain: 'Owner is on a roof or under a sink. The call rings out and the customer calls the next name on Google.',
      hook: '“When you’re on a job, who picks up your phone?”',
      value: 'HVAC repair averages about $350; roof repair about $1,158 (Angi/HomeAdvisor). Full installs and roofs run into the thousands.',
      fit: 'Front Desk for busy shops with emergency calls. Lead Catcher for smaller crews.',
      watch: 'Emergencies matter most. Lead with “emergencies still ring your cell.”',
    },
    {
      name: 'Auto repair shops',
      who: 'Independent repair, tire, brake and muffler shops, detailers, towing.',
      pain: 'The service writer is at the counter with a customer, the techs are under cars, and the phone keeps ringing. Callers wanting a quote just call the next shop.',
      hook: '“When your service writer is with a customer at the counter, what happens to the next call?”',
      value: 'In a 2025 PartsTech survey of 752 shops, the most common average repair order was $500–$749, with $250–$499 close behind. One industry report says a typical shop gets 800+ calls a month and answers about 89% (vendor report, use carefully).',
      fit: 'Front Desk if they get lots of “how much for brakes?” and “is my car ready?” calls. The AI books drop-offs and takes status messages.',
      watch: 'Never quote repair prices for them. The AI collects the vehicle, the problem and a callback, then the shop quotes.',
    },
    {
      name: 'Dental and medical offices',
      who: 'Dentists, orthodontists, chiropractors, physical therapy, small clinics.',
      pain: 'The front desk is checking patients in and out. New-patient calls go to voicemail at lunch, after 5 and on busy mornings.',
      hook: '“When your front desk is checking someone out, who answers the new-patient call?”',
      value: 'Dental Economics puts a new patient’s first-year value at about $850–$1,300 and lifetime value at $8,000+. The ADA’s average yearly spend works out to at least $4,500 over 7–10 years. PatientNews (from ~2 million scored calls) says the average practice misses about 20% of new-patient calls.',
      fit: 'Lead Catcher (text-back plus review requests) is a natural first step. The AI receptionist only after the privacy setup below is confirmed.',
      watch: 'HIPAA. Patient health info needs special handling. Do NOT say we’re “HIPAA compliant.” GoHighLevel has a HIPAA add-on with a signed agreement, but Jon must confirm it’s set up before we sign any medical or dental office. Say: “We’ll walk through how patient info is handled before anything goes live.”',
    },
    {
      name: 'Salons, barbers and spas',
      who: 'Hair salons, barbershops, nail salons, lash and brow, day spas.',
      pain: 'The stylist has scissors in hand and can’t pick up. Many regulars say they’ve skipped booking because they couldn’t get through.',
      hook: '“When you’re in the middle of a cut and the phone rings, what happens to that call?”',
      value: 'A Zenoti survey of 1,011 US clients found 71% of salon and spa regulars have skipped booking at some point because it was too hard to reach someone or book online (vendor survey). No solid industry average ticket, so ask theirs. A regular every 6 weeks is about 8 visits a year.',
      fit: 'Lead Catcher for most. Text-back is perfect: clients would rather text anyway. Review requests help a lot here.',
      watch: 'Many already use online booking (Vagaro, Square, Booksy). Don’t fight it. We catch the callers who don’t use it, and text them the booking link.',
    },
    {
      name: 'Pet groomers',
      who: 'Shop groomers, mobile groomers, home-based groomers, trainers, boarding.',
      pain: 'Hands are full of a wet dog. Often a one- or two-person business with no front desk at all.',
      hook: '“With a dog on the table, can you even answer the phone?”',
      value: 'Price guides put a standard dog groom at roughly $85 per visit, more for big dogs (Bark 2025 price guide, rough). A regular dog every 6 weeks is about 8 visits, so one new regular is worth roughly $700 a year.',
      fit: 'Lead Catcher. Solo groomers rarely need the full AI receptionist. Text-back and review requests fit perfectly.',
      watch: 'Small budgets. Lead with the cheaper plan and the math on one regular client. Don’t push Front Desk.',
    },
    {
      name: 'Other hustle businesses',
      who: 'Movers, junk removal, photographers, tutors, mobile detailers, pressure washing, handymen.',
      pain: 'The owner is the whole company. Every missed call is a missed sale.',
      hook: '“When you’re on a job, who’s answering for the business?”',
      value: 'Ask: “What’s a typical job worth to you?” Then do the one-job math.',
      fit: 'Usually Lead Catcher.',
      watch: 'Make sure they actually get enough calls. If they get five calls a month, tell them honestly it may not be worth it yet.',
    },
  ],

  // ── Services ───────────────────────────────────────────────
  services: [
    {
      name: 'Missed-call text-back',
      what: 'When the contractor can’t answer, the caller gets a text from the business number within seconds: “Sorry we missed you! How can we help?”',
      why: 'Most callers who hit voicemail don’t leave a message. They call the next contractor. A fast text keeps the conversation with your client.',
      say: '“When you can’t grab the phone, your customer gets a text from your number in a few seconds. They text back, you book the job. They never go call the next guy.”',
      plan: 'Both plans',
    },
    {
      name: '24/7 AI receptionist',
      what: 'Answers calls day and night in a natural voice, says it’s an assistant for the business, and sorts each caller.',
      why: 'Nights, weekends and busy mornings are when jobs get lost. Emergencies still reach the owner right away.',
      say: '“It answers when you can’t. Emergency? It rings your cell. New job? It books it or texts you a summary. Spam? Gone. You only hear about what matters.”',
      plan: 'Front Desk',
    },
    {
      name: 'Call sorting',
      what: 'Emergency → rings the owner’s cell. New job or quote → books it or texts the owner a summary. Existing customer or vendor → takes a message. Spam → dropped.',
      why: 'Owners fear an AI fumbling an emergency. Sorting means real emergencies get a human fast, and junk never interrupts them.',
      say: '“It doesn’t replace you. It decides what’s worth interrupting you for.”',
      plan: 'Front Desk',
    },
    {
      name: 'Google review requests',
      what: 'After a job, the customer gets a simple text asking for a Google review.',
      why: 'Most people check Google reviews before calling a local business. More recent reviews means more calls.',
      say: '“After every job your customer gets a text with a one-tap link to leave a review. Contractors forget to ask. This never forgets.”',
      plan: 'Both plans',
    },
    {
      name: 'Google Business Profile cleanup + monthly posts',
      what: 'We fix hours, services, photos and service area on their Google listing and keep it active with monthly posts.',
      why: 'The Google profile is often the first thing a homeowner sees. Wrong hours or old photos cost calls.',
      say: '“We clean up your Google listing so it’s right, and keep it fresh every month.”',
      plan: 'Both plans',
    },
    {
      name: 'Quote follow-up',
      what: 'Automatic follow-up texts after a quote is sent.',
      why: 'Many quotes die from silence, not price. Contractors rarely have time to chase them.',
      say: '“You send a quote and hear nothing? We follow up for you, politely, so the yes comes to you.”',
      plan: 'Front Desk',
    },
    {
      name: 'Past-customer tune-up texts',
      what: 'Seasonal reminder texts to past customers (furnace tune-ups, AC checks, gutter cleaning, etc.).',
      why: 'Repeat work from customers who already trust you is the cheapest work there is.',
      say: '“Every fall your past customers get a reminder to book a tune-up. That’s work you already earned.”',
      plan: 'Front Desk',
    },
    {
      name: 'Lead pipeline',
      what: 'One place that shows every lead and where it stands.',
      why: 'Nothing slips through the cracks between the truck, the phone and the notepad.',
      say: '“Every lead in one list, so nothing gets lost on a sticky note.”',
      plan: 'Both plans',
    },
    {
      name: 'Monthly “leads we caught” report',
      what: 'A plain-numbers report each month of every call and text we caught.',
      why: 'Proves the value. Owners see exactly what they would have lost.',
      say: '“Every month you see what we caught for you, in plain numbers. No guessing whether it’s working.”',
      plan: 'Front Desk',
    },
    {
      name: 'One-page website (if needed)',
      what: 'A simple, fast website for contractors who don’t have one.',
      why: 'Some homeowners check for a website before calling.',
      say: '“No website? We’ll build you a simple one as part of it.”',
      plan: 'Lead Catcher (if needed)',
    },
    {
      name: 'Managed IT + Automation',
      what: 'For contractors with an office: computers, email, Microsoft 365/Google Workspace, backups, security, custom automations.',
      why: 'Bigger shops with office staff need someone to own the tech.',
      say: '“If you’ve got an office, we can run your computers, email and backups too. That’s quoted to your setup.”',
      plan: 'Managed IT',
    },
  ],

  // ── Pricing ────────────────────────────────────────────────
  plans: [
    {
      name: 'Lead Catcher',
      price: '$397/mo',
      setup: '$497 one-time setup',
      fit: 'Owner-operators and small crews who mostly need missed calls caught and more reviews.',
      includes: [
        'Missed-call text-back',
        'Google review requests',
        'Google Business Profile cleanup + monthly posts',
        'Lead pipeline',
        'One-page website if needed',
      ],
    },
    {
      name: 'Front Desk (most popular)',
      price: '$997/mo',
      setup: '$497 one-time setup',
      fit: 'Busy shops that get a lot of calls, run emergency work, or lose calls nights and weekends.',
      includes: [
        'Everything in Lead Catcher',
        '24/7 AI receptionist with call sorting and booking',
        'Quote follow-up',
        'Past-customer tune-up texts',
        'Monthly "leads we caught" report',
      ],
    },
    {
      name: 'Managed IT + Automation',
      price: 'From $1,500/mo',
      setup: 'Quoted',
      fit: 'Contractors with an office and staff on computers.',
      includes: ['Computers and email', 'Microsoft 365 / Google Workspace', 'Backups and security', 'Custom automations'],
    },
  ],
  terms: [
    '3-month minimum, then month-to-month.',
    'Guarantee: 10 leads in 60 days, or the next month is free.',
    'Setup takes about a week: we grab their info, connect their existing number, test it with them.',
    'They keep their existing phone number.',
    'Not sure which plan? The free audit tells them.',
  ],
  pricingTips: [
    'Don’t lead with price on a cold call. The goal is the audit. If asked, give the range honestly: “Plans start at $397 a month. The audit tells us if it’s even worth it for you.”',
    'Always tie price to one job: “If it catches one furnace repair or one roof leak a month, it’s paid for.”',
    'Never invent discounts. If you think a deal is needed, tell Jon.',
    'Mention the guarantee when price comes up. It takes the risk off them.',
  ],

  // ── Stats ──────────────────────────────────────────────────
  // strength: 'solid' = independent or well-documented research
  //           'vendor' = from a company that sells related products; fine to use with "one study found..."
  //           'claim' = widely repeated, original study not found; use carefully
  stats: [
    {
      stat: '78% of consumers have given up on a business after an unanswered call, and 21% immediately call another business.',
      source: 'CallRail survey of 1,000 U.S. consumers',
      url: 'https://www.callrail.com/blog/missed-calls-cost-businesses-more-than-ever',
      strength: 'vendor',
      say: '“One survey found about 4 out of 5 people have given up on a business when nobody answered. One in five calls the next company right away.”',
    },
    {
      stat: 'Home-service businesses in one study thought they answered 97% of calls. Recordings showed they answered about 66%.',
      source: 'Service Direct study of 94 home-service businesses (2019)',
      url: 'https://contractorincharge.com/blog/missed-call-statistics-for-home-service-companies',
      strength: 'vendor',
      say: '“Most owners think they catch almost every call. When one study actually recorded the calls, about a third went unanswered.” Great for the “I don’t miss calls” objection.',
    },
    {
      stat: 'Call-tracking data puts unanswered calls at home-service businesses at roughly 14–35% (CallRail 2025: 14%; Invoca 2024: 27%; Service Direct: ~34%).',
      source: 'CallRail, Invoca, Service Direct (summarized by Contractor In Charge)',
      url: 'https://contractorincharge.com/blog/missed-call-statistics-for-home-service-companies',
      strength: 'vendor',
      say: '“Depending on the study, somewhere between 1 in 7 and 1 in 3 calls to home-service companies don’t get answered.”',
    },
    {
      stat: 'Up to 85% of callers who can’t reach a business on the first try won’t call back.',
      source: 'Signpost (used on our website). Signpost does not name the original study.',
      url: 'https://www.signpost.com/blog/how-much-business-do-contractors-lose-from-missed-calls/',
      strength: 'claim',
      say: 'Always say “up to” and credit Signpost: “Signpost says up to 85% of people who hit voicemail never call back.” Don’t say “studies prove.”',
    },
    {
      stat: 'Around 80% of callers who reach a business voicemail hang up without leaving a message.',
      source: 'Often credited to Hiya “State of the Call”; original report not confirmed',
      url: 'https://oncallclerk.com/blog/why-callers-dont-leave-voicemail',
      strength: 'claim',
      say: 'Better as a question: “When you call a business and get voicemail, do you leave a message? Most people don’t.”',
    },
    {
      stat: 'Responding to a lead within 5 minutes made it about 21x more likely to be qualified than waiting 30 minutes.',
      source: 'Lead Response Management study, Dr. James Oldroyd (MIT Sloan) with InsideSales.com, 2007',
      url: 'https://callingly.com/blog/state-of-speed-to-lead',
      strength: 'solid',
      say: '“An MIT-backed study found getting back to a lead in 5 minutes instead of 30 made them about 21 times more likely to turn into a real opportunity. Our text goes out in seconds.” (It measured qualifying, not closing.)',
    },
    {
      stat: '83% of consumers use Google to find reviews of local businesses (2025).',
      source: 'BrightLocal Local Consumer Review Survey 2025',
      url: 'https://www.brightlocal.com/research/local-consumer-review-survey-2025/',
      strength: 'solid',
      say: '“Most people check your Google reviews before they call. More recent reviews means more calls.”',
    },
    {
      stat: 'Average HVAC repair is about $350 (typical $130–$2,000). Average roof repair is about $1,158.',
      source: 'HomeAdvisor / Angi cost guides (2025)',
      url: 'https://www.homeadvisor.com/cost/heating-and-cooling/repair-an-hvac-system',
      strength: 'solid',
      say: 'Use their own numbers first: “What’s an average job worth to you?” Use these only as a fallback.',
    },
    {
      stat: 'Text messages are read far more often than email (vendors report open rates from about 82% to 98%).',
      source: 'Various texting vendors (EZ Texting, others). No single original study.',
      url: 'https://www.eztexting.com/report/2024-consumer-texting-report',
      strength: 'claim',
      say: '“People read their texts. Nobody ignores a text the way they ignore voicemail.” Skip the exact percentage.',
    },
    {
      stat: 'Dental: a new patient is worth about $850–$1,300 in the first year, and often $8,000+ over their lifetime. The average practice misses about 20% of new-patient calls.',
      source: 'Dental Economics (value); PatientNews analysis of ~2 million scored calls (missed calls)',
      url: 'https://dentaleconomics.com/practice/article/55385634/the-economics-of-missed-calls-quantifying-revenue-loss-in-dental-practices',
      strength: 'vendor',
      say: '“Industry numbers put a new patient at around a thousand dollars in the first year. And one big call study found offices miss about one in five new-patient calls.”',
    },
    {
      stat: 'Auto repair: in a 2025 survey of 752 shops, the most common average repair order was $500–$749, with $250–$499 a close second.',
      source: 'PartsTech 2025 shop survey',
      url: 'https://partstech.com/?p=6028',
      strength: 'vendor',
      say: '“A lot of shops average a few hundred dollars a repair order, many $500 or more. What’s yours?” Then use their number.',
    },
    {
      stat: 'Salons: 71% of salon and spa regulars have skipped booking at some point because it was too hard to reach someone or book online.',
      source: 'Zenoti 2025 survey of 1,011 US salon and spa clients',
      url: 'https://www.zenoti.com/thecheckin/salon-spa-booking-communication-trends',
      strength: 'vendor',
      say: '“One survey of salon clients found most regulars have skipped booking at least once because they couldn’t get through.”',
    },
  ],
  statRules: [
    'Use the prospect’s own numbers whenever you can. Their numbers beat any study.',
    'Always name the source. “Signpost says…” beats “studies show…”.',
    'Never round up or make a number sound more certain than it is.',
    'One stat per call is plenty. Then ask a question.',
  ],

  // ── Cold-call playbook ─────────────────────────────────────
  callFlow: [
    {
      step: '1. Opener (honest + permission)',
      script:
        '“Hi [Name], this is Ty with Flagship Front Desk here in Erie. I know I’m calling out of the blue. Can I take 30 seconds to tell you why, and you tell me if it’s worth talking?”',
      why: 'Gong’s data from millions of cold calls: owning that it’s a cold call and asking permission performs well. “Did I catch you at a bad time?” performs worst.',
    },
    {
      step: '2. Reason for the call',
      script:
        '“I work with Erie contractors who lose jobs when they’re up on a roof or under a sink and can’t grab the phone. The caller doesn’t leave a voicemail. They call the next name on Google.”',
      why: 'Gong found stating a clear reason for the call roughly doubles success (about 2.1x).',
    },
    {
      step: '3. One good question',
      script: '“When you’re out on a job, who picks up your phone?”',
      why: 'Gets them talking about their real situation. Then stop and listen.',
    },
    {
      step: '4. Dig (pick 1–2)',
      script:
        '“What happens to calls after 5 or on weekends?” · “About how many calls a week do you think go to voicemail?” · “What’s an average job worth to you?”',
      why: 'Their numbers build the case for you. Write them down.',
    },
    {
      step: '5. The ask: the free audit',
      script:
        '“Here’s what I’d suggest. We do a free missed-call audit. We call your business after hours and at a busy time, then show you exactly what callers hear and what it’s likely costing you. No work on your end. Does Tuesday or Thursday work to go over it?”',
      why: 'Small, free, low-risk yes. Offer two specific times, not “when are you free?”',
    },
    {
      step: '6. Lock it in',
      script:
        '“Great. What’s the best number and email for you? And is it OK if I text you a reminder?” (Only text if they say yes.)',
      why: 'Confirm details and get permission before any text.',
    },
  ],
  voicemail:
    '“Hi [Name], Ty with Flagship Front Desk in Erie. Funny thing: I just called you and got voicemail, and that’s exactly what I wanted to talk about. A lot of callers hang up instead of leaving a message. We help Erie contractors catch those calls. My number is [PHONE]. Again, Ty, [PHONE].” Keep it under 30 seconds.',
  gatekeeper: [
    'Be friendly and plain: “Hi, this is Ty with Flagship Front Desk here in Erie. Is [Owner] around?”',
    'If asked what it’s about: “It’s about calls the business might be missing when everyone’s busy. Who usually handles the phones?” The office manager is often your best ally. She knows exactly which calls get missed.',
    'Ask for the best time to reach the owner, then call at that time.',
  ],
  techniques: [
    { name: 'Lead with the audit, not the plan', tip: 'Your product on a cold call is the free audit. It’s easy to say yes to.' },
    { name: 'Pause after an objection', tip: 'Gong found average reps ramble about 21 seconds after an objection. Take a breath, then ask a question before answering.' },
    { name: 'Keep it a conversation', tip: 'In successful cold calls the rep talks a bit more than half the time (Gong: about 55/45). Short statements, then a question.' },
    { name: 'Use their words and numbers', tip: 'Repeat back what they said: “So you’re on roofs all day and your phone’s in the truck.” It shows you listened.' },
    { name: 'Label the feeling', tip: '“Sounds like you’ve been burned by marketing companies before.” Naming it lowers their guard.' },
    { name: 'Two-option close', tip: '“Tuesday morning or Thursday afternoon?” beats “When works for you?”' },
    { name: 'Local beats slick', tip: 'You’re a neighbor, not a call center. Mention Erie. Mention you set it all up.' },
    { name: 'If they don’t answer, that’s your pitch', tip: 'When a contractor doesn’t pick up, you just lived the problem. Say so in the voicemail.' },
    { name: 'Timing (tip, not research)', tip: 'Contractors are often reachable early (7–8 AM) before jobs, or late afternoon. Test and keep notes on what works.' },
    { name: 'Know when to leave', tip: 'A polite exit keeps the door open: “Totally fair. Mind if I check back in the spring?”' },
  ],
  compliance: [
    'Never promise results beyond the guarantee (10 leads in 60 days or next month free).',
    'Never make up testimonials, clients, or numbers.',
    'Don’t cold-text. Only text people who said yes to texts.',
    'If someone asks not to be called again, write it down and don’t call again.',
    'Many contractors use a cell as their business line. Dial by hand, be polite, and respect do-not-call requests.',
    'Pennsylvania requires everyone’s consent to record a call. Don’t record your sales calls unless you tell them first.',
    'Calls the AI receptionist records start with a recording disclosure. Mention it if asked.',
  ],

  // ── Objections ─────────────────────────────────────────────
  objectionMethod: [
    { k: 'Pause', v: 'Breathe. Don’t jump in.' },
    { k: 'Acknowledge', v: 'Show you heard it: “Totally fair.” / “Makes sense.”' },
    { k: 'Ask', v: 'Find the real reason with one question.' },
    { k: 'Answer', v: 'Short, plain, in jobs and dollars.' },
    { k: 'Advance', v: 'Go back to the free audit.' },
  ],
  objections: [
    {
      o: 'I’m not interested.',
      real: 'Usually a reflex, not a decision. They don’t know what it is yet.',
      r: '“Totally fair, you don’t know me. Quick question before I let you go: when you’re on a job and the phone rings, what happens to that call?” If they engage, continue. If not: “No problem. Mind if I check back in a few months?”',
    },
    {
      o: 'I answer all my calls. I don’t miss any.',
      r: '“That’s great, most guys I talk to don’t. One study recorded calls at home-service companies. Owners figured they answered 97%, the recordings showed about two-thirds. That’s exactly why the audit is free: we call you after hours and at a busy time and you see for yourself. If you’re catching everything, I’ll tell you.”',
      real: 'They believe it. Don’t argue. Let the audit prove it.',
    },
    {
      o: 'I already have an answering service.',
      r: '“Good, you already know calls matter. How’s it working? Do they book jobs or just take messages? The audit will test it like a customer would. If it’s catching everything, I’ll tell you to keep it.”',
      real: 'Compare on booking jobs, sorting emergencies, texting back, and the monthly report. Never trash their current service.',
    },
    {
      o: 'My wife / office manager answers the phones.',
      r: '“That’s a huge help. What happens when she’s on another call, at lunch, or after 5? That’s the gap we fill. She’d probably love fewer interruptions from spam, too.”',
      real: 'Position it as backup for her, not a replacement.',
    },
    {
      o: 'That’s too expensive.',
      r: '“I get it, it’s real money. Let me ask: what’s an average job worth to you? … So if it catches one or two of those a month, it’s paid for itself. And we guarantee 10 leads in 60 days or your next month is free. The audit will show if the math works for you.”',
      real: 'Price only feels high without the math. Use their job value.',
    },
    {
      o: 'I don’t want a robot talking to my customers.',
      r: '“Totally get that. Neither do your customers want voicemail. It sounds natural, says it’s an assistant for your business, and if it’s an emergency it rings your cell right away. And on Lead Catcher there’s no AI at all, just a text from your number.”',
      real: 'The fear is sounding cheap or losing an emergency. Address both. Lead Catcher is a no-AI option.',
    },
    {
      o: 'I’m too busy right now.',
      r: '“That’s exactly why I called. Busy is when calls get missed. I’ll be quick: can we do 10 minutes Thursday morning or Friday afternoon to go over the free audit?”',
      real: 'Respect their time. Book a short slot.',
    },
    {
      o: 'Just send me some info.',
      r: '“Happy to. So I send the right thing: is it missed calls after hours, or more reviews on Google that matters more to you? … Honestly the most useful thing I can send is your audit. Want me to set that up?”',
      real: 'Often a polite brush-off. Qualify first, then steer to the audit.',
    },
    {
      o: 'I’ve been burned by marketing companies before.',
      r: '“Sounds like someone sold you a lot of promises. We don’t do ads or SEO packages. We just make sure the calls you already get don’t slip away. And if we don’t catch 10 leads in 60 days, your next month is free.”',
      real: 'Label the feeling. Separate us from agencies. Lean on the guarantee and the local angle.',
    },
    {
      o: 'I have plenty of work. I’m booked out.',
      r: '“Love to hear it. Two things I’d ask: what about slow season? And are the calls you’re missing the big jobs or the small ones? Even booked-out guys use this to pick the better jobs and keep reviews coming in.”',
      real: 'Pivot to slow season, better jobs, reviews and quote follow-up.',
    },
    {
      o: 'I’m not good with tech.',
      r: '“You don’t have to be. We set everything up, connect it to your existing number, and test it with you. If you can read a text, you can run this.”',
      real: 'Reassure: done for you, local, no new number.',
    },
    {
      o: 'I don’t want a long contract.',
      r: '“Fair. It’s three months to start, then month-to-month. Three months is enough time to see real results, and the guarantee covers you in the first 60 days.”',
      real: 'Be straight about the 3-month minimum.',
    },
    {
      o: 'I need to talk to my partner / wife first.',
      r: '“Of course. Want to set the audit review for a time you can both be there? Then you’re both seeing the same numbers.”',
      real: 'Get both decision makers to the audit review.',
    },
    {
      o: 'How do I know it actually works?',
      r: '“Fair question. Two ways: the free audit shows you exactly what your callers hear today, and then the guarantee: 10 leads in 60 days or your next month is free. Plus every month you get a report of every lead we caught.”',
      real: 'Proof = audit + guarantee + monthly report. Don’t invent testimonials.',
    },
    {
      o: 'Do I have to change my phone number?',
      r: '“Nope. You keep the same number. Your customers won’t notice anything except that someone gets back to them.”',
      real: 'Easy one. Say it with confidence.',
    },
    {
      o: 'Is recording calls even legal?',
      r: '“Good question. Pennsylvania requires everyone to know a call is recorded, so every call starts with a short disclosure. That’s built in.”',
      real: 'Shows we take it seriously.',
    },
    {
      o: 'My clients book online. They don’t call.',
      r: '“That’s great, online booking is smart. Some people still call, though: new clients, older regulars, anyone with a question. When one of them gets voicemail, we text them right back with your booking link. You keep your system. We just catch the ones who slip through.”',
      real: 'Common with salons, groomers and dental offices. Never fight their booking software. We work alongside it.',
    },
    {
      o: 'Is this HIPAA compliant? (dental / medical)',
      r: '“Good question, and I won’t guess on that. Patient information has to be handled right. Before anything goes live we walk through exactly how patient info is handled, and Jon sets up the privacy side. Can we start with the free audit so you see what callers hear today?”',
      real: 'Never say “yes, we’re HIPAA compliant.” Flag it for Jon. The audit itself doesn’t touch patient data.',
    },
    {
      o: 'I’m a one-person shop. This is way too much for me.',
      r: '“Makes sense. That’s why there are two plans. Most solo owners start on Lead Catcher: every missed call gets a text from your number, and happy customers get asked for a Google review. If it lands you one regular customer a month, it pays for itself.”',
      real: 'Lead with Lead Catcher and the math on one regular customer. Don’t push Front Desk on a solo business.',
    },
    {
      o: 'My customers are regulars. They know to leave a message.',
      r: '“Your regulars are loyal, no doubt. It’s the new callers I’d worry about. Someone who’s never been to you doesn’t leave a message, they call the next place. The audit shows how many of those you’re getting.”',
      real: 'Separate regulars (loyal) from new callers (shopping around).',
    },
  ],

  // ── Role-play scenarios ────────────────────────────────────
  // Each node: prospect line + choices. Each choice: text, points (0–2), feedback, next node id (or 'end').
  scenarios: [
    {
      id: 'hvac',
      title: 'Dave, HVAC owner (busy, mid-job)',
      setup: 'Dave runs a 4-person HVAC shop in Millcreek. It’s 10:30 AM on a Tuesday in November. He picks up sounding rushed.',
      start: 'a',
      nodes: {
        a: {
          line: '“Yeah, Dave’s Heating, this is Dave.”',
          choices: [
            { t: '“Hi Dave, Ty with Flagship Front Desk in Erie. I know I’m calling out of the blue. Can I take 30 seconds to tell you why, and you tell me if it’s worth talking?”', p: 2, f: 'Honest, permission-based, local. Strong open.', n: 'b' },
            { t: '“Hi Dave! How’s your day going?”', p: 0, f: 'Small talk wastes his time and signals a sales call without a reason.', n: 'b2' },
            { t: '“Hi, is this a bad time?”', p: 0, f: 'Gong’s data shows this is one of the worst openers. It invites “yes.”', n: 'b2' },
          ],
        },
        b2: {
          line: '“Look, I’m on a job. What do you want?”',
          choices: [
            { t: '“Fair enough. I help Erie contractors catch the calls they miss while they’re on jobs, like right now. Who picks up when you can’t?”', p: 2, f: 'Nice recovery: clear reason, tied to his exact situation, ends with a question.', n: 'c' },
            { t: '“We have a great AI receptionist product starting at $997 a month.”', p: 0, f: 'Leading with product and price before any pain. He’ll hang up.', n: 'end_bad' },
          ],
        },
        b: {
          line: '“…Go ahead, quick.”',
          choices: [
            { t: '“I work with Erie contractors who lose jobs when they can’t grab the phone. The caller doesn’t leave a voicemail, they call the next name on Google. When you’re on a job, who picks up your phone?”', p: 2, f: 'Clear reason + one good question. Then listen.', n: 'c' },
            { t: '“We offer missed-call text-back, AI receptionist, Google reviews, quote follow-up, pipeline, monthly reports…”', p: 0, f: 'Feature dump. He’s gone mentally. Lead with his problem.', n: 'c_meh' },
          ],
        },
        c_meh: {
          line: '“Uh huh. I don’t really need all that.”',
          choices: [
            { t: '“Totally fair. Let me ask one thing: when you’re on a job and the phone rings, what happens to that call?”', p: 2, f: 'Good reset back to his situation.', n: 'c' },
            { t: '“Are you sure? It’s really good.”', p: 0, f: 'Pushy, no new reason to listen.', n: 'end_bad' },
          ],
        },
        c: {
          line: '“Me. Or nobody. Goes to voicemail. They leave a message, I call back at night.”',
          choices: [
            { t: '“Got it. Roughly how many calls a week do you think go to voicemail? And do most of them actually leave a message?”', p: 2, f: 'Digging with his numbers. Great.', n: 'd' },
            { t: '“Most people don’t leave voicemails, you’re losing tons of money.”', p: 1, f: 'True-ish, but telling him he’s wrong makes him defensive. Ask instead.', n: 'd' },
          ],
        },
        d: {
          line: '“Maybe 10, 15 a week this time of year when furnaces go. Some leave messages, I dunno how many don’t.”',
          choices: [
            { t: '“That’s exactly what the free audit finds out. We call your line after hours and at a busy time, then show you what callers hear and what it’s likely costing you. No work for you. Thursday morning or Friday afternoon to go over it?”', p: 2, f: 'Perfect: ties to his uncertainty, offers the audit, two specific times.', n: 'e' },
            { t: '“OK, so do you want to sign up for Front Desk?”', p: 0, f: 'Way too early. The goal is the audit.', n: 'end_bad' },
            { t: '“Can I send you some info?”', p: 1, f: 'Soft. Info gets ignored. Go for the audit.', n: 'e_info' },
          ],
        },
        e_info: {
          line: '“Sure, email it I guess.”',
          choices: [
            { t: '“Will do. Honestly the most useful thing is your actual audit. Want me to set it up, and I’ll send the results instead of a brochure?”', p: 2, f: 'Good save: turned a brush-off into the audit.', n: 'e' },
            { t: '“Great, what’s your email?” (end call)', p: 0, f: 'You’ll likely never hear back.', n: 'end_meh' },
          ],
        },
        e: {
          line: '“What’s this cost me?”',
          choices: [
            { t: '“The audit’s free. If it makes sense after, plans start at $397 a month. If it catches one furnace call a month, it’s paid for. We also guarantee 10 leads in 60 days or your next month is free.”', p: 2, f: 'Honest, ties price to one job, mentions the guarantee, keeps the audit as the ask.', n: 'f' },
            { t: '“Don’t worry about price right now.”', p: 0, f: 'Dodging price kills trust.', n: 'f' },
          ],
        },
        f: {
          line: '“Alright. Friday afternoon. After 3.”',
          choices: [
            { t: '“Perfect, Friday at 3:30. What’s the best number and email? And is it OK if I text you a reminder?”', p: 2, f: 'Locked in, confirmed details, asked text permission.', n: 'end_good' },
            { t: '“Great, talk then!” (hang up)', p: 1, f: 'Booked, but no confirmed contact details or reminder permission.', n: 'end_good' },
          ],
        },
      },
    },
    {
      id: 'roofer',
      title: 'Mike, roofer (burned by agencies)',
      setup: 'Mike owns a roofing company in Fairview. He’s paid two marketing agencies before and hated both. He answers in the truck.',
      start: 'a',
      nodes: {
        a: {
          line: '“Mike’s Roofing.”',
          choices: [
            { t: '“Hi Mike, Ty with Flagship Front Desk in Erie. I’m calling out of the blue. Mind if I take 30 seconds to say why?”', p: 2, f: 'Honest and local.', n: 'b' },
            { t: '“Mike! Big opportunity for you today.”', p: 0, f: 'Hype is exactly what burned him before.', n: 'b' },
          ],
        },
        b: {
          line: '“Is this marketing? I’ve been burned twice. Paid thousands for nothing.”',
          choices: [
            { t: '“Sounds like someone sold you a lot of promises. We don’t run ads or SEO. We just make sure the calls you already get don’t slip away. What did those companies promise you?”', p: 2, f: 'Labeled the feeling, separated us from agencies, asked a question.', n: 'c' },
            { t: '“We’re different, trust me.”', p: 0, f: 'Everyone says that. Show, don’t claim.', n: 'c_cold' },
            { t: '“Oh, sorry to hear that. Anyway, our service…”', p: 0, f: 'Brushed past his concern.', n: 'c_cold' },
          ],
        },
        c_cold: {
          line: '“Yeah, they all say that.”',
          choices: [
            { t: '“Fair. So don’t trust me, test me. Free audit: we call your line like a customer would and show you what happens. If you’re catching everything, I’ll tell you.”', p: 2, f: 'Good recovery: proof instead of promises.', n: 'd' },
            { t: '“Well, we really are.”', p: 0, f: 'Repeating the claim doesn’t help.', n: 'end_bad' },
          ],
        },
        c: {
          line: '“More leads. Got me junk leads from three towns away. Never again.”',
          choices: [
            { t: '“That’s the opposite of what we do. These are people already calling you. When you’re up on a roof, what happens to those calls?”', p: 2, f: 'Clear difference, back to his situation.', n: 'd0' },
            { t: '“We guarantee 10 leads in 60 days!”', p: 1, f: 'The guarantee is great, but say it after he sees the difference.', n: 'd0' },
          ],
        },
        d0: {
          line: '“Phone’s in the truck. I call back when I get down. Sometimes they already booked somebody else.”',
          choices: [
            { t: '“That’s the exact gap. What’s a typical repair job worth to you?”', p: 2, f: 'Getting his number.', n: 'd' },
            { t: '“So you’re losing jobs every day.”', p: 1, f: 'Let him say it, don’t say it for him.', n: 'd' },
          ],
        },
        d: {
          line: '“Repairs, maybe a grand. Full roof is 10 grand plus.”',
          choices: [
            { t: '“So one missed repair a month covers it, and one roof covers a year. Free audit first so you see your real numbers. And if we don’t catch 10 leads in 60 days, your next month’s free. Tuesday or Wednesday morning?”', p: 2, f: 'Used his numbers, guarantee, two-option close.', n: 'end_good' },
            { t: '“Great, Front Desk is $997 a month. Want to start?”', p: 0, f: 'Skipped the audit. Too fast for a skeptic.', n: 'end_bad' },
          ],
        },
      },
    },
    {
      id: 'plumber',
      title: 'Linda, office manager at a plumbing company',
      setup: 'You call Northside Plumbing (6 employees). Linda, the office manager, answers. The owner, Rick, is out on a job.',
      start: 'a',
      nodes: {
        a: {
          line: '“Northside Plumbing, this is Linda.”',
          choices: [
            { t: '“Hi Linda, this is Ty with Flagship Front Desk here in Erie. Is Rick around?”', p: 2, f: 'Friendly and plain.', n: 'b' },
            { t: '“I need to speak to the owner, please.”', p: 0, f: 'Cold and transactional. Linda is your ally, not a wall.', n: 'b' },
          ],
        },
        b: {
          line: '“He’s out on a job. What’s this regarding?”',
          choices: [
            { t: '“It’s about calls the business might miss when everyone’s busy. You probably handle most of the phones. What happens when you’re on another line or after 5?”', p: 2, f: 'Brought her in. She knows exactly which calls get missed.', n: 'c' },
            { t: '“It’s a business matter, I’ll call back.”', p: 0, f: 'Missed the chance to learn from the person who runs the phones.', n: 'end_meh' },
          ],
        },
        c: {
          line: '“Honestly? It’s crazy in the mornings. And after 5 it goes to voicemail. We already have an answering service on weekends though.”',
          choices: [
            { t: '“That makes sense. How’s the weekend service working? Do they book jobs or just take messages?”', p: 2, f: 'Curious, not attacking her current setup.', n: 'd' },
            { t: '“Answering services are terrible. We’re way better.”', p: 0, f: 'Never trash their current vendor. She may have picked it.', n: 'd_def' },
          ],
        },
        d_def: {
          line: '“Well, I set that up, and it’s fine.”',
          choices: [
            { t: '“Sorry, that came out wrong. You clearly care about calls getting answered. The audit would just show how weekdays and evenings look too.”', p: 2, f: 'Owned the mistake, recovered.', n: 'd' },
            { t: '“OK, well, think about it.”', p: 0, f: 'Gave up.', n: 'end_bad' },
          ],
        },
        d: {
          line: '“They take messages. Then I call everyone back Monday. Some people are already gone.”',
          choices: [
            { t: '“That’s really common. We do a free missed-call audit: we call after hours and at a busy time and show you and Rick what callers hear. When’s a good time to catch Rick to go over it, maybe with you there too?”', p: 2, f: 'Made her part of it and asked for the best time to reach the owner.', n: 'end_good' },
            { t: '“Can you have Rick call me back?”', p: 1, f: 'He probably won’t. Get a specific time instead.', n: 'end_meh' },
          ],
        },
      },
    },
    {
      id: 'auto',
      who: 'Shop owner',
      title: 'Tony, auto shop owner (counter is slammed)',
      setup: 'Tony owns a 3-bay repair shop in Erie. It’s Monday at 8:15 AM, the busiest hour of the week. He answers at the counter with a customer standing there.',
      start: 'a',
      nodes: {
        a: {
          line: '“Tony’s Auto, hold on— yeah, what can I do for you?”',
          choices: [
            { t: '“Hi Tony, Ty with Flagship Front Desk here in Erie. Sounds busy, so I’ll be quick: can I take 20 seconds to say why I called?”', p: 2, f: 'Read the room, local, asked permission. Good.', n: 'b' },
            { t: '“Hi Tony! Do you have a few minutes to talk about your phone system?”', p: 0, f: 'He clearly doesn’t have a few minutes. Asking for more time than he has gets a no.', n: 'b2' },
            { t: '“Are you the owner?”', p: 1, f: 'Fine to confirm, but give a reason first. Right now he still doesn’t know why you’re calling.', n: 'b2' },
          ],
        },
        b2: {
          line: '“I got a customer here. What is it?”',
          choices: [
            { t: '“I’ll be quick. Monday mornings like this, calls pile up while you’re at the counter. I help shops catch those. Can I call back at 2 when it’s calmer?”', p: 2, f: 'Clear reason tied to his exact moment, and you offered a better time. That earns a callback.', n: 'c' },
            { t: '“We have an AI receptionist that answers your phones 24/7.”', p: 0, f: 'Product pitch to a guy with a customer in front of him. He’ll hang up.', n: 'end_bad' },
          ],
        },
        b: {
          line: '“Go.”',
          choices: [
            { t: '“I help local shops catch the calls they miss when the counter’s busy, like right now. People wanting a price on brakes don’t leave a voicemail, they call the next shop. Who grabs the phone when you’re with a customer?”', p: 2, f: 'Reason plus a question about his exact situation.', n: 'c' },
            { t: '“We help businesses with missed-call text-back, review requests, a CRM pipeline and AI answering.”', p: 0, f: 'Jargon. “CRM pipeline” means nothing to him. Talk about his phone, not our features.', n: 'c_meh' },
          ],
        },
        c_meh: {
          line: '“I don’t need a CRM. I got a guy for computers.”',
          choices: [
            { t: '“Fair, forget the computer stuff. Simple question: when you’re with a customer and the phone rings, what happens to that call?”', p: 2, f: 'Dropped the jargon, back to his phone.', n: 'c' },
            { t: '“It’s not just a CRM, it’s an all-in-one platform.”', p: 0, f: 'Arguing about features. He’s gone.', n: 'end_bad' },
          ],
        },
        c: {
          line: '(Later that afternoon) “Yeah, honestly, Mondays the phone just rings. My service writer’s out sick half the time. Some people call three times, some just give up.”',
          choices: [
            { t: '“That’s really common. What’s a typical repair ticket for you, ballpark?”', p: 2, f: 'Getting his number so the math is his, not yours.', n: 'd' },
            { t: '“So you’re probably losing thousands a month.”', p: 1, f: 'Maybe true, but let him do the math. Ask for his ticket size first.', n: 'd' },
          ],
        },
        d: {
          line: '“Depends. Oil change is 60 bucks. Brakes, 400, 500. Some jobs are two grand.”',
          choices: [
            { t: '“So one brake job a week that goes to another shop is about $2,000 a month. The free audit shows how many calls you’re actually missing: we call at a busy time and after hours and show you what callers hear. Wednesday or Thursday afternoon to go over it?”', p: 2, f: 'His numbers, the audit, two specific times. Textbook.', n: 'e' },
            { t: '“Great. Front Desk is $997 a month, want to get started?”', p: 0, f: 'Skipped the audit. Too fast.', n: 'end_bad' },
          ],
        },
        e: {
          line: '“Will it tell people prices? I don’t want some robot quoting brake jobs.”',
          choices: [
            { t: '“No, and it shouldn’t. It takes the car, what’s wrong and the best number, books a drop-off if you want, and you quote it. You stay in charge of pricing.”', p: 2, f: 'Exactly right. The AI never quotes repair prices.', n: 'f' },
            { t: '“Sure, we can program in all your prices.”', p: 0, f: 'Wrong promise. Repair prices depend on the car. Quoting is the shop’s job.', n: 'f' },
          ],
        },
        f: {
          line: '“OK. Thursday, after 3.”',
          choices: [
            { t: '“Thursday at 3:30, perfect. Best cell for you? And OK if I text a reminder that morning?”', p: 2, f: 'Booked, details confirmed, asked text permission.', n: 'end_good' },
            { t: '“Great, see you then!” (hang up)', p: 1, f: 'Booked, but no confirmed number or permission to text.', n: 'end_good' },
          ],
        },
      },
    },
    {
      id: 'dental',
      who: 'Office manager',
      title: 'Karen, dental office manager (asks about privacy)',
      setup: 'You call a family dental practice in Millcreek with two dentists. Karen, the office manager, answers. She runs the front desk and has been there 12 years.',
      start: 'a',
      nodes: {
        a: {
          line: '“Good morning, Lakeview Family Dental, this is Karen.”',
          choices: [
            { t: '“Hi Karen, this is Ty with Flagship Front Desk here in Erie. I’ll be quick: I help local offices catch the new-patient calls that come in while the front desk is busy. Do you have 30 seconds?”', p: 2, f: 'Clear, local, specific reason, respects her time.', n: 'b' },
            { t: '“Hi, can I speak to the dentist?”', p: 0, f: 'Karen runs the phones. Skipping her is how you lose this office.', n: 'b_cold' },
          ],
        },
        b_cold: {
          line: '“Doctor’s with a patient. Can I ask what this is about?”',
          choices: [
            { t: '“Of course. Honestly, you’re probably the right person. It’s about new-patient calls that get missed when the front desk is checking people in. How often does that happen?”', p: 2, f: 'Good recovery. You brought her in.', n: 'c' },
            { t: '“I’ll just call back later.”', p: 0, f: 'You walked away from the person who knows exactly how the phones work.', n: 'end_meh' },
          ],
        },
        b: {
          line: '“OK, sure. What is it?”',
          choices: [
            { t: '“When you’re checking a patient out and the phone rings, or at lunch and after 5, what happens to those calls?”', p: 2, f: 'One good question. Now listen.', n: 'c' },
            { t: '“We have an AI receptionist that can replace your front desk.”', p: 0, f: 'You just told Karen her job could be replaced. Never pitch it that way.', n: 'c_def' },
          ],
        },
        c_def: {
          line: '“We don’t need to replace anybody. We do just fine.”',
          choices: [
            { t: '“I said that badly, sorry. It’s not a replacement, it’s backup for you. The calls that ring while you’re with a patient, or after you’ve gone home.”', p: 2, f: 'Owned it and reframed as backup for her.', n: 'c' },
            { t: '“Well, it’s cheaper than an employee.”', p: 0, f: 'Doubling down on replacing her. Call over.', n: 'end_bad' },
          ],
        },
        c: {
          line: '“Lunch it goes to voicemail. After 5 too. People leave messages, mostly. I call them back in the morning.”',
          choices: [
            { t: '“That’s how most offices handle it. The ones who leave messages are fine. I’d worry about new patients who don’t. They call the next dentist. Any idea how many hang up without a message?”', p: 2, f: 'Separated regulars from new patients and let her think about it.', n: 'd' },
            { t: '“Most people never leave voicemails, so you’re losing patients.”', p: 1, f: 'Telling her she’s wrong. Ask instead.', n: 'd' },
          ],
        },
        d: {
          line: '“I don’t know. Wait, would this thing have access to patient information? We have to be careful with HIPAA.”',
          choices: [
            { t: '“Really good question, and I won’t guess. Patient info has to be handled right. Before anything goes live, we walk through exactly how it’s handled, and our tech lead sets up the privacy side. The free audit doesn’t touch any patient data: we just call like a new patient would. Want to see what we find?”', p: 2, f: 'Honest, no overpromise, flagged it for Jon, and steered to the audit, which is safe.', n: 'e' },
            { t: '“Oh yeah, we’re totally HIPAA compliant.”', p: 0, f: 'Never promise this. It has to be confirmed and set up first. A wrong answer here can hurt the office and us.', n: 'e' },
            { t: '“HIPAA doesn’t really apply to phone calls.”', p: 0, f: 'Wrong. Don’t give legal opinions. Say you’ll walk through it before anything goes live.', n: 'end_bad' },
          ],
        },
        e: {
          line: '“I’d have to run it by Dr. Patel.”',
          choices: [
            { t: '“Of course. Can we set the audit review for a time Dr. Patel can join, maybe 15 minutes at the end of a day? Then you both see the same results.”', p: 2, f: 'Got both decision makers to the review.', n: 'end_good' },
            { t: '“OK, have the doctor call me.”', p: 1, f: 'The doctor probably won’t call. Get a specific time.', n: 'end_meh' },
          ],
        },
      },
    },
    {
      id: 'salon',
      who: 'Salon owner',
      title: 'Jess, salon owner (“clients book online”)',
      setup: 'Jess owns a 4-chair salon in Fairview and also does hair full time. She uses an online booking app. She calls you back between clients after you left a voicemail.',
      start: 'a',
      nodes: {
        a: {
          line: '“Hi, this is Jess from Studio Twelve, I had a missed call from this number?”',
          choices: [
            { t: '“Hi Jess, thanks for calling back! Ty with Flagship Front Desk in Erie. I know you’ve got a client soon, so I’ll be quick: I help salons catch the calls that come in while you’re behind the chair.”', p: 2, f: 'Thanked her, respected her time, gave a reason.', n: 'b' },
            { t: '“Hi Jess! I wanted to tell you about our AI receptionist and automation platform.”', p: 0, f: 'Jargon and product first. She’s a stylist, not a tech buyer.', n: 'b' },
          ],
        },
        b: {
          line: '“Oh, we’re fine. Clients book online now. Hardly anyone calls.”',
          choices: [
            { t: '“That’s smart, online booking is great. Quick question: who still calls? New clients, older regulars, people with a question about color?”', p: 2, f: 'Agreed with her, then got curious about who still calls.', n: 'c' },
            { t: '“Online booking is outdated, people prefer a real voice.”', p: 0, f: 'Trashing her system. She picked it and she likes it.', n: 'c_def' },
          ],
        },
        c_def: {
          line: '“Our clients love the app.”',
          choices: [
            { t: '“Totally fair, I’m not here to replace it. I’m thinking about the people who call instead of using it. What happens to them when you’re mid-cut?”', p: 2, f: 'Recovered: work alongside the app, not against it.', n: 'c' },
            { t: '“Well, think about it.”', p: 0, f: 'Gave up.', n: 'end_bad' },
          ],
        },
        c: {
          line: '“I mean… new people call. Usually I can’t pick up. I try to call back at lunch.”',
          choices: [
            { t: '“That’s the gap. When you can’t pick up, they get a text from your number right away: ‘Sorry we missed you! Here’s our booking link.’ Most people would rather text anyway. What’s a new client worth to you, if they become a regular?”', p: 2, f: 'Showed how it works with her booking app, then asked for her number.', n: 'd' },
            { t: '“So you’re losing clients every day.”', p: 1, f: 'Let her come to that. Ask instead.', n: 'd' },
          ],
        },
        d: {
          line: '“A cut and color is like 150. If they come every 6 weeks… that adds up.”',
          choices: [
            { t: '“About 8 visits a year, so one new regular is over $1,000 a year. The free audit shows how many calls you’re missing: we call at a busy time and after hours. Plus Google review requests, which really help salons. Monday or Tuesday, when you’re off?”', p: 2, f: 'Her numbers, the audit, reviews as a bonus, and a time that fits a stylist’s schedule.', n: 'e' },
            { t: '“Front Desk with the 24/7 AI is $997 a month.”', p: 0, f: 'Wrong plan for a small salon, and too early to talk price.', n: 'e_price' },
          ],
        },
        e_price: {
          line: '“$997?! No way. That’s a lot of haircuts.”',
          choices: [
            { t: '“Fair, and honestly that’s not the plan I’d suggest for you. Lead Catcher is $397: the text-back and review requests. But let’s not guess. The free audit shows if it’s even worth it.”', p: 2, f: 'Good recovery to the right plan and back to the audit.', n: 'e' },
            { t: '“It pays for itself, trust me.”', p: 0, f: '“Trust me” after a price shock loses her.', n: 'end_bad' },
          ],
        },
        e: {
          line: '“OK, Monday morning works. I have a client in two minutes though.”',
          choices: [
            { t: '“Perfect, Monday at 10. I’ll text you a reminder, is that OK? Go get your client!”', p: 2, f: 'Booked fast, asked permission to text, respected her time.', n: 'end_good' },
            { t: '“Before you go, let me tell you about the monthly reports and the pipeline…”', p: 0, f: 'She has a client. You had the yes. Stop talking.', n: 'end_meh' },
          ],
        },
      },
    },
    {
      id: 'groomer',
      who: 'Groomer',
      title: 'Sam, solo pet groomer (tight budget)',
      setup: 'Sam runs a one-person grooming shop out of a converted garage in Harborcreek. No staff. Answers with a dryer running in the background.',
      start: 'a',
      nodes: {
        a: {
          line: '“Paws and Suds, sorry, hang on— OK, hello?”',
          choices: [
            { t: '“Hi Sam, Ty with Flagship Front Desk here in Erie. Sounds like you’ve got your hands full. 20 seconds, then you tell me if it’s worth talking?”', p: 2, f: 'Noticed the situation, local, short ask.', n: 'b' },
            { t: '“Hi, is this the owner of the business?”', p: 1, f: 'OK, but sounds like every robocall. Lead with who you are and why.', n: 'b' },
          ],
        },
        b: {
          line: '“Sure, I’ve got a doodle drying. Go ahead.”',
          choices: [
            { t: '“With a dog on the table, I’m guessing you can’t always grab the phone. What happens to those calls?”', p: 2, f: 'Spot on. You described their day.', n: 'c' },
            { t: '“We’re a full-service front office automation agency.”', p: 0, f: '“Agency” and “automation” mean nothing to a solo groomer. Talk about the phone.', n: 'c' },
          ],
        },
        c: {
          line: '“They go to voicemail. People leave messages, sometimes. I call back at night. Honestly I can’t afford fancy stuff, it’s just me.”',
          choices: [
            { t: '“That makes total sense, and I wouldn’t push the big plan on a one-person shop. The simple version just texts people back from your number when you miss a call, and asks happy customers for a Google review. How often do your regulars come in?”', p: 2, f: 'Matched the plan to the business and moved to the math.', n: 'd' },
            { t: '“The full AI receptionist would answer every call for you!”', p: 0, f: 'Ignored the budget concern. Wrong plan for a solo groomer.', n: 'd_price' },
          ],
        },
        d_price: {
          line: '“How much is that?”',
          choices: [
            { t: '“That one’s $997, which honestly is more than you need. The text-back plan is $397, and the audit will show if even that makes sense.”', p: 2, f: 'Honest, steered to the right plan.', n: 'd' },
            { t: '“It’s an investment in your business.”', p: 0, f: 'Dodging the price. Sam will hang up.', n: 'end_bad' },
          ],
        },
        d: {
          line: '“Most every 6 to 8 weeks. Average groom’s about 80, 90 bucks.”',
          choices: [
            { t: '“So one new regular is around 7 or 8 visits a year, roughly $600–$700. Keep one new caller a month from going to another groomer, and by next year that’s around $7,000 a year in repeat grooms. Free audit first: we call like a customer and show you what happens. When’s your slowest day?”', p: 2, f: 'Sam’s own numbers, the audit, and a time that fits a solo owner.', n: 'e' },
            { t: '“So it definitely pays for itself. Want to sign up today?”', p: 0, f: 'Skipped the audit and pushed. Small owners hate that.', n: 'end_bad' },
          ],
        },
        e: {
          line: '“Tuesdays are slow. Afternoon.”',
          choices: [
            { t: '“Tuesday at 2 then. I’ll keep it to 15 minutes. OK to text you a reminder?”', p: 2, f: 'Short, respectful, permission to text.', n: 'end_good' },
            { t: '“Great, I’ll send over a contract too.”', p: 0, f: 'They agreed to an audit, not a contract. Too much, too soon.', n: 'end_meh' },
          ],
        },
      },
    },
  ],
  endings: {
    end_good: 'Audit booked. Nice work.',
    end_meh: 'No audit booked yet. You kept the door open, but get a specific next step next time.',
    end_bad: 'Call lost. Review the feedback and try again.',
  },

  // ── Quiz ───────────────────────────────────────────────────
  quiz: [
    { q: 'What is the main goal of a cold call?', a: ['Close the Front Desk plan', 'Book the free missed-call audit', 'Get their email', 'Explain every feature'], c: 1, why: 'The audit is a small, free yes. Plans get discussed after.' },
    { q: 'How much is Lead Catcher?', a: ['$297/mo', '$397/mo + $497 setup', '$497/mo + $397 setup', '$997/mo'], c: 1, why: 'Lead Catcher is $397/month plus a $497 one-time setup.' },
    { q: 'How much is Front Desk?', a: ['$997/mo + $497 setup', '$797/mo', '$1,500/mo', '$997/mo, no setup'], c: 0, why: 'Front Desk is $997/month plus $497 setup.' },
    { q: 'Which plan includes the 24/7 AI receptionist?', a: ['Lead Catcher', 'Front Desk', 'Both', 'Neither'], c: 1, why: 'The AI receptionist is in Front Desk (and up).' },
    { q: 'What’s the guarantee?', a: ['Money back anytime', '10 leads in 60 days or the next month is free', '20 leads in 30 days', 'No guarantee'], c: 1, why: '10 leads in 60 days, or the next month is free.' },
    { q: 'What’s the contract?', a: ['12 months', 'No minimum', '3-month minimum, then month-to-month', '6 months'], c: 2, why: '3 months, then month-to-month.' },
    { q: 'Does the client need a new phone number?', a: ['Yes', 'No, they keep their existing number', 'Only for texting', 'Only on Front Desk'], c: 1, why: 'They keep their existing number.' },
    { q: 'The AI receptionist gets an emergency call. What happens?', a: ['Takes a message', 'Texts the owner tomorrow', 'Rings the owner’s cell', 'Drops it'], c: 2, why: 'Emergencies ring the owner’s cell right away.' },
    { q: 'The AI gets a spam call. What happens?', a: ['Rings the owner', 'Dropped', 'Books it', 'Takes a message'], c: 1, why: 'Spam is dropped.' },
    { q: 'An existing customer or vendor calls. What happens?', a: ['Takes a message', 'Dropped', 'Rings the owner', 'Books a job'], c: 0, why: 'Existing customers and vendors get a message taken.' },
    { q: 'How long does setup take?', a: ['Same day', 'About a week', 'About a month', '90 days'], c: 1, why: 'About a week: grab info, connect number, test together.' },
    { q: 'What happens in the free audit?', a: ['We review their website', 'We call their business after hours and at a busy time and show what callers hear', 'We audit their taxes', 'We run Google ads'], c: 1, why: 'We call like a customer and show what callers hear and what it costs.' },
    { q: 'Which opener does Gong’s data rate WORST?', a: ['Permission-based (“Can I take 30 seconds?”)', 'Stating your reason for calling', '“Did I catch you at a bad time?”', 'Mentioning you work with their peers'], c: 2, why: '“Bad time?” invites a no and tested lowest.' },
    { q: 'Gong found stating a clear reason for the call improves success by about…', a: ['10%', '2.1x', '10x', 'It doesn’t matter'], c: 1, why: 'About 2.1 times higher success.' },
    { q: 'How should you quote the “85% never call back” stat?', a: ['“Studies prove 85%…”', '“Signpost says up to 85%…”', '“90% of people…”', 'Don’t credit anyone'], c: 1, why: 'Say “up to” and credit Signpost. The original study isn’t named.' },
    { q: 'The MIT/InsideSales study found responding in 5 minutes vs 30 made a lead about…', a: ['2x more likely to buy', '21x more likely to be qualified', '100x more likely to close', 'No difference'], c: 1, why: '21x more likely to be qualified (not closed).' },
    { q: 'First step after hearing an objection?', a: ['Answer fast', 'Pause', 'Offer a discount', 'Repeat the pitch'], c: 1, why: 'Pause, Acknowledge, Ask, Answer, Advance.' },
    { q: 'A prospect says “I already have an answering service.” Best move?', a: ['Say answering services are terrible', 'Ask how it’s working: do they book jobs or just take messages?', 'Hang up', 'Offer a discount'], c: 1, why: 'Get curious, never trash their vendor, offer the audit to compare.' },
    { q: 'A prospect says it’s too expensive. What do you ask?', a: ['“What’s your budget?”', '“What’s an average job worth to you?”', '“Can you afford it?”', '“Want 50% off?”'], c: 1, why: 'Tie price to one job using their own number.' },
    { q: 'Can you text a prospect you cold-called who didn’t give permission?', a: ['Yes', 'Only once', 'No, only text people who said yes', 'Only on weekends'], c: 2, why: 'Only text with permission.' },
    { q: 'Which is NOT in Lead Catcher?', a: ['Missed-call text-back', 'Google review requests', 'Quote follow-up', 'Google Business Profile cleanup'], c: 2, why: 'Quote follow-up is in Front Desk.' },
    { q: 'Where do we say we’re based?', a: ['Waterford', 'Erie / Erie and Northwest PA', 'Pittsburgh', 'Don’t mention it'], c: 1, why: 'Always “Erie” or “Erie and Northwest PA.” Never “Waterford.”' },
    { q: 'Besides contractors, which businesses do we also call on?', a: ['Only contractors', 'Auto shops, dental offices, salons, groomers and other local businesses', 'Big national chains', 'Restaurants only'], c: 1, why: 'Contractors first, plus any local business that runs on the phone.' },
    { q: 'A dental office asks, “Is this HIPAA compliant?” Best answer?', a: ['“Yes, totally.”', '“HIPAA doesn’t apply to phones.”', '“I won’t guess. We walk through how patient info is handled before anything goes live, and the audit doesn’t touch patient data.”', 'Change the subject'], c: 2, why: 'Never promise HIPAA. Jon confirms the privacy setup before any medical client goes live.' },
    { q: 'A salon says, “Clients book online.” Best move?', a: ['Say online booking is outdated', 'Agree, then ask who still calls, and explain we text missed callers the booking link', 'Hang up', 'Offer a discount'], c: 1, why: 'Work alongside their booking app, never against it.' },
    { q: 'Which plan usually fits a solo pet groomer?', a: ['Front Desk', 'Lead Catcher', 'Managed IT', 'None of them'], c: 1, why: 'Lead Catcher: text-back and review requests, at a price a one-person shop can justify.' },
    { q: 'An auto shop owner asks if the AI will quote brake jobs. You say…', a: ['“Yes, we load all your prices.”', '“No. It takes the car, the problem and a number, and books a drop-off. You quote it.”', '“It guesses based on the car.”', '“Only on weekends.”'], c: 1, why: 'Repair prices depend on the car. The shop always quotes.' },
  ],
};
