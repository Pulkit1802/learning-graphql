import { prismaCreate, prismaUpdate, prismaDelete } from "../../utils/service.utils";

export const postMutations = {
    createpost: async (_: any, args: any) => {
        const { data } = args;

        const post = await prismaCreate("post", data);

        return post;
    },
    updatepost: async (_: any, args: any) => {
        const { where, data } = args;

        const post = await prismaUpdate("post", where, data);

        return post;
    },
    deletepost: async (_: any, args: any) => {

        const post = await prismaDelete("post", args);

        if (post) {
            return {
                status: "post deleted",
            }
        } else {
            return {
                status: "not deleted",
            }
        }
    }
}