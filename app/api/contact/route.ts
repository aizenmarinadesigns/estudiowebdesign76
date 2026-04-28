import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  service: z.enum(['web', 'google-business', 'instagram']),
  message: z.string().min(10),
})

type ContactData = z.infer<typeof contactSchema>

const serviceLabels: Record<string, string> = {
  web: 'Creación de Sitio Web',
  'google-business': 'Visibilidad en Google',
  instagram: 'Presencia en Instagram',
}

async function sendEmail(data: ContactData) {
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    console.error('RESEND_API_KEY no configurada')
    throw new Error('Email service not configured')
  }

  const emailFrom = process.env.EMAIL_FROM || 'noreply@estudiowebdesign76.com'
  const emailTo = process.env.CONTACT_EMAIL || 'contact@estudiowebdesign76.com'

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #2563eb;">Nuevo mensaje de contacto</h2>

      <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Nombre:</strong> ${data.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        ${data.phone ? `<p><strong>Teléfono:</strong> ${data.phone}</p>` : ''}
        <p><strong>Servicio:</strong> ${serviceLabels[data.service]}</p>
      </div>

      <h3>Mensaje:</h3>
      <p style="white-space: pre-wrap; line-height: 1.6;">${data.message}</p>

      <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
      <p style="color: #666; font-size: 12px;">Este es un mensaje automático. Responde directamente a: ${data.email}</p>
    </div>
  `

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: emailFrom,
        to: emailTo,
        subject: `Nuevo contacto de ${data.name}`,
        html: html,
        reply_to: data.email,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('Resend API error:', error)
      throw new Error('Failed to send email')
    }

    return await response.json()
  } catch (error) {
    console.error('Email sending error:', error)
    throw error
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const validatedData = contactSchema.parse(body)

    await sendEmail(validatedData)

    return NextResponse.json(
      { success: true, message: 'Email enviado correctamente' },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Datos inválidos', details: error.issues },
        { status: 400 }
      )
    }

    console.error('Contact API error:', error)
    return NextResponse.json(
      { success: false, error: 'Error al procesar la solicitud' },
      { status: 500 }
    )
  }
}

export async function OPTIONS() {
  return NextResponse.json(
    { message: 'OK' },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  )
}
