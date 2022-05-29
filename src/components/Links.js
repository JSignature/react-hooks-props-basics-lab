import React from 'react'

function Links(props) {
  return (
    <>
      <h3>Links</h3>

      <a href="{props.links.github}">https://github.com/liza</a>

      <a href="{props.links.linkedin}">https://www.linkedin.com/in/liza/</a>
    </>
  )
}

export default Links
