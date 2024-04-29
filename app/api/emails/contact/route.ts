import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: Request){
  const { formData } = await request.json()

  try{  
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: `${formData.name} <reg@regtables.com>`,
      to: ["reghardt7@gmail.com"],
      subject: `${formData.name} has sent you a message form you PORTFOLIO SITE`,
      reply_to: formData.email,
      html: `<p>YO!</p>
      <p>${formData.name}, said:</p>
      <p style="padding: 12px; border-left: 4px solid rgb(208, 208, 208); font-style: italic; text-align: left;"><strong>Message:&nbsp;</strong>${formData.email}</p>
      <p>Their email is: <strong>${formData.email}</strong></p>
      `
    }); 

    return NextResponse.json('response sent', { status: 200 })
  } catch (error){
    console.log(error)

    return NextResponse.json({ error }, { status: 500 })
  }
}