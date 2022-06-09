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

    const [numLemons, updateNumLemons] = useState(0)

    return (
        <div className='Home'>
            <Card>
                {[<Product key={1} />, <Product key={2} />, <Product key={3} />]}
            </Card>
        </div>
    )
}

export default Home;