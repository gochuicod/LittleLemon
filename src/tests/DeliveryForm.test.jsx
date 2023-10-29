import { describe, test, expect, vi } from "vitest";
import DeliveryForm from "../forms/DeliveryForm";
import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { bruschetta } from "../assets";

const mockProps = {
  image: bruschetta,
  name: "Bruschetta",
  price: 12.99,
  close: vi.fn()
}

function renderDeliveryForm() {
  return render(
    <MemoryRouter>
      <DeliveryForm {...mockProps}/>
    </MemoryRouter>
  )
}

describe('Delivery Form', () => {
  test("to contain an image", () => {
    renderDeliveryForm()

    expect(screen.getByRole('img')).toBeDefined()
  })

  test("to contain a confirm button", () => {
    renderDeliveryForm()

    expect(screen.getByRole('button', { name: /confirm order/i })).toBeDefined()
  })

  test("to display progress on confirmation", () => {
    renderDeliveryForm()

    const confirmOrder = screen.getByRole('button', { name: /confirm order/i })

    fireEvent.click(confirmOrder)

    expect(within(confirmOrder).getByRole('progressbar')).toBeDefined()
  })

  test("to display alert message on confirmation", async () => {
    renderDeliveryForm()

    fireEvent.click(screen.getByRole('button', { name: /confirm order/i }))

    await waitFor(() => {
      expect(screen.getByText(/order has been confirmed!/i)).toBeDefined()
    }, { timeout: 4000 })
  })

  test("to contain a cancel button", () => {
    renderDeliveryForm()

    expect(screen.getByRole('button', { name: /cancel/i })).toBeDefined()
  })

  test("to close dialog on click", () => {
    renderDeliveryForm()

    fireEvent.click(screen.getByRole('button', { name: /cancel/i }))

    expect(mockProps.close).toHaveBeenCalledOnce()
  })
})