import { Collapse } from "antd";
import React from "react";
import styles from "./index.module.scss";
import { DownOutlined } from "@ant-design/icons";
const { Panel } = Collapse;

interface Props {
  children: React.ReactNode;
  header?:
    | React.ReactNode
    | {
        title?: React.ReactNode | string | number;
        description?: React.ReactNode | string | number;
      };
  activeKey?: string | number;
  className?: string;
}

/**
 * 判断是否为ReactNode
 * @param variable
 * @returns
 */
function isReactNode(variable: any): variable is React.ReactNode {
  return (
    typeof variable === "string" ||
    typeof variable === "number" ||
    React.isValidElement(variable)
  );
}

const XCollapse = ({ children, header, activeKey, className }: Props) => {
  return (
    <Collapse
      className={className}
      ghost
      defaultActiveKey={activeKey ?? "active"}
      expandIconPosition={"end"}
      expandIcon={({ isActive }) => (
        <div className={styles.changeBtn}>
          <DownOutlined rotate={isActive ? 180 : 0} className={styles.icon} />
        </div>
      )}
    >
      <Panel
        key={activeKey ?? "active"}
        className={styles.panel}
        header={
          isReactNode(header) ? (
            header
          ) : (
            <>
              <div className={styles.title}>{header?.title}</div>
              <div className={styles.description}>{header?.description}</div>
            </>
          )
        }
      >
        {children}
      </Panel>
    </Collapse>
  );
};

export default XCollapse;
