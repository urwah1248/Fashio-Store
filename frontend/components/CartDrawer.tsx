import React from 'react'
import { Drawer } from 'antd'
import Cart from './Cart'

type Props = {
  cartOpen: boolean,
  setCartOpen: any
}

const CartDrawer = ({cartOpen, setCartOpen, ...props}: Props) => {
  const onClose = () => {
    setCartOpen(false)
  }
  return (
    <Drawer
    title={<h3 className='text-center'>Shopping Cart</h3>}
    closable
    placement="right"
    open={cartOpen}
    onClose={onClose}
    >
      <Cart/>
    </Drawer>
  )
}

export default CartDrawer