import {Card} from "@/components/ui/card";

export function Interactions({interactions}: Readonly<{ interactions: string[] }>) {
    console.log("DisplayInteractions interactions =", interactions);
    return (
        <div className="standard-outer-padding">
            <Card className="standard-inner-padding bg-secondary">
                {interactions.map((interaction: string, index: number) => (
                    <div key={index} className="standard-outer-padding">
                        <p className="standard-p text-secondary-foreground italic">"{interaction}"</p>
                    </div>
                ))}
            </Card>
        </div>
    );
}