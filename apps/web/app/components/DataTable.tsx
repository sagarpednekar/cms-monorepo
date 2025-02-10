"use client";
import { useState } from "react";
import { Flex, Table } from "antd";
import { ISpeciesSchema } from "./CustomForm";
import FilterHeaders from "./FilterHeaders";
import { columns, pageSize } from "../config";

const headerOptions = columns.map((column) => ({
  label: column.title,
  value: column.dataIndex,
}));

export type TableDataType = ISpeciesSchema;

type DataTableProps = {
  tableData: TableDataType[];
  isLoading: boolean;
};
export default function DataTable({ tableData, isLoading }: DataTableProps) {
  const [headers, setHeaders] = useState([...columns.slice(0, 5)]);

  const filterTableData = (selectedHeaders: string[]) => {
    setHeaders(
      columns.filter((header) => selectedHeaders.includes(header.dataIndex)),
    );
  };

  return (
    <Flex gap="middle" vertical>
      <Flex align="center" gap="middle">
        <FilterHeaders
          options={headerOptions}
          maxCount={headerOptions.length}
          onApplyFilter={filterTableData}
          defaultValue={headers.map((header) => header.dataIndex)}
        />
      </Flex>
      <Table
        columns={headers}
        dataSource={tableData}
        scroll={{ x: "max-content" }}
        loading={isLoading}
        pagination={
          tableData.length > 10
            ? {
                defaultPageSize: pageSize,
                showSizeChanger: true,
                showTotal: (total) => `Total ${total} items`,
              }
            : false
        }
      />
    </Flex>
  );
}
