export async function POST(req: Request) {
  try {
    const body = await req.json();
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
