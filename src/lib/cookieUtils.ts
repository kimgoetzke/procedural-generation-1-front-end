'use server';

import {cookies} from "next/headers";

export async function deleteWebPlayerCookie() {
    cookies().delete("webPlayer");
}