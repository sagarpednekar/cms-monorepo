"use client";

import { Suspense } from "react";
import CustomForm from "../components/CustomForm";
import useSpecies from "../hooks/useSpecies";

function SpeciesForm() {
  const { species, isLoading } = useSpecies();

  return (
    <CustomForm
      formMode="update"
      speciesIntialValues={species}
      isLoading={isLoading}
    />
  );
}

export default function page() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <SpeciesForm />
      </Suspense>
    </div>
  );
}
