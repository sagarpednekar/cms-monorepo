"use client";
import { Button } from "antd";
// import DataTable from "./components/DataTable";
import styles from "./page.module.css";
import CustomForm from "./components/CustomForm";

export default function Home() {
  return (
    <div className={styles.page}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: 16,
        }}
      >
        <Button type="primary">Create New Entry</Button>
      </div>

      {/* <DataTable />
       */}
      <CustomForm />
    </div>
  );
}
