import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from 'react-router-dom'
Enzyme.configure({ adapter: new Adapter() })

import VotesTile from "./VotesTile"

describe("VotesTile", () => {
  let wrapper, onClickMock

  let votes = [{
    up: 1,
    down: 0
  }]

  beforeEach(() => {
    onClickMock = jest.fn()
    wrapper = mount(
      <BrowserRouter>
        <VotesTile
          handleVoteClick={onClickMock}
          votes={votes}
        />
      </BrowserRouter>
    )
  })

  it("renders a span tag with the votes", () => {
    expect(wrapper.find("#up-vote-span").text()).toBe("1")
  })

  it("renders a span tag with the votes", () => {
    expect(wrapper.find("#down-vote-span").text()).toBe("0")
  })

  it('should invoke the click function from props when vote has been clicked', () => {
    let vote = wrapper.find("#up")
    vote.simulate("click")
    expect(onClickMock).toHaveBeenCalled()
  })

  it('should invoke the click function from props when vote has been clicked', () => {
    let vote = wrapper.find("#down")
    vote.simulate("click")
    expect(onClickMock).toHaveBeenCalled()
  })
})
