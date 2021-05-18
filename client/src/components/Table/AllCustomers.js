
import React from 'react'

import {
  Card,
  CardHeader,
  CardBody,
  Table
} from 'reactstrap'

import THeadCustomers from './THeadCustomers'
import TRowCustomer from './TRowCustomer'

// Just a dummy to illustrate a list of all customers
// TODO: Create full implementation

function AllCustomers () {
  return (
    <>
      <Card className='card-tasks'>
        <CardHeader>
          <h5 className='title'>All Users</h5>
        </CardHeader>
        <CardBody>
          <div className='table-full-width table-responsive'>
            <Table>
              <THeadCustomers />
              <tbody>
                <TRowCustomer company='Kalmar Kommun' noOfDevices='3' contact='Harald' phone='0480-450000' />
                <TRowCustomer company='Nybro Kommun' noOfDevices='3' contact='Sam' phone='0481-430000' />
                <TRowCustomer company='Nybro Kommun' noOfDevices='3' contact='Paula' phone='0481-430000' />
                <TRowCustomer company='Nybro Kommun' noOfDevices='3' contact='Bo' phone='0481-430000' />
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </>
  )
}

export default AllCustomers
