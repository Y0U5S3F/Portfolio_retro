import { profile } from '../../data/profile'
import { Section } from '../common/Section'

export function ProfileSection() {
  return (
    <Section id="home" title="About">
      <div className="hero">
        <div>
          <h3>{profile.title}</h3>
          <p>
            I&apos;m a Communications Engineering master&apos;s student at the University of Catania and a full-stack developer. {profile.summary}
          </p>
          <p>
            I enjoy taking a project from requirements to a working system: designing APIs and databases, building the interface, connecting external hardware or services, securing authentication, and deploying the result.
          </p>
          <div className="notice">
            <b>Current focus:</b> telecommunications &amp; networks, backend engineering, distributed systems, and practical software projects.
          </div>
        </div>

        <div className="panel profile-panel">
          <h2>Profile</h2>
          <div className="body status">
            <div><b>Location:</b> {profile.location}</div>
            <div><b>Current:</b> MSc Communications Engineering</div>
            <div><b>Base:</b> Computer Science</div>
            <div><b>Role:</b> Freelance Web Developer</div>
            <div><b>Primary:</b> Full Stack</div>
            <div><b>Also:</b> Networks, AI/CV, systems</div>
            <div><b>Languages:</b> Arabic, French, English</div>
          </div>
        </div>
      </div>
    </Section>
  )
}
