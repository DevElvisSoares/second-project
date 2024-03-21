/*
  Warnings:

  - Added the required column `contact` to the `user_login` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user_login" ADD COLUMN     "contact" TEXT NOT NULL;
