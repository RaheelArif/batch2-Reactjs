import React, { Component } from 'react';
import PImg from "../../images/abc.jpg"
import {Link } from "react-router-dom"
class Product extends Component {
    state = [
        {id:1, pname: "shugar" },
        {id:2, pname: "shugar2" },
        {id:3, pname: "shugar3" },
        {id:4, pname: "shugar4" },
        {id:5, pname: "shugar5" },
        {id:6, pname: "shugar6" },
        {id:7, pname: "shugar7" },
        {id:8, pname: "shugar8" }
    ]

    render() {
        return (
            <div >
                <h1 style={{textAlign: "center"}}>Products</h1>
                <div className="product-c">
                    {
                        this.state.map(p => {
                            return (
                                <Link onClick={this.abc}  key={p.pname} id={p.id} to={"/product/" + p.id } className="pcontainer">
                                    <img src={PImg} alt="product image" />
                                    <h2>{p.pname}</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maxime neque ad in, blanditiis possimus nobis fuga quibusdam repellat quam distinctio a eum commodi veritatis dolor eveniet reiciendis libero quo.</p>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

}
export default Product;




