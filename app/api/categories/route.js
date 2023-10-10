import create from '@/utils/functions/category';
import { NextResponse } from 'next/server';

export async function GET() {
    const res = await fetch('https://dummyjson.com/users');
    const data = await res.json();
    return NextResponse.json({ data })
}

export async function POST(req) {
    const data = await req.json();
    const res = await create({data});
    return NextResponse.json({res})
}