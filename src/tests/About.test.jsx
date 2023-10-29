import { describe, test, expect } from "vitest";
import About from "../About";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";

function renderAboutPage() {
  return render(
    <MemoryRouter>
      <About/>
    </MemoryRouter>
  )
}

describe('About Page', () => {
  test("to have Little Lemon's description", () => {
    renderAboutPage()

    expect(screen.getByText(/Little Lemon is/i)).toBeDefined()
  })

  test("to have an Events section", () => {
    renderAboutPage()

    expect(screen.getByText(/Events/i)).toBeDefined()
  })

  test("to have at least 3 images", () => {
    renderAboutPage()

    expect(screen.queryAllByRole('img')).toHaveLength(3)
  })
})