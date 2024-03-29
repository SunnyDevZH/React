import React, { Component } from 'react';
import Navbar from './components/navbar';
import Product from './components/poduct';
import ShoppingCard from './components/shopping-card';

class App extends Component {
    state = { 
        items: []
     } 

    addItem = (amount, name, price) => {
        let currentItems = this.state.items;

        let existingItem = this.state.items.find(item => item.name === name);
        if(existingItem){
            existingItem.amount++;
        } else {
        currentItems.push({
            amount,
            name,
            price
            })
        }
        this.setState({ items: currentItems})
        console.log(this.state);
    }
    render() { 
        return <React.Fragment>
            <Navbar/>
            <div className="main-container">
            <div className="product-container">
                <Product onAdd={() => this.addItem(1, 'Tomaten', 2.99)} image="tomate.jpg" title="Tomaten" description=" Füge dieses Produkt zu deinem Warenkorb hinzu" />
                <Product onAdd={() => this.addItem(1, 'Gurken', 1.99)} image="gurken.jpg" title="Gurken" description=" Füge dieses Produkt zu deinem Warenkorb hinzu" />
                <Product onAdd={() => this.addItem(1, 'Äpfel', 4.99)} image="äpfel.jpg" title="Äpfel" description=" Füge dieses Produkt zu deinem Warenkorb hinzu" />
                <Product onAdd={() => this.addItem(1, 'Birnen', 3.99)} image="birnen.jpg" title="Birnen" description=" Füge dieses Produkt zu deinem Warenkorb hinzus" />
            </div>
            <ShoppingCard items={this.state.items}/>

            </div>
            
        </React.Fragment>;
    }
}
 
export default App;