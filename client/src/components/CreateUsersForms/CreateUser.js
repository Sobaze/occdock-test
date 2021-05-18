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

import React, { useState } from 'react'

import {
  ButtonGroup,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Col,
  TabContent,
  TabPane
} from 'reactstrap'
import { createUser } from '../../apiCalls'
import classNames from 'classnames'
import './CreateUser.scss'
import AdminForm from './AdminForm'
import CustomerForm from './CustomerForm'
import FlashNotification, { userCreateSuccess, enterAllFields, passwordNotMatching } from '../../views/FlashNotification.js'


function CreateUser({ props }) {
  const notificationAlertRef = React.useRef(null)
  // TODO: fix style/CSS to that createUser-form does not render under list of all users.
  // Global success & error states with messages to send in?

  const initialState = {
    company: '',
    phone: '',
    email: '',
    firstName: '',
    lastName: '',
    amount: '',
    deviceAccess: [],
    role: 'Customer',
    password: '',
    reEnterPassword: ''
  }

  const [newUser, setNewUser] = useState(initialState)
  const [activeTab, setActiveTab] = useState('1')

  const toggleRoleForm = tab => {
    if (activeTab !== tab) setActiveTab(tab)
    let value = ''
    if (tab === '1') {
      value = 'Customer'
    } else value = 'Admin'

    setNewUser(prevState => ({
      ...prevState,
      role: value
    }))
  }

  const handleChange = e => {
    if (e.target.options) {
      const updatedDevices = [...e.target.options]
        .filter(option => option.selected)
        .map(selectedOptions => selectedOptions.value)

      setNewUser(prevState => ({
        ...prevState,
        deviceAccess: updatedDevices
      }))
    } else {
      const { name, value } = e.target

      setNewUser(prevState => ({
        ...prevState,
        [name]: value
      }))
    }
  }

  const onSubmit = async () => {
    let fields = {}

    if (newUser.password !== newUser.reEnterPassword) {
      handleFlashNotification(passwordNotMatching, false)
      return
    }

    fields = {
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      company: newUser.company,
      amount: newUser.amount || null,
      deviceAccess: newUser.deviceAccess || null,
      phone: newUser.phone,
      email: newUser.email,
      role: newUser.role,
      password: newUser.password,
      reEnterPassword: newUser.reEnterPassword
    }

    for (let [value, key] of Object.entries(fields)) {
      
      if (value.length === 0 && (key !== 'amount' || key !== 'deviceAccess')) {
        if ((newUser.role === 'Admin' && key !== 'company') || newUser.role === 'Customer') {
          handleFlashNotification(enterAllFields, false)
          return
        }
      }
    }

    const response = await createUser(fields)
    if (response.message === 'created') {
      handleFlashNotification(userCreateSuccess, false)
      //TODO: fix notifications so that message shows when sidepandel closes
      props.onClick(false)

    } else if (response.error) {
      handleFlashNotification(response.error, false)
    }
  }

  const generateForm = () => {
    const formInput = {
      newUser,
      onChange: handleChange,
      onSubmit: onSubmit
    }
    return newUser.role === 'Admin' ? <AdminForm props={formInput} />
      : <CustomerForm props={formInput} />
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
          <ButtonGroup
            className='btn-group-toggle CreateUser-btnGroup-toggleRole'
            data-toggle='buttons'
          >
            <Button
              tag='label'
              className={classNames('btn-simple', {
                active: activeTab === '1'
              })}
              color='info'
              id='0'
              size='sm'
              onClick={() => toggleRoleForm('1')}
            >
              <span className='d-sm-block d-md-block d-lg-block d-xl-block'>
                Customer
              </span>
            </Button>
            <Button
              color='info'
              id='1'
              size='sm'
              tag='label'
              className={classNames('btn-simple', {
                active: activeTab === '2'
              })}
              onClick={() => toggleRoleForm('2')}
            >
              <span className='d-sm-block d-md-block d-lg-block d-xl-block'>
                Admin
              </span>
            </Button>
          </ButtonGroup>
        </CardHeader>

        <CardBody>
          <Col>
            <TabContent activeTab={activeTab}>
              <TabPane tabId='1'>
                {generateForm()}
              </TabPane>
              <TabPane tabId='2'>
                {generateForm()}
              </TabPane>
            </TabContent>
          </Col>
        </CardBody>

        <CardFooter>
          {activeTab !== '0'
            ? <Button
              className='btn-fill'
              color='primary'
              type='submit'
              onClick={onSubmit}
            >
              Create {newUser.role}
            </Button>
            : null}
        </CardFooter>
      </Card>
    </div>
  )
}

export default CreateUser
