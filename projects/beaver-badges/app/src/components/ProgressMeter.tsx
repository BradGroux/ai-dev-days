type ProgressMeterProps = {
  value: number
  label: string
  size?: 'compact' | 'large'
  tone?: 'default' | 'warm'
}

export function ProgressMeter({ value, label, size = 'large', tone = 'default' }: ProgressMeterProps) {
  const safeValue = Math.max(0, Math.min(value, 100))
  const meterClassName = `progress-meter ${size}`
  const fillClassName = tone === 'warm' ? 'progress-meter-fill warm' : 'progress-meter-fill'

  return (
    <div
      className={meterClassName}
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(safeValue)}
    >
      <div className={fillClassName} style={{ width: `${safeValue}%` }} />
    </div>
  )
}
