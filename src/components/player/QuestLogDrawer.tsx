import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer"
import React from "react";
import {Button} from "@/components/ui/button";
import {QuestLog} from "@/lib/models/QuestLog";
import {DataTable} from "@/components/ui/data-table";
import {questLogColumns} from "@/components/player/QuestLogColumns";

export function QuestLogDrawer(
    {questLog}: Readonly<{
        questLog: QuestLog,
    }>
) {
    const [open, setOpen] = React.useState(true);
    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerContent className="md:mx-16 md:px-16">
                <DrawerHeader>
                    <DrawerTitle className="w-full pb-4 text-center standard-h2">Quest log</DrawerTitle>
                    <DrawerDescription>
                        <DataTable columns={questLogColumns} data={questLog}/>
                    </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <DrawerClose>
                        <Button variant="outline">Close</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}