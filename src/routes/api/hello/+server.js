

export function GET(request) {
    const name = request.url.searchParams.get("name");
    return new Response(`Hello ${name}!`);
}