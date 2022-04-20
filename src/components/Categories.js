import React from 'react'

function Categories({ categories, filterItems }) {

    return (
        <div className='categories'>
            {categories.map((category, index) => (
                <button
                    className='filter-btn'
                    key={index}
                    onClick={()=> filterItems(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    )
}

export default Categories
