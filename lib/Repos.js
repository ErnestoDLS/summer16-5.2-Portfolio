import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Projects</h2>
        <ul>
          <article>
            <h3> Project 1 </h3>
              <li><NavLink to="https://github.com/ErnestoDLS/summer16-1.4-css">Sk8er site</NavLink></li>
              <p>Working on my CSS skills.</p>
          </article>
          <article>
            <h3> Project 2 </h3>
            <li><NavLink to="https://github.com/ErnestoDLS/summer16-4.1-photoalbum/tree/normal-mode">Photo Album</NavLink></li>
            <p>I created the album using juqery.</p>
          </article>
          <article>
            <h3> Project 3 </h3>
            <li><NavLink to="https://github.com/ErnestoDLS/6.4-Contact-List/tree/master">Contact List</NavLink></li>
            <p>This is a contact list that I created using React js.</p>
          </article>
        </ul>
        {this.props.childern}
      </div>
    )
  }
})
