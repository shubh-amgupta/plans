import React from 'react'

export default function PricingList({ list, changeActive }) {
    return (
        <div className="list">
            {
                list.map((item, idx) => {
                    const classes = `list__item ${item.active ? 'list__item--active' : ''}`
                    return <div 
                            key={idx}
                            className={classes}
                            onClick={() => changeActive(item.priceId)}>
                                {item.pricePoint}
                            </div>
                })
            }
        </div>
    )
}
