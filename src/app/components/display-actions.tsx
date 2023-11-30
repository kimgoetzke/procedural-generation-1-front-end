import {Action} from "@/app/common/models/web-response";
import '@/styles/styles.css';

export function DisplayActions({actions}: Readonly<{ actions: Action[] }>) {
    return (
        <ul className="list-none text-left">
            {actions.map((action) => (
                <li key={action.index} className="mb-2">
                    <button className="bg-blue-200 text-blue-700 font-bold rounded-full w-8 h-8 mr-2">{action.index}</button>
                    <span className="text-action">{action.name}</span>
                </li>
            ))}
        </ul>
    );
}