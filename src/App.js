import React, { useReducer } from 'react'
import logo from './logo.svg';
import './App.css';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';
import ComponentA from './components/ComponentA'
import ComponentB from './components/ComponentB'
import ComponentC from './components/ComponentC'
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';
import FocusInput from './components/FocusInput';
import ClassTimer from './components/ClassTimer';
import HookTimer from './components/HookTimer';
import DocTitleTwo from './components/DocTitleTwo';
import DocTitleOne from './components/DocTitleOne';
import UserForm from './components/UserForm';
const initialState = 0
const reducer = (state, action) => {
	switch (action) {
		case 'increment':
			return state + 1
		case 'decrement':
			return state - 1
		case 'reset':
			return initialState
		default:
			return state
	}
}
export const CountContext = React.createContext()
function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <CountContext.Provider
			value={{ countState: count, countDispatch: dispatch }}
		>
    <div className="App">
      {/* <CounterThree /> */}
      {/* <CounterTwo /> */}
      {/* <CounterOne /> */}
      {/* <ComponentA />
      <ComponentB />
      <ComponentC /> */}
      {/* <DataFetchingOne /> */}
       {/* <DataFetchingTwo /> */}
       {/* <FocusInput /> */}
       {/* <ClassTimer />
       <HookTimer /> */}
       {/* <DocTitleOne />
       <DocTitleTwo /> */}
       <UserForm />
    </div>
    </CountContext.Provider>
  );
}

export default App;
