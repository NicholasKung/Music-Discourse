import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AlbumIndex from "./AlbumIndex"
import NewAlbumFormContainer from "./NewAlbumFormContainer"

export const App = (props) => {
  return (

    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={AlbumIndex} />
          <Route exact path="/albums" component={AlbumIndex} />
          <Route exact path="/albums/new" component={NewAlbumFormContainer} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
