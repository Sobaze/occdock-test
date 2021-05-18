import React from 'react'

function TRowCustomer (props) {
  return (
    <>
      <tr>
        <th scope='row'>{props.company}</th>
        <th>{props.noOfDevices}</th>
        <th>{props.contact}</th>
        <th>{props.phone}</th>
      </tr>
    </>
  )
}

export default TRowCustomer
