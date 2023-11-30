import {createContext} from 'react';
import {WebRequest} from "@/app/common/models/web-request";

export const WebRequestContext = createContext<WebRequest | null>(null);