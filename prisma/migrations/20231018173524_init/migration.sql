-- CreateTable
CREATE TABLE "userProfile" (
    "userId" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "userVehicles" (
    "userId" TEXT NOT NULL PRIMARY KEY,
    "plate" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "millage" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "userHouses" (
    "userId" TEXT NOT NULL PRIMARY KEY,
    "address" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "salePrice" INTEGER NOT NULL,
    "garage" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
