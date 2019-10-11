import React, { Component } from 'react';


class LeftSide extends Component {
    state = {

        Products: [
            { name: "shugar", price: "20Rs" },
            { name: "oil", price: "40Rs" },
            { name: "perfume", price: "50Rs" },
            { name: "shugar1", price: "60Rs" },
            { name: "ink", price: "23Rs" },
            { name: "pen", price: "70Rs" },

        ]
    }
    deletItem = (e) => {
      
       this.setState({
           Products : this.state.Products.filter( product => { return product.name != e.target.id })
       })
    }
sendData = () => {

    this.props.getData(this.state)
}
    render() {


        var data = this.state.Products.map(product => {
            return (
                <tr key={product.name}>
                   <td>{product.name}</td>
                   <td>{product.price}</td>
                   <td onClick={this.deletItem} id={product.name} style={{color : "red"}}>X</td>

                </tr>
            )

        })

        return (
            <div>
                <table border="1">
                    <tr>
                        <th>Product name </th>
                        <th>Product Price </th>
                        <th>delet item</th>
                    </tr>
                {data}
                </table>

<button onClick={this.sendData}>send data</button>
            </div>
        )
    }

}
export default LeftSide;
