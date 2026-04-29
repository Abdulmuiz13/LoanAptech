import React from 'react';
import './Terms.css';

export default function Terms() {
    return(
    <div className="terms-page">
        <div className="terms-container">
            <h1>Terms of Service</h1>
            <div className="update-date">
            <p>Last Updated: December 10, 2025</p>
        </div>
        <div className="terms-content">
            <section>
                <ol>
                    <li>
                        <h2>Acceptance of Terms</h2>
                        <p>
                            By accessing and using our website, you agree to be bound by the terms and provision of the agreement. 
                        </p>
                    </li>
                    <li>
                        <h2>Eligibility</h2>
                        <p>
                            You must be at least 18 years old to use our services. By using our website, you represent and warrant that you meet this requirement.
                        </p>
                    </li>
                    <li>
                        <h2>Loan Terms</h2>
                        <p>
                            The terms and conditions for obtaining a loan will be outlined in a separate agreement.
                        </p>
                    </li>
                    <li>
                        <h2>Privacy and Data</h2>
                        <p>
                        We collect and use your personal data in accordance with our Privacy Policy. We do not sell your data to third parties. 
                        </p>
                    </li>
                    <li>
                        <h2>Electronic Signature</h2>
                        <p>
                        By clicking "I Agree" or using our services, you consent to the use of electronic signatures, which are legally binding.
                        </p>
                    </li>
                    <li>
                        <h2>Governing Law</h2>
                        <p>
                        These terms and conditions are governed by and construed in accordance with the laws of the State of [State], without regard to its conflict of law provisions.
                        </p>
                    </li>
                </ol>
            </section>
        </div>
    </div>
  </div>
    );
}