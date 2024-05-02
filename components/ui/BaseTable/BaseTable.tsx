import React, { CSSProperties } from "react";
import styles from "./BaseTable.module.css";

type BaseTableProps = {
  columns: Array<{
    name: string;
    key?: string;
    width?: CSSProperties["width"];
    render?: (value: any, record: any, index: number) => React.ReactNode;
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
        {dataSource.map((record, indexRecord) => (
          <tr>
            {columns.map(({ key, render, name }, index) => (
              <td key={index}>
                {render
                  ? render(record[key || name], record, indexRecord)
                  : record[key || name]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BaseTable;
