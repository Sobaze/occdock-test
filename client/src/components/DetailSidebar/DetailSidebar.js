
import React from 'react'
import './DetailSidebar.scss'
import CreateUser from '../CreateUsersForms/CreateUser'
import CreateDevice from '../CreateDeviceForms/CreateDevice'

function DetailSidebar ({ props }) {
  return (
    <div className='DetailSidebar'>
      {props.isCreatingUser ? <CreateUser props={{ onClick: props.setIsCreatingUser }} /> : null}
      {props.isCreatingDevice ? <CreateDevice props={{ onClick: props.setIsCreatingDevice }} /> : null}
    </div>
  )
}

export default DetailSidebar
