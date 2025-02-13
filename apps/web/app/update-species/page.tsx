"use client";

import { useSearchParams } from "next/navigation";
import CustomForm, { ISpeciesSchema } from "../components/CustomForm";
import { useEffect, useState } from "react";
import axios from "axios";

export default function page() {
  const searchParams = useSearchParams();
  console.log("params", searchParams.get("id"));
  const [species, setSpecies] = useState<Partial<ISpeciesSchema>>();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const id = searchParams.get("id");
    if (id) {
      axios.get(`/api/species?id=${id}`).then((res) => {
        const result = res.data.result;
        console.log("result", result);
        setSpecies(result);
        setIsLoading(false);
      }).catch((error) => {
        console.log("error", error);
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, []);
  
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
