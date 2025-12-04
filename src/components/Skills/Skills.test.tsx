import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Skills from './Skills'

// Mock CSS modules
vi.mock('./Skills.module.css', () => ({
  default: {
    skills: 'skills',
    container: 'container',
    sectionTitle: 'sectionTitle',
    grid: 'grid',
    category: 'category',
    categoryTitle: 'categoryTitle',
    skillsList: 'skillsList',
    skill: 'skill',
    skillName: 'skillName',
    progressBar: 'progressBar',
    progress: 'progress',
    categoryIcon: 'categoryIcon',
  },
}))

describe('Skills Component', () => {
  it('should render the skills section', () => {
    render(<Skills />)
    expect(screen.getByText(/HABILIDADES TÉCNICAS/i)).toBeInTheDocument()
  })

  it('should display Frontend category', () => {
    render(<Skills />)
    expect(screen.getByText('Frontend')).toBeInTheDocument()
  })

  it('should display Backend category', () => {
    render(<Skills />)
    expect(screen.getByText('Backend')).toBeInTheDocument()
  })

  it('should display QA & Testing category', () => {
    render(<Skills />)
    expect(screen.getByText('QA & Testing')).toBeInTheDocument()
  })

  it('should display DevOps & Cloud category', () => {
    render(<Skills />)
    expect(screen.getByText('DevOps & Cloud')).toBeInTheDocument()
  })

  it('should display Ciberseguridad category', () => {
    render(<Skills />)
    expect(screen.getByText('Ciberseguridad')).toBeInTheDocument()
  })

  it('should display Herramientas category', () => {
    render(<Skills />)
    expect(screen.getByText('Herramientas')).toBeInTheDocument()
  })

  it('should display specific skills', () => {
    render(<Skills />)
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Playwright (E2E)')).toBeInTheDocument()
    expect(screen.getByText('Java (Spring Boot)')).toBeInTheDocument()
  })

  it('should have section with correct id', () => {
    const { container } = render(<Skills />)
    expect(container.querySelector('#skills')).toBeInTheDocument()
  })
})
