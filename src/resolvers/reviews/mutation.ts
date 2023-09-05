import { prismaCreate, prismaUpdate, prismaDelete } from "../../utils/service.utils";

export const reviewMutations = {
    createreview: async (_: any, args: any) => {
        const { data } = args;

        const review = await prismaCreate("review", data);

        return review;
    },
    updatereview: async (_: any, args: any) => {
        const { where, data } = args;

        const review = await prismaUpdate("review", where, data);

        return review;
    },
    deletereview: async (_: any, args: any) => {

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