import logger from "../../utils/logger";
import { prismaCreate, prismaUpdate, prismaDelete } from "../../utils/service.utils";

export const mutations = {
    createPost: async (_: any, args: any) => {

        const { data } = args;

        const post = await prismaCreate("post", data);

        return post;
    },
    updatePost: async (_: any, args: any) => {
        const { where, data } = args;

        const post = await prismaUpdate("post", where, data);

        return post;
    },
    deletePost: async (_: any, args: any) => {

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

export default mutations;