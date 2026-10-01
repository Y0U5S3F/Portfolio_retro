import { profile } from '../../data/profile'

export function SiteHeader() {
  return (
    <header className="site-header">
      <h1>
        {profile.name} :: Portfolio
        <a href={`mailto:${profile.email}`} className="header-action">
          [ Contact me ]
        </a>
      </h1>
    </header>
  )
}
