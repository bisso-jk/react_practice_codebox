import TabButton from "./TabButton";

const Tabs = ({index, tabButtons, handleClickMenu, ButtonContainer}) => {
  

  return (
    <>
        <ButtonContainer>
          {tabButtons
            ? tabButtons.map((tabButton) => (
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
                active={index === tabButton.index}
                />
              )) : null}
        </ButtonContainer>
    </>
  );
};

export default Tabs;
