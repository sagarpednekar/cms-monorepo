import { useEffect, useState } from "react";
import { ISpeciesSchema } from "../components/CustomForm";
import axios from "axios";

export default function useSpecies() {
  const [species, setSpecies] = useState<ISpeciesSchema[]>();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get(`/api/species`)
      .then((res) => {
        const result = res.data.result;
        setSpecies(result);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setIsLoading(false);
      });
  }, []);

  return { isLoading, species };
}
