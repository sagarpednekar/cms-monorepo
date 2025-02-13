import { useEffect, useState } from "react";
import { ISpeciesSchema } from "../components/CustomForm";
import axios from "axios";
import { useSearchParams } from "next/navigation";

export default function useSpeciesById() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [species, setSpecies] = useState<Partial<ISpeciesSchema>>();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      axios
        .get(`/api/species?id=${id}`)
        .then((res) => {
          const result = res.data.result;
          setSpecies(result);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log("error", error);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [id]);

  return { isLoading, species };
}
