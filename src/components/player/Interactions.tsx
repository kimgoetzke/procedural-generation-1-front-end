import {Card} from "@/components/ui/card";

export function Interactions({interactions}: Readonly<{ interactions: string[] }>) {
    return (
        <div className="standard-outer-padding">
            <Card className="standard-inner-padding bg-secondary">
                {interactions.map((interaction: string, index: number) => (
                    <div key={index} className="standard-outer-padding">
                        <p className="standard-p text-secondary-foreground italic">&quot;{interaction}&quot;</p>
                    </div>
                ))}
            </Card>
        </div>
    );
}