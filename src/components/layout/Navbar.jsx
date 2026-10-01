import { navigation } from '../../data/navigation'

export function Navbar({ activeSection }) {
  return (
    <nav className="navbar" aria-label="Primary navigation">
      {navigation.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={activeSection === id ? 'active' : ''}
          aria-current={activeSection === id ? 'page' : undefined}
        >
          {label}
        </a>
      ))}
    </nav>
  )
}
