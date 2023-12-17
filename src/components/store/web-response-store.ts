'use client';

import {create} from 'zustand';

interface StoreState {
    webResponse: any;
    setWebResponse: (data: any) => void;
}

export const useWebResponseStore = create<StoreState>((set) => ({
    webResponse: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('webResponse') ?? '{}') : {},
    setWebResponse: (data) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('webResponse', JSON.stringify(data));
        }
        set({webResponse: data});
    },
}));