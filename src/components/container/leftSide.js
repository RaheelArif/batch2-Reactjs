import React, {Component} from 'react';


class LeftSide extends Component{
    state = {

        Products : [
            {name: "shugar",price: "20Rs" },
            {name: "oil",price: "40Rs" },
            {name: "perfume",price: "50Rs" },
            {name: "watch",price: "60Rs" },
            {name: "ink",price: "23Rs" },
            {name: "pen",price: "70Rs" },
    ]
    }

    render(){
        var data =this.state.Products.map( product =>{
            return  <h1 key={product.name}>Product Name : {product.name} || Product Price : {product.price}</h1>

          } )

        return(
            <div>

                  {data}

              
            </div>
        )
    }

}
export default LeftSide;
