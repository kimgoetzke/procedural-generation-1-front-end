import {Action} from "@/lib/models/WebResponse";
import {useRouter} from "next/navigation";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {WebRequest} from "@/lib/models/WebRequest";
import {useWebRequest} from "@/lib/context/web-request-context";

export function ActionsList({actions, playerId}: Readonly<{
    actions: Action[],
    playerId: string
}>) {
    const [, setWebRequest] = useWebRequest();
    const router = useRouter();
    return (
        <ul className="list-none text-left">
            {actions.map((action: Action) => (
                <li key={action.index} className="mb-2">
                    <button onClick={() => handleClick(router, action.index, playerId, setWebRequest)}
                            className="font-bold text-lg w-8 h-8 mr-2 standard-button">{action.index}</button>
                    <span className="text-action">{action.name}</span>
                </li>
            ))}
        </ul>
    );
}

const handleClick = (
    router: AppRouterInstance,
    index: number, playerId: string,
    setWebRequest?: (value: (((prevState: WebRequest) => WebRequest) | WebRequest)) => void
) => {
    setWebRequest ? setWebRequest({choice: index, playerId}) : console.error('setWebRequest is undefined');
    router.push(`/play/continue?choice=${index}&playerId=${playerId}`);
}