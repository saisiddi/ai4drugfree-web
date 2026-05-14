import { NextResponse } from "next/server";
import { REGISTRATION_OPEN } from "../../data/events";

export async function POST(request: Request) {
  if (!REGISTRATION_OPEN) {
    return NextResponse.json(
      { error: "Registration is closed" },
      { status: 403 },
    );
  }

  const body = await request.json();
  const {
    teamName,
    teamLeadName,
    teamLeadWhatsapp,
    teamLeadEmail,
    teamSize,
    college,
    campusName,
    schoolName,
    degreeName,
    specialization,
    year,
    semester,
    eventName,
  } = body ?? {};

  if (!teamName || !teamLeadName || !teamLeadWhatsapp || !teamLeadEmail || !eventName) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const webhookUrl =
    process.env.GOOGLE_SHEETS_WEBHOOK_URL ??
    "https://script.google.com/macros/s/AKfycbxuPCnvq2BccC1o8sodyHM7lhFHQhBDR64pCXpC71C3vsu0FNh1aX2KV0JsHpFLhknC/exec";
  if (!webhookUrl) {
    return NextResponse.json(
      { error: "Webhook not configured" },
      { status: 500 },
    );
  }

  const params = new URLSearchParams();
  params.append("eventName", eventName);
  params.append("teamName", teamName);
  params.append("teamLeadName", teamLeadName);
  params.append("teamLeadWhatsapp", teamLeadWhatsapp);
  params.append("teamLeadEmail", teamLeadEmail);
  params.append("teamSize", teamSize);
  params.append("college", college);
  params.append("campusName", campusName);
  params.append("schoolName", schoolName);
  params.append("degreeName", degreeName);
  params.append("specialization", specialization);
  params.append("year", year);
  params.append("semester", semester);

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
