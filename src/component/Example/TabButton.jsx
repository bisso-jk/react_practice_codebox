

const TabButton = ({label, onClickFunction}) => {
    return (
        <li>
            <button onClick={onClickFunction}>{label}</button>
        </li>
    );
};

export default TabButton;