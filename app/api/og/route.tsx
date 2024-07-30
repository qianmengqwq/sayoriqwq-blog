import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  try {
    
  } catch (error) {
    return new Response('Failed to generate image', { status: 500 })
  }
}
