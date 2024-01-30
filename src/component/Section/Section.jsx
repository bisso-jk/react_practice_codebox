

const Section = ({id, title, children}) => {
    return (
        <main>
            <section id={id}>
                <h2>{title}</h2>
                {children}
            </section>
        </main>
    );
};

export default Section;