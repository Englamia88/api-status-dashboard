import type { Service } from '../types'
import { StatusBadge } from './StatusBadge'

interface ServiceCardProps {
  service: Service
}

function formatTime(value: string) {
  return new Intl.DateTimeFormat(undefined, {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
  }).format(new Date(value))
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="service-card">
      <div className="service-heading">
        <h2>{service.name}</h2>
        <StatusBadge status={service.status} />
      </div>
      <dl className="service-details">
        <div>
          <dt>Response time</dt>
          <dd>{service.status === 'Online' ? `${service.responseTime} ms` : 'Unavailable'}</dd>
        </div>
        <div>
          <dt>Last checked</dt>
          <dd>{formatTime(service.lastChecked)}</dd>
        </div>
      </dl>
    </article>
  )
}
