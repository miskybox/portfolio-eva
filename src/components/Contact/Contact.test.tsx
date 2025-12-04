import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Contact from './Contact'

// Mock CSS modules
vi.mock('./Contact.module.css', () => ({
  default: {
    contact: 'contact',
    container: 'container',
    title: 'title',
    content: 'content',
    contactInfo: 'contactInfo',
    subtitle: 'subtitle',
    description: 'description',
    socialLinks: 'socialLinks',
    socialLink: 'socialLink',
    contactForm: 'contactForm',
    formGroup: 'formGroup',
    label: 'label',
    input: 'input',
    textarea: 'textarea',
    submitBtn: 'submitBtn',
    statusMessage: 'statusMessage',
    success: 'success',
    error: 'error',
    inputError: 'inputError',
    errorText: 'errorText',
  },
}))

describe('Contact Component', () => {
  it('should render the contact section', () => {
    render(<Contact />)
    expect(screen.getByText(/CONTACT/i)).toBeInTheDocument()
  })

  it('should display "Let\'s Connect!" subtitle', () => {
    render(<Contact />)
    expect(screen.getByText("Let's Connect!")).toBeInTheDocument()
  })

  it('should have GitHub link', () => {
    render(<Contact />)
    const githubLink = screen.getByRole('link', { name: /GitHub/i })
    expect(githubLink).toHaveAttribute('href', 'https://github.com/miskybox')
  })

  it('should have correct LinkedIn link', () => {
    render(<Contact />)
    const linkedinLink = screen.getByRole('link', { name: /LinkedIn/i })
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/eva-sisalli-guzman/')
  })

  it('should have email link', () => {
    render(<Contact />)
    const emailLink = screen.getByRole('link', { name: /e.sisalli@yahoo.com/i })
    expect(emailLink).toHaveAttribute('href', 'mailto:e.sisalli@yahoo.com')
  })

  it('should render the contact form', () => {
    render(<Contact />)
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Message/i)).toBeInTheDocument()
  })

  it('should have submit button', () => {
    render(<Contact />)
    expect(screen.getByRole('button', { name: /SEND MESSAGE/i })).toBeInTheDocument()
  })

  it('should have section with correct id', () => {
    const { container } = render(<Contact />)
    expect(container.querySelector('#contact')).toBeInTheDocument()
  })
})
