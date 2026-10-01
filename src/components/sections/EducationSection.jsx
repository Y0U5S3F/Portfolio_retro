import { education } from '../../data/education'
import { DataTable } from '../common/DataTable'
import { Section } from '../common/Section'

export function EducationSection() {
  return (
    <Section id="education" title="Education · newest → oldest">
      <DataTable
        columns={[
          { key: 'period', label: 'Period' },
          { key: 'degree', label: 'Degree' },
          { key: 'institution', label: 'Institution' },
          { key: 'focus', label: 'Focus' },
        ]}
      >
        {education.map((item) => (
          <tr key={`${item.period}-${item.institution}`}>
            <td>{item.period}</td>
            <td><b>{item.degree}</b></td>
            <td>{item.institution}</td>
            <td>{item.focus}</td>
          </tr>
        ))}
      </DataTable>
    </Section>
  )
}
