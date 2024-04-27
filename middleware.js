import { NextResponse } from 'next/server'
import { setTimeout } from 'timers/promises'

// This function can be marked `async` if using `await` inside
export async function middleware(request, event) {
    event.waitUntil(
      await  setTimeout(() => {
            console.log("donee",77);
        }, 5000)
    )
    // return NextResponse.redirect(new URL('/', request.url))
    return NextResponse.rewrite(new URL('/', request.url))
}
export const config = {
    // matcher: '/dashboard/:pa*',
    matcher: '/',
}