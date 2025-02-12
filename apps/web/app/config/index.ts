export const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    order: 1,
  },
  {
    title: "Samhita",
    dataIndex: "bookName",
    key: "bookName",
    order: 7,
  },
  {
    title: "Sthana",
    dataIndex: "sthana",
    key: "sthana",
    order: 8,
  },
  {
    title: "Chapter",
    dataIndex: "chapterNumber",
    key: "chapterNumber",
    order: 9,
  },
  {
    title: "Single or Combination Drug",
    dataIndex: "singleOrCombinationDrug",
    key: "singleOrCombinationDrug",
    order: 11,
  },
  {
    title: "Formulation as a Single Drug",
    dataIndex: "formulationAsASingleDrug",
    key: "formulationAsASingleDrug",
    order: 12,
  },
  {
    title: "Formulation as Combination",
    dataIndex: "formulationAsCombination",
    key: "formulationAsCombination",
    order: 13,
  },
  {
    title: "Name of the Combination",
    dataIndex: "nameOfTheCombination",
    key: "nameOfTheCombination",
    order: 14,
  },
  {
    title: "Use- INT/EXT",
    dataIndex: "useExtOrInt",
    key: "useExtOrInt",
    order: 15,
  },
  {
    title: "Uses as Single Drug",
    dataIndex: "usesAsSingleDrug",
    key: "usesAsSingleDrug",
    order: 18,
  },
  {
    title: "Uses as Combination",
    dataIndex: "usesAsCombination",
    key: "usesAsCombination",
    order: 19,
  },
  {
    title: "Drug Name",
    dataIndex: "drugName",
    key: "drugName",
    order: 2,
  },
  {
    title: "Sanskrit Name",
    dataIndex: "sanskritName",
    key: "sanskritName",
    order: 3,
  },
  {
    title: "Latin Name",
    dataIndex: "latinName",
    key: "latinName",
    order: 4,
  },
  {
    title: "Part of Plant Used",
    dataIndex: "partOfPlantUsed",
    key: "partOfPlantUsed",
    order: 6,
  },
  {
    title: "Type of Ext Use",
    dataIndex: "typeOfExtUse",
    key: "typeOfExtUse",
    order: 16,
  },
  {
    title: "Parenteral Route",
    dataIndex: "parenteralRoute",
    key: "parenteralRoute",
    order: 17,
  },
  {
    title: "Anupana",
    dataIndex: "anupana",
    key: "anupana",
    order: 20,
  },
  {
    title: "Sahapana",
    dataIndex: "sahapana",
    key: "sahapana",
    order: 21,
  },
  {
    title: "Granthadikara",
    dataIndex: "granthadikara",
    key: "granthadikara",
    order: 22,
  },
  {
    title: "Rogadhikara",
    dataIndex: "rogadhikara",
    key: "rogadhikara",
    order: 23,
  },
  {
    title: "Verse Number",
    dataIndex: "verseNumber",
    key: "verseNumber",
    order: 10,
  },
  {
    title: "Remarks",
    dataIndex: "remarks",
    key: "remarks",
    order: 5,
  },
].sort((a, b) => a.order - b.order);

export const pageSize = 100;
