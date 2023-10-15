/*
  Warnings:

  - You are about to alter the column `latitudeChamado` on the `chamados` table. The data in that column could be lost. The data in that column will be cast from `String` to `Float`.
  - You are about to alter the column `longitudeChamado` on the `chamados` table. The data in that column could be lost. The data in that column will be cast from `String` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_chamados" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeAnimal" TEXT NOT NULL,
    "idadeAnimal" TEXT NOT NULL,
    "tipoAnimal" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "imagemChamado" TEXT,
    "latitudeChamado" REAL NOT NULL,
    "longitudeChamado" REAL NOT NULL,
    "enderecoChamado" TEXT NOT NULL,
    "tipoChamado" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_chamados" ("createdAt", "descricao", "enderecoChamado", "id", "idadeAnimal", "imagemChamado", "latitudeChamado", "longitudeChamado", "nomeAnimal", "status", "tipoAnimal", "tipoChamado", "updatedAt") SELECT "createdAt", "descricao", "enderecoChamado", "id", "idadeAnimal", "imagemChamado", "latitudeChamado", "longitudeChamado", "nomeAnimal", "status", "tipoAnimal", "tipoChamado", "updatedAt" FROM "chamados";
DROP TABLE "chamados";
ALTER TABLE "new_chamados" RENAME TO "chamados";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
