import {Action} from "@/app/common/models/web-response";
import '@/styles/styles.css';
import {useRouter} from "next/navigation";

export function DisplayActions({actions}: Readonly<{ actions: Action[] }>) {
    const router = useRouter();
    const handleClick = (index: number) => router.push(`/play/continue?choice=${index}`);
    return (
        <ul className="list-none text-left">
            {actions.map((action: Action) => (
                <li key={action.index} className="mb-2">
                    <button onClick={() => handleClick(action.index)}
                            className="font-bold text-lg w-8 h-8 mr-2 standard-button">{action.index}</button>
                    <span className="text-action">{action.name}</span>
                </li>
            ))}
        </ul>
    );
}