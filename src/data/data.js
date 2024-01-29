import componentsImg from "/src/assets/components.png";
import propsImg from "/src/assets/config.png";
import jsxImg from "/src/assets/jsx-ui.png";
import stateImg from "/src/assets/state-mgmt.png";

const CORE_CONCEPTS = [
  {
    imgSrc: componentsImg,
    title: "Components",
    description:
      "The core UI building block - compose the user interface by combining multiple components.",
    alt: "components image",
  },
  {
    imgSrc: jsxImg,
    title: "JSX",
    description:
      "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
    alt: "jsx image",
  },
  {
    imgSrc: propsImg,
    title: "Props",
    description:
      "Make components configurable (and therefore reusable) by passing input data to them.",
    alt: "props image",
  },
  {
    imgSrc: stateImg,
    title: "State",
    description:
      "React-managed data which, when changed, causes the component to re-render & the UI to update.",
    alt: "state image",
  },
];

const TAB_BUTTONS = [
  {
    label: "Components",
    description:
      "Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.",
    index: 1,
    code: `
    function Welcome() {
        return <h1>Hello, World!</h1>;
    }`,
  },
  {
    label: "JSX",
    description:
      "JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).",
    index: 2,
    code: `
    <div>
        <h1>Welcome {userName}</h1>
        <p>Time to learn React!</p>
    </div>`,
  },
  {
    label: "Props",
    description:
      "Components accept arbitrary inputs called props. They are like function arguments.",
    index: 3,
    code: `
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }`,
  },
  {
    label: "State",
    description:
      "State allows React components to change their output over time in response to user actions, network responses, and anything else.State allows React components to change their output over time in response to user actions, network responses, and anything else.",
    index: 4,
    code: `
    function Counter() {
      const [isVisible, setIsVisible] = useState(false);
    
      function handleClick() {
        setIsVisible(true);
      }
    
      return (
        <div>
          <button onClick={handleClick}>Show Details</button>
          {isVisible && <p>Amazing details!</p>}
        </div>
      );
    }`,
  },
];

export { CORE_CONCEPTS, TAB_BUTTONS };
