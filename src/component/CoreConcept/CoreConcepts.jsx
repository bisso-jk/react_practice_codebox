import Section from "../Section/Section";
import CoreConcept from "./CoreConcept";

const CoreConcepts = ({coreConceptsArray}) => {

    return (
        <main>
            <Section id={'core-concepts'} title={"Core Concepts"}>
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
            </Section>
        </main>
    );
};


export default CoreConcepts;