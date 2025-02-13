"use client";
import { useState } from "react";
import { Button, Flex, Space, Table } from "antd";
import { ISpeciesSchema } from "./CustomForm";
import FilterHeaders from "./FilterHeaders";
import { columns, pageSize } from "../config";
import { EditOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const handleEdit = (record: TableDataType) => {
    console.log("Edit record:", record);
    router.push(`/update-species?id=${record.id}`);
  };
  const actionColumn = {
    title: "Action",
    key: "action",
    dataIndex: "action",
    order: columns.length,
    render: (_: any, record: TableDataType) => (
      <Space size="middle">
        <Button
          type="primary"
          icon={<EditOutlined />}
          onClick={() => handleEdit(record)}
        >
          Edit
        </Button>
      </Space>
    ),
  };
  const [headers, setHeaders] = useState([
    ...columns.slice(0, 5),
    actionColumn,
  ]);
  const filterTableData = (selectedHeaders: string[]) => {
    setHeaders([
      ...columns.filter((header) => selectedHeaders.includes(header.dataIndex)),
      actionColumn,
    ]);
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
        dataSource={tableData.map((item) => ({ ...item, key: item.id }))}
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
      >
  
      
      </Table>
    </Flex>
  );
}
