import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const Header = () => {
    const { theme } = useContext(AppContext);
    
    return (<p>This is header. Theme is: {theme}</p>)
}

