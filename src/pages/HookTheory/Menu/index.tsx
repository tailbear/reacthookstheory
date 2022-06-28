import React from "react";
import { Menu } from "antd";
import { Link, Route, Routes } from "react-router-dom";

const { SubMenu } = Menu;

const rootSubmenuKeys = ["Why Hooks?", "UseState", 'Hooks Practice',];

const HooksMenu = () => {
    const [openKeys, setOpenKeys] = React.useState(["useState"]);

    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    const whyHooksMenus = [
        {
            url: "/HookTheory/why-hooks/lesson1",
            name: "React组件设计理论",
        },
        {
            url: "/HookTheory/why-hooks/lesson2",
            name: "Class Component 复用困局",
        },
        {
            url: "/HookTheory/why-hooks/lesson3",
            name: "Function Component 缺失的功能",
        },
        {
            url: "/HookTheory/why-hooks/lesson4",
            name: "Function Component + Hook 黄金搭档",
        },
    ];

    const useStateMenus = [
        {
            url: "/HookTheory/useState/lesson1",
            name: "what is useState?",
        },
        {
            url: "/HookTheory/useState/lesson2",
            name: "为什么只能在函数组件里调用Hooks API",
        },
        {
            url: "/HookTheory/useRef-practice",
            name: "useContext",
        },
        {
            url: "/HookTheory/useRef-practice",
            name: "useReducer",
        },
    ];


    return (
        <>
            <Menu
                mode="inline"
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                style={{ width: 310, height: "2000px"}}
                theme="dark"
            >
                <SubMenu key="Why Hooks?" title="Why Hooks?">
                    {whyHooksMenus.map(({ url, name }) => (
                        <Menu.Item key={name}>
                            <Link to={url}>{name}</Link>
                        </Menu.Item>
                    ))}
                </SubMenu>
                <SubMenu key="UseState" title="UseState">
                    {useStateMenus.map(({ url, name }) => (
                        <Menu.Item key={name}>
                            <Link to={url}>{name}</Link>
                        </Menu.Item>
                    ))}
                </SubMenu>
                <SubMenu key="Hooks Practice" title="Hooks Practice">
                    {useStateMenus.map(({ url, name }) => (
                        <Menu.Item key={name}>
                            <Link to={url}>{name}</Link>
                        </Menu.Item>
                    ))}
                </SubMenu>

            </Menu>
        </>
    );
};

export default HooksMenu;
