import type { Location } from './types'

const storageKey = 'beaver-badges.progress.v1'

type StoredLocationProgress = {
  id: string
  visited: boolean
  visitedAt?: string
}

type StoredProgress = {
  locations: StoredLocationProgress[]
}

export function loadSavedLocations(seedLocations: Location[]): Location[] {
  if (typeof window === 'undefined') return seedLocations

  try {
    const raw = window.localStorage.getItem(storageKey)
    if (!raw) return seedLocations

    const parsed = JSON.parse(raw) as StoredProgress
    if (!Array.isArray(parsed.locations)) return seedLocations

    const progressById = new Map(parsed.locations.map((location) => [location.id, location]))
    return seedLocations.map((location) => {
      const savedLocation = progressById.get(location.id)
      if (!savedLocation) return location

      return {
        ...location,
        visited: savedLocation.visited,
        visitedAt: savedLocation.visitedAt,
      }
    })
  } catch {
    return seedLocations
  }
}

export function saveLocations(locations: Location[]) {
  if (typeof window === 'undefined') return

  const payload: StoredProgress = {
    locations: locations.map(({ id, visited, visitedAt }) => ({ id, visited, visitedAt })),
  }
  window.localStorage.setItem(storageKey, JSON.stringify(payload))
}

export function resetLocations(seedLocations: Location[]): Location[] {
  return seedLocations.map(({ visitedAt, ...location }) => ({
    ...location,
    visited: false,
  }))
}

export function clearSavedLocations() {
  if (typeof window === 'undefined') return
  window.localStorage.removeItem(storageKey)
}
