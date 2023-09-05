import { prismaFindMany, prismaFindUnique } from "../../utils/service.utils";


export const queries = {
    user: async (_: any, args: any) => {
        const { id } = args;

        const user = await prismaFindUnique("user", { id });

        return user;
    },
    users: async () => {
        const users = await prismaFindMany("user", {});

        return users;
    }
};

export default queries;