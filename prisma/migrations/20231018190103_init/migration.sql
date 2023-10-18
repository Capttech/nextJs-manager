/*
  Warnings:

  - The primary key for the `userVehicles` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `userHouses` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `userOther` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_userVehicles" (
    "userId" TEXT NOT NULL,
    "plate" TEXT NOT NULL PRIMARY KEY,
    "model" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "millage" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_userVehicles" ("color", "createdAt", "millage", "model", "plate", "updatedAt", "userId", "year") SELECT "color", "createdAt", "millage", "model", "plate", "updatedAt", "userId", "year" FROM "userVehicles";
DROP TABLE "userVehicles";
ALTER TABLE "new_userVehicles" RENAME TO "userVehicles";
CREATE TABLE "new_userHouses" (
    "userId" TEXT NOT NULL,
    "address" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "salePrice" INTEGER NOT NULL,
    "garage" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_userHouses" ("address", "createdAt", "garage", "salePrice", "type", "updatedAt", "userId") SELECT "address", "createdAt", "garage", "salePrice", "type", "updatedAt", "userId" FROM "userHouses";
DROP TABLE "userHouses";
ALTER TABLE "new_userHouses" RENAME TO "userHouses";
CREATE TABLE "new_userOther" (
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_userOther" ("createdAt", "name", "state", "type", "updatedAt", "userId") SELECT "createdAt", "name", "state", "type", "updatedAt", "userId" FROM "userOther";
DROP TABLE "userOther";
ALTER TABLE "new_userOther" RENAME TO "userOther";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
