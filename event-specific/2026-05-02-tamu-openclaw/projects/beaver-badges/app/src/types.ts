export type Region = 'Central Texas' | 'Gulf Coast' | 'North Texas'

export type RegionFilter = 'All' | Region

export type Location = {
  id: string
  name: string
  city: string
  state: string
  region: Region
  visited: boolean
  visitedAt?: string
}

export type Badge = {
  id: string
  name: string
  requiredVisits: number
  description: string
  roadmap?: boolean
}

export type TripProgress = {
  visitedCount: number
  totalStops: number
  progressPercent: number
  unlockedBadges: Badge[]
  lockedBadges: Badge[]
  reachableBadges: Badge[]
  nextReachableBadge: Badge | undefined
  nextRoadmapBadge: Badge | undefined
  nextBadgeProgress: number
  remainingForNextBadge: number
  routeComplete: boolean
  completionState: string
}
