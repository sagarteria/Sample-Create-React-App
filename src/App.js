import logo from './logo.svg';
import './App.css';
import { FunctionalComponent } from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import FunctionalComponentJSXExample from './components/FunctionalComponentJSXExample';
import FunctionalComponentJSExample from './components/FunctionalComponentJSExample';
import PropsFunctionalExample from './components/PropsFunctionalExample';
import StateClassExample from './components/StateClassExample';
import Counter from './components/Counter';
import FunctionalCompDestructure from './components/DestructuringPropsStates/FunctionalCompDestructure';
import ClassCompDestructure from './components/DestructuringPropsStates/ClassCompDestructure';


function App() {
  return (
    <div className="App">
      <FunctionalComponent />
      <ClassComponent />
      <FunctionalComponentJSXExample />
      <FunctionalComponentJSExample />

      <PropsFunctionalExample name='Name1'>
        <p>This is children props</p>
      </PropsFunctionalExample>
      <PropsFunctionalExample name='Name2'>
        <button>Action</button>
      </PropsFunctionalExample>
      <PropsFunctionalExample name='Name3'></PropsFunctionalExample>

      <StateClassExample />

      <Counter />

      <FunctionalCompDestructure FirstProp='Name1' SecondProp='Name2'/>

      <ClassCompDestructure FirstProp='Name1' SecondProp='Name2'/>

    </div>
  );
}

export default App;
