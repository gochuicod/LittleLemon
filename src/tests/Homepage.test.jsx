import { describe, test, expect } from "vitest";
import Homepage from "../Homepage";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";

function renderHomepage() {
  return render(
    <MemoryRouter>
      <Homepage/>
    </MemoryRouter>
  )
}

describe('Homepage', () => {
  test("should contain Little Lemon title", () => {
    renderHomepage()
    
    expect(screen.getByText(/Little Lemon/i)).toBeDefined();
  })

  test("should contain Little Lemon description", () => {
    renderHomepage()

    expect(screen.getByText(/family owned/i)).toBeDefined();
  })

  test("should contain at least 3 images", () => {
    renderHomepage()

    expect(screen.getAllByRole('img').length).toBeGreaterThanOrEqual(3)
  })
  
  test('should contain weekly specials section', () => {
    renderHomepage()
  
    expect(screen.getByText(/specials/i)).toBeDefined()
  })
  
  test('should contain weekly specials section', () => {
    renderHomepage()
  
    expect(screen.getByText(/specials/i)).toBeDefined()
  })

  test('should open reservation dialog on click', () => {
    renderHomepage()

    fireEvent.click(screen.getByText(/reserve a table/i))

    expect(screen.getByText(/collect/i)).toBeDefined()
  })

  test('should open delivery dialog on click', () => {
    renderHomepage()

    fireEvent.click(screen.getAllByText(/order a delivery/i)[0])

    expect(screen.getByRole('button', { name: /confirm order/i })).toBeDefined()
  })
  
  test('contain dollar signs for item price', () => {
    renderHomepage()

    expect(screen.getAllByText(/$/i).length).toBeGreaterThanOrEqual(2)
  })
})