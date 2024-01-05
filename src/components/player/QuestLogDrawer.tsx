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
                    <DrawerTitle className="pb-4">Quest log</DrawerTitle>
                    <DrawerDescription>
                        {JSON.stringify(questLog, null, 2)}
                    </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <DrawerClose>
                        <Button variant="outline">Close quest log</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}