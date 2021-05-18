import React, { useEffect, useState, useContext } from 'react'
import FlashNotification, { incorrectCredentials, notResponding } from '../FlashNotification'
import { authContext } from '../../contexts/authContext'
import './Login.scss'


import {
  Form,
  FormGroup,
  Input,
  Button,
  Row,
  Col,
  CardHeader,
  Card,
  CardBody
} from 'reactstrap'

function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [sendForm, setSendForm] = useState(false)
  const { loginUser, error } = useContext(authContext)
  const notificationAlertRef = React.useRef(null)

  useEffect(() => {
    if (error === '401 Unauthorized') {
      handleFlashNotification(incorrectCredentials, false)
    }

    if (error === 'server is not responding') {
      handleFlashNotification(notResponding, false)
    }
  }, [error])

  useEffect(() => {
    if (sendForm) {
      const login = async (e) => {
        await loginUser(email, password)
      }

      login()
      setSendForm(false)
    }
  }, [email, loginUser, password, sendForm])

  const handleFlashNotification = (message, success) => {
    notificationAlertRef.current.createFlashNotification(message, success)
  }

  return (
    <div>
      <FlashNotification props={handleFlashNotification} ref={notificationAlertRef} />
      <Row className='Login--loginViewRow'>
        <img
          alt='...'
          className='Login--logo'
          src={require('../../assets/img/logo-white-200x74.png').default}
        />
        <Col sm='12' md={{ size: 4 }}>
          <Card className='card-login'>
            <CardHeader>
              <h5 className='title'>Login</h5>
            </CardHeader>
            <CardBody>
              <Form onSubmit={(e) => {
                e.preventDefault()
                setSendForm(true)
              }}
              >
                <FormGroup>
                  <label>Email</label>
                  <Input
                    placeholder='Enter your email'
                    value={email}
                    type='text'
                    name='email'
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup>
                  <label>Password</label>
                  <Input
                    placeholder='Enter your password'
                    value={password}
                    type='password'
                    name='password'
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>
                <Button
                  disabled={!email || !password}
                  type='submit'
                >
                    Sign in
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>

  )
}

export default Login
