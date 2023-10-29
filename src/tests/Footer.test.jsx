import { describe, test, expect } from "vitest";
import Footer from "../Footer";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";

function renderFooter() {
  return render(
    <MemoryRouter>
      <Footer/>
    </MemoryRouter>
  )
}

describe('Footer Little Lemon Entry', () => {
  test("to have Little Lemon's title", () => {
    renderFooter()

    expect(screen.getByText(/Little Lemon/i)).toBeDefined()
  })

  test("to have Little Lemon's description", () => {
    renderFooter()

    expect(screen.getByText(/family owned/i)).toBeDefined()
  })
})

describe('Footer Important Links', () => {
  test("should contain Home element", () => {
    renderFooter()

    expect(screen.getByRole('link', { name: /Home/i })).toBeDefined();
  })
  
  test("should contain About element", () => {
    renderFooter()

    expect(screen.getByRole('link', { name: /About/i })).toBeDefined();
  })
  
  test("should contain Menu element", () => {
    renderFooter()

    expect(screen.getByText(/Menu/i)).toBeDefined();
  })
  
  test("should contain Reservations element", () => {
    renderFooter()

    expect(screen.getByText(/Reservations/i)).toBeDefined();
  })
  
  test("should contain Order Online element", () => {
    renderFooter()

    expect(screen.getByText(/Order Online/i)).toBeDefined();
  })
  
  test("should contain Login element", () => {
    renderFooter()

    expect(screen.getByText(/Login/i)).toBeDefined();
  })
})

describe('Footer Contacts', () => {
  test('should contain address', () => {
    renderFooter()
  
    expect(screen.getByText(/Address/i)).toBeDefined()
  })
  
  test('should contain phone number', () => {
    renderFooter()
  
    expect(screen.getByText(/Phone/i)).toBeDefined()
  })

  test('should contain email', () => {
    renderFooter()
  
    expect(screen.getByText(/E-mail/i)).toBeDefined()
  })
})

describe('Footer Social Media Links', () => {
  test('should contain Facebok', () => {
    renderFooter()
    
    expect(screen.getByRole('button', { name: /facebook/i })).toBeDefined()
  })

  test('should contain Instagram', () => {
    renderFooter()
    
    expect(screen.getByRole('button', { name: /instagram/i })).toBeDefined()
  })

  test('should contain Twitter', () => {
    renderFooter()
    
    expect(screen.getByRole('button', { name: /twitter/i })).toBeDefined()
  })
})