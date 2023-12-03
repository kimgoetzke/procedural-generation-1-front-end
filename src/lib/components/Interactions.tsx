export function Interactions({interactions}: Readonly<{ interactions: string[] }>) {
    console.log("DisplayInteractions interactions =", interactions);
    return (
        <div className="bg-neutral-300 rounded-2xl p-4 mb-9">
            <ul className="w-full list-none">
                {interactions.map((interaction: string, index: number) => (
                    <li key={index} className="mb-2">
                        <span className="standard-text">{interaction}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}