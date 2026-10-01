import { selectedRepositories } from '../../data/projects'
import { Section } from '../common/Section'

export function GitHubSection() {
  return (
    <Section id="repos" title="GitHub :: selected public repositories">
      <div className="repo-grid">
        {selectedRepositories.map((repository) => (
          <article className="repo" key={repository.name}>
            <h3>
              <a href={repository.url} target="_blank" rel="noreferrer">
                {repository.name}
              </a>
            </h3>
            <p>{repository.description}</p>
            <div className="meta">{repository.meta}</div>
          </article>
        ))}
      </div>
      <div className="section-note">
        <a href="https://github.com/Y0U5S3F?tab=repositories" target="_blank" rel="noreferrer">
          View all repositories →
        </a>
      </div>
    </Section>
  )
}
