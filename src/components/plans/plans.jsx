import {React} from "react"
import { Link } from "react-router-dom";

import "./plans.scss";

const Plans = () => {


  const monthlyPlans = [
    { name: "Premium", amount: 15000, details: ["Amount: $15,000","30% Deposit Bonus", "Negative Balance Protection", "Spreads: 1.9", "Scalping", "Daily Signals", "Financial Plan"] },
    { name: "VIP", amount: 20000, details: ["Amount: $20,000","35% Deposit Bonus", "Negative Balance Protection", "Spreads: 1.5", "Scalping", "Daily Signals", "Financial Plan"] },
    { name: "VIP Luxury", amount: 25000, details: ["Amount: $25,000","40% Deposit Bonus", "Negative Balance Protection", "Spreads: 1.2", "Scalping", "Daily Signals", "Financial Plan"] },
    { name: "Platinum",amount: 30000, details: ["Amount: $30,000","50% Deposit Bonus", "Negative Balance Protection", "Spreads: 1.2", "Scalping", "Daily Signals", "Financial Plan"] },
  ];



  return (
    <div className="plans">

      <section className="plansSection">
        <h1>Monthly Plans</h1>
        <p className="subtitle">Unlock long-term opportunities with our monthly plans.</p>
        <div className="plansGrid">
          {monthlyPlans.map((plan, idx) => (
            <div className="planCard" key={idx}>
              <h3>{plan.name}</h3>
              <ul>{plan.details.map((d, i) => <li key={i}>{d}</li>)}</ul>
              <Link
                className="subscribeBtn"
                to="/userDashboard/packages"
              >
                Subscribe
              </Link>
            </div>
          ))}
        </div>
      </section>

    
    </div>
  );
};

export default Plans;
