export const INCREMENT = 'INCREMENT';

export const DECREMENT = 'DECREMENT';

export const INCREMENT_ASYNC = 'INCREMENT_ASYNC';

export interface Action<T extends string> {
  type: T;
}

export interface ActionWithPayload<T extends string, P> extends Action<T> {
  payload: P;
}

// eslint-disable-next-line
type FunctionType = (...args: any[]) => any;
interface ActionCreatorsMapObject { [actionCreator: string]: FunctionType }

export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;

export function createAction<T extends string>(type: T): Action<T>
export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>
// eslint-disable-next-line
export function createAction<T extends string, P>(type: T, payload?: P) {
  if (payload) {
    return {
      type,
      payload,
    };
  }

  return {
    type,
  };
}
