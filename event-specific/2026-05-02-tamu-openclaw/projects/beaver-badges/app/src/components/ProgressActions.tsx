import { useMemo, useState } from 'react'
import type { Location, TripProgress } from '../types'

type ProgressActionsProps = {
  locations: Location[]
  progress: TripProgress
  onReset: () => void
}

export function ProgressActions({ locations, progress, onReset }: ProgressActionsProps) {
  const [exportOpen, setExportOpen] = useState(false)
  const exportPayload = useMemo(
    () =>
      JSON.stringify(
        {
          exportedAt: new Date().toISOString(),
          visitedCount: progress.visitedCount,
          totalStops: progress.totalStops,
          locations: locations.map(({ id, name, city, state, region, visited, visitedAt }) => ({
            id,
            name,
            city,
            state,
            region,
            visited,
            visitedAt,
          })),
        },
        null,
        2,
      ),
    [locations, progress.totalStops, progress.visitedCount],
  )

  return (
    <div className="progress-actions">
      <button
        type="button"
        className="utility-button"
        onClick={() => setExportOpen((current) => !current)}
      >
        {exportOpen ? 'Hide export' : 'Export JSON'}
      </button>
      <button
        type="button"
        className="utility-button danger"
        onClick={onReset}
        disabled={progress.visitedCount === 0}
      >
        Reset progress
      </button>

      {exportOpen ? (
        <label className="export-panel">
          <span>Local progress export</span>
          <textarea aria-label="Exported progress JSON" readOnly value={exportPayload} />
        </label>
      ) : null}
    </div>
  )
}
