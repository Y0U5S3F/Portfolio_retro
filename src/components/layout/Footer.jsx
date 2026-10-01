import { profile } from '../../data/profile'

export function Footer() {
  return (
    <footer className="footer">
      {profile.name} :: Software Engineering · Communications Engineering · Catania
    </footer>
  )
}
