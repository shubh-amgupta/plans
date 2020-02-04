import React from 'react'

export default function PricingCard({ showPricingModal, data, data: { planName, leadsPerMonth, pricePerLiveTransfer, totalQualifiedLeadPrice, totalPlatformPrice, finalPrice, isPopular } }) {

    const visibility = isPopular ? "visible" : "hidden";
    const ctaClasses = `card__cta ${isPopular ? "card__cta--active" : ""}`;
    const infoClasses = `card__info ${isPopular ? "card__info--active" : ""}`

    return (
        <div className="card">
            {
                isPopular ?
                <div className="card__popular">
                    Most Popular!
                </div> : null
            }
            <div className="card__heading">{planName}</div>
            <div className={infoClasses}>
                <div>
                    <div className="card__info--main">{pricePerLiveTransfer}</div>
                    <div className="card__info--sub">Per Qualified Lead</div>
                </div>
                <div>
                    <div className="card__info--sub">Qualified Leads Per Month</div>
                    <div className="card__info--mid">{leadsPerMonth}</div>
                </div>
                <div>
                    <div className="card__info--sub">Platform Fee Per Month</div>
                    <div className="card__info--mid">{totalPlatformPrice}</div>
                </div>
            </div>
            <div className="card__price">
                {finalPrice}/mo
            </div>
            <button className={ctaClasses} onClick={() => showPricingModal(data)}>
                Start Your Trial
            </button>
        </div>
    )
}
