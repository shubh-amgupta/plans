import React from 'react'

export default function EnterpriseCard({ showPricingModal }) {
    return (
        <div className="card">
            <div className="card__heading">Enterprise</div>
            <div className="card__enterprise">
                Want more than 80 qualified leads per month?
            </div>
            <button className="card__cta" onClick={() => showPricingModal({ planId: 0, planName: "Enterprise" })}>
                Get In Touch
            </button>
        </div>
    )
}
