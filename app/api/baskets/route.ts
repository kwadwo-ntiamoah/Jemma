import { NextRequest } from "next/server";
import { invokeGetAsync, invokePostAsync } from "..";

export async function GET(request: NextRequest) {
  var url = "basket" + request.nextUrl.search
  return await invokeGetAsync(request, url);
}

export async function POST(request: NextRequest) {
  return await invokePostAsync(request, "basket/item");
}
