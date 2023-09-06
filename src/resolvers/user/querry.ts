import { prismaFindMany, prismaFindUnique } from "../../utils/service.utils";


export const queries = {
    user: async (_: any, args: any) => {
        const { id } = args;

        const user = await prismaFindUnique("user", { id }, 
            ["id", "name", "email", {"posts": ["id", "title", "content"]}]
        );

        return user;
    },
    users: async () => {
        const users = await prismaFindMany("user", {}, 
            ["id", "name", "email", "role", {posts: ["id", "title", "content"]}]
        );

        return users;
    }
};

export default queries;