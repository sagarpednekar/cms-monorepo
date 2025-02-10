-- CreateTable
CREATE TABLE "Species" (
    "id" SERIAL NOT NULL,
    "book_name" TEXT NOT NULL,
    "sthana" TEXT NOT NULL,
    "chapter_number" TEXT NOT NULL,
    "single_or_combination_drug" TEXT NOT NULL,
    "formulation_as_a_single_drug" TEXT NOT NULL,
    "formulation_as_combination" TEXT NOT NULL,
    "name_of_the_combination" TEXT NOT NULL,
    "uses_as_single_drug" TEXT NOT NULL,
    "uses_as_combination" TEXT NOT NULL,
    "drug_name" TEXT NOT NULL,
    "sanskrit_name" TEXT NOT NULL,
    "latin_name" TEXT NOT NULL,

    CONSTRAINT "Species_pkey" PRIMARY KEY ("id")
);
