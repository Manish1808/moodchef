import { useState } from "react";
import "./css/Multiple.css";

export default function Multiple({ options }) {
    const [selectedOptions, setSelectedOptions] = useState(new Set());

    const toggleOption = (option) => {
        setSelectedOptions((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(option)) {
                newSet.delete(option);
            } else {
                newSet.add(option);
            }
            return newSet;
        });
    };

    return (
        <main>
            <form className="preferences-form">
                <div className="left-column">
                    {options.slice(0, Math.ceil(options.length / 2)).map((option) => (
                        <label
                            key={option}
                            className={`checkbox-button ${selectedOptions.has(option) ? "selected" : ""}`}
                            onClick={() => toggleOption(option)}
                        >
                            {option}
                        </label>
                    ))}
                </div>
                <div className="right-column">
                    {options.slice(Math.ceil(options.length / 2)).map((option) => (
                        <label
                            key={option}
                            className={`checkbox-button ${selectedOptions.has(option) ? "selected" : ""}`}
                            onClick={() => toggleOption(option)}
                        >
                            {option}
                        </label>
                    ))}
                </div>
            </form>
        </main>
    );
}
