import React from 'react';
export const Button = () => {
    const [count, setCount] = React.useState<number>(0);

    return (
        <>
            <button onClick={() => setCount(count + 1)}>Click me!</button>
            <div>{count}</div>
        </>
    );
};
