export async function GET() {
  const res = { text: "new routing" };
  return Response.json({ res });
}
