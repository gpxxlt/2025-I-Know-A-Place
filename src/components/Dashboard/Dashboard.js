import {useState} from "react";
import {Button, Input} from "@material-ui/core";

function Dashboard() {

    // Setting up hooks for fetching data
    const [filteredData, setFilteredData] = useState([]);
    const [input, setInput] = useState('');
    const [success, setSuccess] = useState(false);

    // Handle user input
    const handleInputChange = (event) => {
        console.log('Input change detected');
        setInput(event.target.value);
    };

    // Make actual request when user is done with the input
    const handleSearch = async () => {
        try {
            console.log('Handling search');
            const response = await fetch(`/api/GetFilterStory?keywords=${encodeURIComponent(input)}`);

            if (response.ok) {
                console.log(response.body);
            }

            const data = await response.json();
            setFilteredData(data);
            setSuccess(true);
        }
        catch (error) {
            console.error('Error fetching filtered data:', error);
        }
    }

    // Upon clicking on filter button only data with relevant tag is retained
    // Applied filter on the data fetched from the database
    //
    //

    return (
        <div>
            {/* Query filtered data */}
            <Input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Enter keyword..."
            />
            <Button onClick={handleSearch}>
                Search
            </Button>

            {/* Map everything to a desired format */}
            {/* For now, just use a simple HTML li component */}
            {/* Display filtered data */}
            {
                success ? (
                    <div>Loading...</div>
                ) : (
                    <ul className="mt-4">
                        {/* TODO: Modify item, index to the actual stuff returned by db */}
                        {filteredData.map((item, index) => (
                            <li key={index}>{item.storyText}</li>
                        ))}
                    </ul>
                )
            }
        </div>
    )
}

export default Dashboard;
