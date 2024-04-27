import { headers } from "next/headers";

export const GET = async (request) => {
    // get headers
    const requestHeaders = new Headers(request.headers)
    const getAuthorization = requestHeaders.get("authorization")

    // get headers another way
const headerList = headers();
const getAuthorization2 = headerList.get("authorization")
console.log(getAuthorization2);
    return new Response("requestHeaders")
}