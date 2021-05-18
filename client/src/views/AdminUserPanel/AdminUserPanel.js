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
import AllCustomers from '../../components/Table/AllCustomers'
import { Button, Col, Row } from 'reactstrap'
import './AdminUserPanel.scss'
import DetailSidebar from '../../components/DetailSidebar/DetailSidebar'

function AdminUserPanel () {
  const [isCreatingUser, setIsCreatingUser] = useState(false)

  return (
    <>
      <div className='content'>
        <Row>
          <Col>
            <AllCustomers />
            {/* TODO: Add admin-userlist */}
            <Button
              id='btn-createUser'
              className='btn-fill'
              color='primary'
              type='submit'
              onClick={() => setIsCreatingUser(isCreatingUser => !isCreatingUser)}
            >
              Create User
            </Button>

            {isCreatingUser ? <DetailSidebar props={{ isCreatingUser, setIsCreatingUser }} /> : null}
          </Col>
        </Row>
      </div>
    </>
  )
}

export default AdminUserPanel
