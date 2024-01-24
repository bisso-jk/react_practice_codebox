import Header from "./component/Header";
import Main from "./component/Main";
import { CORE_CONCEPTS } from "./data/data";

function App() {

    return (
        <div>
            <Header/>
            <Main
                coreConceptsArray={CORE_CONCEPTS}
                content={'Time to get started!'}
            />
        </div>
    );
}

export default App;
