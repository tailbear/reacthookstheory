import { Layout, Menu, Spin } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import MdContent from "../components/MdContent";
import MdNav from "../components/MdNav";
import styles from "./index.module.css";
import { mds } from "./mdObject";

const MenusKey = [
  { key: "cssBox", title: "css盒模型" },
  { key: "cssSelector", title: "css选择器" },
  { key: "cssLayout", title: "布局" },
  { key: "cssSelfAdaption", title: "响应式布局" },
];

const Home = () => {
  const [mdContent, mdContentSet] = useState("cssBox");
  const [spinning, spinningSet] = useState(true);
  const [selectedMenu, selectedMenuSet] = useState(MenusKey[0].key);

  const { Sider, Content } = Layout;

  const mdPath = useMemo(() => mds[selectedMenu], [selectedMenu]);

  useEffect(() => {
    fetch(mdPath)
      .then(res => res.text())
      .then(res => {
        spinningSet(false);
        mdContentSet(res);
      });
  }, [mdPath]);

  const handleSelect = key => {
    window.location.hash = "";
    spinningSet(true);
    selectedMenuSet(key);
  };

  return (
    <Layout>
      <Sider className={styles.sider}>
        <Menu
          defaultSelectedKeys={[MenusKey[0].key]}
          onSelect={({ key }) => handleSelect(key)}
          className={styles.menu}
          mode='inline'>
          {MenusKey.map(({ key, title }) => (
            <Menu.Item key={key}>{title}</Menu.Item>
          ))}
        </Menu>
      </Sider>

      <Layout className='site-layout' style={{ marginLeft: 200 }}>
        <Spin className={styles.spining} spinning={spinning}>
          <Content className={styles.content}>
            <div className={styles["article-container"]}>
              <MdContent md={mdContent} />
            </div>
            <div className={styles["nav-container"]}>
              <MdNav md={mdContent} />
            </div>
          </Content>
        </Spin>
      </Layout>
    </Layout>
  );
};

export default Home;
