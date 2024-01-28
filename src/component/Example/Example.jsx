import {useState} from "react";
import { TAB_BUTTONS } from '/src/data/data';
import TabButton from "./TabButton";

const Example = () => {
    const [tabState, setTabState] = useState(0);
    const [content, setContent] = useState('');

    const handleClickMenu = (index, content) => {
        setTabState(index);
        setContent(content);
    }

    return (
        <main>
            <section id={'examples'}>
                <h2>Examples</h2>
                <menu>
                    {TAB_BUTTONS && TAB_BUTTONS.map((tabButton) => (
                        <TabButton
                            label={tabButton.label}
                            onClickFunction={() => handleClickMenu(tabButton.index, tabButton.content)}
                            />
                        )
                    )}
                </menu>
                {content}
            </section>
        </main>
    );
};

export default Example;