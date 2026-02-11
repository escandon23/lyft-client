import Service from "./Service"
import "./Service.scss"

const ServicesData = [
    {
        heading : "Forex Trading",
        image : "/services/forex-trading.png",
        details : "Lyft FX Company Platform provides access to the global foreign exchange market, allowing clients to trade major, minor, and exotic currency pairs with competitive spreads and fast execution."
    },
    {
      heading : "Indices & Commodities",
      image : "/services/indices-commodities.png",
      details : "Trade popular global indices and commodities such as gold, silver, oil, and natural gas through CFDs, enabling portfolio diversification across multiple asset classes."
  
    },
    {
      heading : "Risk Management Tools",
      image : "/services/risk-management.png",
      details : "Lyft FX Company Platform offers essential risk management features including stop-loss, take-profit, and negative balance protection to help traders manage their exposure responsib"
  
    },
    {
      heading : "Customer Support",
      image : "/services/customer-support.png",
      details : "Our dedicated support team is available to assist clients with account-related inquiries, platform usage, and general trading questions."
  
    }
]




const Services = () => {
    return (
      <div className="services">
        <h1>Our Services</h1>
      <div className="service-wrapper">
        {ServicesData.map((data, index) => (
          <Service
            key={index}
            heading={data.heading}
            image={data.image}
            details={data.details}
          />
        ))}
      </div>
    </div>
    )
}

export default Services