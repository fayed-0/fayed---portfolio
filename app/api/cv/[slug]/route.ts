import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const fileMap: Record<string, { filename: string; publicPath: string }> = {
  'web-developer': {
    filename: 'Fayed Abdul Hakim - Web Developer.pdf',
    publicPath: '/cv/Fayed Abdul Hakim - Web Developer.pdf',
  },
  'data-analyst': {
    filename: 'Fayed Abdul Hakim - Data Analyst.pdf',
    publicPath: '/cv/Fayed Abdul Hakim - Data Analyst.pdf',
  },
  'ui-ux': {
    filename: 'Fayed Abdul Hakim - UI:UX.pdf',
    publicPath: '/cv/Fayed Abdul Hakim - UI:UX.pdf',
  },
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const entry = fileMap[slug]
  
  if (!entry) {
    return new Response('Not Found', { status: 404 })
  }

  // Read file from public directory
  const filePath = path.join(process.cwd(), 'public', entry.publicPath)
  
  try {
    const data = await fs.promises.readFile(filePath)
    
    return new NextResponse(data as any, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${entry.filename}"`,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    })
  } catch (err) {
    console.error('Error reading file:', err)
    return new Response('File not found', { status: 404 })
  }
}
