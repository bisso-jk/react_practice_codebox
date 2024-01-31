import { useState } from "react";
import { TAB_BUTTONS } from "/src/data/data";
import Tabs from "./Tabs";
import TabContent from "./TabContent";
import Section from "../Section/Section";

const Examples = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [description, setDescription] = useState(null);
    const [label, setLabel] = useState(null);
    const [code, setCode] = useState(null);
  
    const handleClickMenu = (index, label, code, description) => {
      setTabIndex(index);
      setLabel(label);
      setCode(code);
      setDescription(description);
    };

    return (
        <>
            <Section id={"examples"} title={"Examples"}>
                <Tabs 
                    index={tabIndex}
                    tabButtons={TAB_BUTTONS} 
                    handleClickMenu={handleClickMenu} 
                    />   
                <TabContent 
                    index={tabIndex} 
                    label={label} 
                    code={code} 
                    description={description} 
                    />
            </Section>
        </>
    );
}

export default Examples;