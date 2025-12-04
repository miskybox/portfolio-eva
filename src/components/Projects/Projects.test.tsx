import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Projects from './Projects'

// Mock CSS modules
vi.mock('./Projects.module.css', () => ({
  default: {
    projects: 'projects',
    container: 'container',
    title: 'title',
    projectsGrid: 'projectsGrid',
    projectCard: 'projectCard',
    featured: 'featured',
    cardHeader: 'cardHeader',
    projectTitle: 'projectTitle',
    featuredBadge: 'featuredBadge',
    projectDescription: 'projectDescription',
    techStack: 'techStack',
    techTag: 'techTag',
    cardFooter: 'cardFooter',
    projectLink: 'projectLink',
    linkIcon: 'linkIcon',
  },
}))

describe('Projects Component', () => {
  it('should render the projects section', () => {
    render(<Projects />)
    expect(screen.getByText(/FEATURED PROJECTS/i)).toBeInTheDocument()
  })

  it('should display Urdimbre project', () => {
    render(<Projects />)
    expect(screen.getByText(/Urdimbre/i)).toBeInTheDocument()
  })

  it('should display Forum Viajeros project', () => {
    render(<Projects />)
    expect(screen.getByText(/Forum Viajeros/i)).toBeInTheDocument()
  })

  it('should display Playwright QA Tests project', () => {
    render(<Projects />)
    expect(screen.getByText(/Playwright QA Tests/i)).toBeInTheDocument()
  })

  it('should have featured badges for featured projects', () => {
    render(<Projects />)
    const badges = screen.getAllByText('FEATURED')
    expect(badges.length).toBeGreaterThanOrEqual(2)
  })

  it('should display technology tags', () => {
    render(<Projects />)
    expect(screen.getAllByText('React').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Java')).toBeInTheDocument()
    expect(screen.getByText('Spring Boot')).toBeInTheDocument()
    expect(screen.getByText('Playwright')).toBeInTheDocument()
  })

  it('should have View Project links', () => {
    render(<Projects />)
    const projectLinks = screen.getAllByText('View Project')
    expect(projectLinks.length).toBe(3)
  })

  it('should have correct GitHub links', () => {
    render(<Projects />)
    const links = screen.getAllByRole('link')
    expect(links[0]).toHaveAttribute('href', expect.stringContaining('github.com'))
  })

  it('should have section with correct id', () => {
    const { container } = render(<Projects />)
    expect(container.querySelector('#projects')).toBeInTheDocument()
  })
})
