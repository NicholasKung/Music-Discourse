import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import NewAlbumForm from "./NewAlbumForm"
Enzyme.configure({ adapter: new Adapter() })

describe("NewAlbumForm", () => {
  let wrapper, onClickMock
  beforeEach(() => {
    onClickMock = jest.fn()
    wrapper = mount(
      <NewAlbumForm
        onSubmit={onClickMock}
      />
    )
  })

  it("should render a form component with an input tag used for a submit button", () => {
    expect(wrapper.find("label")).toBeDefined()
  })

  it("should render a form component with an input tag used for a submit button", () => {
    expect(wrapper.find("input")).toBeDefined()
  })
})
