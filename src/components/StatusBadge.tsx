import type { ServiceStatus } from '../types'

interface StatusBadgeProps {
  status: ServiceStatus
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`status-badge status-badge--${status.toLowerCase()}`}>
      <span className="status-dot" aria-hidden="true" />
      {status}
    </span>
  )
}
