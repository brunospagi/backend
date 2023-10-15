-- CreateTable
CREATE TABLE "chamados" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeAnimal" TEXT NOT NULL,
    "idadeAnimal" TEXT NOT NULL,
    "tipoAnimal" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "imagemChamado" TEXT,
    "latitudeChamado" TEXT NOT NULL,
    "longitudeChamado" TEXT NOT NULL,
    "enderecoChamado" TEXT NOT NULL,
    "tipoChamado" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
