import React, { useState } from "react";
import { Link } from "react-router";
import { useOutletContext } from "react-router";

import "./packages.scss";

const Packages = () => {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [successful , setSuccessful ] = useState(true)

  const message = useOutletContext()

  const finances = message.finances[0] || {
    balance : 0
  }



  const monthlyPlans = [
    { name: "Premium", amount: 15000, details: ["Amount: $15,000","30% Deposit Bonus", "Negative Balance Protection", "Spreads: 1.9", "Scalping", "Daily Signals", "Financial Plan"] },
    { name: "VIP", amount: 20000, details: ["Amount: $20,000","35% Deposit Bonus", "Negative Balance Protection", "Spreads: 1.5", "Scalping", "Daily Signals", "Financial Plan"] },
    { name: "Platinum",amount: 30000, details: ["Amount: $30,000","50% Deposit Bonus", "Negative Balance Protection", "Spreads: 1.2", "Scalping", "Daily Signals", "Financial Plan"] },
  ];

  const handleSubscribe = (plan, isWeekly) => {
    const planCost = isWeekly ? plan.amount : plan.minAmount;

    if (finances.balance >= planCost) {
      setSelectedPlan(plan.name);
      setShowModal(true);
      setSuccessful(true)
    } else {
       setShowModal(true);
      setSuccessful(false)
    }
  };

  return (
    <div className="packages">
      <div className="balanceBox">
        <h2>Balance: ${finances.balance}</h2>
      </div>

      <section className="plansSection">
        <h1>Weekly Plans</h1>
        <p className="subtitle">Choose a weekly investment plan that matches your trading goals.</p>
        <div className="plansGrid">
          {weeklyPlans.map((plan, idx) => (
            <div className="planCard" key={idx}>
              <h3>{plan.name}</h3>
              <ul>{plan.details.map((d, i) => <li key={i}>{d}</li>)}</ul>
              <Link
                onClick={(e) => { e.preventDefault(); handleSubscribe(plan, true); }}
                className="subscribeBtn"
                to="#"
              >
                Subscribe
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="plansSection">
        <h1>Monthly Plans</h1>
        <p className="subtitle">Unlock long-term opportunities with our monthly plans.</p>
        <div className="plansGrid">
          {monthlyPlans.map((plan, idx) => (
            <div className="planCard" key={idx}>
              <h3>{plan.name}</h3>
              <ul>{plan.details.map((d, i) => <li key={i}>{d}</li>)}</ul>
              <Link
                onClick={(e) => { e.preventDefault(); handleSubscribe(plan, false); }}
                className="subscribeBtn"
                to="#"
              >
                Subscribe
              </Link>
            </div>
          ))}
        </div>
      </section>

      {showModal && (
        <div className="modalOverlay">
          <div className="modalBox">
            <h2 className={`${successful ? "" : "failed"}`}>{`${successful ? "🎉 Your Subscription is being processed!" : "Subscription Failed"}`}</h2>
            {successful ? <p>Your subscription for the {selectedPlan} plan is currently being processed.</p> : <p>Insufficient funds </p>}
             {successful ? <button onClick={() => setShowModal(false)} className="closeBtn">
              Close
            </button> : <Link to="/userDashboard/depositWithdrawal" onClick={() => setShowModal(false)} className="closeBtn">
              Deposit
            </Link> }
          </div>
        </div>
      )}
    </div>
  );
};

export default Packages;
