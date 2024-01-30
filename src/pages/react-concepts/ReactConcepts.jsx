import Header from "/src/component/Header/Header";
import CoreConcepts from "/src/component/CoreConcept/CoreConcepts";
import { CORE_CONCEPTS } from "/src/data/data";
import Examples from "../../component/Example/Examples";


const ReactConcepts = () => {
  return (
    <div>
      <Header />
      <CoreConcepts
        coreConceptsArray={CORE_CONCEPTS}
      />
      <Examples />
    </div>
  );
};

export default ReactConcepts;
