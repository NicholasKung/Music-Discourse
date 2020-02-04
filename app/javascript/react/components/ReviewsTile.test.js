import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter, Link } from "react-router-dom"
Enzyme.configure({ adapter: new Adapter() })

import ReviewsTile from "./ReviewsTile"

describe("ReviewsTile", () => {
  let wrapper
  let reviewData

  beforeEach(() => {
    reviewData = {
      id: 1,
      rating: 7,
      review: "good",
      email:"test@test.com"
    }

    wrapper = mount(
      <BrowserRouter>
      <ReviewsTile
        reviewData={reviewData}
      />
      </BrowserRouter>
    )
  })

  it("should render a span tag containing the list of items via props", () => {
    expect(wrapper.find('span').text()).toEqual("test@test.com")
  })

  it("should render a h3 tag containing the list of items via props", () => {
    expect(wrapper.find('h3').text()).toEqual("7")
  })

  it("should render a h4 tag containing the list of items via props", () => {
    expect(wrapper.find('h4').text()).toEqual("good")
  })
})
