import React, { CSSProperties } from "react";
import styles from "./BaseTable.module.css";
// import clsx from "clsx";

type BaseTableProps = {
  columns: Array<{
    name: string;
    key: string;
    width?: CSSProperties["width"];
  }>;
  dataSource: Array<any>;
};

const BaseTable: React.FC<BaseTableProps> = ({ columns, dataSource }) => {
  return (
    <table className={styles.root}>
      <colgroup>
        {columns.map(({ width }, index) => (
          <col key={index} span={1} style={{ width }} />
        ))}
      </colgroup>
      <thead>
        <tr>
          {columns.map(({ name }, index) => (
            <th key={index}>{name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataSource.map((value) => (
          <tr>
            {columns.map(({ key }, index) => (
              <td key={index}>{value[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BaseTable;
