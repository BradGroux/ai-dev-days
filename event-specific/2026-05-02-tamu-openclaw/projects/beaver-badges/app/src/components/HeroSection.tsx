import { formatStops } from '../progress'
import type { TripProgress } from '../types'
import { ProgressMeter } from './ProgressMeter'

type HeroSectionProps = {
  progress: TripProgress
}

export function HeroSection({ progress }: HeroSectionProps) {
  const nextBadgeMessage = progress.nextReachableBadge
    ? `${formatStops(progress.remainingForNextBadge)} to earn ${progress.nextReachableBadge.name}.`
    : progress.routeComplete
      ? 'You cleared every badge available in this demo route. Add more locations to chase the roadmap badges.'
      : 'Add demo stops to start earning badges.'

  return (
    <section id="overview" className="hero-shell">
      <div className="hero-copy-block">
        <p className="eyebrow">Buc-ee's Badge Tracker</p>
        <div className="hero-title-row">
          <img src="/beaver-badges-logo-256.png" alt="" aria-hidden="true" />
          <h1>Track your Buc-ee's stops and earn badges.</h1>
        </div>
        <p className="hero-copy">
          Mark the Buc-ee's locations you've visited, see how close you are to the next badge, and pick the next stop for your Texas road trip.
        </p>
        <div className="hero-actions">
          <a href="#locations" className="hero-action primary">Choose stops</a>
          <a href="#badges" className="hero-action secondary">See badges</a>
        </div>
      </div>

      <div className="hero-highlight-card">
        <div className="hero-highlight-header">
          <span className="pill">Trip snapshot</span>
          <span className="hero-highlight-state">{progress.completionState}</span>
        </div>
        <div className="hero-stat-row">
          <div>
            <span>Stops visited</span>
            <strong>{progress.progressPercent.toFixed(0)}%</strong>
          </div>
          <div>
            <span>Badges earned</span>
            <strong>{progress.unlockedBadges.length}</strong>
          </div>
        </div>
        <ProgressMeter value={progress.progressPercent} label="Stops visited" />
        <p className="hero-highlight-copy">{nextBadgeMessage}</p>
      </div>
    </section>
  )
}
