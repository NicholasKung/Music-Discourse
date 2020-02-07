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
      email:"test@test.com",
      review_date: "February 03, 2020 - 08:59pm"
    }

    wrapper = mount(
      <BrowserRouter>
      <ReviewsTile
        reviewData={reviewData}
      />
      </BrowserRouter>
    )
  })

  it("should render a h4 tag containing the list of items via props", () => {
    expect(wrapper.find('h4').text()).toEqual("test@test.com")
  })

  it("should render a p tag containing the list of items via props", () => {
    expect(wrapper.find('p').text()).toEqual("February 03, 2020 - 08:59pm")
  })

  it("should render a h3 tag containing the list of items via props", () => {
    expect(wrapper.find('h3').text()).toEqual("7")
  })

  it("should render a h4 tag containing the list of items via props", () => {
    expect(wrapper.find('h5').text()).toEqual("good")
  })
})
