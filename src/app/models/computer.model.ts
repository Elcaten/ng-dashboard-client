import { Entity, EntityMetadata } from "./entity.model";

export interface Computer extends Entity {
  name: string | null;
  introduced: Date | null;
  discontinued: Date | null;
  company: string | null;
}

export const computerMetadata: EntityMetadata<Computer> = {
  _id: {
    //hidden: true
  },
  name: {
    displayName: "Name",
    width: "auto",
    editable: true,
  },
  introduced: {
    displayName: "Introduced",
    dataType: "datetime",
    format: "shortDate",
    editable: true,
  },
  discontinued: {
    displayName: "Discontinued",
    dataType: "datetime",
    format: "shortDate",
    editable: true,
  },
  company: {
    displayName: "Company",
    editable: true,
  },
};
