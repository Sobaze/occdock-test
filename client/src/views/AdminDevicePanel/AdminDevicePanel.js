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
import { Button, Col, Row } from 'reactstrap'
import './AdminDevicePanel.scss'
import DetailSidebar from '../../components/DetailSidebar/DetailSidebar'
import AllDevices from '../../components/Table/AllDevices'

function AdminDevicePanel () {
  const [isCreatingDevice, setIsCreatingDevice] = useState(false)

  return (
    <>
      <div className='content'>
        <Row>
          <Col>
            <AllDevices />

            <Button
              id='btn-createDevice'
              className='btn-fill'
              color='primary'
              type='submit'
              onClick={() => setIsCreatingDevice(isCreatingDevice => !isCreatingDevice)}
            >
              Create Device
            </Button>

            {isCreatingDevice ? <DetailSidebar props={{ isCreatingDevice, setIsCreatingDevice }} /> : null}
          </Col>
        </Row>
      </div>
    </>
  )
}

export default AdminDevicePanel
