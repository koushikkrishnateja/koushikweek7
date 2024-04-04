import React from 'react';

function ExampleComponent({ isLoggedIn }) {
    isLoggedIn = false;
    if (isLoggedIn) {
        return <p>Welcome, user!</p>;
    } else {
        return <p>Please log in to continue.</p>;
    }
}

export default ExampleComponent;
