import { isClient } from "~/lib/constants";

export const isApiSupported = (api: string) => isClient && api in window;
