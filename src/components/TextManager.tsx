import React, { useState } from 'react';

interface Item {
    key: number
    text: string
}

const TextManager: React.FC = () => {
    const [inputValue, setInputValue] = useState('');  // State for input field value
    const [items, setItems] = useState<Item[]>([]);  // State for list items
    const [keyCounter, setKeyCounter] = useState(1);  // State for key counter

    const handleAddItem = () => {
        if (inputValue && !items.some(item => item.text === inputValue)) {  // Check if input is not empty and not a duplicate
            const newItem = { key: keyCounter, text: inputValue };
            setItems([...items, newItem]);  // Add new item to the list
            setInputValue('');  // Clear input field
            setKeyCounter(keyCounter + 1);  // Increment the key counter
        }
    };

    // Function to log the input value
    const handleLogInput = () => {
        console.log(inputValue);
    };

    return (
        <div className="container">
            <input
                type="text"
                placeholder="Enter text"
                className="inputField"
                value={inputValue}  // Bind input value to state
                onChange={(e) => setInputValue(e.target.value)}  // Update state on input change
            />
            <div className="buttonContainer">
                <button className="button" onClick={handleAddItem}>Add
                </button>
                <button className="button">Sort</button>
                <button className="button" onClick={handleLogInput}>Log Input</button>
            </div>
            <ul className="list">
                {items.map(item => (
                    <li key={item.key} className="listItem">{item.text}</li>  // Render list items with keys
                ))}
            </ul>
        </div>
    );
};

export default TextManager;