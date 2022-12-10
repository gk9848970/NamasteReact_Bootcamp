import React from 'react';
import ReactDOM from 'react-dom/client';

// const heading = React.createElement('h1', { id: 'title' }, 'Namaste react');
const root = ReactDOM.createRoot(document.getElementById('root'));

const heading = <div>
    <h1>Namaste react</h1>
    <h2>Namaste react</h2>
</div>;

const nummber = 



10;

function TestComponent() {
    return (
        <div>{heading}</div>
    );
}
root.render(<TestComponent />);
