// middleware.js
import { NextResponse } from 'next/server';

export function middleware(req:Request) {
  
    console.log("Middleware speaking...")

  return NextResponse.next();
}

export const config = {
  matcher: '/protected/:path*', // Apply to all protected routes
}; 



