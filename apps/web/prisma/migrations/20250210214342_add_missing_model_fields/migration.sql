/*
  Warnings:

  - Added the required column `use_ext_or_int` to the `Species` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Species" ADD COLUMN     "use_ext_or_int" TEXT NOT NULL;
