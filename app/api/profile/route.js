import { headers,cookies } from "next/headers";

export const GET = async (request) => {
    // get headers
    const requestHeaders = new Headers(request.headers)
    const getAuthorization = requestHeaders.get("authorization")

    // get headers another way
const headerList = headers();
const getAuthorization2 = headerList.get("authorization")


// get cokkie
const getCookiesRaw = request.cookies.get("theme");
const getCookiesNextjs = cookies().get("theme")
const setCookie = cookies().set("page","2")
    return new Response("requestHeaders",{
        headers:{
            "Set-Cookie":"theme=dark"
        }
    })
}