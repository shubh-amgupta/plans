import React from 'react'

export default function PricingList({ list, changeActivePricing }) {
    return (
        <div className="list">
            {
                list.map((item, idx) => {
                    const classes = `list__item ${item.active ? 'list__item--active' : ''}`
                    return <div 
                            key={idx}
                            className={classes}
                            onClick={() => changeActivePricing(item.priceId)}>
                                {item.pricePoint}
                            </div>
                })
            }
        </div>
    )
}
