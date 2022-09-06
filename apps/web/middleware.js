export function middleware(request) {
  console.log("Backend req", request.url);
  const response = NextResponse.next();
  return response;
}