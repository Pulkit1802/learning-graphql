import { prismaCreate, prismaUpdate, prismaDelete } from "../../utils/service.utils";

export const mutations = {
    createUser: async (_: any, args: any) => {

        console.log("create user called");

        const { data } = args;

        const user = await prismaCreate("user", data, ["id", "name", "email"]);

        return user;
    },
    updateUser: async (_: any, args: any) => {
        const { where, data } = args;

        const user = await prismaUpdate("user", where, data);

        return user;
    },
    deleteUser: async (_: any, args: any) => {

        const user = await prismaDelete("user", args);

        if (user) {
            return {
                status: "deleted",
            }
        } else {
            return {
                status: "not deleted",
            }
        }
    }
}

export default mutations;