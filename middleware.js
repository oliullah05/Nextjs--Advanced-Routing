import { NextResponse } from "next/server";
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'



let defaultLocale = "en"
let locales =["en","bn"]

const getLocale = (request)=>{
const accpectedLanguage = request.headers.get("accept-language") ?? undefined;
let headers = { 'accept-language': accpectedLanguage }
const languages = new Negotiator({ headers }).languages();
match(languages, locales, defaultLocale)
}


export function middleware (request){
    // get the pathname from request url

    const pathname = request.nextUrl.pathname

    const pathnameIsMissingLocale = locales.every(locale=>!pathname.startWith(`/${locale}`) && !pathname.startWith(`/${locale}/`));

    if(pathnameIsMissingLocale){
        // detect user's preference & redirect with a locale with a path
        const locale = getLocale(request);

        return NextResponse.redirect(new URL(`${locale}/${pathname}`),request.url)
    }

    return NextResponse.next()
}