import CustomForm from "../components/CustomForm";

export default function page() {
  const initialFormValues = {
    bookName: "Charaka Samhita",
    sthana: "Chikitsa Sthana",
    chapterNumber: "Chapter 1",
    singleOrCombinationDrug: "Single",
    formulationAsSingleDrug: "NA",
    formulationAsCombination: "NA",
    nameOfTheCombination: "NA",
    usesAsSingleDrug: "NA",
    usesAsCombination: "NA",
    useExtOrInt: "INT",
  };
  return (
    <div>
      <CustomForm formMode="create" speciesIntialValues={initialFormValues} />
    </div>
  );
}
