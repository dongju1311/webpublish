import { SubTitle, Title } from "../base/Title.jsx";
import { AvatarImage } from "../base/Avatar.jsx";


export function Testimonials({testimonials}) {
    return(
        <section id="testimonial" className="section container">
            <Title title="Testimonial"/>
            <SubTitle SubTitle="See what they say about me"/>
            <ul className="testimonials">
                {testimonials && testimonials.map(item=>
                <li className="testimonial">
                    <AvatarImage img={item.img}
                                 msg={item.alt}
                                 style="testimonial-img"/>
                    <div className="testimonial-text">
                        <p>{item.desc}</p>
                        <p><a href="#" className="testimonial-text-name" >{item.name}</a>/{item.company}</p>
                    </div>
                </li>
                )}
            </ul>
        </section>
    );
}