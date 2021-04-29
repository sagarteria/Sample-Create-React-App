import logo from './logo.svg';
import './App.css';
import { FunctionalComponent } from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import FunctionalComponentJSXExample from './components/FunctionalComponentJSXExample';

function App() {
  return (
    <div className="App">
      <FunctionalComponent />
      <ClassComponent />
      <FunctionalComponentJSXExample />
    </div>
  );
}

export default App;
