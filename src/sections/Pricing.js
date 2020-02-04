import React, { useState } from 'react';
import PricingList from "../components/PricingList";
import PricingCardList from "../components/PricingCardList";
import PricingForm from "../components/PricingForm";

let pricingData = [
    {
        pricePoint: "$100K-$200K",
        priceId: 1,
        active: false,
        showEnterprise: false,
        plans: [
            {
                planId: 1,
                planName: "Qualified 20",
                leadsPerMonth: "20",
                pricePerLiveTransfer: "$69",
                totalQualifiedLeadPrice: "$1,380",
                totalPlatformPrice: "$299",
                finalPrice: "$1,679",
                isPopular: false
            },
            {
                planId: 2,
                planName: "Qualified 40",
                leadsPerMonth: "40",
                pricePerLiveTransfer: "$67",
                totalQualifiedLeadPrice: "$2,680",
                totalPlatformPrice: "$599",
                finalPrice: "$3,279",
                isPopular: true
            },
            {
                planId: 3,
                planName: "Qualified 60",
                leadsPerMonth: "60",
                pricePerLiveTransfer: "$65",
                totalQualifiedLeadPrice: "$3,900",
                totalPlatformPrice: "$699",
                finalPrice: "$4,599",
                isPopular: false
            },
            {
                planId: 4,
                planName: "Qualified 80",
                leadsPerMonth: "80",
                pricePerLiveTransfer: "$63",
                totalQualifiedLeadPrice: "$5,040",
                totalPlatformPrice: "$799",
                finalPrice: "$5,839",
                isPopular: false
            }
        ]
    },
    {
        pricePoint: "$200K-$300K",
        priceId: 2,
        active: false,
        showEnterprise: false,
        plans: [
            {
                planId: 5,
                planName: "Qualified 20",
                leadsPerMonth: "20",
                pricePerLiveTransfer: "$79",
                totalQualifiedLeadPrice: "$1,580",
                totalPlatformPrice: "$299",
                finalPrice: "$1,879",
                isPopular: false
            },
            {
                planId: 6,
                planName: "Qualified 40",
                leadsPerMonth: "40",
                pricePerLiveTransfer: "$77",
                totalQualifiedLeadPrice: "$3,080",
                totalPlatformPrice: "$599",
                finalPrice: "$3,679",
                isPopular: true
            },
            {
                planId: 7,
                planName: "Qualified 60",
                leadsPerMonth: "60",
                pricePerLiveTransfer: "$74",
                totalQualifiedLeadPrice: "$4,440",
                totalPlatformPrice: "$699",
                finalPrice: "$5,139",
                isPopular: false
            },
            {
                planId: 8,
                planName: "Qualified 80",
                leadsPerMonth: "80",
                pricePerLiveTransfer: "$72",
                totalQualifiedLeadPrice: "$5,760",
                totalPlatformPrice: "$799",
                finalPrice: "$6,559",
                isPopular: false
            }
        ]
    },
    {
        pricePoint: "$300K-$400K",
        priceId: 3,
        active: true,
        showEnterprise: true,
        plans: [
            {
                planId: 9,
                planName: "Qualified 20",
                leadsPerMonth: "20",
                pricePerLiveTransfer: "$99",
                totalQualifiedLeadPrice: "$1,980",
                totalPlatformPrice: "$299",
                finalPrice: "$2,279",
                isPopular: false
            },
            {
                planId: 10,
                planName: "Qualified 40",
                leadsPerMonth: "40",
                pricePerLiveTransfer: "$96",
                totalQualifiedLeadPrice: "$3,840",
                totalPlatformPrice: "$599",
                finalPrice: "$4,439",
                isPopular: true
            },
            {
                planId: 12,
                planName: "Qualified 80",
                leadsPerMonth: "80",
                pricePerLiveTransfer: "$90",
                totalQualifiedLeadPrice: "$7,200",
                totalPlatformPrice: "$799",
                finalPrice: "$7,999",
                isPopular: false
            }
        ]
    },
    {
        pricePoint: "$400K-$500K",
        priceId: 4,
        active: false,
        showEnterprise: true,
        plans: [
            {
                planId: 13,
                planName: "Qualified 20",
                leadsPerMonth: "20",
                pricePerLiveTransfer: "$109",
                totalQualifiedLeadPrice: "$2,180",
                totalPlatformPrice: "$299",
                finalPrice: "$2,479",
                isPopular: false
            },
            {
                planId: 14,
                planName: "Qualified 40",
                leadsPerMonth: "40",
                pricePerLiveTransfer: "$106",
                totalQualifiedLeadPrice: "$4,240",
                totalPlatformPrice: "$599",
                finalPrice: "$4,839",
                isPopular: true
            },
            // {
            //     planId: 15,
            //     planName: "Qualified 60",
            //     leadsPerMonth: "60",
            //     pricePerLiveTransfer: "$102",
            //     totalQualifiedLeadPrice: "$6,120",
            //     totalPlatformPrice: "$699",
            //     finalPrice: "$6,819",
            //     isPopular: false
            // },
            {
                planId: 16,
                planName: "Qualified 80",
                leadsPerMonth: "80",
                pricePerLiveTransfer: "$99",
                totalQualifiedLeadPrice: "$7,920",
                totalPlatformPrice: "$799",
                finalPrice: "$8,719",
                isPopular: false
            }
        ]
    },
    {
        pricePoint: "$500K+",
        priceId: 5,
        active: false,
        showEnterprise: true,
        plans: [
            {
                planId: 17,
                planName: "Qualified 20",
                leadsPerMonth: "20",
                pricePerLiveTransfer: "$129",
                totalQualifiedLeadPrice: "$2,580",
                totalPlatformPrice: "$299",
                finalPrice: "$2,879",
                isPopular: false
            },
            {
                planId: 18,
                planName: "Qualified 40",
                leadsPerMonth: "40",
                pricePerLiveTransfer: "$125",
                totalQualifiedLeadPrice: "$5,000",
                totalPlatformPrice: "$599",
                finalPrice: "$5,599",
                isPopular: true
            },
            {
                planId: 20,
                planName: "Qualified 80",
                leadsPerMonth: "80",
                pricePerLiveTransfer: "$117",
                totalQualifiedLeadPrice: "$9,360",
                totalPlatformPrice: "$799",
                finalPrice: "$10,159",
                isPopular: false
            }
        ]
    }
]

/**
 * this component renders the pricing and plans data
 */
export default function Pricing() {

    // intialize variable we need
    const [plans, setPlans] = useState(pricingData);
    const [showModal, setModalStatus] = useState(false);
    const [plan, selectPlan] = useState(null);

    // this method changes active pricing
    function changeActivePricing(id) {
        setPlans(plans.map(item => {
            if(item.priceId === id) {
                item.active = true;
            }else {
                item.active = false;
            }
            return item;
        }));
    }

    // initialize plans
    let selectedPlans = [];
    let showEnterprise = false;

    // get plans for selected pricing
    plans.forEach(item => {
        if(item.active) {
            selectedPlans = item.plans;
            showEnterprise = item.showEnterprise;
        }
    });

    // display pricing modal
    function showPricingModal(plan) {
        selectPlan(plan);
        setModalStatus(true);
    }

    // hide pricing modal
    function hidePricingModal() {
        selectPlan(null);
        setModalStatus(false);
    }

    return (
        <div className="container">
            <PricingList list={plans} changeActivePricing={changeActivePricing} />
            <PricingCardList showEnterprise={showEnterprise} list={selectedPlans} showPricingModal={showPricingModal} />
            <PricingForm showModal={showModal} selectedPlan={plan} hidePricingModal={hidePricingModal} />
        </div>
    )
}
