
const TabContent = ({index, label, description, code}) => {
    return (
        <>
            {index !== 0 ? (
                <section id={"tab-content"}>
                <h3>{label}</h3>
                <p>{description}</p>
                <pre>
                    <code>{code}</code>
                </pre>
                </section>
            ) : null}
        </>
    );
};

export default TabContent;