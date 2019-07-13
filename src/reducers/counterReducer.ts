import { Action } from '../actions/actionTypes';

interface CounterState {
  counter: number
}

export default function counter(state: CounterState['counter'] = 0, action: Action<string>) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'INCREMENT_IF_ODD':
      return (state % 2 !== 0) ? state + 1 : state;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
