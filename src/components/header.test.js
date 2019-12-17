import React from "react"
import { render } from "@testing-library/react"
import Header from "./header"

describe("Header component test", () => {
  it("renders the component", () => {
    const { container } = render(<Header />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
