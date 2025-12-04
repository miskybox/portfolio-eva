import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import About from './About'

// Mock CSS modules
vi.mock('./About.module.css', () => ({
  default: {
    about: 'about',
    container: 'container',
    sectionTitle: 'sectionTitle',
    content: 'content',
    text: 'text',
    info: 'info',
    infoItem: 'infoItem',
  },
}))

describe('About Component', () => {
  it('should render the about section', () => {
    render(<About />)
    expect(screen.getByText(/ABOUT ME/i)).toBeInTheDocument()
  })

  it('should display professional profile text', () => {
    render(<About />)
    expect(screen.getByText(/Junior Full Stack Developer/i)).toBeInTheDocument()
  })

  it('should mention key technologies', () => {
    render(<About />)
    const javaElements = screen.getAllByText(/Java/i)
    expect(javaElements.length).toBeGreaterThan(0)
  })

  it('should mention QA Automation', () => {
    render(<About />)
    const qaElements = screen.getAllByText(/QA Automation/i)
    expect(qaElements.length).toBeGreaterThan(0)
  })

  it('should mention Ciberseguridad/OWASP', () => {
    render(<About />)
    expect(screen.getByText(/OWASP/i)).toBeInTheDocument()
  })

  it('should display experience section heading', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /EXPERIENCE/i })).toBeInTheDocument()
  })

  it('should display Basetis experience', () => {
    render(<About />)
    expect(screen.getByText(/Basetis/i)).toBeInTheDocument()
  })

  it('should have section with correct id', () => {
    const { container } = render(<About />)
    expect(container.querySelector('#about')).toBeInTheDocument()
  })
})
