import React, {useEffect, useState} from "react";
import './confirm.scss';
import {useBalance} from "../../BalanceContext";

const Confirm = () => {
    const { balance, setBalance } = useBalance();
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const formatNumber = (value) => {
        return new Intl.NumberFormat("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(value);
    };

    const handleInputChange = (e) => {
        const rawValue = e.target.value.replace(/[^0-9.]/g, "");

        if (rawValue === "" || rawValue.split(".").length <= 2) {
            setInputValue(rawValue);
            setError("");
        }
    };

    const handleSubmit = () => {
        if (inputValue.trim() === "") {
            setError("Please enter an amount.");
            setSuccessMessage("");
        } else {
            const formattedValue = formatNumber(inputValue || "0");
            setBalance(formattedValue);
            setInputValue('')
            setSuccessMessage("Successfully updated balance!");
            setError("");
        }
    };


    return (
        <div className="confirm-page G-center">
            <div className="confirm-container">
                <h2 className="confirm-title">Confirm your action</h2>
                <input
                    type="number"
                    className="confirm-input"
                    placeholder="Write how much to top up"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                {error && <p className="error-message">{error}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
                <button className="confirm-button" onClick={handleSubmit}>
                    OK
                </button>
            </div>
        </div>
    );
};

export default Confirm;