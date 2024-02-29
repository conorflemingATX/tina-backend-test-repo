import { MongodbLevel } from "mongodb-level";

const isLocal = process.env["TINA_PUBLIC_IS_LOCAL"] === 'true';

export default isLocal
    ? createLocalDatabase()
    : createDatabase({
        databaseAdapter: new MongodbLevel({
            collectionName: `tinacms-${branchName}`,
            dbName: "tinacms",
            mongoUri: process.env["MONGODB_URI"]
        })
    });
