import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ThemeToggle from './ThemeToggle'

// Mock CSS modules
vi.mock('./ThemeToggle.module.css', () => ({
  default: {
    toggle: 'toggle',
  },
}))

describe('ThemeToggle Component', () => {
  it('should render the toggle button', () => {
    const mockToggle = vi.fn()
    render(<ThemeToggle isDark={true} onToggle={mockToggle} />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should show sun icon and "Switch to light mode" label when dark mode', () => {
    const mockToggle = vi.fn()
    render(<ThemeToggle isDark={true} onToggle={mockToggle} />)
    expect(screen.getByLabelText('Switch to light mode')).toBeInTheDocument()
    expect(screen.getByTitle('Light mode')).toBeInTheDocument()
  })

  it('should show moon icon and "Switch to dark mode" label when light mode', () => {
    const mockToggle = vi.fn()
    render(<ThemeToggle isDark={false} onToggle={mockToggle} />)
    expect(screen.getByLabelText('Switch to dark mode')).toBeInTheDocument()
    expect(screen.getByTitle('Dark mode')).toBeInTheDocument()
  })

  it('should call onToggle when clicked', () => {
    const mockToggle = vi.fn()
    render(<ThemeToggle isDark={true} onToggle={mockToggle} />)
    fireEvent.click(screen.getByRole('button'))
    expect(mockToggle).toHaveBeenCalledTimes(1)
  })

  it('should have accessible button with aria-label', () => {
    const mockToggle = vi.fn()
    render(<ThemeToggle isDark={true} onToggle={mockToggle} />)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-label', 'Switch to light mode')
  })
})
