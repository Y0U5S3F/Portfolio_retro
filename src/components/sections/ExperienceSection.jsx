import { experience } from '../../data/experience'
import { DataTable } from '../common/DataTable'
import { Section } from '../common/Section'

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience · newest → oldest">
      <DataTable
        className="timeline"
        columns={[
          { key: 'period', label: 'Period' },
          { key: 'role', label: 'Role' },
          { key: 'work', label: 'What I worked on' },
        ]}
      >
        {experience.map((item) => (
          <tr key={`${item.period}-${item.role}`}>
            <td>{item.period}</td>
            <td>
              <b>{item.role}</b>
              <br />
              <span className="small">{item.company}</span>
            </td>
            <td>{item.description}</td>
          </tr>
        ))}
      </DataTable>
    </Section>
  )
}
