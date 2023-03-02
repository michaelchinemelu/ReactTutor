import React, {PureComponent, useState} from 'react'
import './App.css';
import FocusInputRef from './components/FocusInputRef';
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
import FrParentInput from './components/FrParentInput';
import ParentComp from './components/ParentComp';
import Hero from './Hero';
import PortalDemo from './PortalDemo';
// import LifeCycleA from './components/LifeCycleA';
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
  {/* <RefsDemo /> */}
  {/* <FocusInputRef /> */}
  {/* <FrParentInput />
  <PortalDemo /> */}
  <Hero  name="Batman" />
  <Hero name="Superman" />
  <Hero name="tinubu" />
    </div>
  );
}

export default App;
