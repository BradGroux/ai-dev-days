import type { Badge, Location, RegionFilter, TripProgress } from './types'

export function getRegionFilters(locations: Location[]): RegionFilter[] {
  const regions = Array.from(new Set(locations.map((location) => location.region))).sort()
  return ['All', ...regions]
}

export function getTripProgress(locations: Location[], badges: Badge[]): TripProgress {
  const sortedBadges = [...badges].sort((a, b) => a.requiredVisits - b.requiredVisits)
  const visitedCount = locations.filter((location) => location.visited).length
  const totalStops = locations.length
  const routeComplete = totalStops > 0 && visitedCount === totalStops
  const progressPercent = totalStops === 0 ? 0 : Math.min((visitedCount / totalStops) * 100, 100)
  const unlockedBadges = sortedBadges.filter((badge) => visitedCount >= badge.requiredVisits)
  const lockedBadges = sortedBadges.filter((badge) => visitedCount < badge.requiredVisits)
  const reachableBadges = sortedBadges.filter((badge) => !badge.roadmap && badge.requiredVisits <= totalStops)
  const nextReachableBadge = lockedBadges.find((badge) => !badge.roadmap && badge.requiredVisits <= totalStops)
  const nextRoadmapBadge = lockedBadges.find((badge) => badge.roadmap || badge.requiredVisits > totalStops)
  const remainingForNextBadge = nextReachableBadge
    ? Math.max(nextReachableBadge.requiredVisits - visitedCount, 0)
    : 0
  const nextBadgeProgress = nextReachableBadge
    ? Math.min((visitedCount / nextReachableBadge.requiredVisits) * 100, 100)
    : 100

  const completionState =
    visitedCount === 0
      ? 'Ready for your first stop'
      : routeComplete
        ? 'Demo route complete'
        : 'Road trip in progress'

  return {
    visitedCount,
    totalStops,
    progressPercent,
    unlockedBadges,
    lockedBadges,
    reachableBadges,
    nextReachableBadge,
    nextRoadmapBadge,
    nextBadgeProgress,
    remainingForNextBadge,
    routeComplete,
    completionState,
  }
}

export function formatStops(count: number) {
  return `${count} stop${count === 1 ? '' : 's'}`
}
