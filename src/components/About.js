import React from 'react'
import user from '../data/user'
import Links from './Links'

function About(props) {
  const testFunc = () => {
    if (props.bio === '') {
    } else if ('bio' in props) {
      return <p>{props.bio}</p>
    } else {
    }
  }

  // {props.bio === typeof string ? null : props.bio}

  return (
    <div id="about">
      <h2>About Me</h2>
      {testFunc()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links {...props} />
    </div>
  )
}

export default About
