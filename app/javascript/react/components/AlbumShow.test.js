import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
Enzyme.configure({ adapter: new Adapter() })

import AlbumShow from "./AlbumShow"

describe("AlbumShow", () => {
  let wrapper
  let album = {
    id: 1,
    album: "Rare",
    art: "https://vignette.wikia.nocookie.net/selenagomez/images/4/46/Rare_Album_Cover.jpg/revision/latest?cb=20191212172712",
    artist: "Selena Gomez",
    year: 2020,
    genre: "Pop"
  }

 beforeEach(() => {
   wrapper = mount(
    <AlbumShow
      key={album.id}
      album={album.album}
      art={album.art}
      artist={album.artist}
      year={album.year}
      genre={album.genre}
     />
   )
 })

 it("should render an img tag containing the img received via props", () => {
   expect(wrapper.find('img').props()).toEqual({
     src: "https://vignette.wikia.nocookie.net/selenagomez/images/4/46/Rare_Album_Cover.jpg/revision/latest?cb=20191212172712"})
 });

 it("should render a h3 tag containing the text received via props", () =>{
   expect(wrapper.find('h3').text()).toBe("Selena Gomez")
 });

 it("should render a h2 tag containing the text received via props", () =>{
   expect(wrapper.find('h2').text()).toBe("Rare")
 });

 it("should render a h6 tag containing the text received via props", () =>{
   expect(wrapper.find('h6').text()).toBe("2020")
 });

 it("should render a p tag containing the text received via props", () =>{
   expect(wrapper.find('p').text()).toBe("Pop")
 });
})
