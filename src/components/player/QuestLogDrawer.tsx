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
    {questLog, setQuestLog}: Readonly<{
        questLog: QuestLog,
        setQuestLog: React.Dispatch<React.SetStateAction<QuestLog | undefined>>
    }>
) {
    return (
        <Drawer open={true} onOpenChange={() => setQuestLog(undefined)}>
            <DrawerContent>
                <DrawerClose>
                    <button>Close Drawer</button>
                </DrawerClose>
                <DrawerHeader>
                    <DrawerTitle>Cannot complete action</DrawerTitle>
                    <DrawerDescription>
                        {JSON.stringify(questLog)}
                    </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <Button>OK</Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}