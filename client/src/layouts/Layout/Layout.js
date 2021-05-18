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
import React from 'react'
import { Switch, useLocation } from 'react-router-dom'

// core components
import Header from '../../components/Header/Header.js'
import Footer from '../../components/Footer/Footer.js'
import Sidebar from '../../components/Sidebar/Sidebar.js'
import FixedPlugin from '../../components/FixedPlugin/FixedPlugin.js'

import logo from '../../assets/img/react-logo.png'
import { BackgroundColorContext } from '../../contexts/BackgroundColorContext'
import Content from '../../views/Content/Content.js'

import scrollbar from '../../utils/scrollbar/scrollbar.js'
import generateRoutes from '../../utils/routes/generateRoutes'
import getBrandText from '../../utils/routes/getBrandTextFromRoute'

const Layout = ({ routes }) => {
  const location = useLocation()
  const mainPanelRef = React.useRef(null)
  const [sidebarOpened, setsidebarOpened] = React.useState(
    document.documentElement.className.indexOf('nav-open') !== -1
  )

  React.useEffect(() => {
    scrollbar.init(mainPanelRef)

    return scrollbar.cleanup
  })

  React.useEffect(() => {
    scrollbar.update(mainPanelRef)
  }, [location])

  // this function opens and closes the sidebar on small devices
  const toggleSidebar = () => {
    document.documentElement.classList.toggle('nav-open')
    setsidebarOpened(!sidebarOpened)
  }

  return (
    <BackgroundColorContext.Consumer>
      {({ color, changeColor }) => (
        <>
          <div className='wrapper'>
            <Sidebar
              routes={routes}
              logo={{
                innerLink: '/',
                text: 'OCCDEC',
                imgSrc: logo
              }}
              toggleSidebar={toggleSidebar}
            />

            <div className='main-panel' ref={mainPanelRef} data={color}>
              <Header
                brandText={getBrandText(routes, location.pathname)}
                toggleSidebar={toggleSidebar}
                sidebarOpened={sidebarOpened}
              />

              <Content>
                <Switch>
                  {generateRoutes(routes)}
                </Switch>
              </Content> 

              <Footer fluid />
            </div>
          </div>
          <FixedPlugin bgColor={color} handleBgClick={changeColor} />
        </>
      )}
    </BackgroundColorContext.Consumer>
  )
}

export default Layout 
