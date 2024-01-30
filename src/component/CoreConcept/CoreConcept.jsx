

const CoreConcept = ({imgSrc, alt, title, description}) => {

    return (
        <li>
            <img src={imgSrc} alt={alt}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
};

export default CoreConcept;