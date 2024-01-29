const TabButton = ({ label, onClickFunction, active }) => {
  return (
    <li>
      <button className={active ? "active" : null} onClick={onClickFunction}>
        {label}
      </button>
    </li>
  );
};

export default TabButton;
