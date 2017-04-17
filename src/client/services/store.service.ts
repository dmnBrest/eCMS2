import { createStore, Action } from 'redux'

export interface IAppState {
	counter: number
}

const reducers = (lastState:IAppState = {counter: 0}, action:Action) => {
	switch (action.type) {
		case 'INCREMENT_COUNTER':
			console.log('A2!');

			let nextState = {counter: lastState.counter + 1}

			console.log(nextState);
			return (Object as any).assign({}, lastState, nextState)

		default:
			return lastState
	}
}

export let appStore = createStore(reducers);
(window as any).appStore = appStore;