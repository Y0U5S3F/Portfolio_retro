import { skills } from '../../data/skills'
import { DataTable } from '../common/DataTable'
import { Section } from '../common/Section'

export function SkillsSection() {
  return (
    <Section id="skills" title="Technical skills">
      <DataTable
        columns={[
          { key: 'area', label: 'Area' },
          { key: 'technologies', label: 'Technologies' },
          { key: 'use', label: 'What I use them for' },
        ]}
      >
        {skills.map((skill) => (
          <tr key={skill.area}>
            <td><b>{skill.area}</b></td>
            <td>{skill.technologies}</td>
            <td>{skill.use}</td>
          </tr>
        ))}
      </DataTable>
      <div className="section-note">
        The common thread across these areas is building systems that connect software, data, users and infrastructure.
      </div>
    </Section>
  )
}
