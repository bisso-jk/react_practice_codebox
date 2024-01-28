import Header from "./component/Header/Header";
import Main from "./component/Main";
import { CORE_CONCEPTS } from "./data/data";
import Example from "./component/Example/Example";

function App() {

    return (
        <div>
            <Header/>
            <Main
                coreConceptsArray={CORE_CONCEPTS}
                content={'Time to get started!'}
            />
            <Example />
        </div>
    );
}

export default App;
