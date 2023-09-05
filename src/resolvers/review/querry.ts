import { prismaFindMany, prismaFindUnique } from "../../utils/service.utils";


export const queries = {
    review: async (_: any, args: any) => {
        const { id } = args;

        const review = await prismaFindUnique("user", { id });

        return review;
    },
    reviews: async () => {
        const review = await prismaFindMany("user", {});

        return review;
    }
};

export default queries;