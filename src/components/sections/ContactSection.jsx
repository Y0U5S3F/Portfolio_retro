import { profile } from '../../data/profile'
import { Section } from '../common/Section'

export function ContactSection() {
  return (
    <Section id="contact" title="Contact">
      <div className="contact-box">
        <div>
          <p style={{ marginTop: 0 }}><b>Open to engineering opportunities and freelance work.</b></p>
          <p>Especially interested in backend development, full-stack applications, networks, telecommunications and software systems.</p>
          <p className="links">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`mailto:${profile.email}`}>Email</a>
          </p>
          <p className="small mono">status: open_to_opportunities = true;</p>
        </div>

        <div>
          <table className="grid">
            <tbody>
              <tr><th scope="row">Role</th><td>Communications Engineering Master&apos;s Student</td></tr>
              <tr><th scope="row">Work</th><td>Freelance Web Developer</td></tr>
              <tr><th scope="row">Location</th><td>{profile.location}</td></tr>
              <tr><th scope="row">Interests</th><td>Networks · Backend · Distributed Systems · AI/CV</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  )
}
