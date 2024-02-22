interface IPricingCard {
    price:number;
    title:string;
    benefits:string[];
    id:number;
    oneliner:string;
}

const pricingCards:IPricingCard[] = [
    {
        price: 350,
        title: "NewGenius Pro",
        benefits: [
            "Unlimited Minutes of Generation",
            "Automated Video Creation",
            "Lower Quality Generation",
        ],
        id: 1,
        oneliner: "Unlock AI-powered news generation for revenue growth!"
    },
    {
        price: 700,
        title: "NewGenius Enterprise",
        benefits: [
            "Everything In Pro Tier, and:",
            "High Quality Generation",
            "Videos with AI-Powered Templates",
        ],
        id: 2,
        oneliner: "Accelerate your revenue with comprehensive AI news generation!"
    },
]

export default pricingCards