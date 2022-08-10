// @ts-check
import { Amplify } from "aws-amplify";
import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Habitat } = initSchema(schema);

export {
  Habitat
};