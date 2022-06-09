import { useState } from "react"

import Card from "../../components/Card/Card"
import Product from "../../components/Product/Product"


const Home = () => {
    
    const [products, updateProducts] = useState([
        {    
            name: 'Lemons',
            amount: 0
        }, 
        {
            name: 'Sugar',
            amount: 0
        }, 
        {
            name: 'Ice Cubes',
            amount: 0
        }
    ])

    const incrementProduct = (name) => {
        updateProducts(
            products.reduce((acc, product) => 
                product.name === name 
                    ? [...acc, {name, amount: product.amount + 1}] 
                    : [...acc, product],
                    []
            )
        )
    }

    const decrementProduct = (name) => {
        updateProducts(
            products.reduce((acc, product) => 
                product.name === name && product.amount > 0
                    ? [...acc, {name, amount: product.amount - 1}] 
                    : [...acc, product],
                    []
            )
        )
    }

    const [numLemons, updateNumLemons] = useState(0)

    return (
        <div className='Home'>
            <Card>
                {products.map((product, i) => (
                    <Product 
                        key={product.name + i} 
                        name={product.name} 
                        amount={product.amount}
                        increment={() => incrementProduct(product.name)}
                        decrement={() => decrementProduct(product.name)}
                    />
                ))}
            </Card>

            <Card></Card>
        </div>
    )
}

export default Home;