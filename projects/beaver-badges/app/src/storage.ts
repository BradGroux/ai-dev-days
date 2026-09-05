import type { Location } from './types.ts'

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

    const parsed = JSON.parse(raw)
    if (!parsed || !Array.isArray(parsed.locations)) return seedLocations

    const valid = parsed.locations.filter((value: unknown): value is StoredLocationProgress => {
      if (!value || typeof value !== 'object') return false
      const item = value as Partial<StoredLocationProgress>
      return typeof item.id === 'string' && typeof item.visited === 'boolean' &&
        (item.visitedAt === undefined || (typeof item.visitedAt === 'string' &&
          /^\d{4}-\d{2}-\d{2}$/.test(item.visitedAt) &&
          !Number.isNaN(Date.parse(item.visitedAt)) &&
          new Date(item.visitedAt).toISOString().slice(0, 10) === item.visitedAt))
    })
    const progressById = new Map<string, StoredLocationProgress>(valid.map((item: StoredLocationProgress) => [item.id, item]))
    return seedLocations.map((location) => {
      const savedLocation = progressById.get(location.id)
      if (!savedLocation) return location

      return {
        ...location,
        visited: savedLocation.visited,
        visitedAt: savedLocation.visited ? savedLocation.visitedAt : undefined,
      }
    })
  } catch {
    return seedLocations
  }
}

export function saveLocations(locations: Location[]) {
  if (typeof window === 'undefined') return false

  const payload: StoredProgress = {
    locations: locations.map(({ id, visited, visitedAt }) => ({ id, visited, visitedAt })),
  }
  try {
    window.localStorage.setItem(storageKey, JSON.stringify(payload))
    return true
  } catch {
    return false
  }
}

export function resetLocations(seedLocations: Location[]): Location[] {
  return seedLocations.map(({ visitedAt, ...location }) => ({
    ...location,
    visited: false,
  }))
}

export function clearSavedLocations() {
  if (typeof window === 'undefined') return false
  try {
    window.localStorage.removeItem(storageKey)
    return true
  } catch {
    return false
  }
}
