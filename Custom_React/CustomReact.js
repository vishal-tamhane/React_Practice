// i have to create the CustomReact component that will be used to render the custom react component
// without importing React from 'react' and without using ReactDOM

function CustomRender(reactElement , cointainer){
    /*
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href || '#')
    domElement.setAttribute('target', reactElement.props.target || '')

    cointainer.appendChild(domElement)
    */

     const domElement  = document.createElement(reactElement.type)
     domElement.innerHTML = reactElement.children;
     for(const prop in reactElement.props){
        if(prop == 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
     }
     cointainer.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Google'
};

const mainContainer = document.querySelector('#root');

CustomRender(reactElement, mainContainer);