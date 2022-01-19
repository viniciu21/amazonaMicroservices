-- CreateTable
CREATE TABLE "UserInfo" (
    "userId" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "roleId" INTEGER NOT NULL,

    CONSTRAINT "UserInfo_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Role" (
    "roleId" SERIAL NOT NULL,
    "nameRole" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("roleId")
);

-- CreateTable
CREATE TABLE "SaleInformation" (
    "idSaleInformation" SERIAL NOT NULL,
    "cnpj" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "SaleInformation_pkey" PRIMARY KEY ("idSaleInformation")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserInfo_userName_key" ON "UserInfo"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "Role_nameRole_key" ON "Role"("nameRole");

-- CreateIndex
CREATE UNIQUE INDEX "SaleInformation_userId_key" ON "SaleInformation"("userId");

-- AddForeignKey
ALTER TABLE "UserInfo" ADD CONSTRAINT "UserInfo_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("roleId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SaleInformation" ADD CONSTRAINT "SaleInformation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserInfo"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
