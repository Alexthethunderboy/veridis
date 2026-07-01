import { NextResponse } from 'next/server';

const BASE_URL = 'https://the-cannabis-api.vercel.app/api/strains';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');

  if (!type) {
    return NextResponse.json({ error: 'Type is required' }, { status: 400 });
  }

  try {
    const response = await fetch(`${BASE_URL}/getStrainsByType?strainType=${type}`);
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error(`Proxy error for type ${type}:`, errorMessage);
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
