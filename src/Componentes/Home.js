
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Landing from './Landing'
import { CartContext } from './CartContext';

const Home = () => {

  const { addToCart, removeFromCart } = useContext(CartContext)

    const productos = [
  { 
    id: 1, 
    nombre: 'Tupper', 
    descripcion: 'Tupper de plástico super resistente', 
    precio: '600', 
    imagen: "https://i.imgur.com/t6notN9.jpg"  
  },  

  { 
    id: 2, 
    nombre: "Taza", 
    descripcion: "Taza cerámica con detalle de dibujo", 
    precio: "1000", 
    imagen: "https://i.imgur.com/xLNhtqs.jpg" 
  },  

  { 
    id: 3, 
    nombre: "Cascada de humo", 
    descripcion: "Artesanal con quemador de incienso", 
    precio: "1200",
    imagen: "https://i.imgur.com/B9GAGgW.jpg" 
  }, 

  { 
    id: 4, 
    nombre: "Sahumerios", 
    descripcion: "Sahumerios de distintos aromas", 
    precio: "200", 
    imagen: "https://i.imgur.com/yHRgIlB.jpg" 
  },

  { 
    id: 5, 
    nombre: "Ratan", 
    descripcion: "Ratan grande de plástico", 
    precio: "800",
    imagen: "https://i.imgur.com/lG9ZMlT.jpg"
  },

  { 
    id: 6, 
    nombre: "Mate pampa", 
    descripcion: "Ecológico, 100% material reciclado", 
    precio: "4000",
    imagen: "https://i.imgur.com/PntlPkP.jpg" 
  },

  { 
    id: 7, 
    nombre: "Vela", 
    descripcion: "Vela con base de madera", 
    precio: "500",
    imagen: "https://i.imgur.com/f1zQQOP.jpg" 
  },

  { 
    id: 8, 
    nombre: "Decoracion home", 
    descripcion: "Decoración home de madera", 
    precio: "900",
    imagen: "https://i.imgur.com/aAnKswn.jpg" 
  },
    
    ];

    return(
    <div>
       <Landing />
      <h1>Lista de productos</h1>
      <ul>
        {productos.map(item => (
          <div className='Lista'>
              <p>{item.nombre}</p>
              <p>${item.precio}</p>
              <Link to={`/DetailsProductos/${item.id}`} style= {{color: '#f5f5db'}}> Ver detalle </Link>
              <button style={{  
              alignItems: 'center' ,
              background: '#a77dced8', 
              color: '#f5f5db', 
              width: '150px' , 
              height: '40px' ,
              border: 'solid 2px #f5f5db ', 
              padding: '0.5rem 0.5rem', 
              margin: '0.1rem ' 
              }} onClick={() => addToCart(item, 1)}>
                    Agregar al carrito
                </button>
                <button style={{
                  alignItems: 'center' ,
                  backgroundColor: 'red',
                  color: 'white',
                  border: 'solid 2px #f5f5db',
                  width: '150px',
                  height: '40px' ,
                  padding: '0.5rem 0.5rem', 
                  margin: '0.1rem ' , 
                }} onClick={() => removeFromCart(item.id)}>Eliminar de carrito
                </button>
          </div>
        ))}
      </ul>
    </div>)
  }

export default Home