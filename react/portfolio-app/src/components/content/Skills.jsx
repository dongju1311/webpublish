import { Description, SubTitle, Title } from "../base/Title.jsx";
import { SkillsContent } from "./SkillsContent.jsx";

export function Skills({data}) {
    return(
        <section id="skill" className="section container">
            <Title title="My Skills"/>
            <SubTitle SubTitle="Skills & Attributes"/>
            <Description style="description"/>
            <SkillsContent data={data}/>
        </section>
    );
}