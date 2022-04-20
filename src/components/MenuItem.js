import React from 'react'

function MenuItem({ items }) {

    const allOfItems = items.map((item, index) => {
        return (
            <div className='menu-item' key={index}>
                <img src={item.img} alt='' className='item-photo' />
                <div className='item-info'>
                    <div className='item-name-price'>
                        <h3 className='item-name'>{item.title}</h3>
                        <p className='item-price'>$ {item.price}</p>
                    </div>
                    <div className='item-desc'>
                        <p>{item.desc}</p>
                    </div>
                </div> 
            </div>  
        )
    })
    return (
        <div className='menu-items'>
            {allOfItems}
        </div>
    )
}

export default MenuItem
