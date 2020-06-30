import React, { Component } from 'react'

export default class Octocat extends Component {
  render() {
    return (
      <section>
        <a className="octo" href={this.props.link}>
          <img
            src={this.props.imageName}
            alt={this.props.catName}
            height="261"
            width="261"
          />
        </a>
        <div className="details">
          <div>
            <p>{this.props.catNumber}</p>
            <h4>
              <a href={this.props.link}>{this.props.catName}</a>
            </h4>
          </div>
          <div className="wrapper">
            <a href={this.props.authorLink}>
              <img src={this.props.authorImage} height="24" width="24" />
            </a>
          </div>
        </div>
      </section>
    )
  }
}
