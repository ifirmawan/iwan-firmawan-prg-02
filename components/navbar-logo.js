import React from 'react'
import { NavbarText } from 'reactstrap'

const NavbarLogo = React.forwardRef(function CustomComponent(props, ref) {
  const { onClick } = props
  return (
    <>
      <img src='/images/nindya-karya-logo.png' className='col-lg-1 col-md-2 col-3' onClick={onClick} />
      <NavbarText onClick={onClick}>Dashboard</NavbarText>
    </>
  );
})
export default NavbarLogo
