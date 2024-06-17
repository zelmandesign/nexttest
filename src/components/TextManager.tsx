import React, { useState } from 'react';

interface Item {
    key: number;
    text: string;
}

const TextManager: React.FC = () => {
    const [inputValue, setInputValue] = useState('');  // State for input field value
    const [items, setItems] = useState<Item[]>([]);  // State for list items
    const [keyCounter, setKeyCounter] = useState(1);  // State for key counter

    const [sortedItems, setSortedItems] = useState<Item[]>([]);  // State for sorted items
    const [isSorted, setIsSorted] = useState(false);  // State for sorting

    const handleAddItem = () => {
        if (inputValue && !items.some(item => item.text === inputValue)) {  // Check if input is not empty and not a duplicate
            const newItem = { key: keyCounter, text: inputValue };
            const newItems = [...items, newItem];
            setItems(newItems);  // Add new item to the list
            setSortedItems([...newItems].sort((a, b) => a.text.length - b.text.length));  // Sort the new list
            setInputValue('');  // Clear input field
            setKeyCounter(keyCounter + 1);  // Increment the key counter
        }
    };

    const handleSortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsSorted(event.target.checked);
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
                <button className="button" onClick={handleAddItem}>Add</button>
            </div>
            <label className="checkboxLabel">
                <input
                    type="checkbox"
                    checked={isSorted}
                    onChange={handleSortChange}
                />
                Sort
            </label>
            <ul className="list">
                {(isSorted ? sortedItems : items).map(item => (
                    <li key={item.key} className="listItem">{item.text}</li>  // Render list items with keys
                ))}
            </ul>
        </div>
    );
};

export default TextManager;