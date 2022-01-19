import { Injectable } from '@nestjs/common';
import { PrismaService } from './Prima.service';
import {
    Prisma,
    Role,
    UserInfo
} from '@prisma/client';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }

    async user(userWhereUniqueInput: Prisma.UserInfoWhereUniqueInput): Promise<UserInfo | null> {
        return this.prisma.userInfo.findUnique({
            where: userWhereUniqueInput,
        });
    }

    async users(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.UserInfoWhereUniqueInput;
        where?: Prisma.UserInfoWhereInput;
        orderBy?: Prisma.UserInfoOrderByWithRelationInput;
    }): Promise<UserInfo[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.userInfo.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async createRole(data: Prisma.RoleCreateInput): Promise<Role> {
        return this.prisma.role.create({ data });
    }

    async createUser(data: Prisma.UserInfoCreateInput): Promise<UserInfo> {
        return this.prisma.userInfo.create({
            data
        });
    }

    async createSellerInformation(data: any) {

    }

    async updateUser(params: {
        where: Prisma.UserInfoWhereUniqueInput;
        data: Prisma.UserInfoUpdateInput;
    }): Promise<UserInfo> {
        const { where, data } = params;
        return this.prisma.userInfo.update({
            data,
            where,
        });
    }

    async deleteUser(where: Prisma.UserInfoWhereUniqueInput): Promise<UserInfo> {
        return this.prisma.userInfo.delete({
            where,
        });
    }
}