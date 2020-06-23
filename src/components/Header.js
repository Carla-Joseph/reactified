import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="header">
          <ul className="leftHeader">
            <li>
              <a className="octodex" href="https://octodex.github.com/">
                <img
                  src="https://octodex.github.com/favicon.ico"
                  height="32"
                  width="32"
                />
              </a>
            </li>
            <li>
              <a className="hello-world" href="https://octodex.github.com/">
                Octodex
              </a>
            </li>
            <li>
              <a className="home" href="https://octodex.github.com/">
                Home
              </a>
            </li>
            <li>
              <a className="faq" href="https://octodex.github.com/faq/">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <ul className="rightHeader">
          <li>
            <a href="https://twitter.com/githubdesign">Follow us on Twitter</a>
          </li>
          <li>
            <a href="https://octodex.github.com/">Back to GitHub.com</a>
          </li>
        </ul>
      </header>
    )
  }
}
