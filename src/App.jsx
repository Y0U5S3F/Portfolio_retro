import { useEffect, useState } from 'react'

const featuredProjects = [
  {
    title: 'HR Management Platform — JumPark',
    note: 'Final-year / professional project',
    description:
      'Full-stack HR platform covering employee records, attendance planning, leave requests, payroll and payslips. Attendance data is imported from a biometric device, and the platform includes an AI assistant. Authentication uses JWT with rotating refresh tokens.',
    technologies: ['Django', 'React', 'PostgreSQL', 'REST API', 'JWT', 'Biometric device', 'AI'],
  },
  {
    title: 'Vehicle Detection & Speed Estimation',
    note: 'Computer vision project',
    description:
      'Computer-vision system that detects vehicles, recognizes license plates and estimates vehicle speed from road video. The project used Tunisian-plate data and perspective correction for speed estimation.',
    technologies: ['Python', 'YOLOv8', 'EasyOCR', 'Roboflow', 'Computer Vision'],
  },
  {
    title: 'Ghneya',
    note: 'Tunisian music data platform',
    description:
      'A data-heavy music project built around Tunisian artists and songs, with artist discovery, metadata pipelines, genre tagging, playable previews, difficulty/popularity calculations and a quiz-oriented catalog workflow.',
    technologies: ['TypeScript', 'Python', 'APIs', 'Data pipelines', 'Web'],
  },
  {
    title: 'FlexGym',
    note: 'Gym management platform',
    description:
      'Gym management web application covering memberships, classes, client management and scheduling. Built in an Angular/PHP/MySQL version and later rebuilt using Java EE and WildFly.',
    technologies: ['Angular', 'PHP', 'MySQL', 'Java EE', 'WildFly'],
  },
]

const experience = [
  {
    period: 'Jun 2025 – Present',
    role: 'Freelance Web Developer',
    company: 'Self-employed · Remote',
    description:
      'Build production-ready web platforms with a strong backend focus: APIs, databases, authentication, Docker-based deployment and full-stack integration. Emphasis on scalability, security, maintainable architecture and usable interfaces.',
  },
  {
    period: 'Mar 2026 – Sep 2026',
    role: 'Customer Service Representative',
    company: 'Transcom · Tunis',
    description:
      'Handled customer requests on a large-scale account, customer-data and support-ticket system. The role strengthened practical understanding of large systems and translating technical issues into simple explanations.',
  },
  {
    period: 'Jan 2025 – May 2025',
    role: 'Full Stack Developer Intern',
    company: 'SASCODE · Tunis',
    description:
      'Built an HR management platform in a team of two, connecting backend logic, data management, an AI chatbot and biometric attendance data into one web application.',
  },
  {
    period: 'Jul 2024 – Aug 2024',
    role: 'Network Engineering Intern',
    company: 'Poulina Group Holding · Tunis',
    description:
      'Worked on migration and simulation of the SNA Poulina network. Configured switches and a Wi-Fi access point and simulated subnetting, VLANs, inter-VLAN routing, SSH, DHCP, DNS and PAT in Cisco Packet Tracer.',
  },
]

const education = [
  {
    period: 'Sep 2026 – Sep 2028',
    degree: "Master's Degree, Communications Engineering",
    institution: 'Università di Catania',
    focus: 'Computer networking, telecommunications and communication systems.',
  },
  {
    period: 'Sep 2023 – Jul 2025',
    degree: "Bachelor's Degree, Computer Science",
    institution: 'Institut Supérieur des Technologies de l’Information et de la Communication',
    focus: 'Software development, databases, web engineering, AI/ML and computer systems.',
  },
  {
    period: 'Sep 2022 – Jun 2023',
    degree: 'Computer Science',
    institution: 'Faculté des Sciences de Monastir',
    focus: 'First year of the Computer Science program before transferring to ISTIC.',
  },
]

const skills = [
  ['Backend', 'Django, Django REST Framework, Python, PHP, Java, SQL', 'APIs, business logic, authentication, databases and integrations'],
  ['Frontend', 'React, TypeScript, Angular, JavaScript, HTML, CSS', 'Interfaces, responsive UI and full-stack integration'],
  ['Data / AI', 'Python, YOLOv8, EasyOCR, TensorFlow, KNN, Linear Regression, Random Forest', 'Computer vision, OCR, prediction and data processing'],
  ['Networking', 'VLANs, subnetting, inter-VLAN routing, DHCP, DNS, PAT, SSH, Cisco Packet Tracer', 'Network design, simulation and configuration'],
  ['Infrastructure', 'Docker, PostgreSQL, MySQL, Linux, WildFly', 'Deployment, databases, application environments and server-side work'],
]

const repositories = [
  ['Ghneya', 'Music application and data ecosystem focused on Tunisian artists, songs and quiz-oriented discovery.', 'Private · TypeScript', 'https://github.com/Y0U5S3F/Ghneya'],
  ['artist-discovery', 'Artist discovery and data-processing project built around music catalog exploration.', 'Public', 'https://github.com/Y0U5S3F/artist-discovery'],
  ['JumParkRH', 'Repository associated with the HR management work: employee data, attendance and business workflows.', 'Public · JavaScript · ★ 1', 'https://github.com/Y0U5S3F/JumParkRH'],
  ['TimeTrackr', 'Web project centered around time and activity tracking.', 'Public · JavaScript', 'https://github.com/Y0U5S3F/TimeTrackr'],
  ['flexgym-project', 'Gym management application from the university project work.', 'Public · TypeScript · ★ 2', 'https://github.com/Y0U5S3F/flexgym-project'],
  ['youtube-playlist-downloader', 'Python utility project for working with YouTube playlists.', 'Public · Python', 'https://github.com/Y0U5S3F/youtube-playlist-downloader'],
  ['SoaSpring', 'Java project exploring service-oriented application development.', 'Public · Java', 'https://github.com/Y0U5S3F/SoaSpring'],
  ['Portfolio_retro', 'This portfolio theme: deliberately styled like a classic desktop-era web application.', 'Public', 'https://github.com/Y0U5S3F/Portfolio_retro'],
]

const certifications = [
  ['Data Analysis with Python', 'Cognitive Class', 'Dec 2025'],
  ['Machine Learning with Python', 'Cognitive Class', 'Dec 2025'],
]

function Section({ id, title, children }) {
  return (
    <section id={id} className="panel">
      <h2>{title}</h2>
      <div className="body">{children}</div>
    </section>
  )
}

function Tag({ children }) {
  return <span className="tag">{children}</span>
}

function App() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const sections = [...document.querySelectorAll('section[id]')]
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-15% 0px -65% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <div id="app">
      <nav className="navbar" aria-label="Primary navigation">
        {[
          ['home', 'Home'],
          ['projects', 'Projects'],
          ['experience', 'Experience'],
          ['skills', 'Skills'],
          ['repos', 'GitHub'],
          ['contact', 'Contact'],
        ].map(([id, label]) => (
          <a key={id} href={`#${id}`} className={active === id ? 'active' : ''}>
            {label}
          </a>
        ))}
      </nav>

      <h1>
        Youssef Saidani :: Portfolio
        <a href="mailto:youssef.saidani.dev@gmail.com">[ Contact me ]</a>
      </h1>

      <Section id="home" title="About">
        <div className="hero">
          <div>
            <h3>Software engineering with a communications &amp; networking focus.</h3>
            <p>
              I&apos;m a Communications Engineering master&apos;s student at the University of Catania and a full-stack developer.
              My work sits between backend systems, web platforms, computer networks, and software that interacts with real-world devices.
            </p>
            <p>
              I enjoy taking a project from requirements to a working system: designing APIs and databases, building the interface,
              connecting external hardware or services, securing authentication, and deploying the result.
            </p>
            <div className="notice"><b>Current focus:</b> telecommunications &amp; networks, backend engineering, distributed systems, and practical software projects.</div>
          </div>
          <div className="panel profile-panel">
            <h2>Profile</h2>
            <div className="body status">
              <div><b>Location:</b> Catania, Sicily, Italy</div>
              <div><b>Current:</b> MSc Communications Engineering</div>
              <div><b>Base:</b> Computer Science</div>
              <div><b>Role:</b> Freelance Web Developer</div>
              <div><b>Primary:</b> Backend + Full Stack</div>
              <div><b>Also:</b> Networks, AI/CV, systems</div>
              <div><b>Languages:</b> Arabic, French, English</div>
            </div>
          </div>
        </div>
      </Section>

      <section className="panel" aria-label="At a glance">
        <h2>At a glance</h2>
        <div className="body">
          <div className="kpis">
            <div className="kpi">Experience<b>2024 → now</b></div>
            <div className="kpi">Freelance<b>Jun 2025 →</b></div>
            <div className="kpi">MSc<b>2026–2028</b></div>
            <div className="kpi">BSc Computer Science<b>2025</b></div>
            <div className="kpi">Internships<b>2</b></div>
            <div className="kpi">Core stack<b>Django + React</b></div>
          </div>
        </div>
      </section>

      <Section id="projects" title="Featured projects">
        <table className="grid">
          <thead><tr><th>Project</th><th>Description</th><th>Technologies</th></tr></thead>
          <tbody>
            {featuredProjects.map((project) => (
              <tr key={project.title}>
                <td><span className="project-title">{project.title}</span><br /><span className="small">{project.note}</span></td>
                <td>{project.description}</td>
                <td>{project.technologies.map((tech) => <Tag key={tech}>{tech}</Tag>)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section id="experience" title="Experience">
        <table className="grid timeline">
          <thead><tr><th>Period</th><th>Role</th><th>What I worked on</th></tr></thead>
          <tbody>
            {experience.map((item) => (
              <tr key={`${item.period}-${item.role}`}>
                <td>{item.period}</td>
                <td><b>{item.role}</b><br /><span className="small">{item.company}</span></td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section title="Education">
        <table className="grid">
          <thead><tr><th>Period</th><th>Degree</th><th>Institution</th><th>Focus</th></tr></thead>
          <tbody>
            {education.map((item) => (
              <tr key={`${item.period}-${item.institution}`}>
                <td>{item.period}</td>
                <td><b>{item.degree}</b></td>
                <td>{item.institution}</td>
                <td>{item.focus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section id="skills" title="Technical skills">
        <table className="grid">
          <thead><tr><th>Area</th><th>Technologies</th><th>What I use them for</th></tr></thead>
          <tbody>
            {skills.map(([area, technologies, use]) => (
              <tr key={area}><td><b>{area}</b></td><td>{technologies}</td><td>{use}</td></tr>
            ))}
          </tbody>
        </table>
        <div className="section-note">The common thread across these areas is building systems that connect software, data, users and infrastructure.</div>
      </Section>

      <Section title="Certifications">
        <table className="grid">
          <thead><tr><th>Certification</th><th>Provider</th><th>Issued</th></tr></thead>
          <tbody>
            {certifications.map(([name, provider, date]) => (
              <tr key={name}><td><b>{name}</b></td><td>{provider}</td><td>{date}</td></tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section id="repos" title="GitHub :: selected repositories">
        <div className="repo-grid">
          {repositories.map(([name, description, meta, url]) => (
            <div className="repo" key={name}>
              <h3><a href={url} target="_blank" rel="noreferrer">{name}</a></h3>
              <p>{description}</p>
              <div className="meta">{meta}</div>
            </div>
          ))}
        </div>
        <div className="section-note">
          <a href="https://github.com/Y0U5S3F?tab=repositories" target="_blank" rel="noreferrer">View all repositories →</a>
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="contact-box">
          <div>
            <p style={{ marginTop: 0 }}><b>Open to engineering opportunities and freelance work.</b></p>
            <p>Especially interested in backend development, full-stack applications, networks, telecommunications and software systems.</p>
            <p className="links">
              <a href="https://github.com/Y0U5S3F" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/youssef-saidani/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="mailto:youssef.saidani.dev@gmail.com">Email</a>
            </p>
            <p className="small mono">status: open_to_opportunities = true;</p>
          </div>
          <div>
            <table className="grid">
              <tbody>
                <tr><th>Role</th><td>Communications Engineering Master&apos;s Student</td></tr>
                <tr><th>Work</th><td>Freelance Web Developer</td></tr>
                <tr><th>Location</th><td>Catania, Sicily, Italy</td></tr>
                <tr><th>Interests</th><td>Networks · Backend · Distributed Systems · AI/CV</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      <div className="footer">Youssef Saidani :: Software Engineering · Communications Engineering · Catania</div>
    </div>
  )
}

export default App
