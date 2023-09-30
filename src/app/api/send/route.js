import welcome from "@/emails/welcome";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  try {
    await resend.sendEmail({
      from: process.env.FROM_EMAIL,
      to: ["ghosalani2@gmail.com"],
      subject: "Hello world",
      react: welcome(),
    });

    res.status(200).json({
      status: "OK",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
}
