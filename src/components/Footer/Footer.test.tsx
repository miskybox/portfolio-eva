import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

// Mock CSS modules
vi.mock('./Footer.module.css', () => ({
  default: {
    footer: 'footer',
    container: 'container',
    content: 'content',
    brand: 'brand',
    brandName: 'brandName',
    brandSubtitle: 'brandSubtitle',
    copyright: 'copyright',
    tech: 'tech',
    footerGlow: 'footerGlow',
  },
}))

describe('Footer Component', () => {
  it('should render the footer', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('should display the brand name', () => {
    render(<Footer />)
    expect(screen.getByText('EVA SISALLI GUZMÁN')).toBeInTheDocument()
  })

  it('should display Full Stack Developer subtitle', () => {
    render(<Footer />)
    expect(screen.getByText('Full Stack Developer')).toBeInTheDocument()
  })

  it('should display copyright with current year', () => {
    render(<Footer />)
    const currentYear = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument()
  })

  it('should display "All rights reserved"', () => {
    render(<Footer />)
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument()
  })

  it('should display tech stack info', () => {
    render(<Footer />)
    expect(screen.getByText(/Built with React \+ Vite/i)).toBeInTheDocument()
  })
})
