import React, { useState } from "react";
import { useNavigate, Link } from "react-router";
import "./Apply.css";

const Apply = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        FullName: "",
        email: "",
        LoanAmount: "",
        LoanTenure: "",
        PurposeofLoan: "",
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    const handleApplyLoan = async (e) => {
        e.preventDefault();
        setError("");

        if (!formData.FullName || !formData.email || !formData.LoanAmount || !formData.LoanTenure || !formData.PurposeofLoan) {
            setError("Please fill in all fields");
            return;
        }

        if (formData.LoanAmount <= 0) {
            setError("Loan Amount must be greater than 0");
            return;
        }
        if (formData.LoanTenure <= 0) {
            setError("Loan Tenure must be greater than 0");
            return;
        }

        setLoading(true);

        try{
            const response = await fetch("https://loanaptech-9b30.onrender.com/api/loans/apply", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    FullName: formData.FullName,
                    email: formData.email,
                    amount: formData.LoanAmount,
                    purpose: formData.PurposeofLoan,
                    duration: formData.LoanTenure
                })
            });
            const data = await response.json();

            if(response.ok) {
                alert("Loan application submitted successfully!");
                navigate("/dashboard");
            }else {
                setError(data.message || "Failed to submit loan application");
            }

        } catch (error) {
            console.error("Error submitting loan application:", error);
            setError("An error occurred while submitting the application. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="apply-container">
            <div className="apply-card">
                <div className="apply-title">
                    <h2>Apply for a Loan</h2>
                </div>
                {error && <div className="error">{error}</div>}
                <div className="apply-form">
                    <form onSubmit={handleApplyLoan}>
                        <h2> Full Name</h2>
                        <div className="input-group">
                            <input
                                type="text"
                                name="FullName"  // Changed from "Full Name"
                                placeholder="Full Name"
                                value={formData.FullName} // Changed from formData["Full Name"]
                                onChange={handleChange}
                            />
                            <h2> Email Address</h2>
                            <input
                                type="email"
                                name="email" // Changed from "Email Address"
                                placeholder="Email Address"
                                value={formData.email} // Changed from formData["Email Address"]
                                onChange={handleChange}
                            />
                            <h2> Loan Amount</h2>
                            <input
                                type="number"
                                name="LoanAmount" // Changed from "Loan Amount"
                                placeholder="Loan Amount"
                                value={formData.LoanAmount} // Changed from formData["Loan Amount"]
                                onChange={handleChange}
                            />
                            <h2> Loan Tenure</h2>
                            <input
                                type="number"
                                name="LoanTenure" // Changed from "Loan Tenure"
                                placeholder="Loan Tenure (months)"
                                value={formData.LoanTenure} // Changed from formData["Loan Tenure"]
                                onChange={handleChange}
                            />    
                            <h2> Purpose of Loan</h2>
                            <textarea
                                type="text"
                                name="PurposeofLoan" // Changed from "Purpose of Loan"
                                placeholder="Purpose of Loan"
                                value={formData.PurposeofLoan} // Changed from formData["Purpose of Loan"]
                                onChange={handleChange}
                            />
                            </div>
                            <div className="apply-submit-btn">
                                <button type="submit" disabled={loading}>
                                {loading ? "Submitting..." : "Submit Application"}
                                </button>
                            </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Apply;