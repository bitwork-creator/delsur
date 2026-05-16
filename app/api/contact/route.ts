import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { need, name, business, message, lang, type, budget, campaigns, adBudget } = body

    if (!name?.trim() || !business?.trim()) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey || apiKey === 're_xxxxxxxxxxxx') {
      console.log('Contact form submission (no Resend configured):', body)
      return NextResponse.json({ ok: true })
    }

    const subject = need === 'web'
      ? `[DELSUR] Nueva consulta WEB — ${name}`
      : `[DELSUR] Nueva consulta GOOGLE ADS — ${name}`

    const htmlBody = `
      <h2>${subject}</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Negocio:</strong> ${business}</p>
      ${type ? `<p><strong>Tipo:</strong> ${type}</p>` : ''}
      ${budget ? `<p><strong>Presupuesto:</strong> ${budget}</p>` : ''}
      ${campaigns ? `<p><strong>Campañas activas:</strong> ${campaigns}</p>` : ''}
      ${adBudget ? `<p><strong>Budget ads:</strong> ${adBudget}</p>` : ''}
      ${message ? `<p><strong>Mensaje:</strong> ${message}</p>` : ''}
      <p><strong>Idioma:</strong> ${lang}</p>
    `

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'noreply@delsur.studio',
        to: 'brendadelsurdigital@gmail.com',
        subject,
        html: htmlBody,
        reply_to: undefined,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('Resend error:', err)
      return NextResponse.json({ error: 'Email failed' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
