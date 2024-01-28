import componentsImg from '/src/assets/components.png';
import propsImg from '/src/assets/config.png';
import jsxImg from '/src/assets/jsx-ui.png';
import stateImg from '/src/assets/state-mgmt.png';

const CORE_CONCEPTS = [
    {
        imgSrc: componentsImg,
        title: 'Components',
        description:
            'The core UI building block - compose the user interface by combining multiple components.',
        alt: 'components image',
    },
    {
        imgSrc: jsxImg,
        title: 'JSX',
        description:
            'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
        alt: 'jsx image',
    },
    {
        imgSrc: propsImg,
        title: 'Props',
        description:
            'Make components configurable (and therefore reusable) by passing input data to them.',
        alt: 'props image',
    },
    {
        imgSrc: stateImg,
        title: 'State',
        description:
            'React-managed data which, when changed, causes the component to re-render & the UI to update.',
        alt: 'state image',
    },
];

const TAB_BUTTONS = [
    {
        label: 'Components',
        content: 'Components',
        index: 1
    },
    {
        label: 'JSX',
        content: 'JSX',
        index: 2
    },
    {
        label: 'Props',
        content: 'Props',
        index: 3
    },
    {
        label: 'State',
        content: 'State',
        index: 4
    },
];

export { CORE_CONCEPTS, TAB_BUTTONS };