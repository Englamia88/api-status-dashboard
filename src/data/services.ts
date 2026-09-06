import type { Service } from '../types'

const initialTime = '2026-09-06T10:00:00.000Z'

export const initialServices: Service[] = [
  { id: 1, name: 'Authentication API', status: 'Online', responseTime: 82, lastChecked: initialTime },
  { id: 2, name: 'Payments API', status: 'Online', responseTime: 126, lastChecked: initialTime },
  { id: 3, name: 'Notifications API', status: 'Offline', responseTime: 0, lastChecked: initialTime },
  { id: 4, name: 'User Profiles API', status: 'Online', responseTime: 94, lastChecked: initialTime },
  { id: 5, name: 'Analytics API', status: 'Online', responseTime: 158, lastChecked: initialTime },
]
