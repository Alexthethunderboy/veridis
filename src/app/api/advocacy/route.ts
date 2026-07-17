import { getAdvocacyArchive } from '@/lib/server/advocacyStore';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  void request;
  const data = await getAdvocacyArchive();
  return Response.json(data, { headers: { 'Cache-Control': 'no-store' } });
}
