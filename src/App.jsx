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
            <Octocat
              catName="Octoqueer"
              imageName="https://octodex.github.com//images/Octoqueer.png"
              link="https://octodex.github.com//octoqueer/"
              catNumber="#150:"
              authorLink="https://github.com/cameronfoxly"
              authorImage="https://github.com/cameronfoxly.png"
            />
            <Octocat
              catName="Terracottocat"
              imageName="https://octodex.github.com//images/Terracottocat_Single.png"
              link="https://octodex.github.com//terracottocat/"
              catNumber="#149:"
              authorLink="https://github.com/cameronfoxly"
              authorImage="https://github.com/chubbmo.png"
            />
            <Octocat
              catName="Daftpunktocat-Thomas"
              imageName="https://octodex.github.com//images/daftpunktocat-thomas.gif"
              link="https://octodex.github.com//daftpunktocat-thomas/"
              catNumber="#101:"
              authorLink="https://github.com/jeejkang"
              authorImage="hhttps://github.com/jeejkang.png"
            />
            <Octocat
              catName="Grinchtocat"
              imageName="https://octodex.github.com//images/grinchtocat.gif"
              link="https://octodex.https://octodex.github.com//grinchtocat/"
              catNumber="#110:"
              authorLink="https://github.com/tonyjaramillo"
              authorImage="https://github.com/tonyjaramillo.png"
            />
            <Octocat
              catName="DoctocatBrown"
              imageName="https://octodex.github.com//images/doctocat-brown.jpg"
              link="https://octodex.github.com//doctocat-brown/"
              catNumber="#67:"
              authorLink="hhttps://github.com/jonrohan"
              authorImage="https://github.com/jonrohan.png"
            />
            <Octocat
              catName="Minertocat"
              imageName="https://octodex.github.com//images/minertocat.png"
              link="https://octodex.github.com//minertocat/"
              catNumber="#1:"
              authorLink="https://github.com/jeejkang"
              authorImage="https://github.com/jeejkang.png"
            />
          </main>
          <footer>© 2013-2020 GitHub, Inc. All rights reserved.</footer>
        </body>
      </html>
    )
  }
}

export default App
