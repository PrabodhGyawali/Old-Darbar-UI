import { useEffect, useState } from 'react';
import reactDom from 'react-dom';

import '../public/App.css';
import Card from './Components/Card.jsx';
import SearchBar from './Components/SearchBar.jsx';
import Tags from './Components/Tags.jsx';

// Fetches from API Server
const fetchData = async () => {
    var items = [];
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };
    try {
        const response = await fetch("https://localhost:7120/api/Menu/all", requestOptions);
        items = await response.json();
    } catch (error) {
        console.log(error);
    }
    return items;
};

function App() {
    const [items, setItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Tags:
    const [activeButtons, setActiveButtons] = useState([]);

    const handleSearch = (term) => {
        setSearchTerm(term);
    }

    // Hook that will rerender the component when the search term changes
    useEffect(() => {
        fetchData().then(result => {
            if (Array.isArray(result)) {
                setItems(result);
            }
            else {
                // Error handling -> add Loading... to the UI 
            }
        });
    }, []); // Empty array ensures that the effect runs only once API call returns an Array
    
    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <Tags activeButtons={activeButtons} setActiveButtons={setActiveButtons }></Tags>
            <div className="Menu">
                {
                    // Loop through Items and filter based on search term
                    items.filter((item) => {
                        if (searchTerm === '' && activeButtons.length === 0) {
                            return item;
                        } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())
                                    && (activeButtons.length === 0
                                    || activeButtons.includes(item.category))) {
                            return item;
                        }
                    }).map((item) => {
                        return (
                            <Card key={item.id}
                                img="https://th.bing.com/th/id/OIP.bQt0JYJTYcgomuPihmLSrwAAAA?w=180&h=180&c=7&r=0&o=5&pid=1.7"
                                name={item.name}
                                price={item.price}
                                isVeg={item.isVeg} />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default App;