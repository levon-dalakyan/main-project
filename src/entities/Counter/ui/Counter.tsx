/* eslint-disable i18next/no-literal-string */
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/shared/ui/Button";
import { counterActions } from "@/entities/Counter";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

interface CounterProps {
    className?: string;
}

export const Counter: FC<CounterProps> = ({ className }) => {
    const counter = useSelector(getCounterValue);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="counter-value">{counter}</h1>
            <div>
                <Button data-testid="increment-btn" onClick={() => increment()}>
                    Increment
                </Button>
                <Button data-testid="decrement-btn" onClick={() => decrement()}>
                    Decrement
                </Button>
            </div>
        </div>
    );
};
