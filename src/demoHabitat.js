import { DataStore } from '@aws-amplify/datastore';
import { Habitat } from './models';

await DataStore.save(
    new Habitat({
		"name": "Lorem ipsum dolor sit amet",
		"type": 1020
	})
);