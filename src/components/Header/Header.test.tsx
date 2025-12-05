import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from './Header'

// Mock CSS modules
vi.mock('./Header.module.css', () => ({
  default: {
    header: 'header',
    scrolled: 'scrolled',
    container: 'container',
    logo: 'logo',
    logoText: 'logoText',
    nav: 'nav',
    navLink: 'navLink',
  },
}))

describe('Header Component', () => {
  it('should render the header', () => {
    render(<Header />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('should display the logo text', () => {
    render(<Header />)
    expect(screen.getByText('ESG')).toBeInTheDocument()
  })

  it('should render navigation buttons', () => {
    render(<Header />)
    expect(screen.getByRole('button', { name: /ABOUT/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /SKILLS/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /PROJECTS/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /CONTACT/i })).toBeInTheDocument()
  })

  it('should have navigation element', () => {
    render(<Header />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})
