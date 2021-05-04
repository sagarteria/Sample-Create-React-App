import logo from './logo.svg';
import './App.css';
import { FunctionalComponent } from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import FunctionalComponentJSXExample from './components/FunctionalComponentJSXExample';
import FunctionalComponentJSExample from './components/FunctionalComponentJSExample';
import PropsFunctionalExample from './components/PropsFunctionalExample';
import StateClassExample from './components/StateClassExample';

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
    </div>
  );
}

export default App;
