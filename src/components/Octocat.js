import React, { Component } from 'react'

export default class Octocat extends Component {

  render() {
    return (
      <section>
        <a className="octo" href="https://octodex.github.com//octoqueer/">
          <img
            src="https://octodex.github.com//images/Octoqueer.png"
            alt="Octoqueer"
            height="261"
            width="261"
          />
        </a>
        <div className="details">
          <div className="queer">
            <p>#150:</p>
            <h4>
              <a href="https://octodex.github.com//octoqueer/">Octoqueer</a>
            </h4>
          </div>
          <div className="wrapper">
            <a href="https://github.com/cameronfoxly">
              <img
                src="https://github.com/cameronfoxly.png"
                height="24"
                width="24"
              />
            </a>
            <a href="https://github.com/johncreek">
              <img
                src="https://github.com/johncreek.png"
                height="24"
                width="24"
              />
            </a>
            <a href="https://github.com/tonyjaramillo">
              <img
                src="https://github.com/tonyjaramillo.png"
                height="24"
                width="24"
              />
            </a>
          </div>
        </div>
      </section>
    )
  }
}
