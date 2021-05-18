import React from 'react'

function TRowDevice (props) {
  return (
    <>
      <tr>
        <th>{props.id}</th>
        <th>{props.owner}</th>
        <th>{props.location}</th>
        <th>{props.lastActive}</th>
      </tr>
    </>
  )
}

export default TRowDevice
