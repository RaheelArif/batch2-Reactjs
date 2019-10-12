import React, { Component } from 'react';
import PImg from "../../images/abc.jpg"

class Product extends Component {
    state = [
        { pname: "shugar" },
        { pname: "shugar2" },
        { pname: "shugar3" },
        { pname: "shugar4" },
        { pname: "shugar5" },
        { pname: "shugar6" },
        { pname: "shugar7" },
        { pname: "shugar8" }
    ]
    render() {
        return (
            <div >
                <h1 style={{textAlign: "center"}}>Products</h1>
                <div className="product-c">
                    {
                        this.state.map(p => {
                            return (
                                <div key={p.pname} className="pcontainer">
                                    <img src={PImg} alt="product image" />
                                    <h2>{p.pname}</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maxime neque ad in, blanditiis possimus nobis fuga quibusdam repellat quam distinctio a eum commodi veritatis dolor eveniet reiciendis libero quo.</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

}
export default Product;




