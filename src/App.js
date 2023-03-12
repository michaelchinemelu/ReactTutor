import React, {PureComponent, useState} from 'react'
import './App.css';
// import ClickCounter from './ClickCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
// import FocusInputRef from './components/FocusInputRef';
import Users from './components/Users';
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
// import FragmentDemo from './components/FragmentDemo';
// import FrParentInput from './components/FrParentInput';
// import HovercounterTwo from './components/HoverCounterTwo';
// import ParentComp from './components/ParentComp';
// import User from './components/User';
// import Users from './components/Users';
// import ErrorBound from './ErrorBound';
// import Hero from './Hero';
// import HoverCounter from './HoverCount';
// import PortalDemo from './PortalDemo';
// import LifeCycleA from './components/LifeCycleA';
import Counter from './components/Counter';
import HovercounterTwo from './components/HoverCounterTwo';
import { UserProvider } from './components/UserContext';
import ContextA from './components/ContextA';
import ContextB from './components/ContextB';
import PostList from './components/PostList';
import PostItem from './components/PostItem';
import PostForm from './components/PostForm';
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
  {/* <ErrorBound>
  <Hero name="tinubu" />
  </ErrorBound>
  <ErrorBound >
    <Hero name="Superman" />
  </ErrorBound>
  <ErrorBound><Hero name="WomanKing" />
  </ErrorBound> */}
  {/* <ClickCounter name="Michael"/>
  <HoverCounter /> */}
  {/* <ClickCounterTwo />
  <HovercounterTwo /> */}
  {/* <Users render={(isLoggedIn) => isLoggedIn ? "Micahel" : "Guest"}/> */}

  {/* This is Render prop method of sharing functionality between components in React * /}
  {/* <Counter 
    render={(count, incrementCount) =>(
    <ClickCounterTwo count={count} incrementCount={incrementCount} />
    )} />  
    
    <Counter render={(count, incrementCount) => (
      <HovercounterTwo count={count} incrementCount={incrementCount} />

    )} /> */}
    {/* <UserProvider value="Michael">
      <ContextA />
      <ContextB />
    </UserProvider> */}
    {/*<PostList /> */}
    {/* <PostItem /> */}
    <PostForm />
    </div>
  );
}

export default App;
