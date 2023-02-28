import React, {PureComponent, useState} from 'react'
import './App.css';
// import Welcome from './components/Welcome'
// import Count from './components/Count';
// import Message from './components/Message';
// import Without from './components/CodeWithoutJSX';
// import EventBind from './components/EventBind';
// import ParentMethodProp from './components/ParentMethodProp';
// import ConditionalRendering from './components/ConditionalRendering';
// import ConditionalRendering1 from './components/ConditionalRendering1';
// import NameList from './components/NameList';
// import ArrayListFunc from './components/ArrayList';
// import Form from './components/Form';
import FragmentDemo from './components/FragmentDemo';
import ParentComp from './components/ParentComp';
// import LifeCycleA from './components/LifeCycleA';
import RefsDemo from './components/RefsDemo';
function App() {
  return (
    <div className="App">
    {/* <Welcome name="Michaello" />
    <Without name="Michael" age="23" />
   {/* <ParentMethodProp />
    <Message /> 
   <Count />
  <EventBind /> */}
    {/* <ConditionalRendering isLoggedIn = {false} />
    <ConditionalRendering1 />
  <NameList /> */}
  {/* <ArrayListFunc /> */}
  {/* <Form /> */}
  {/* <LifeCycleA /> */}
  {/* <FragmentDemo />
  <ParentComp /> */}
  <RefsDemo />
    </div>
  );
}

export default App;
