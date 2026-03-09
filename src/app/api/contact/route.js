// src/app/api/contact/route.js
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Basic validation to prevent empty emails
    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Conveb Inquiry <onboarding@resend.dev>',
      to: 'theconveb@gmail.com',
      replyTo: email,
      subject: `New Phase Inquiry: ${name}`,
      // We use 'html' instead of 'text' for the styling
      html: `
    <div style="background-color: #050505; color: #ffffff; font-family: sans-serif; padding: 40px; line-height: 1.6;">
      <div style="max-width: 600px; margin: 0 auto; border: 1px solid rgba(255,255,255,0.1); padding: 30px;">
        <h1 style="font-size: 24px; font-weight: 500; letter-spacing: -0.05em; border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 20px; margin-bottom: 30px;">
          New Inquiry from ${name}
        </h1>
        
        <div style="margin-bottom: 25px;">
          <p style="color: #666666; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em; margin-bottom: 5px;">Client Email</p>
          <p style="font-size: 18px; margin: 0;">${email}</p>
        </div>

        <div style="margin-bottom: 25px;">
          <p style="color: #666666; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em; margin-bottom: 5px;">Description</p>
          <p style="font-size: 16px; margin: 0; color: #cccccc;">${message}</p>
        </div>

        <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1);">
          <p style="color: #666666; font-size: 14px;">This inquiry was sent via the Conveb website contact form (www.conveb.com).</p>
        </div>
      </div>
    </div>
  `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ message: 'Success!' }, { status: 200 });
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}