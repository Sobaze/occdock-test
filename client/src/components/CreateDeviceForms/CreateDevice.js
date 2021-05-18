/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React, { useState} from 'react'

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Col
} from 'reactstrap'
import { createDevice } from '../../apiCalls'
import '../CreateUsersForms/CreateUser.scss'
import DeviceForm from '../CreateDeviceForms/DeviceForm'
import FlashNotification, { deviceCreateSuccess, enterAllFields } from '../../views/FlashNotification.js'

function CreateDevice({ props }) {
  const notificationAlertRef = React.useRef(null)
  // TODO: Global success & error states with messages to send in?

  const initialState = {
    deviceID: '',
    location: '',
    owner: ''
  }

  const [newDevice, setNewDevice] = useState(initialState)

  const handleChange = e => {
    const { name, value } = e.target

    setNewDevice(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const onSubmit = async () => {
    let fields = {}

    fields = newDevice

    for (const value of Object.values(fields)) {
      if (value.length === 0) {
        handleFlashNotification(enterAllFields, false)
        return
      }
    }

    const response = await createDevice(fields)

    response.message === 'created'
      ? handleFlashNotification(deviceCreateSuccess, true)
      : handleFlashNotification(response.error, false)
  }

  const generateForm = () => {
    const formInput = {
      newDevice,
      onChange: handleChange,
      onSubmit: onSubmit
    }
    return <DeviceForm props={formInput} />
  }

  const handleFlashNotification = (message, success) => {
    notificationAlertRef.current.createFlashNotification(message, success)
  }

  return (
    <div className='CreateUser'>
      <FlashNotification props={handleFlashNotification } ref={notificationAlertRef} />
      <Card>
        <CardHeader>
          <i className='tim-icons icon-simple-remove' onClick={() => props.onClick(false)} />
        </CardHeader>

        <CardBody>
          <Col>
            {generateForm()}
          </Col>
        </CardBody>

        <CardFooter>
          <Button
            className='btn-fill'
            color='primary'
            type='submit'
            onClick={onSubmit}
          >
              Create Device
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default CreateDevice
