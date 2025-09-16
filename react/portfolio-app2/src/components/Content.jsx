import { About } from "./content/About.jsx";
import { Home } from "./content/Home.jsx";

export function Content() {
    const data = {
        "img":"/images/favicon.ico",
        "name":"Judy",
        "title":"Dream Coder",
        "description":"A software engineer currently residing in Seoul, South Korea"
    };
    return(
        <>
        <Home data={data}/>
        <About/>
        </>
    );
}