export const languages = ["en", "nl"] as const;
export type Lang = (typeof languages)[number];

export function getLang(value: string | undefined): Lang {
  return value === "nl" ? "nl" : "en";
}

/** Build a path for a locale. English has no prefix, Dutch lives under /nl/. */
export function localePath(lang: Lang, path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return lang === "en" ? clean : `/nl${clean === "/" ? "/" : clean}`;
}

const en = {
  meta: {
    title: "Thorsten Bell | Full-Stack Developer & Designer, React, TypeScript & AI Integration",
    description:
      "Freelance full-stack developer and designer in Enschede. I design and build SaaS products, AI features and fast websites with React, TypeScript and Python.",
    jobTitle: "Freelance Full-Stack Developer & Designer",
  },
  nav: {
    label: "Main",
    work: "Work",
    services: "Services",
    about: "About",
    cta: "Start a project",
    switchLabel: "Nederlands",
    switchShort: "NL",
    home: "W3BL home",
  },
  hero: {
    status: "Thorsten Bell, freelance in Enschede. Taking on new projects.",
    titleLines: ["Web products,", "designed and built"],
    titleAccent: "by one person.",
    intro:
      "I'm a full-stack developer and designer working in React, TypeScript and Python. I build SaaS products, add practical AI features and make fast websites, from first sketch to launch.",
    primary: "Tell me what you're building",
    secondary: "See the work",
  },
  credentials: {
    label: "Background",
    items: [
      { value: "8+ years", text: "building for the web" },
      { value: "MSc, Distinction", text: "Computer Science with Data Analytics, Keele" },
      { value: "BA (Hons)", text: "Graphic Design" },
      { value: "English & Dutch", text: "remote, NL, UK and beyond" },
    ],
  },
  work: {
    title: "Selected work",
    intro: "SaaS tools for health economics, an AI assistant, a website rebuild, and a product of my own.",
    agent: {
      kicker: "AI assistant for HecoAnalytics",
      title: "HecoAgent",
      text: "A privacy-first AI assistant for health economists. It answers from the client's own documents using a medical language model on self-hosted servers, and takes questions by voice with speech-to-text that runs in the browser.",
      stack: "React, FastAPI, Ollama, MedGemma, vector search, Whisper",
      link: "Read the case study",
    },
    sim: {
      kicker: "Simulation dashboard for HecoAnalytics",
      title: "HecoSim",
      text: "Discrete-event and Monte Carlo simulations that run entirely in the browser, with the charts health economists rely on.",
      stack: "React, TypeScript, Recharts",
      chart: "Cost-effectiveness plane",
    },
    site: {
      kicker: "Website rebuild and SEO",
      title: "hecoanalytics.com",
      text: "Lighthouse audit, then a rebuild in Astro and Sanity, structured around four client segments.",
      stack: "Astro, Sanity, Tailwind, SEO",
      alt: "The rebuilt hecoanalytics.com on a desktop screen",
    },
    metrix: {
      kicker: "My own product, in progress",
      title: "MG Metrix",
      text: "A multi-tenant platform for personal training businesses on iOS, Android and web. Branded per business, offline logging, English and Dutch. Launching early 2027.",
      stack: "React, Expo, FastAPI, PostgreSQL, Docker",
    },
    designTitle: "Design and branding",
    design: [
      { key: "rds", caption: "RDS Fitness, social campaign", alt: "RDS Fitness social media graphics on a phone and as posts" },
      { key: "meroe", caption: "Meroë, visual identity", alt: "Meroë Sudanese Eatery logo on a shop window" },
      { key: "walas", caption: "Walas Projects, print", alt: "Walas Projects brochure spread" },
      { key: "data", caption: "Living Data, poster", alt: "Living Data exhibition poster in an underground station" },
    ],
  },
  mock: {
    agentStatus: "Running locally",
    agentQuestion: "Summarise the cost assumptions in the uploaded model report.",
    agentSources: ["Model report, p. 12", "Cost inputs.xlsx"],
    agentInput: "Ask about your documents",
    agentDocs: "Documents",
    agentDocList: ["Model report.pdf", "Cost inputs.xlsx", "Pathway notes.docx"],
    agentServer: "Model running on your server",
    phoneTitle: "Today's session",
    phoneLog: "Log set",
  },
  services: {
    title: "What I can do for you",
    items: [
      {
        title: "SaaS and web applications",
        text: "Scalable, secure products built with React, TypeScript and Python (FastAPI), from MVP to production, or as long-term support for your team.",
        tags: "React, TypeScript, FastAPI, PostgreSQL",
      },
      {
        title: "AI integration",
        text: "Assistants that answer from your own documents (RAG), speech-to-text, and self-hosted language models that keep sensitive data private.",
        tags: "RAG, Ollama, open-source LLMs, Whisper",
      },
      {
        title: "Websites for businesses",
        text: "Fast, SEO-friendly websites built with Astro, Tailwind and Sanity, so you can manage your own content without calling me.",
        tags: "Astro, Sanity, SEO, performance",
      },
      {
        title: "Design and branding",
        text: "UI/UX design in Figma, logos, visual identities and design systems that hold together from the first screen to the last.",
        tags: "Figma, UI/UX, identity, print",
      },
    ],
  },
  why: {
    title: "Design and engineering in one conversation.",
    items: [
      { title: "No handoffs", text: "The person who designs your interface also builds it, so nothing gets lost between Figma and production." },
      { title: "Used to demanding fields", text: "Health economics tools, where accuracy and data privacy aren't optional." },
      { title: "End-to-end ownership", text: "Architecture, hosting and deployment as well as the interface. I'm doing exactly that for my own product right now." },
    ],
  },
  projects: {
    title: "Projects I usually take on",
    items: [
      "MVPs and new SaaS products",
      "AI features in an existing app",
      "Dashboards and data-heavy interfaces",
      "Website redesigns for speed and SEO",
      "Brand identities and UI for new products",
      "Ongoing development, one or two days a week",
    ],
  },
  testimonial: {
    label: "Testimonial",
    quote:
      "Thorsten was awesome to work with — super professional, quick to respond, and really skilled. He’s delivered great design work and web development projects for us several times. I’d definitely work with him again and recommend him to anyone looking for a reliable web developer or designer.",
    name: "Richard Stunt",
    company: "RDS Fitness",
  },
  about: {
    title: "Hi, I'm Thorsten",
    paragraphs: [
      "I'm an Englishman based in Enschede since 2018. With a background in graphic design and frontend development, I now build complete digital products, covering everything from user interfaces to backend systems and infrastructure.",
      "I work remotely with clients in the Netherlands, the UK and further afield through my business, W3BL.",
    ],
    portraitAlt: "Portrait of Thorsten Bell",
    malt: "Hire me on Malt",
  },
  contact: {
    title: "Have a project in mind?",
    text: "Tell me what you're building and I'll come back with the best approach, usually within one working day.",
    name: "Name",
    email: "Email",
    message: "What are you building?",
    submit: "Send message",
    sending: "Sending…",
    success: "Thanks, your message has been sent. I'll get back to you soon.",
    error: "Sorry, your message couldn't be sent. Please try again or email me at thorsten@w3bl.com.",
    required: "required",
  },
  footer: {
    btw: "BTW",
  },
  caseAgent: {
    metaTitle: "HecoAgent: privacy-first AI assistant for health economics | W3BL",
    metaDescription:
      "Case study: a self-hosted RAG assistant with voice input, built for HecoAnalytics with React, FastAPI, Ollama and MedGemma.",
    back: "Back to all work",
    intro:
      "A privacy-first AI assistant that lets health economists question their own documents, by text or by voice, without sending anything to an outside AI service.",
    facts: [
      { label: "Client", value: "HecoAnalytics" },
      { label: "My role", value: "Design and full-stack build" },
      { label: "Stack", value: "React, FastAPI, Ollama, MedGemma 4B" },
      { label: "Year", value: "2026" },
    ],
    screenLabel: "HecoAgent chat screen with a question, a sourced answer and a voice input button",
    screenNote: "Interface shown in simplified form.",
    challengeTitle: "The challenge",
    challenge: [
      "HecoAnalytics wanted an assistant that could answer questions from its own specialist documents. Health data is sensitive, so sending it to a commercial AI service wasn't an option: everything had to stay on infrastructure they control.",
    ],
    builtTitle: "What I built",
    built: [
      "A retrieval-augmented (RAG) assistant. Documents are indexed in a lightweight vector database, and answers come from MedGemma, an open-source medical language model, running through Ollama on a self-hosted server.",
      "Users can ask by voice: speech-to-text runs in the browser with Whisper, so recordings never leave the user's machine. I designed the interface and built the whole stack, from the React front end and FastAPI backend to the model setup and hosting.",
    ],
    flowTitle: "How a question flows",
    flow: [
      { where: "In the browser", title: "Question typed or spoken", text: "React app, Whisper speech-to-text on the device." },
      { where: "API", title: "FastAPI backend", text: "A thin service that coordinates retrieval and generation." },
      { where: "Retrieval", title: "Vector search", text: "Relevant passages found in a SQLite-based vector store." },
      { where: "Generation", title: "MedGemma via Ollama", text: "A self-hosted model writes the answer and cites its sources." },
    ],
    resultTitle: "The result",
    result: [
      "An assistant grounded in the client's own knowledge base, with no data leaving their infrastructure. [ADD A RESULT: time saved, number of users, or how the team uses it.]",
    ],
    allWork: "All work",
    next: "Next case",
    nextTitle: "HecoSim",
    ctaTitle: "Need AI in your product?",
    ctaText: "I can help you work out what's useful, and build it so your data stays yours.",
    ctaButton: "Talk about your project",
  },
  notFound: {
    title: "Page not found",
    text: "This page doesn't exist or has moved.",
    home: "Go to the homepage",
  },
};

export type Content = typeof en;

const nl: Content = {
  meta: {
    title: "Thorsten Bell | Full-stack developer & designer, React, TypeScript & AI-integratie",
    description:
      "Freelance full-stack developer en designer in Enschede. Ik ontwerp en bouw SaaS-producten, AI-functies en snelle websites met React, TypeScript en Python.",
    jobTitle: "Freelance full-stack developer en designer",
  },
  nav: {
    label: "Hoofdmenu",
    work: "Werk",
    services: "Diensten",
    about: "Over mij",
    cta: "Start een project",
    switchLabel: "English",
    switchShort: "EN",
    home: "W3BL home",
  },
  hero: {
    status: "Thorsten Bell, freelancer in Enschede. Beschikbaar voor nieuwe projecten.",
    titleLines: ["Webproducten,", "ontworpen én gebouwd"],
    titleAccent: "door één persoon.",
    intro:
      "Ik ben full-stack developer en designer, en werk met React, TypeScript en Python. Ik bouw SaaS-producten, voeg bruikbare AI-functies toe en maak snelle websites, van eerste schets tot livegang.",
    primary: "Vertel wat je bouwt",
    secondary: "Bekijk het werk",
  },
  credentials: {
    label: "Achtergrond",
    items: [
      { value: "8+ jaar", text: "ervaring in webontwikkeling" },
      { value: "MSc, Distinction", text: "Computer Science with Data Analytics, Keele" },
      { value: "BA (Hons)", text: "Graphic Design" },
      { value: "Nederlands & Engels", text: "op afstand, in NL, het VK en daarbuiten" },
    ],
  },
  work: {
    title: "Geselecteerd werk",
    intro: "SaaS-tools voor gezondheidseconomie, een AI-assistent, een website-rebuild en een eigen product.",
    agent: {
      kicker: "AI-assistent voor HecoAnalytics",
      title: "HecoAgent",
      text: "Een privacy-first AI-assistent voor gezondheidseconomen. Hij antwoordt vanuit de eigen documenten van de klant met een medisch taalmodel op zelfgehoste servers, en neemt vragen aan via spraak-naar-tekst die in de browser draait.",
      stack: "React, FastAPI, Ollama, MedGemma, vector search, Whisper",
      link: "Lees de case",
    },
    sim: {
      kicker: "Simulatiedashboard voor HecoAnalytics",
      title: "HecoSim",
      text: "Discrete-event- en Monte Carlo-simulaties die volledig in de browser draaien, met de grafieken waar gezondheidseconomen op vertrouwen.",
      stack: "React, TypeScript, Recharts",
      chart: "Kosteneffectiviteitsvlak",
    },
    site: {
      kicker: "Website-rebuild en SEO",
      title: "hecoanalytics.com",
      text: "Eerst een Lighthouse-audit, daarna een rebuild in Astro en Sanity, opgebouwd rond vier klantsegmenten. Performance van [VOOR] naar [NA].",
      stack: "Astro, Sanity, Tailwind, SEO",
      alt: "De vernieuwde hecoanalytics.com op een desktopscherm",
    },
    metrix: {
      kicker: "Mijn eigen product, in ontwikkeling",
      title: "MG Metrix",
      text: "Een multi-tenant platform voor personal trainingbedrijven op iOS, Android en web. In de huisstijl van elk bedrijf, offline loggen, Nederlands en Engels. Lancering begin 2027.",
      stack: "React, Expo, FastAPI, PostgreSQL, Docker",
    },
    designTitle: "Design en branding",
    design: [
      { key: "rds", caption: "RDS Fitness, socialmediacampagne", alt: "Socialmediagraphics voor RDS Fitness op een telefoon en als posts" },
      { key: "meroe", caption: "Meroë, huisstijl", alt: "Logo van Meroë Sudanese Eatery op een etalageruit" },
      { key: "walas", caption: "Walas Projects, drukwerk", alt: "Brochurespread voor Walas Projects" },
      { key: "data", caption: "Living Data, poster", alt: "Poster voor de tentoonstelling Living Data in een metrostation" },
    ],
  },
  mock: {
    agentStatus: "Draait lokaal",
    agentQuestion: "Vat de kostenaannames in het geüploade modelrapport samen.",
    agentSources: ["Modelrapport, p. 12", "Kosteninput.xlsx"],
    agentInput: "Stel een vraag over je documenten",
    agentDocs: "Documenten",
    agentDocList: ["Modelrapport.pdf", "Kosteninput.xlsx", "Zorgpad-notities.docx"],
    agentServer: "Model draait op je eigen server",
    phoneTitle: "Training van vandaag",
    phoneLog: "Set loggen",
  },
  services: {
    title: "Waar ik je mee help",
    items: [
      {
        title: "SaaS en webapplicaties",
        text: "Schaalbare, veilige producten met React, TypeScript en Python (FastAPI), van MVP tot productie, of als structurele ondersteuning van je team.",
        tags: "React, TypeScript, FastAPI, PostgreSQL",
      },
      {
        title: "AI-integratie",
        text: "Assistenten die antwoorden vanuit je eigen documenten (RAG), spraak-naar-tekst en zelfgehoste taalmodellen die gevoelige data privé houden.",
        tags: "RAG, Ollama, open-source LLM's, Whisper",
      },
      {
        title: "Websites voor bedrijven",
        text: "Snelle, SEO-vriendelijke websites met Astro, Tailwind en Sanity, zodat je je content zelf beheert zonder mij te hoeven bellen.",
        tags: "Astro, Sanity, SEO, performance",
      },
      {
        title: "Design en branding",
        text: "UI/UX-design in Figma, logo's, huisstijlen en design systems die kloppen, van het eerste tot het laatste scherm.",
        tags: "Figma, UI/UX, huisstijl, drukwerk",
      },
    ],
  },
  why: {
    title: "Design en techniek, één aanspreekpunt.",
    items: [
      { title: "Geen overdrachten", text: "Wie je interface ontwerpt, bouwt hem ook. Er gaat niets verloren tussen Figma en productie." },
      { title: "Gewend aan veeleisende sectoren", text: "Tools voor gezondheidseconomie, waar nauwkeurigheid en privacy een harde eis zijn." },
      { title: "Van begin tot eind", text: "Architectuur, hosting en deployment, niet alleen de interface. Precies wat ik nu voor mijn eigen product doe." },
    ],
  },
  projects: {
    title: "Projecten die ik vaak doe",
    items: [
      "MVP's en nieuwe SaaS-producten",
      "AI-functies in een bestaande app",
      "Dashboards en data-intensieve interfaces",
      "Website-redesigns voor snelheid en SEO",
      "Huisstijlen en UI voor nieuwe producten",
      "Doorlopende ontwikkeling, een of twee dagen per week",
    ],
  },
  testimonial: { ...en.testimonial, label: "Aanbeveling" },
  about: {
    title: "Hoi, ik ben Thorsten",
    paragraphs: [
      "Engelsman, woonachtig in Enschede sinds 2018. Begonnen in grafisch ontwerp, doorgegroeid naar frontend development en inmiddels bouw ik complete digitale producten: van de gebruikersinterface tot de backend en infrastructuur.",
      "Via mijn bedrijf W3BL werk ik op afstand voor klanten in Nederland, het VK en daarbuiten.",
    ],
    portraitAlt: "Portret van Thorsten Bell",
    malt: "Huur me in via Malt",
  },
  contact: {
    title: "Een project in gedachten?",
    text: "Vertel wat je bouwt, dan kom ik terug met de beste aanpak, meestal binnen één werkdag.",
    name: "Naam",
    email: "E-mail",
    message: "Wat ben je aan het bouwen?",
    submit: "Bericht versturen",
    sending: "Versturen…",
    success: "Bedankt, je bericht is verstuurd. Ik neem snel contact met je op.",
    error: "Sorry, je bericht kon niet worden verstuurd. Probeer het opnieuw of mail me via thorsten@w3bl.com.",
    required: "verplicht",
  },
  footer: {
    btw: "btw",
  },
  caseAgent: {
    metaTitle: "HecoAgent: privacy-first AI-assistent voor gezondheidseconomie | W3BL",
    metaDescription:
      "Case: een zelfgehoste RAG-assistent met spraakinvoer, gebouwd voor HecoAnalytics met React, FastAPI, Ollama en MedGemma.",
    back: "Terug naar al het werk",
    intro:
      "Een privacy-first AI-assistent waarmee gezondheidseconomen hun eigen documenten kunnen bevragen, via tekst of spraak, zonder iets naar een externe AI-dienst te sturen.",
    facts: [
      { label: "Klant", value: "HecoAnalytics" },
      { label: "Mijn rol", value: "Design en full-stack bouw" },
      { label: "Stack", value: "React, FastAPI, Ollama, MedGemma 4B" },
      { label: "Jaar", value: "2026" },
    ],
    screenLabel: "Chatscherm van HecoAgent met een vraag, een antwoord met bronnen en een knop voor spraakinvoer",
    screenNote: "Interface vereenvoudigd weergegeven.",
    challengeTitle: "De uitdaging",
    challenge: [
      "HecoAnalytics wilde een assistent die vragen kon beantwoorden vanuit de eigen gespecialiseerde documenten. Gezondheidsdata is gevoelig, dus een commerciële AI-dienst was geen optie: alles moest op infrastructuur blijven die zij zelf beheren.",
    ],
    builtTitle: "Wat ik bouwde",
    built: [
      "Een RAG-assistent (retrieval-augmented generation). Documenten worden geïndexeerd in een lichte vectordatabase, en de antwoorden komen van MedGemma, een open-source medisch taalmodel, dat via Ollama op een zelfgehoste server draait.",
      "Gebruikers kunnen ook inspreken: spraak-naar-tekst draait met Whisper in de browser, zodat opnames de computer van de gebruiker nooit verlaten. Ik ontwierp de interface en bouwde de hele stack, van de React-frontend en FastAPI-backend tot de modelconfiguratie en hosting.",
    ],
    flowTitle: "Zo loopt een vraag",
    flow: [
      { where: "In de browser", title: "Vraag getypt of ingesproken", text: "React-app, Whisper spraak-naar-tekst op het apparaat." },
      { where: "API", title: "FastAPI-backend", text: "Een dunne service die zoeken en genereren aanstuurt." },
      { where: "Zoeken", title: "Vector search", text: "Relevante passages gevonden in een vectoropslag op basis van SQLite." },
      { where: "Genereren", title: "MedGemma via Ollama", text: "Een zelfgehost model schrijft het antwoord en noemt de bronnen." },
    ],
    resultTitle: "Het resultaat",
    result: [
      "Een assistent die werkt vanuit de eigen kennisbank van de klant, zonder dat er data hun infrastructuur verlaat. [VOEG EEN RESULTAAT TOE: tijdwinst, aantal gebruikers of hoe het team hem gebruikt.]",
    ],
    allWork: "Al het werk",
    next: "Volgende case",
    nextTitle: "HecoSim",
    ctaTitle: "AI nodig in je product?",
    ctaText: "Ik help je bepalen wat echt nuttig is, en bouw het zo dat je data van jou blijft.",
    ctaButton: "Bespreek je project",
  },
  notFound: {
    title: "Pagina niet gevonden",
    text: "Deze pagina bestaat niet of is verplaatst.",
    home: "Naar de homepage",
  },
};

export const content: Record<Lang, Content> = { en, nl };

export function t(lang: Lang): Content {
  return content[lang];
}
