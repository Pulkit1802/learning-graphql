import { prismaCreate, prismaUpdate, prismaDelete } from "../../utils/service.utils";

export const mutations = {
    createReview: async (_: any, args: any) => {
        const { data } = args;

        const review = await prismaCreate("review", data);

        return review;
    },
    updateReview: async (_: any, args: any) => {
        const { where, data } = args;

        const review = await prismaUpdate("review", where, data);

        return review;
    },
    deleteReview: async (_: any, args: any) => {

        const review = await prismaDelete("review", args);

        if (review) {
            return {
                status: "review deleted",
            }
        } else {
            return {
                status: "not deleted",
            }
        }

    }
}

export default mutations;