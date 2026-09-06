import { useState } from 'react'
import { initialServices } from '../data/services'
import type { Service } from '../types'
import { ServiceCard } from './ServiceCard'

const randomResponseTime = () => Math.floor(Math.random() * 140) + 60

export function Dashboard() {
  const [services, setServices] = useState<Service[]>(initialServices)

  const refreshServices = () => {
    const checkedAt = new Date().toISOString()

    setServices((current) =>
      current.map((service) => ({
        ...service,
        responseTime: service.status === 'Online' ? randomResponseTime() : 0,
        lastChecked: checkedAt,
      })),
    )
  }

  const onlineCount = services.filter(({ status }) => status === 'Online').length

  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <div>
          <p className="eyebrow">System overview</p>
          <h1>API Status</h1>
          <p className="subtitle">Live health and performance across your services.</p>
        </div>
        <button type="button" onClick={refreshServices}>
          <span aria-hidden="true">↻</span> Refresh
        </button>
      </header>

      <section className="summary" aria-label="System summary">
        <span className="summary-dot" aria-hidden="true" />
        <strong>{onlineCount} of {services.length} services operational</strong>
      </section>

      <section className="service-grid" aria-label="Services">
        {services.map((service) => <ServiceCard key={service.id} service={service} />)}
      </section>
    </main>
  )
}
