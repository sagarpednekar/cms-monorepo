"use client";

import CustomForm from "../components/CustomForm";
import useSpecies from "../hooks/useSpecies";

export default function page() {
  const { species, isLoading } = useSpecies();

  return (
    <div>
      <CustomForm
        formMode="update"
        speciesIntialValues={species}
        isLoading={isLoading}
      />
    </div>
  );
}
