import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

function SearchButton() {
    const history = useHistory();

    const handleClick = ()=> {
        history.push("/search");
    }

    return (
        <Button onClick={handleClick}>
            Go Search
        </Button>
    );
}

export default SearchButton;
