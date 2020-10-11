import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />)
    const formHeader = getByText("Checkout Form")
    expect(formHeader).toBeInTheDocument()
});

test("form shows success message on submit with form details", async () => {
    const { getByText,getByRole,getByTestId } = render(<CheckoutForm />)
    const submit = getByRole("button")
    const firstName = getByTestId("firstName")
    const lastName = getByTestId("lastName")
    const address = getByTestId("address")
    const city = getByTestId("city")
    const state = getByTestId("state")
    const zip = getByTestId("zip")
    await act(async () => {
    fireEvent.change(firstName, {target:{value:"John"}})
    }),
    await act(async () => {
    fireEvent.change(lastName, {target:{value:"Cena"}})
    }),
    await act(async () => {
    fireEvent.change(address, {target:{value:"24110"}})
    }),
    await act(async () => {
    fireEvent.change(city, {target:{value:"clinton township"}})
    }),
    await act(async () => {
    fireEvent.change(state, {target:{value:"mi"}})
    }),
    await act(async () => {
    fireEvent.change(zip, {target:{value:"48036"}})
    fireEvent.click(submit)
    })




    const successMessage = getByText("You have ordered some plants! Woo-hoo! 🎉")
    const userName = getByText("John Cena")

    
expect(successMessage).toBeInTheDocument()
expect(zip).toHaveValue("48036")
expect(firstName).toHaveValue("John")
expect(lastName).toHaveValue("Cena")
expect(userName).toBeInTheDocument()
}) 