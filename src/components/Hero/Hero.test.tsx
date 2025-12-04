import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from './Hero'

// Mock CSS modules
vi.mock('./Hero.module.css', () => ({
  default: {
    hero: 'hero',
    container: 'container',
    content: 'content',
    name: 'name',
    title: 'title',
    description: 'description',
    cursor: 'cursor',
    cta: 'cta',
    primaryBtn: 'primaryBtn',
    secondaryBtn: 'secondaryBtn',
  },
}))

describe('Hero Component', () => {
  it('should render the name heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/EVA SISALLI GUZMÁN/i)
  })

  it('should render the description', () => {
    render(<Hero />)
    expect(screen.getByText(/Full Stack Developer specialized/i)).toBeInTheDocument()
  })

  it('should render CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /Projects/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Contact/i })).toBeInTheDocument()
  })

  it('should display the animated role title', () => {
    render(<Hero />)
    // The h2 element should exist for the animated role
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
  })
})
