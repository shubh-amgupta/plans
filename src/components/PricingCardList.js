import React from 'react';
import PricingCard from "./PricingCard";
import EnterpriseCard from "./EnterpriseCard";

export default function PricingCardList({ list, showPricingModal, hidePricingModal }) {
    return (
        <div className="card__list">
            {
                list.map((item, idx) => <PricingCard key={item.planId} data={item} showPricingModal={showPricingModal} />)
            }
            <EnterpriseCard showPricingModal={showPricingModal} />
        </div>
    )
}
