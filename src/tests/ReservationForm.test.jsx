import { describe, test, expect, vi } from "vitest";
import ReservationForm from "../forms/ReservationForm";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router";

function renderReservationForm() {
  return render(
    <MemoryRouter>
      <ReservationForm handleCloseReservation={vi.fn()}/>
    </MemoryRouter>
  )
}

const formattedDate = new Intl.DateTimeFormat('en-US').format(new Date())
const formattedTime = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }).format(new Date()).replace(/\u202F/g, ' ')

describe('Reservation Form', () => {
  test("to contain a label for datepicker", () => {
    renderReservationForm()

    expect(screen.getByLabelText(/pick a date/i)).toBeDefined()
  })

  test("to contain a datepicker", () => {
    renderReservationForm()

    expect(screen.getByPlaceholderText('MM/DD/YYYY')).toBeDefined()
  })

  test("to contain a label for timepicker", () => {
    renderReservationForm()

    expect(screen.getByLabelText(/pick a time/i)).toBeDefined()
  })

  test("to contain a timepicker", () => {
    renderReservationForm()

    expect(screen.getByPlaceholderText('hh:mm aa')).toBeDefined()
  })
  
  test("to contain a label for number of guests", () => {
    renderReservationForm()

    fireEvent.click(screen.getAllByRole('textbox')[2])

    expect(screen.getByLabelText(/number of guests/i)).toBeDefined()
  })

  test("to contain a number of guests input", () => {
    renderReservationForm()

    const numberofGuestsInput = screen.getAllByRole('textbox')[2]

    expect(numberofGuestsInput).toBeDefined()
  })

  test("to contain a label for type of occasion", () => {
    renderReservationForm()

    const typeOfOccasion = screen.getByLabelText(/type of occasion/i)

    fireEvent.click(typeOfOccasion)

    expect(typeOfOccasion).toBeDefined()
  })

  test("to contain a type of occasion input", () => {
    renderReservationForm()

    expect(screen.getByLabelText(/type of occasion/i)).toBeDefined()
  })
  
  test('to render ReservationForm with correct initial values', () => {
    renderReservationForm()
  
    expect(screen.getByLabelText('Pick a Date').value).toBe(formattedDate)
    expect(screen.getByLabelText('Pick a time').value).toBe(formattedTime)
    expect(screen.getByLabelText('Number of Guests').value).toBe('')
    expect(screen.getByLabelText('Type of Occasion').value).toBe('')
  });
  
  test('to submit ReservationForm with correct values', async () => {
    renderReservationForm()

    fireEvent.change(screen.getByLabelText(/pick a date/i), {
      target: { value: formattedDate }
    });

    fireEvent.change(screen.getByLabelText(/pick a time/i), {
      target: { value: formattedTime }
    });

    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: 5 }
    });

    fireEvent.change(screen.getByLabelText(/type of occasion/i), {
      target: { value: 'Birthday' }
    });
    
    expect(screen.getByLabelText(/pick a date/i).value).toBe(formattedDate)
    expect(screen.getByLabelText(/pick a time/i).value).toBe(formattedTime)
    expect(screen.getByLabelText(/number of guests/i).value).toBe('5')
    expect(screen.getByLabelText(/type of occasion/i).value).toBe('Birthday')
    
    fireEvent.click(screen.getByRole('button', { name: /make reservation/i }));

    await waitFor(() => {
      expect(screen.getByText('Reservation created!')).toBeDefined()
    }, { timeout: 4000 })
  });
})