import HookBestEvent from "./pages/HookBestEvent";
import HookTheory from "./pages/HookTheory";
import AdvanceTheory from "./pages/AdvanceTheory";
import { Route, Link, Navigate, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/home";
import React, { useEffect } from "react";
import StateDemo1 from "../src/pages/HookBestEvent/stateLesson/demo1";
import Sider from "../src/components/sider";
import { createBrowserHistory } from 'history';

import StateDemo2 from "../src/pages/HookBestEvent/stateLesson/demo2";
import StateDemo4 from "../src/pages/HookBestEvent/stateLesson/demo4";
import StateDemo5 from "../src/pages/HookBestEvent/stateLesson/demo5";
import StatePractice from "../src/pages/HookBestEvent/stateLesson/Practice";
import EffectDemo1 from "../src/pages/HookBestEvent/effectLesson/demo1";
import EffectDemo2 from "../src/pages/HookBestEvent/effectLesson/demo2";
import EffectDemo3 from "../src/pages/HookBestEvent/effectLesson/demo3";
import EffectDemo4 from "../src/pages/HookBestEvent//effectLesson/demo4";
import EffectDemo5 from "../src/pages/HookBestEvent/effectLesson/demo5";
import RefDemo1 from "../src/pages/HookBestEvent/refLesson/demo1";
import RefPractice from "../src/pages/HookBestEvent/refLesson/Practice";
import MemoDemo1 from "../src/pages/HookBestEvent/memoLesson";
import CallbackDemo1 from "../src/pages/HookBestEvent/callbackLesson";
import CallbackPractice from "../src/pages/HookBestEvent/callbackLesson/Practice";
import UseMemoPractice from "../src/pages/HookBestEvent/memoLesson/Practice";
import ContextDemo1 from "../src/pages/HookBestEvent/contextLesson";
import ReducerDemo1 from "../src/pages/HookBestEvent/reducerLesson";
import CustomHooks from "../src/pages/HookBestEvent/customHooks";
import CustomHookPractice from "../src/pages/HookBestEvent/customHooks/Practice";

const history = createBrowserHistory();

function App() {

  useEffect(() => {
    history.listen(route => {
          console.log(route,222)
       });
  }, [])

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/home' element={<Home />} />
    //     <Route path='/css-box' element={<CSSBox />} />
    //     <Route path='/css-selector' element={<CSSSelector />} />
    //     <Route path='/css-weight' element={<CSSWeight />} />
    //     <Route path='/css-layout' element={<Demo4 />} />
    //     <Route path='/position' element={<Position />} />
    //     <Route path='/practice' element={<Practice />} />
    //     <Route path='*' element={<Navigate to='/home' />} />
    //   </Routes>
    // </BrowserRouter>

    <BrowserRouter>
    <div className="flex">
      { history.location.pathname.includes('HookBestEvent') && <Sider />}
      <div className="p-32 flex-1">
        <Routes >
          <Route path="/home" element={<Home />} />

          <Route path="/HookBestEvent" element={<StateDemo1 />} />
          <Route path="/HookBestEvent/state-demo1" element={<StateDemo1 />} />
          <Route path="/HookBestEvent/state-demo2" element={<StateDemo2 />} />
          <Route path="/HookBestEvent/state-demo4" element={<StateDemo4 />} />
          <Route path="/HookBestEvent/state-demo5" element={<StateDemo5 />} />
          <Route path="/HookBestEvent/state-Practice" element={<StatePractice />} />
          <Route path="/HookBestEvent/effect-demo1" element={<EffectDemo1 />} />
          <Route path="/HookBestEvent/effect-demo2" element={<EffectDemo2 />} />
          <Route path="/HookBestEvent/effect-demo3" element={<EffectDemo3 />} />
          <Route path="/HookBestEvent/effect-demo4" element={<EffectDemo4 />} />
          <Route path="/HookBestEvent/effect-demo5" element={<EffectDemo5 />} />
          <Route path="/HookBestEvent/useRef-demo1" element={<RefDemo1 />} />
          <Route path="/HookBestEvent/useRef-practice" element={<RefPractice />} />
          <Route path="/HookBestEvent/useMemo-demo1" element={<MemoDemo1 />} />
          <Route path="/HookBestEvent/useCallback-demo1" element={<CallbackDemo1 />} />
          <Route path="/HookBestEvent/useCallback-practice" element={<CallbackPractice />} />
          <Route path="/HookBestEvent/useMemo-practice" element={<UseMemoPractice />} />
          <Route path="/HookBestEvent/useContext-demo1" element={<ContextDemo1 />} />
          <Route path="/HookBestEvent/useReducer-demo1" element={<ReducerDemo1 />} />
          <Route path="/HookBestEvent/customHooks-demo1" element={<CustomHooks />} />
          <Route
            path="/HookBestEvent/customHooks-practice"
            element={<CustomHookPractice />}
          />

          <Route path="/HookTheory" element={<HookTheory />} />
          <Route path="/AdvanceTheory" element={<AdvanceTheory />} />
          {/*<Route path="*" element={<Navigate to="/home" />} />*/}
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;