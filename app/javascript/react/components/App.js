import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AlbumIndex from "./AlbumIndex"

export const App = (props) => {
  return (

    <div>

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={AlbumIndex} />
          <Route exact path="/albums" component={AlbumIndex} />
        </Switch>
      </BrowserRouter>

    </div>

  )
}

export default App
