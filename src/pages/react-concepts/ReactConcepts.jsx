import Header from "/src/component/Header/Header";
import CoreConcepts from "/src/component/CoreConcept/CoreConcepts";
import { CORE_CONCEPTS } from "/src/data/data";
import Example from "/src/component/Example/Example";

const ReactConcepts = () => {
  return (
    <div>
      <Header />
      <CoreConcepts
        coreConceptsArray={CORE_CONCEPTS}
      />
      <Example />
    </div>
  );
};

export default ReactConcepts;
