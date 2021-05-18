
import React from 'react'
import moment from 'moment'

import {
  Card,
  CardHeader,
  CardBody,
  Table
} from 'reactstrap'

import THeadDevices from './THeadDevices'
import TRowDevice from './TRowDevice'

// Just a dummy to illustrate a list of all customers
// TODO: Create full implementation

function AllDevices () {
  // TODO: Remove now and change to latest incoming event post.
  const now = new Date()
  // TODO: Update lovation according to coordinats sent in from device.
  return (
    <>
      <Card className='card-tasks'>
        <CardHeader>
          <h5 className='title'>All Devices</h5>
        </CardHeader>
        <CardBody>
          <div className='table-full-width table-responsive'>
            <Table>
              <THeadDevices />
              <tbody>
                <TRowDevice id='134343' owner='Nybro Kommun' location='-' lastActive={moment(now).fromNow()} />
                <TRowDevice id='134343' owner='Nybro Kommun' location='-' lastActive={moment(now).fromNow()} />
                <TRowDevice id='134343' owner='Nybro Kommun' location='-' lastActive={moment(now).fromNow()} />
                <TRowDevice id='134343' owner='Nybro Kommun' location='-' lastActive={moment(now).fromNow()} />
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </>
  )
}

export default AllDevices
