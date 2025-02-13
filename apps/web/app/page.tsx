"use client";
import DataTable from "./components/DataTable";
import styles from "./page.module.css";

import ButtonInput from "@repo/ui/ButtonInput";
import { useRouter } from "next/navigation";
import useSpecies from "./hooks/useFetchSpecies";

export default function Home() {
  const router = useRouter();
  const { species: tableData, isLoading } = useSpecies();

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
