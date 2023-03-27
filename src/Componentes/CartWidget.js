import React from 'react'
import  { useContext, useState } from 'react'
import { CartContext } from './CartContext'


const CartWidget = () => {

  const { cart, getTotal, getTotalQuantity, clearCart } = useContext(CartContext)

  const [isOpen, setIsOpen] = useState(false)

  const handleMouseEnter = () => {
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    setIsOpen(false)
  }


  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart3" viewBox="0 0 20 20">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg>
{cart.length > 0 && (
                <span
                  className="badge badge-pill badge-danger ml-1"
                  style={{
                    backgroundColor: "red",
                    borderRadius: "50%",
                    padding: "4px 8px",
                    color: "white",
                  }}>
                  {getTotalQuantity()}
                </span>
              )}
              {isOpen && (
                <div className="cart-dropdown">
                  <ul>
                    {cart.map((productos) => (
                      <li key={productos.id}>
                        <span>{productos.name} | <span style={{color: 'green'}}>Eliminar de carrito{productos.quantity}</span> <b>${productos.price*productos.quantity}</b></span>
                      </li>
                    ))}
                  </ul>
                  { 
                  cart.length > 0 &&
                  <div style={{marginTop: '20px'}}>
                    <ul>
                      <span><u>Productos totales:</u> {getTotalQuantity()} </span>
                    </ul>
                    <ul>
                    <span><u>Total a pagar:</u> ${getTotal()} </span>
                    <button type="button" class="btn btn-dark btn-sm" onClick={() => clearCart()}>Vaciar</button>
                  </ul>

                  </div>
                  }
                </div>
              )}
    </>
  )
}

export default CartWidget
