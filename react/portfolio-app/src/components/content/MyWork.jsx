import { SubTitle, Title } from "../base/Title.jsx";
import { Categories } from "./Categories.jsx";
import { Projects } from "./Projects.jsx";


export function MyWork({data}) {
    return(
        <section id="mywork" className="section container">
            <Title title="My Work"/>
            <SubTitle SubTitle="Projects"/>
            <Categories categories={data.categories}/>
            <Projects projects={data.projects}/>   
        </section>
    );
}