import React, { useState } from 'react';
import Categories from './components/Categories';
import MenuItem from './components/MenuItem';
import "./style.css";
import data from "./data";

const allCategory = ['all', ...new Set(data.map(item => item.category))];

function App() {
    const [items, setItems] = useState(data);
    const [categories, setCategories] = useState(allCategory);

    const filterItems = (category) => {
        console.log(category);
        if (category === 'all') {
            setItems(data);
            return
        }
        const newItem = data.filter(item => item.category === category);
        setItems(newItem);
    }

    return (
        <div className='App'>
            <div className='title'>
                <h2>Our Menu</h2>
            </div>
            <Categories categories={categories} filterItems={filterItems}/>
            <MenuItem items={items}/>
        </div>
    )
}

export default App
