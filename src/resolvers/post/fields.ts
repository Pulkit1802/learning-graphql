import { prismaFindMany, prismaFindUnique } from "../../utils/service.utils"

export const fields = {
    Post: {
        author: async (parent: any, _: any) => {
            const { authorId } = parent;
            const author = await prismaFindUnique("user", { id: authorId },
                ["id", "name", "email", { posts: ["id", "title", "content"] }]
            );
            return author;
        },
        reviews: async (parent: any, _: any) => {
            const { id } = parent;
            const reviews = await prismaFindMany("review", { postId: id },);
            return reviews;
        }
    }
}
