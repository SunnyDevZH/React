import React, { Component } from 'react';
import Navbar from './components/navbar';
import Product from './components/poduct';
import ShoppingCard from './components/shopping-card';

class App extends Component {
    state = {  } 
    render() { 
        return <React.Fragment>
            <Navbar/>
            <div className="main-container">
            <div className="product-container">
                <Product image="tomate.jpg" title="Tomaten" description=" Füge dieses Produkt zu deinem Warenkorb hinzu" />
                <Product image="gurken.jpg" title="Gurken" description=" Füge dieses Produkt zu deinem Warenkorb hinzu" />
                <Product image="äpfel.jpg" title="Äpfel" description=" Füge dieses Produkt zu deinem Warenkorb hinzu" />
                <Product image="birnen.jpg" title="Birnen" description=" Füge dieses Produkt zu deinem Warenkorb hinzus" />
            </div>
            <ShoppingCard/>

            </div>
            
        </React.Fragment>;
    }
}
 
export default App;