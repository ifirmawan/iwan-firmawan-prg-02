import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container
} from 'reactstrap';
import NavbarLogo from './navbar-logo'

const NindyaNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const toggle = () => setIsOpen(!isOpen)
  const handleLink = () => {
    router.push('/dashboard?pid=111')
  }
  return (
    <div>
      <Navbar color="light" light style={{ borderBottom: '3px solid #10613c' }} expand="md">
        <Container>
          <NavbarBrand style={{ cursor: 'pointer' }}>
            <NavbarLogo onClick={handleLink} />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link href='/dashboard/report'>
                  <NavLink style={{ cursor: 'pointer' }}>Laporan</NavLink>
                </Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Hi Admin!
              </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Profile
                </DropdownItem>
                  <DropdownItem divider />
                  <Link href='/'>
                    <DropdownItem>
                      Logout
                  </DropdownItem>
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NindyaNavbar
