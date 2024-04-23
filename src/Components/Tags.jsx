import react, { useState } from 'react';
import '../../public/Tags.css';

// Tags component is like a navigation bar for the user to filter the items based on buttons
const buttonNames = ["Veg", "Breakfast", "Lunch", "Dinner", "Snacks", "Desserts", "Drinks", "All"];

function Tags({activeButtons, setActiveButtons }) {
   
    const handleClick = (event) => {
        var buttonName = event.target.textContent;
        // If button is already active remove from activeButtons
        // If All button is clicked, clear activeButtons
        if (buttonName === "All") {
            setActiveButtons([]);
            // Remove Active class from all buttons using jQuery
            var buttons = document.querySelectorAll(".Tag button");
            buttons.forEach((button) => {
                button.classList.remove("active");
            });
        }
        else if (activeButtons.includes(buttonName)) {
            setActiveButtons(activeButtons.filter((button) => button !== buttonName));
            // Remove Active class from event.target
            event.target.classList.remove("active");
        } else { 
            // Add button to activeButtons
            setActiveButtons([...activeButtons, buttonName]);
            // Add Active class to event.target
            event.target.classList.add("active");
        }
       
    };
    return (
        <div className="Tag">
            {buttonNames.map((buttonName, index) => (
                <button onClick={handleClick} key={index}>{buttonName}</button>
            ))}
        </div>
    );
}

export default Tags;