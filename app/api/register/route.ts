import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const {
    name,
    email,
    phone,
    className,
    semester,
    eventName,
    teamLead,
    teamMembers,
  } = body ?? {};

  if (!name || !email || !phone || !className || !semester || !eventName) {
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
  params.append("name", name);
  params.append("email", email);
  params.append("phone", phone);
  params.append("event", eventName);
  params.append("class", className);
  params.append("sem", semester);
  if (teamLead) params.append("teamLead", teamLead);
  if (teamMembers) params.append("teamMembers", teamMembers);

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
