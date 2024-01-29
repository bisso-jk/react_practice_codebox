import { useState } from "react";
import { TAB_BUTTONS } from "/src/data/data";
import TabButton from "./TabButton";

const Example = () => {
  const [tabState, setTabState] = useState(0);
  const [description, setDescription] = useState(null);
  const [label, setLabel] = useState(null);
  const [code, setCode] = useState(null);

  const handleClickMenu = (index, label, code, description) => {
    setTabState(index);
    setLabel(label);
    setCode(code);
    setDescription(description);
  };

  return (
    <main>
      <section id={"examples"}>
        <h2>Examples</h2>
        <menu>
          {TAB_BUTTONS &&
            TAB_BUTTONS.map((tabButton) => (
              <TabButton
                label={tabButton.label}
                onClickFunction={() =>
                  handleClickMenu(
                    tabButton.index,
                    tabButton.label,
                    tabButton.code,
                    tabButton.description,
                  )
                }
              />
            ))}
        </menu>
      </section>
      {description && (
        <section id={"tab-content"}>
          <h3>{label}</h3>
          <p>{description}</p>
          <pre>
            <code>{code}</code>
          </pre>
        </section>
      )}
    </main>
  );
};

export default Example;
