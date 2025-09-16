import { AvartarImage } from "../base/Avatar";

export function Home({data}) {
    const {img,name,title,description} = data;
    return(
        <section id="home">
            <AvartarImage img={img}
                          msg="home-photo"
                          style="home-avatar"/>
            <h2 class="home-title">Hello<br/>
                I'm <strong class="home-title strong">{title} </strong>, {name}
            </h2>
            <p class="home-description">{description}</p>
            <a class="home-contact" href="#">contact me</a>
        </section>
    );
}