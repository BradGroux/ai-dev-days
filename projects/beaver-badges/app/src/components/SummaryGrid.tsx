import { formatStops } from '../progress'
import type { RegionFilter, TripProgress } from '../types'
import { ProgressMeter } from './ProgressMeter'

type SummaryGridProps = {
  filteredLocationCount: number
  selectedRegion: RegionFilter
  progress: TripProgress
}

export function SummaryGrid({ filteredLocationCount, selectedRegion, progress }: SummaryGridProps) {
  const nextBadgeName = progress.nextReachableBadge?.name ?? (progress.routeComplete ? 'Demo route complete' : 'Add locations')
  const nextBadgeTrend = progress.nextReachableBadge
    ? `${formatStops(progress.nextReachableBadge.requiredVisits)} needed`
    : progress.nextRoadmapBadge
      ? `${progress.nextRoadmapBadge.name} needs more route data`
      : 'Complete'
  const nextBadgeCopy = progress.nextReachableBadge
    ? `${formatStops(progress.remainingForNextBadge)} until you earn this badge.`
    : 'You have unlocked every badge available in the current demo data.'

  return (
    <section className="summary-grid" aria-label="Progress summary">
      <article className="summary-card emphasis-card">
        <div className="summary-topline">
          <span className="summary-label">Buc-ee's stops visited</span>
          <span className="summary-trend positive">{progress.visitedCount === 0 ? 'First stop' : `+${progress.visitedCount} visited`}</span>
        </div>
        <strong>{progress.visitedCount}</strong>
        <p>Mark each location as visited and watch your badge count grow.</p>
      </article>

      <article className="summary-card">
        <div className="summary-topline">
          <span className="summary-label">Next badge</span>
          <span className="summary-trend">{nextBadgeTrend}</span>
        </div>
        <strong>{nextBadgeName}</strong>
        <ProgressMeter value={progress.nextBadgeProgress} label="Next reachable badge progress" size="compact" tone="warm" />
        <p>{nextBadgeCopy}</p>
      </article>

      <article className="summary-card">
        <div className="summary-topline">
          <span className="summary-label">Showing region</span>
          <span className="summary-trend">{selectedRegion}</span>
        </div>
        <strong>{filteredLocationCount}</strong>
        <p>Filter the Buc-ee's list by region when you want to plan one part of the trip at a time.</p>
      </article>
    </section>
  )
}
