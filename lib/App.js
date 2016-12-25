import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <ul className="main__nav" role="nav">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/about">Blog</NavLink></li>
          <li><NavLink to="/repos">Projects</NavLink></li>
        </ul>
        <h1>Ernesto De Los Santos</h1>
        <h2>San Antonio, Texas</h2>
          <p>Hey there, my name is Ernesto De Los Santos and I am currently learning how to code!!!!</p>
          <a href="https://github.com/ErnestoDLS">GitHub Profile</a>
        {this.props.children}
      </div>
    )
  }
})
