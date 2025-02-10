/*
  Warnings:

  - Added the required column `anupana` to the `Species` table without a default value. This is not possible if the table is not empty.
  - Added the required column `granthadikara` to the `Species` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parenteral_route` to the `Species` table without a default value. This is not possible if the table is not empty.
  - Added the required column `part_of_plant_used` to the `Species` table without a default value. This is not possible if the table is not empty.
  - Added the required column `remarks` to the `Species` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rogadhikara` to the `Species` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sahapana` to the `Species` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type_of_ext_use` to the `Species` table without a default value. This is not possible if the table is not empty.
  - Added the required column `verse_number` to the `Species` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Species" ADD COLUMN     "anupana" TEXT NOT NULL,
ADD COLUMN     "granthadikara" TEXT NOT NULL,
ADD COLUMN     "parenteral_route" TEXT NOT NULL,
ADD COLUMN     "part_of_plant_used" TEXT NOT NULL,
ADD COLUMN     "remarks" TEXT NOT NULL,
ADD COLUMN     "rogadhikara" TEXT NOT NULL,
ADD COLUMN     "sahapana" TEXT NOT NULL,
ADD COLUMN     "type_of_ext_use" TEXT NOT NULL,
ADD COLUMN     "verse_number" TEXT NOT NULL;
