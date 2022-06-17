import React from 'react'
import Grandchild2 from './Grandchild2'

function Child2(props) {
  return (
    <div style={props.styledText} >
        <h2>Child2</h2>        
        <Grandchild2 />
    </div>
  )
}

export default Child2