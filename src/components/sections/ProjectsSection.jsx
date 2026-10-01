import { featuredProjects } from '../../data/projects'
import { DataTable } from '../common/DataTable'
import { Section } from '../common/Section'
import { Tag } from '../common/Tag'

export function ProjectsSection() {
  return (
    <Section id="projects" title="Featured projects · newest → oldest">
      <DataTable
        columns={[
          { key: 'project', label: 'Project' },
          { key: 'description', label: 'Description' },
          { key: 'technologies', label: 'Technologies' },
        ]}
      >
        {featuredProjects.map((project) => (
          <tr key={project.title}>
            <td>
              <span className="project-title">{project.title}</span>
              <br />
              <span className="small">{project.note}</span>
              {project.repoUrl && (
                <>
                  <br />
                  <a href={project.repoUrl} target="_blank" rel="noreferrer" className="small">
                    {project.repoLabel}
                  </a>
                </>
              )}
            </td>
            <td>{project.description}</td>
            <td>
              <div className="tag-list">
                {project.technologies.map((technology) => (
                  <Tag key={technology}>{technology}</Tag>
                ))}
              </div>
            </td>
          </tr>
        ))}
      </DataTable>
      <p className="section-note">Projects are intentionally presented newest → oldest.</p>
    </Section>
  )
}
