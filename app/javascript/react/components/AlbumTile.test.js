import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from "react-router-dom"
Enzyme.configure({ adapter: new Adapter() })

import AlbumTile from "./AlbumTile"

describe("AlbumTile", () => {
  let wrapper
  let albumData

 beforeEach(() => {
   albumData = {
     id: 1,
     album: "Rare",
     art: "https://vignette.wikia.nocookie.net/selenagomez/images/4/46/Rare_Album_Cover.jpg/revision/latest?cb=20191212172712",
     artist: "Selena Gomez",
   }

   wrapper = mount(
    <BrowserRouter>
    <AlbumTile
      albumData={albumData}
     />
    </BrowserRouter>
   )
 })

 it("should render an img tag containing the img received via props", () => {
   expect(wrapper.find('img').props()).toEqual({
     src: "https://vignette.wikia.nocookie.net/selenagomez/images/4/46/Rare_Album_Cover.jpg/revision/latest?cb=20191212172712"})
 });

 it("should render a span tag containing the text received via props", () =>{
   expect(wrapper.find('span').text()).toBe("Selena Gomez")
 });

 it("should render a p tag containing the text received via props", () =>{
   expect(wrapper.find('p').text()).toBe("Rare")
 });
})
