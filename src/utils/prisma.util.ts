import configs from "../configs/configs";
import { PrismaClient } from "@prisma/client";

const { prisma } = configs;

type prismaSelectType = [string] | null;
type prismaOptionsType = object | null;

const selectBuilder = (select: prismaSelectType) => {

    if ( select === null ) 
        return null;

    let selectObj = {};
    select.forEach((item: string) => {
        // @ts-ignore
        selectObj[item] = true;
    });

    return selectObj;
};

export const prismaCreate = async (
    model: keyof PrismaClient, 
    data: object, 
    selectArr: prismaSelectType = null,
    options: prismaOptionsType = null
    ) => {

        const select = selectBuilder(selectArr);

        // @ts-ignore
        const res = await prisma[model].create({
            data,
            select,
            ...options
        });

        return res;

};

export const prismaFindUnique = async (
    model: keyof PrismaClient, 
    where: object, 
    selectArr: prismaSelectType = null,
    options: prismaOptionsType = null
    ) => {
    
        const select = selectBuilder(selectArr);

        // @ts-ignore
        const res = await prisma[model].findUnique({
            where,
            select,
            ...options
        });

        return res;
    
}

export const prismaFindMany = async (
    model: keyof PrismaClient, 
    where: object, 
    selectArr: prismaSelectType = null,
    options: prismaOptionsType = null
    ) => {

        const select = selectBuilder(selectArr);

        // @ts-ignore
        const res = await prisma[model].findMany({
            where,
            select,
            ...options
        });

        return res;

};

export const prismaUpdate = async (
    model: keyof PrismaClient, 
    where: object, 
    data: object, 
    selectArr: prismaSelectType = null,
    options: prismaOptionsType = null
    ) => {

        const select = selectBuilder(selectArr);

        // @ts-ignore
        const res = await prisma[model].update({
            where,
            data,
            select,
            ...options
        });

        return res;

}

export const prismaDelete = async (
    model: keyof PrismaClient, 
    where: object,
    options: prismaOptionsType = null,
    ) => {

        // @ts-ignore
        const res = await prisma[model].delete({
            where,
            ...options
        });

        return res;

}

export const prismaDeleteMany = async (
    model: keyof PrismaClient, 
    where: object,
    options: prismaOptionsType = null,
    ) => {

        // @ts-ignore
        const res = await prisma[model].deleteMany({
            where,
            ...options
        });

        return res;

}