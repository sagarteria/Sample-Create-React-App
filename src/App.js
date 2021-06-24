import logo from "./logo.svg";
import "./App.css";
import { FunctionalComponent } from "./components/FunctionalComponent";
import ClassComponent from "./components/ClassComponent";
import FunctionalComponentJSXExample from "./components/FunctionalComponentJSXExample";
import FunctionalComponentJSExample from "./components/FunctionalComponentJSExample";
import PropsFunctionalExample from "./components/PropsFunctionalExample";
import StateClassExample from "./components/StateClassExample";
import Counter from "./components/Counter";
import FunctionalCompDestructure from "./components/DestructuringPropsStates/FunctionalCompDestructure";
import ClassCompDestructure from "./components/DestructuringPropsStates/ClassCompDestructure";
import FunctionClick from "./components/Events/FunctionClick";
import ClassClick from "./components/Events/ClassClick";
import EventBind from "./components/Events/EventBinding/EventBind";
import OuterComponent from "./components/ChildParentCommunication/OuterComponent";
import ClassCompIfElse from "./components/ConditionalRendering/ClassCompIfElse";
import ClassCompVariable from "./components/ConditionalRendering/ClassCompVariable";
import ClassCompTernaryOperator from "./components/ConditionalRendering/ClassCompTernaryOperator";
import ClassCompShortCircuitOperator from "./components/ConditionalRendering/ClassCompShortCircuitOperator";
import NameList from "./components/Lists/NameList";
import Stylesheet from "./components/Stylesheet/Stylesheet";
import Inline from "./components/Stylesheet/Inline";
import CssModules from "./components/Stylesheet/CssModules";
import FormClass from "./components/FormHandling/FormClass";
import LifecycleA from "./components/LifecycleMethods/LifecycleA";
import FagmentDemoFunctional from "./components/Fragments/FagmentDemoFunctional";
import Table from "./components/Fragments/Table";
import OuterComponentPure from "./components/PureComponents/OuterComponent";
import OuterComponentMemo from "./components/Memo/OuterComponent";
import RefsDemo from "./components/Refs/RefsDemo"

function App() {
  return (
    <div className="App">
      <FunctionalComponent />
      <ClassComponent />
      <FunctionalComponentJSXExample />
      <FunctionalComponentJSExample />

      <PropsFunctionalExample name="Name1">
        <p>This is children props</p>
      </PropsFunctionalExample>
      <PropsFunctionalExample name="Name2">
        <button>Action</button>
      </PropsFunctionalExample>
      <PropsFunctionalExample name="Name3"></PropsFunctionalExample>

      <StateClassExample />

      <Counter />

      <FunctionalCompDestructure FirstProp="Name1" SecondProp="Name2" />
      <ClassCompDestructure FirstProp="Name1" SecondProp="Name2" />

      {/* Event Bind Examples */}
      <FunctionClick />
      <ClassClick />
      <EventBind />

      {/* Outer inner component interaction */}
      <OuterComponent />

      {/* Conditional Rendering Examples */}
      {/* 1. using If-Else */}
      <ClassCompIfElse />
      {/* 2. Using variable */}
      <ClassCompVariable />
      {/* 3. Using ternary operator */}
      <ClassCompTernaryOperator />
      {/* 4. Short circuit operator */}
      <ClassCompShortCircuitOperator />

      {/* Working with Lists */}
      <NameList />

      {/* CSS Styling */}
      <Stylesheet primary={true}/>
      <Inline />
      <CssModules />

      {/* 21 Form Handling */}
      <FormClass />

      {/* 22-24 Lifecycle methods */}
      <LifecycleA />

      {/* 25 Fragment*/}
      <FagmentDemoFunctional />
      <Table />
      
      {/* 26 Pure Components */}
      <OuterComponentPure />

      {/* 27 Memo */}
      <OuterComponentMemo />

      {/* 28 Refs */}
      <RefsDemo />      
      
    </div>
  );
}

export default App;
