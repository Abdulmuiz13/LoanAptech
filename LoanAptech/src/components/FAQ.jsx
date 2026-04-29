import React from "react";
import "./FAQ.css";

export default function Faq() {
  return (
    <div className="faq-page">
      <div className="faq-container">
        <h1>Frequently Asked Questions</h1>
        <p className="faq-subtitle">Find answers to common questions about our services.</p>
        <div className="faq-list">
          <details className="faq-item">
            <summary>What is your return policy?</summary>
            <p>We offer a 30-day return policy for all products. Items must be in their original condition and packaging.</p>
          </details>
        </div>
        <div className="faq-list">
          <details className="faq-item">
            <summary>How do I track my order?</summary>
            <p>You can track your order by logging into your account and visiting the "My Orders" section.</p>
          </details>
        </div>
        <div className="faq-list">
          <details className="faq-item">
            <summary>What payment methods do you accept?</summary>
            <p>We accept all major credit cards, PayPal, and bank transfers.</p>
          </details>
        </div>
        <div className="faq-list">
          <details className="faq-item">
            <summary>Do you check credit score?</summary>
            <p>Yes, we perform a credit check as part of our loan application process to assess your creditworthiness.</p>
          </details>
        </div>
        <div className="faq-list">
          <details className="faq-item">
            <summary>How long does it take to get approved for a loan?</summary>
            <p>Our loan approval process typically takes 24-48 hours, depending on the completeness of your application and the verification process.</p>
          </details>
        </div>
      </div>
    </div>

      
    
  );
}