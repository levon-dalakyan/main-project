import { Reducer } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { CounterSchema } from "@/entities/Counter";
import { UserSchema } from "@/entities/User";
import { LoginSchema } from "@/features/LoginByUsername";
import { AnyAction, CombinedState, ReducersMapObject } from "@reduxjs/toolkit";

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;

    // async reducers
    loginForm?: LoginSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (
        state: StateSchema,
        action: AnyAction
    ) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends ToolkitStore<StateSchema> {
    reducerManager: ReducerManager;
}
