import CoreConcept from "./CoreConcept";

const Main = ({content, coreConceptsArray}) => {

    return (
        <main>
            <section id={'core-concepts'}>
                <h2>Core Concepts</h2>
                <ul>
                    {coreConceptsArray && coreConceptsArray.map(m => (
                        <CoreConcept
                            key={m.title}
                            imgSrc={m.imgSrc}
                            title={m.title}
                            alt={m.alt}
                            description={m.description}
                        />
                    ))}
                </ul>
            </section>
            <h2>{content}</h2>
        </main>
    );
};


export default Main;