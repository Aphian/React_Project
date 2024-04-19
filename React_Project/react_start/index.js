import { createRoot } from 'react-dom/client'
// document.body.innerHTML = '<div id="app"></div>';
function NavigationBar() {
    return <h1>Hello World</h1>;
}

// const root = createRoot(document.getElementById('app'));
const domNode = document.getElementById('navigation');
const root = createRoot(domNode);
// root.render(<h1>Hello World</h1>);
root.render(<NavigationBar />);