-- CreateTable
CREATE TABLE "User" (
    "userId" BIGSERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Role" (
    "roleId" SERIAL NOT NULL,
    "nameRole" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("roleId")
);

-- CreateTable
CREATE TABLE "RolesUser" (
    "rolesUserId" BIGSERIAL NOT NULL,
    "roleId" INTEGER NOT NULL,
    "userId" BIGINT,

    CONSTRAINT "RolesUser_pkey" PRIMARY KEY ("rolesUserId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userName_key" ON "User"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "Role_nameRole_key" ON "Role"("nameRole");

-- AddForeignKey
ALTER TABLE "RolesUser" ADD CONSTRAINT "RolesUser_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("roleId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolesUser" ADD CONSTRAINT "RolesUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE SET NULL ON UPDATE CASCADE;
