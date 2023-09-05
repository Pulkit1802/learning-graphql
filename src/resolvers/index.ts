import { readdirSync } from "fs";

const dirs = readdirSync(__dirname, {withFileTypes: true})
    .filter(dir => dir.isDirectory())
    .map(dir => dir.name)

const queriesList : object[] = [];
const mutationsList : object[] = [];

dirs.forEach((dir) => {
    const {queries} = require(`./${dir}/querry.ts`);
    const {mutations} = require(`./${dir}/mutation.ts`);
    queriesList.push(queries);
    mutationsList.push(mutations);
} )

let Query = {}
let Mutation = {}

queriesList.forEach((query) => {
    Query = {...Query, ...query}
})

mutationsList.forEach((mutation) => {
    Mutation = {...Mutation, ...mutation}
})


const resolvers = {
    Query,
    Mutation
}

export default resolvers;