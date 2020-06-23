import React, { Component } from 'react'
import Header from './components/Header'
import Octocat from './components/Octocat'
import './App.css'

class App extends Component {
  render() {
    return (
      <html>
        <head lang="en">
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Octodex</title>
          <link rel="shortcut icon" href="/favicon.ico" />
          <style></style>
        </head>
        <body>
          <Header />
          <main>
            <Octocat catName="Octoqueer" imageName="Octoqueer" />
          </main>
          <footer>© 2013-2020 GitHub, Inc. All rights reserved.</footer>
        </body>
      </html>
    )
  }
}

export default App
