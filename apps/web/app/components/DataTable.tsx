"use client";
import { useState } from "react";
import { Button, Flex, Space, Table } from "antd";
import { ISpeciesSchema } from "./CustomForm";
import FilterHeaders from "./FilterHeaders";
import { columns, pageSize } from "../config";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import axios from "axios";
import styles from "./DataTable.module.css";
const headerOptions = columns.map((column) => ({
  label: column.title,
  value: column.dataIndex,
}));

export type TableDataType = ISpeciesSchema;

type DataTableProps = {
  tableData: TableDataType[] | undefined;
  isLoading: boolean;
  refetch?: () => void;
};
export default function DataTable({
  tableData,
  isLoading,
  refetch,
}: DataTableProps) {
  const router = useRouter();

  // api requets
  const handleEdit = (record: TableDataType) => {
    router.push(`/update-species?id=${record.id}`);
  };

  const handleDelete = (record: TableDataType) => {
    axios.delete(`/api/species`, { data: { id: record.id } }).then(() => {
      if (refetch) refetch();
    });
  };

  const getColumnStyles = (header: string) => {
    switch (header) {
      case "latinName":
        return styles["font-italic"];
      case "drugName":
        return styles["title-case"];
      default:
        return "";
    }
  };

  const actionColumn = {
    title: "Action",
    key: "action",
    dataIndex: "action",
    order: columns.length,
    render: (_: unknown, record: TableDataType) => (
      <Space size="middle">
        <Button
          type="primary"
          icon={<EditOutlined />}
          onClick={() => handleEdit(record)}
        >
          Edit
        </Button>
        <Button
          type="primary"
          danger
          icon={<DeleteOutlined />}
          onClick={() => handleDelete(record)}
        >
          Delete
        </Button>
      </Space>
    ),
  };

  // state variables
  const filteredHeaders = [...columns.slice(0, 5), actionColumn].map(
    (header) => ({
      ...header,
      className: getColumnStyles(header.dataIndex),
    }),
  );

  const [headers, setHeaders] = useState(filteredHeaders);

  const filterTableData = (selectedHeaders: string[]) => {
    setHeaders(
      [
        ...columns.filter((header) =>
          selectedHeaders.includes(header.dataIndex),
        ),
        actionColumn,
      ].map((header) => ({
        ...header,
        className: getColumnStyles(header.dataIndex),
      })),
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
        dataSource={tableData?.map((item) => ({ ...item, key: item.id }))}
        scroll={{ x: "max-content" }}
        loading={isLoading}
        pagination={
          tableData && tableData.length > 10
            ? {
                defaultPageSize: pageSize,
                showSizeChanger: true,
                showTotal: (total) => `Total ${total} items`,
              }
            : false
        }
      ></Table>
    </Flex>
  );
}
