import { describe, test, expect } from "vitest";
import Header from "../Header";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";

function renderHeader() {
  return render(
    <MemoryRouter>
      <Header/>
    </MemoryRouter>
  )
}

describe('Header', () => {
  test("should contain Little Lemon logo", () => {
    renderHeader()
    
    expect(screen.getByRole('img')).toBeDefined();
  })

  test("should contain Home element", () => {
    renderHeader()
    
    expect(screen.getByRole('link', { name: /Home/i })).toBeDefined();
  })
  
  test("should contain About element", () => {
    renderHeader()
    
    expect(screen.getByRole('link', { name: /About/i })).toBeDefined();
  })
  
  test("should contain Menu element", () => {
    renderHeader()
    
    expect(screen.getByText(/Menu/i)).toBeDefined();
  })
  
  test("should contain Reservations element", () => {
    renderHeader()
    
    expect(screen.getByText(/Reservations/i)).toBeDefined();
  })
  
  test("should contain Order Online element", () => {
    renderHeader()
    
    expect(screen.getByText(/Order Online/i)).toBeDefined();
  })
  
  test("should contain Login element", () => {
    renderHeader()
    
    expect(screen.getByText(/Login/i)).toBeDefined();
  })
})