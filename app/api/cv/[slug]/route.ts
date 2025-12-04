import { NextRequest } from 'next/server'
import fs from 'fs'
import path from 'path'

const fileMap: Record<string, { filename: string; relPath: string }> = {
  'web-developer': {
    filename: 'Fayed Abdul Hakim - Web Developer.pdf',
    relPath: 'menu/navbar/source/Fayed Abdul Hakim - Web Developer.pdf',
  },
  'data-analyst': {
    filename: 'Fayed Abdul Hakim - Data Analyst.pdf',
    relPath: 'menu/navbar/source/Fayed Abdul Hakim - Data Analyst.pdf',
  },
}

export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
  const key = params.slug
  const entry = fileMap[key]
  if (!entry) {
    return new Response('Not Found', { status: 404 })
  }

  const abs = path.join(process.cwd(), entry.relPath)
  try {
    const data = await fs.promises.readFile(abs)
    const headers = new Headers()
    headers.set('Content-Type', 'application/pdf')
    headers.set('Content-Disposition', `attachment; filename="${entry.filename}"`)
    return new Response(data, { status: 200, headers })
  } catch (err) {
    return new Response('File not found', { status: 404 })
  }
}
