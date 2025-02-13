import { useEffect, useState } from "react";
import { ISpeciesSchema } from "../components/CustomForm";
import axios from "axios";

export default function useSpecies() {
  const [species, setSpecies] = useState<ISpeciesSchema[]>();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [refetch, setRefetch] = useState<boolean>(false);

  const refetchApi = () => {
    setRefetch(true);
  };

  useEffect(() => {
    axios
      .get(`/api/species`)
      .then((res) => {
        if (refetch) {
          setRefetch(false);
        }
        const result = res.data.result;
        setSpecies(result);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setIsLoading(false);
      });
  }, [refetch]);

  return { isLoading, species, refetchApi };
}
