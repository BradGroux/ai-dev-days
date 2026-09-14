import { ProgressMeter } from './ProgressMeter'
import type { Location, TripProgress } from '../types'

type SidebarProps = {
  featuredLocations: Location[]
  progress: TripProgress
}

export function Sidebar({ featuredLocations, progress }: SidebarProps) {
  return (
    <aside className="sidebar-shell">
      <div className="sidebar-brand">
        <img className="brand-mark" src="/beaver-badges-logo-128.png" alt="Beaver Badges logo" />
        <div>
          <p>Beaver Badges</p>
          <span>Buc-ee's trip tracker</span>
        </div>
      </div>

      <nav className="sidebar-nav" aria-label="Dashboard sections">
        <a href="#overview" className="nav-item active">Overview</a>
        <a href="#locations" className="nav-item">Locations</a>
        <a href="#badges" className="nav-item">Badge cabinet</a>
      </nav>

      <section className="sidebar-card status-card">
        <p className="sidebar-label">Trip status</p>
        <strong>{progress.completionState}</strong>
        <span>
          {progress.visitedCount} of {progress.totalStops} stops visited
        </span>
        <ProgressMeter value={progress.progressPercent} label="Demo route progress" size="compact" />
      </section>

      <section className="sidebar-card spotlight-card">
        <p className="sidebar-label">Next stops</p>
        {featuredLocations.length > 0 ? (
          <ul>
            {featuredLocations.map((location) => (
              <li key={location.id}>
                <strong>{location.city}</strong>
                <span>{location.region}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="sidebar-copy">Every demo location has been visited. Add more stops to keep the trip going.</p>
        )}
      </section>
    </aside>
  )
}
