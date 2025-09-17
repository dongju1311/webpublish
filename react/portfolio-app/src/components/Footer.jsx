import { BottomDescription, SubTitle, Title } from "./base/Title.jsx";
import { ContactLink } from "./footer/ContactLink.jsx";

export function Footer({data}) {
    return(
        <footer id="contact" class="footer container">
            <Title title="Let's Talk"/>
            <SubTitle SubTitle="jeon.developer@gmail.com"/>
            <ContactLink links={data.links}/>
            <BottomDescription description="Dreamer Software Engineer Judy - All right reserved"/>
        </footer>
    );
}