import React from "react";
import { Menu } from "antd";
import { Link, Route, Routes } from "react-router-dom";

// import StateDemo1 from "../../pages/HookBestEvent/stateLesson/demo1";
// import StateDemo2 from "../../pages/HookBestEvent/stateLesson/demo2";
// import StateDemo4 from "../../pages/HookBestEvent/stateLesson/demo4";
// import StateDemo5 from "../../pages/HookBestEvent/stateLesson/demo5";
// import StatePractice from "../../pages/HookBestEvent/stateLesson/Practice";
// import EffectDemo1 from "../../pages/HookBestEvent/effectLesson/demo1";
// import EffectDemo2 from "../../pages/HookBestEvent/effectLesson/demo2";
// import EffectDemo3 from "../../pages/HookBestEvent/effectLesson/demo3";
// import EffectDemo4 from "../../pages/HookBestEvent/effectLesson/demo4";
// import EffectDemo5 from "../../pages/HookBestEvent/effectLesson/demo5";
// import RefDemo1 from "../../pages/HookBestEvent/refLesson/demo1";
// import RefPractice from "../../pages/HookBestEvent/refLesson/Practice";
// import MemoDemo1 from "../../pages/HookBestEvent/memoLesson";
// import CallbackDemo1 from "../../pages/HookBestEvent/callbackLesson";
// import CallbackPractice from "../../pages/HookBestEvent/callbackLesson/Practice";
// import UseMemoPractice from "../../pages/HookBestEvent/memoLesson/Practice";
// import ContextDemo1 from "../../pages/HookBestEvent/contextLesson";
// import ReducerDemo1 from "../../pages/HookBestEvent/reducerLesson";
// import CustomHooks from "../../pages/HookBestEvent/customHooks";
// import CustomHookPractice from "../../pages/HookBestEvent/customHooks/Practice";

const { SubMenu } = Menu;

const rootSubmenuKeys = ["useState", "useRef", "useEffect",'useMemo','useCallBack','useContext','useContext','useReducer','自定义Hook'];

const Sider = () => {
  const [openKeys, setOpenKeys] = React.useState(["useState"]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const useStateMenus = [
    {
      url: "/HookBestEvent/state-demo1",
      name: "数据流",
    },
    {
      url: "/HookBestEvent/state-demo2",
      name: "state-引用",
    },
    {
      url: "/HookBestEvent/state-demo4",
      name: "惰性初值",
    },
    {
      url: "/HookBestEvent/state-demo5",
      name: "setState异步",
    },
    {
      url: "/HookBestEvent/state-Practice",
      name: "setState练习",
    },
  ];

  const useRefMenus = [
    {
      url: "/HookBestEvent/useRef-demo1",
      name: "useRef",
    },
    {
      url: "/HookBestEvent/useRef-practice",
      name: "useRef练习",
    },
  ];

  const useMemoMenus = [
    {
      url: "/HookBestEvent/useMemo-demo1",
      name: "useMemo",
    },
    {
      url: "/HookBestEvent/useMemo-practice",
      name: "useMemo练习",
    },
  ];

  const useCallbackMenus = [
    {
      url: "/HookBestEvent/useCallback-demo1",
      name: "useCallback",
    },
    {
      url: "/HookBestEvent/useCallback-practice",
      name: "useCallback练习",
    },
  ];

  const useEffectMenus = [
    {
      url: "/HookBestEvent/effect-demo1",
      name: "依赖数组",
    },
    {
      url: "/HookBestEvent/effect-demo2",
      name: "清除",
    },
    {
      url: "/HookBestEvent/effect-demo3",
      name: "练习1",
    },
    {
      url: "/HookBestEvent/effect-demo4",
      name: "练习2",
    },
    {
      url: "/HookBestEvent/effect-demo5",
      name: "练习3",
    },
  ];

  const useContextMenus = [
    {
      url: "/HookBestEvent/useContext-demo1",
      name: "useContext",
    },
  ];

  const useReducerMenus = [
    {
      url: "/HookBestEvent/useReducer-demo1",
      name: "useReducer",
    },
  ];

  const customHooksMenus = [
    {
      url: "/HookBestEvent/customHooks-demo1",
      name: "自定义 Hook",
    },
    {
      url: "/HookBestEvent/customHooks-practice",
      name: "自定义 Hook练习",
    },
  ];

  return (
    <>
      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{ width: 210, height: "2000px"}}
        theme="dark"
      >
        <SubMenu key="useState" title="useState">
          {useStateMenus.map(({ url, name }) => (
            <Menu.Item key={name}>
              <Link to={url}>{name}</Link>
            </Menu.Item>
          ))}
        </SubMenu>
        <SubMenu key="useRef" title="useRef">
          {useRefMenus.map(({ url, name }) => (
            <Menu.Item key={name}>
              <Link to={url}>{name}</Link>
            </Menu.Item>
          ))}
        </SubMenu>
        <SubMenu key="useEffect" title="useEffect">
          {useEffectMenus.map(({ url, name }) => (
            <Menu.Item key={name}>
              <Link to={url}>{name}</Link>
            </Menu.Item>
          ))}
        </SubMenu>
        <SubMenu key="useMemo" title="useMemo">
          {useMemoMenus.map(({ url, name }) => (
            <Menu.Item key={name}>
              <Link to={url}>{name}</Link>
            </Menu.Item>
          ))}
        </SubMenu>
        <SubMenu key="useCallBack" title="useCallBack">
          {useCallbackMenus.map(({ url, name }) => (
            <Menu.Item key={name}>
              <Link to={url}>{name}</Link>
            </Menu.Item>
          ))}
        </SubMenu>
        <SubMenu key="useContext" title="useContext">
          {useContextMenus.map(({ url, name }) => (
            <Menu.Item key={name}>
              <Link to={url}>{name}</Link>
            </Menu.Item>
          ))}
        </SubMenu>
        <SubMenu key="useReducer" title="useReducer">
          {useReducerMenus.map(({ url, name }) => (
            <Menu.Item key={name}>
              <Link to={url}>{name}</Link>
            </Menu.Item>
          ))}
        </SubMenu>
        <SubMenu key="自定义Hook" title="自定义 Hook">
          {customHooksMenus.map(({ url, name }) => (
            <Menu.Item key={name}>
              <Link to={url}>{name}</Link>
            </Menu.Item>
          ))}
        </SubMenu>
      </Menu>
      {/*<Route path="/HookBestEvent/state-demo1" element={<StateDemo1 />} />*/}
      {/*<Route path="/state-demo2" element={<StateDemo2 />} />*/}
      {/*<Route path="/state-demo4" element={<StateDemo4 />} />*/}
      {/*<Route path="/state-demo5" element={<StateDemo5 />} />*/}
      {/*<Route path="/state-Practice" element={<StatePractice />} />*/}
      {/*<Route path="/effect-demo1" element={<EffectDemo1 />} />*/}
      {/*<Route path="/effect-demo2" element={<EffectDemo2 />} />*/}
      {/*<Route path="/effect-demo3" element={<EffectDemo3 />} />*/}
      {/*<Route path="/effect-demo4" element={<EffectDemo4 />} />*/}
      {/*<Route path="/effect-demo5" element={<EffectDemo5 />} />*/}
      {/*<Route path="/useRef-demo1" element={<RefDemo1 />} />*/}
      {/*<Route path="/useRef-practice" element={<RefPractice />} />*/}
      {/*<Route path="/useMemo-demo1" element={<MemoDemo1 />} />*/}
      {/*<Route path="/useCallback-demo1" element={<CallbackDemo1 />} />*/}
      {/*<Route path="/useCallback-practice" element={<CallbackPractice />} />*/}
      {/*<Route path="/useMemo-practice" element={<UseMemoPractice />} />*/}
      {/*<Route path="/useContext-demo1" element={<ContextDemo1 />} />*/}
      {/*<Route path="/useReducer-demo1" element={<ReducerDemo1 />} />*/}
      {/*<Route path="/customHooks-demo1" element={<CustomHooks />} />*/}
      {/*<Route path="/customHooks-practice" element={<CustomHookPractice />} />*/}
    </>
  );
};

export default Sider;
