import React, { useState } from "react";
import Web3 from "web3";
import microfinanceABI from "../microfinanceABI.json";

const Upload = () => {
  const [term, setTerm] = useState("");
  const [PDF, setPDF] = useState(null);
  const [loan_amount, setLoanAmount] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Connect to Ethereum network using web3.js
    if (window.ethereum) {
      try {
        await window.ethereum.enable();
        const web3 = new Web3(window.ethereum);

        // Create contract instance
        const contractAddress = "0x665CF73deB0989DdC266007786F01B56B3f128b5";
        const contract = new web3.eth.Contract(
          microfinanceABI,
          contractAddress
        );

        // Convert input values to required data types for the contract function
        const loanAmount = web3.utils.toWei(loan_amount.toString(), "ether");
        const loanTerm = parseInt(term);
        const monthlyIncomeParsed = parseInt(monthlyIncome);

        // Specify the recipient address (to) for the smart contract function
        const toAddress = "0xdD2FD4581271e230360230F9337D5c0430Bf44C0";
        // Call the payLoanAmount function in the smart contract
        const tx = await contract.methods
          .payLoanAmount(loanTerm, monthlyIncomeParsed)
          .send({ value: loanAmount, from: window.ethereum.selectedAddress });

        // Transaction successful
        console.log("Loan payment successful", tx);
      } catch (error) {
        // Transaction failed, show an alert with the error message
        console.error("Failed to pay loan amount", error);
        alert("Transaction failed. " + error.message);
      }
    } else {
      console.error("Web3 not detected. Please install MetaMask.");
    }
  };
  return (
    <div id="main">
      <div className="container loginContainer">
        <div className="title">Upload Details</div>
        <form onSubmit={handleSubmit}>
          <div className="user_details login_details">
            <div className="input_box">
              <span className="details">Loan Amount</span>
              <input
                type="number"
                placeholder="Enter Loan Amount"
                value={loan_amount}
                onChange={(e) => {
                  setLoanAmount(e.target.value);
                }}
                required
              />
            </div>
            <div className="input_box">
              <span className="details">Term</span>
              <input
                type="text"
                placeholder="Enter Term Details"
                value={term}
                onChange={(e) => {
                  setTerm(e.target.value);
                }}
                required
              />
            </div>
            <div className="input_box">
              <span className="details">Monthly Income</span>
              <input
                type="text"
                placeholder="Monthly Income"
                value={monthlyIncome}
                onChange={(e) => {
                  setMonthlyIncome(e.target.value);
                }}
                required
              />
            </div>
            <div className="Remember_input_box">
              <div className="col-12">
                <div className="form-group has-icon-left">
                  <label htmlFor="pdf">Upload PDF</label>
                  <div className="position-relative">
                    <input
                      type="file"
                      className="basic-filepond"
                      name="pdf"
                      onChange={(e) => {
                        setPDF(e.target.files[0]);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="button">
            <input type="submit" value="Submit" onClick={() => {}} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Upload;
