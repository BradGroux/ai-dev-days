import type { Location } from '../types'

type LocationListProps = {
  locations: Location[]
  onToggleVisited: (id: string) => void
}

export function LocationList({ locations, onToggleVisited }: LocationListProps) {
  return (
    <article id="locations" className="panel">
      <div className="panel-header with-kicker">
        <div>
          <p className="panel-kicker">Checkpoint list</p>
          <h2>Locations</h2>
        </div>
        <span>{locations.length} showing</span>
      </div>
      <div className="cards-grid">
        {locations.map((location) => (
          <article key={location.id} className={location.visited ? 'location-card visited' : 'location-card'}>
            <div className="location-main">
              <div className="location-copy-block">
                <div className="location-title-row">
                  <h3>{location.name}</h3>
                  <span className="region-chip">{location.region}</span>
                </div>
                <p>
                  {location.city}, {location.state}
                </p>
                {location.visitedAt ? <span className="visit-date">Visited {location.visitedAt}</span> : null}
              </div>

              <label className={location.visited ? 'toggle checked' : 'toggle'}>
                <input
                  type="checkbox"
                  checked={location.visited}
                  onChange={() => onToggleVisited(location.id)}
                />
                <span>{location.visited ? 'Visited' : 'Mark visited'}</span>
              </label>
            </div>
          </article>
        ))}
      </div>
    </article>
  )
}
