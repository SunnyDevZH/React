import React, { Component } from 'react';
import Navbar from './components/navbar';
import Product from './components/poduct';


class App extends Component {
    state = {  } 
    render() { 
        return <React.Fragment>
            <Navbar/>
            <Product/>
        </React.Fragment>;
    }
}
 
export default App;