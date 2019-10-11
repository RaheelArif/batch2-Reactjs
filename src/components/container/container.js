import React, { Component } from 'react';
import LeftSide from "./leftSide";

class Container extends Component {
state = {
    name : null,
    price : null,
    data : null,
}

handleChange = (e) => {
this.setState ({
    [e.target.name] : e.target.value
})
}
getData = (data) => {
      this.setState({
          data : data
      })  
}


render() {
console.log(this.state)
        return (
            <div>
                <h1>{this.state.name}</h1>
                <input onChange={this.handleChange} placeholder="name" name="name" type="text"/>
                <h1>{this.state.price}</h1>
                <input onChange={this.handleChange} placeholder="price" name="price" type="text"/>

                < LeftSide  getData = {(data) => this.getData(data)}/>

            </div>
        )
    }

}
export default Container;




