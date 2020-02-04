import React from 'react';
import PricingCard from "./PricingCard";
import EnterpriseCard from "./EnterpriseCard";

export default function PricingCardList({ showEnterprise, list, showPricingModal }) {
    return (
        <div className="card__list">
            {
                list.map((item, idx) => <PricingCard key={item.planId} data={item} showPricingModal={showPricingModal} />)
            }
            {
                showEnterprise ?
                <EnterpriseCard showPricingModal={showPricingModal} /> : null
            }
        </div>
    )
}
