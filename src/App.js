import logo from './logo.svg';
import './App.css';
import { FunctionalComponent } from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';

function App() {
  return (
    <div className="App">
      <FunctionalComponent />
      <ClassComponent />
    </div>
  );
}

export default App;
