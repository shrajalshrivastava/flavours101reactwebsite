import React, {useContext} from 'react'
import {DataContext} from '../DataProvider'
import {Link} from 'react-router-dom'
import"./Product.css"
export default function Products() {
    const value = useContext(DataContext)
    const [products] = value.products
    const addCart = value.addCart

    return (
        <div className="products">
            {
                products.map(product =>(
                    <div className="card" key={product._id}>
                        
                            <img src={product.images} alt=""/>
                        
                        <div className="box">
                        <h3 title={product.title}>
                            <Link to={`/menu`}>{product.title}</Link>
                        </h3>
                        <p>{product.description}</p>
                        <h4>₹{product.price}</h4>
                        <button onClick={() => addCart(product._id)}>
                            Order Now
                        </button>
                        </div>
                    </div>
                ))
            }
          
          
        </div>
    )
}
