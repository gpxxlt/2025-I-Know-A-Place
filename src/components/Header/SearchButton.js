import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

function SearchButton() {
    const history = useHistory();

    function handleClick() {
        history.push("/SearchPage");
    }

    return (
        <Button onClick={handleClick}>
            Go Search
        </Button>
    );
}

export default SearchButton;
