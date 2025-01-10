"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type projectType = {
  titile: string;
  clientName: string;
  client_country: string;
  max_budget: String;
  min_budget: String;
};

export const columns: ColumnDef<projectType>[] = [
  {
    accessorKey: "titile",
    header: "Title",
  },
  {
    accessorKey: "clientName",
    header: "Name",
  },
  {
    accessorKey: "client_country",
    header: "Country",
  },
  {
    accessorKey: "max_budget",
    header: "MAX Bid",
  },
  {
    accessorKey: "min_budget",
    header: "Min Bid",
  },
];

