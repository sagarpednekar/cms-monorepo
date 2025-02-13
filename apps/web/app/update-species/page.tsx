"use client";

import { Suspense } from "react";
import CustomForm from "../components/CustomForm";
import useFetchSpeciesById from "../hooks/useFetchSpeciesById";

function SpeciesForm() {
  const { species, isLoading } = useFetchSpeciesById();

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
