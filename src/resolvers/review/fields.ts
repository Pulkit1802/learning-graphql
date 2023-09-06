import { prismaFindMany, prismaFindUnique } from "../../utils/service.utils";

export const fields = {
    Review: {
        post: async (parent: any, _: any) => {
            const {postId} = parent;
            const post = await prismaFindUnique("post", {id: postId});
            return post;
        },
        user: async (parent: any, _: any) => {
            const {userId} = parent;
            const user = await prismaFindUnique("user", {id: userId});
            return user;
        }
    }
}