import { NextResponse } from 'next/server';

const services = [
  { id: 1, icon: '🏗️', title: 'Construction', description: 'Expert industrial construction services.' },
  { id: 2, icon: '⚙️', title: 'Machinery', description: 'Top-quality machinery solutions.' },
  { id: 3, icon: '🔧', title: 'Maintenance', description: 'Reliable maintenance and support.' },
];

export async function GET() {
  return NextResponse.json(services);
}
