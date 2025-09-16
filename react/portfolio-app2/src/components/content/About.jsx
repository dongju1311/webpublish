import { Description, Title } from "../base/Title";
import { Jobs } from "./Job";
import { Majors } from "./Majors";


export function About() {
    return(
        <section id="about" className="section container">
            <Title title="About me"/>
            <Description/>
            <Majors/>
            <Jobs/>
        </section>
    );
}