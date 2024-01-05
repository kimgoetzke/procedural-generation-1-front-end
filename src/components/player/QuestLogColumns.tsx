import {ColumnDef} from "@tanstack/react-table";
import {Button} from "@/components/ui/button";
import {ArrowUpDown} from "lucide-react";
import {Quest} from "@/lib/models/QuestLog";

export const questLogColumns: ColumnDef<Quest>[] = [
    {
        accessorKey: "eventType",
        header: ({column}) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    Type <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
    },
    {
        accessorKey: "eventState",
        header: ({column}) => {
            return (
                <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                    State <ArrowUpDown className="ml-2 h-4 w-4"/>
                </Button>
            )
        },
    },
    {
        accessorKey: "questGiver.name",
        header: "From",
    },
    {
        accessorKey: "questTarget.name",
        header: "Involving",
    },
    {
        accessorKey: "about",
        header: "About",
    },
];