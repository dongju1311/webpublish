
export function Title({title}) {
    return(
        <h2 className="title">{title}</h2>
    );
}

export function SubTitle({SubTitle}) {
    return(
        <p className="description">{SubTitle}</p>
    );
}

export function Description({style}) {
    return(
        <p className={style}>
            Lorem ipsum dolor sit amet cons ectetur adipisicing elit. 
            Quisquam delectus, ab corrupti dolores esse dolor repellat molestias 
            molestiae alias nemo laborum qui facere, 
            deleniti officia pariatur laudantium enim maiores illo.
        </p>
    );
}

export function BottomDescription({description}) {
    return(
        <p class="contact-text">{description}</p>
    );
}
