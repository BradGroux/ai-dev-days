import { useEffect, useMemo, useState } from 'react'
import badgesSeed from '../../data/badges.json'
import locationsSeed from '../../data/locations.json'
import { BadgeCabinet } from './components/BadgeCabinet'
import { HeroSection } from './components/HeroSection'
import { LocationList } from './components/LocationList'
import { Sidebar } from './components/Sidebar'
import { SummaryGrid } from './components/SummaryGrid'
import { TripControls } from './components/TripControls'
import { getRegionFilters, getTripProgress } from './progress'
import { clearSavedLocations, loadSavedLocations, resetLocations, saveLocations } from './storage'
import type { Badge, Location, RegionFilter } from './types'

const allBadges = badgesSeed as Badge[]
const seedLocations = locationsSeed as Location[]

export default function App() {
  const [locations, setLocations] = useState<Location[]>(() => loadSavedLocations(seedLocations))
  const [selectedRegion, setSelectedRegion] = useState<RegionFilter>('All')

  const regions = useMemo(() => getRegionFilters(locations), [locations])
  const progress = useMemo(() => getTripProgress(locations, allBadges), [locations])
  const filteredLocations = useMemo(
    () => (selectedRegion === 'All' ? locations : locations.filter((location) => location.region === selectedRegion)),
    [locations, selectedRegion],
  )
  const featuredLocations = useMemo(
    () => locations.filter((location) => !location.visited).slice(0, 3),
    [locations],
  )

  useEffect(() => {
    saveLocations(locations)
  }, [locations])

  function toggleVisited(id: string) {
    setLocations((current) =>
      current.map((location) =>
        location.id === id
          ? {
              ...location,
              visited: !location.visited,
              visitedAt: location.visited ? undefined : new Date().toISOString().slice(0, 10),
            }
          : location,
      ),
    )
  }

  function resetProgress() {
    clearSavedLocations()
    setLocations(resetLocations(seedLocations))
  }

  return (
    <main className="app-shell">
      <Sidebar featuredLocations={featuredLocations} progress={progress} />

      <div className="main-shell">
        <HeroSection progress={progress} />
        <SummaryGrid
          filteredLocationCount={filteredLocations.length}
          selectedRegion={selectedRegion}
          progress={progress}
        />
        <TripControls
          progress={progress}
          regions={regions}
          selectedRegion={selectedRegion}
          onRegionChange={setSelectedRegion}
          locations={locations}
          onReset={resetProgress}
        />

        <section className="content-grid">
          <LocationList locations={filteredLocations} onToggleVisited={toggleVisited} />
          <BadgeCabinet badges={allBadges} totalStops={progress.totalStops} visitedCount={progress.visitedCount} />
        </section>
      </div>
    </main>
  )
}
