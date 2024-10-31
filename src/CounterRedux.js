import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../src/actions';

const CounterRedux = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>Incrementar</button>
            <button onClick={() => dispatch(decrement())}>Decrementar</button>
        </div>
    );
};

export default CounterRedux;