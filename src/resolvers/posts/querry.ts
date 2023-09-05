import { prismaFindMany, prismaFindUnique } from "../../utils/service.utils";


export const postQueries = {
    post: async (_: any, args: any) => {
        const { id } = args;

        const post = await prismaFindUnique("post", { id });

        return post;
    },
    posts: async () => {
        const posts = await prismaFindMany("post", {});

        return posts;
    }
};