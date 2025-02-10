"use client";
import { useEffect, useState } from "react";
import DataTable, { TableDataType } from "./components/DataTable";
import styles from "./page.module.css";

import ButtonInput from "@repo/ui/ButtonInput";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Home() {
  const router = useRouter();
  const [tableData, setTableData] = useState<TableDataType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/api/species")
      .then((res) => {
        const result = res.data.result;
        setTableData(result);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={styles.page}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: 16,
        }}
      >
        <ButtonInput
          label="Create New Entry"
          variant="primary"
          onClick={() => {
            router.push("/create-entry");
          }}
        />
      </div>

      <DataTable tableData={tableData} isLoading={isLoading} />
    </div>
  );
}
