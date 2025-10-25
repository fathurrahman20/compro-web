import type { News } from "@/types";
import { type ColumnDef } from "@tanstack/react-table";
import EditDeleteNewsButton from "./edit-delete-news-button";

export const columns: ColumnDef<News>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "content",
    header: "Content",
  },
  {
    accessorKey: "author.name",
    header: "Author Name",
  },
  {
    accessorKey: "published",
    header: "Published",
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => {
      const news = row.original;
      return <EditDeleteNewsButton news={news} />;
    },
  },
];
