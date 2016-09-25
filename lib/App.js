import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Ernesto's Profile</h1>
        <h2>San Antonio, Texas</h2>
          <article>
            <p>Hey there, my name is Ernesto De Los Santos and I am currently learning how to code!!!!</p>
          </article>
          <ul role="nav">
            <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
            <li><NavLink to="/about">Blog</NavLink></li>
            <li><NavLink to="/repos">Projects</NavLink></li>
          </ul>
          {this.props.childern}
      </div>

    )
  }
})
