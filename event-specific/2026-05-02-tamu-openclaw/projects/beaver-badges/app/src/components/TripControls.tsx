import { formatStops } from '../progress'
import type { Location, RegionFilter, TripProgress } from '../types'
import { ProgressActions } from './ProgressActions'
import { ProgressMeter } from './ProgressMeter'

type TripControlsProps = {
  progress: TripProgress
  regions: RegionFilter[]
  selectedRegion: RegionFilter
  onRegionChange: (region: RegionFilter) => void
  locations: Location[]
  onReset: () => void
}

export function TripControls({
  progress,
  regions,
  selectedRegion,
  onRegionChange,
  locations,
  onReset,
}: TripControlsProps) {
  const goalName = progress.nextReachableBadge?.name ?? (progress.routeComplete ? 'Demo route complete' : 'Every badge earned')
  const goalCopy = progress.nextReachableBadge
    ? `Visit ${formatStops(progress.nextReachableBadge.requiredVisits)} to earn this badge.`
    : progress.nextRoadmapBadge
      ? `${progress.nextRoadmapBadge.name} is a roadmap badge. Add more locations before it becomes reachable.`
      : 'You have cleared every badge in the current demo.'

  return (
    <section className="dashboard-grid">
      <article className="panel progress-panel">
        <div className="panel-header with-kicker">
          <div>
            <p className="panel-kicker">Current badge goal</p>
            <h2>Buc-ee's road trip</h2>
          </div>
          <span>{progress.visitedCount} / {progress.totalStops} stops</span>
        </div>
        <div className="progress-callout">
          <div className="progress-copy-block">
            <strong>{goalName}</strong>
            <p>{goalCopy}</p>
          </div>
          <div className="progress-ring-card">
            <span>{progress.progressPercent.toFixed(0)}%</span>
            <small>stops visited</small>
          </div>
        </div>
        <ProgressMeter value={progress.progressPercent} label="Road trip completion" />
      </article>

      <article className="panel filters-panel">
        <div className="panel-header with-kicker">
          <div>
            <p className="panel-kicker">Browse the route</p>
            <h2>Filter by region</h2>
          </div>
          <span>{selectedRegion}</span>
        </div>
        <div className="filter-group">
          {regions.map((region) => (
            <button
              key={region}
              type="button"
              className={selectedRegion === region ? 'filter active' : 'filter'}
              aria-pressed={selectedRegion === region}
              onClick={() => onRegionChange(region)}
            >
              {region}
            </button>
          ))}
        </div>
        <ProgressActions locations={locations} progress={progress} onReset={onReset} />
      </article>
    </section>
  )
}
