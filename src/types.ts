export type ServiceStatus = 'Online' | 'Offline'

export interface Service {
  id: number
  name: string
  status: ServiceStatus
  responseTime: number
  lastChecked: string
}
