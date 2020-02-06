import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AlbumIndex from "./AlbumIndex"
import NewAlbumFormContainer from "./NewAlbumFormContainer"
import AlbumShowContainer from './AlbumShowContainer'
import EditAlbumForm from './EditAlbumForm'

export const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={AlbumIndex} />
          <Route exact path="/albums" component={AlbumIndex} />
          <Route exact path="/albums/new" component={NewAlbumFormContainer} />
          <Route exact path="/albums/:id" component={AlbumShowContainer} />
          <Route exact path="/album/:id/edit" component={EditAlbumForm} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
