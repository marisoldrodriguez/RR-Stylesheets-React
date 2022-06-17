import React from 'react'
import Grandchild1 from './Grandchild1'

function Child1(props) {
  return (
    <div style={props.styledText}>
        <h2>Child1</h2>
        <Grandchild1 />
    </div>
  )
}

export default Child1