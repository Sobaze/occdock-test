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
// nodejs library that concatenates classes
import classNames from 'classnames'

// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Input,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Modal,
  NavbarToggler,
  ModalHeader
} from 'reactstrap'

const Header = ({ toggleSidebar, brandText, sidebarOpened }) => {
  const [collapseOpen, setcollapseOpen] = React.useState(false)
  const [modalSearch, setmodalSearch] = React.useState(false)
  const [color, setcolor] = React.useState('navbar-transparent')

  React.useEffect(() => {
    window.addEventListener('resize', updateColor)

    // Specify how to clean up after this effect:
    return () => window.removeEventListener('resize', updateColor)
  })

  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  const updateColor = () => {
    window.innerWidth < 993 && collapseOpen
      ? setcolor('bg-white')
      : setcolor('navbar-transparent')
  }

  // this function opens and closes the collapse on small devices
  const toggleCollapse = () => {
    collapseOpen
      ? setcolor('navbar-transparent')
      : setcolor('bg-white')

    setcollapseOpen(!collapseOpen)
  }

  const logout = () => {
    // TODO: Do we want a flashMessage here?
    window.localStorage.removeItem('occdec_token')
    window.location.reload()
    console.log('logout')
  }

  return (
    <>
      <Navbar className={classNames('navbar-absolute', color)} expand='lg'>
        <Container fluid>
          <div className='navbar-wrapper'>
            <div
              className={classNames('navbar-toggle d-inline', {
                toggled: sidebarOpened
              })}
            >
              <NavbarToggler onClick={toggleSidebar}>
                <span className='navbar-toggler-bar bar1' />
                <span className='navbar-toggler-bar bar2' />
                <span className='navbar-toggler-bar bar3' />
              </NavbarToggler>
            </div>
            <NavbarBrand href='#pablo' onClick={(e) => e.preventDefault()}>
              {brandText}
            </NavbarBrand>
          </div>
          <NavbarToggler onClick={toggleCollapse}>
            <span className='navbar-toggler-bar navbar-kebab' />
            <span className='navbar-toggler-bar navbar-kebab' />
            <span className='navbar-toggler-bar navbar-kebab' />
          </NavbarToggler>
          <Collapse navbar isOpen={collapseOpen}>
            <Nav className='ml-auto' navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color='default'
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <div className='photo'>
                    <img
                      alt='...'
                      src={require('../../assets/img/anime3.png').default}
                    />
                  </div>
                  <b className='caret d-none d-lg-block d-xl-block' />
                  <p className='d-lg-none'>Log out</p>
                </DropdownToggle>
                <DropdownMenu className='dropdown-navbar' right tag='ul'>
                  <NavLink tag='li'>
                    <DropdownItem className='nav-item' onClick={logout}>Log out</DropdownItem>
                  </NavLink>
                </DropdownMenu>
              </UncontrolledDropdown>
              <li className='separator d-lg-none' />
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
