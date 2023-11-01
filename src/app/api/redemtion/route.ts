import { type NextRequest } from "next/server";

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get("id");

  return Response.json({ id });
}

export async function POST(request: Request) {
  const res = await request.json();

  return Response.json({ res });
}
