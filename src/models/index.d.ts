import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type HabitatMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Habitat {
  readonly id: string;
  readonly name?: string | null;
  readonly type?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Habitat, HabitatMetaData>);
  static copyOf(source: Habitat, mutator: (draft: MutableModel<Habitat, HabitatMetaData>) => MutableModel<Habitat, HabitatMetaData> | void): Habitat;
}