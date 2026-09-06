import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Dashboard } from './Dashboard'

describe('Dashboard', () => {
  afterEach(() => {
    cleanup()
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  it('shows all five services and their status summary', () => {
    render(<Dashboard />)

    expect(screen.getByRole('heading', { name: 'API Status' })).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(5)
    expect(screen.getByText('4 of 5 services operational')).toBeInTheDocument()
    expect(screen.getByText('Authentication API')).toBeInTheDocument()
    expect(screen.getByText('Notifications API')).toBeInTheDocument()
  })

  it('updates response times and last checked time on refresh', () => {
    vi.useFakeTimers()
    vi.spyOn(Math, 'random').mockReturnValue(0.5)
    const refreshedAt = new Date('2026-09-06T12:34:56.000Z')
    const expectedTime = new Intl.DateTimeFormat(undefined, {
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
    }).format(refreshedAt)
    vi.setSystemTime(refreshedAt)
    render(<Dashboard />)

    expect(screen.getByText('82 ms')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: /refresh/i }))

    expect(screen.queryByText('82 ms')).not.toBeInTheDocument()
    expect(screen.getAllByText('130 ms')).toHaveLength(4)
    expect(screen.getAllByText(expectedTime)).toHaveLength(5)
  })
})
