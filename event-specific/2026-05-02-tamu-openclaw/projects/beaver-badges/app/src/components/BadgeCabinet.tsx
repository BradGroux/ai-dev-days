import type { Badge } from '../types'
import { formatStops } from '../progress'

type BadgeCabinetProps = {
  badges: Badge[]
  totalStops: number
  visitedCount: number
}

export function BadgeCabinet({ badges, totalStops, visitedCount }: BadgeCabinetProps) {
  const unlockedCount = badges.filter((badge) => visitedCount >= badge.requiredVisits).length

  return (
    <article id="badges" className="panel">
      <div className="panel-header with-kicker">
        <div>
          <p className="panel-kicker">Milestone ladder</p>
          <h2>Badge cabinet</h2>
        </div>
        <span>{unlockedCount} unlocked</span>
      </div>
      <div className="badge-stack">
        {badges.map((badge) => {
          const unlocked = visitedCount >= badge.requiredVisits
          const roadmap = badge.roadmap === true || badge.requiredVisits > totalStops

          return (
            <article key={badge.id} className={unlocked ? 'badge-card unlocked' : 'badge-card'}>
              <div className="badge-icon">{unlocked ? '★' : '◎'}</div>
              <div className="badge-content">
                <div className="badge-title-row">
                  <h3>{badge.name}</h3>
                  <span>{roadmap ? 'Roadmap' : formatStops(badge.requiredVisits)}</span>
                </div>
                <p>{roadmap ? `${badge.description} Add more demo locations to make this badge reachable.` : badge.description}</p>
              </div>
            </article>
          )
        })}
      </div>
    </article>
  )
}
