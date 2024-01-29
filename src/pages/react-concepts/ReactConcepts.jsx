import Header from "/src/component/Header/Header";
import Main from "/src/component/Main";
import { CORE_CONCEPTS } from "/src/data/data";
import Example from "/src/component/Example/Example";

const ReactConcepts = () => {
  return (
    <div>
      <Header />
      <Main
        coreConceptsArray={CORE_CONCEPTS}
        content={"Time to get started!"}
      />
      <Example />
    </div>
  );
};

export default ReactConcepts;
