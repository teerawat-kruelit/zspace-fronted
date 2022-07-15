import { Tabs as AntdTabs } from "antd";
import styled from "styled-components";

const Tabs = styled(AntdTabs)`
  .ant-tabs-nav-wrap {
    display: flex;
    justify-content: center;
    border-bottom: 1px solid rgb(138, 138, 160, 0.4);
  }
  .ant-tabs-nav-list {
    display: flex;
    justify-content: start;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      height: 0px;
    }
  }

  .ant-tabs-tab {
    padding: 3px 15px;
    box-sizing: border-box;
    text-align: center;
  }
  .ant-tabs-tab-active {
    transition: 0.25s all ease;
    color: #5142fc;
  }
  .ant-tabs-ink-bar {
    display: none;
  }
`;

export default Tabs;
