import React from "react";
import { Typography } from "antd";
import "./index.css";

const { Title, Paragraph, Text, Link } = Typography;

const UseEffectLesson1: React.FC = () => {
  return (
    <>
      <Typography>
        <Title>useEffect</Title>
        <Paragraph>
          <Text code>
            {"export function useEffect(\n" +
              "  create: () => (() => void) | void,\n" +
              "  deps: Array<mixed> | void | null,\n" +
              "): void {\n" +
              "  const dispatcher = resolveDispatcher();\n" +
              "  return dispatcher.useEffect(create, deps);\n" +
              "}\n"}
          </Text>
        </Paragraph>
        <Paragraph>
          作用：处理函数组件中的副作用，如异步操作、延迟操作等，可以替代Class
          Component的<Text code>componentDidMount</Text>、
          <Text code>componentDidUpdate </Text>、
          <Text code>componentWillUnmount</Text>等生命周期。
        </Paragraph>

        <Title level={3}>React Hooks模拟生命周期</Title>
        <Paragraph>
          <Title level={4}>constructor</Title>
          <div className="hooksLife1 mt-20 mb-20" />
          函数组件不需要构造函数,可以通过调用 useState 来初始化 state
        </Paragraph>
      </Typography>
    </>
  );
};
export default UseEffectLesson1;
