import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const recipientEmail = "sainbuxseelro11@gmail.com";

    // Forward the lead submission to FormSubmit which delivers directly to the Gmail inbox
    const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: `🏡 New Property Lead: ${data.name || "Client Inquiry"} (SHM Real Estate)`,
        _template: "table",
        _captcha: "false",
        "Lead Name": data.name || "Website Visitor",
        "Phone / Mobile": data.phone || "Not provided",
        "Email Address": data.email || "Not provided",
        "Primary Interest": data.interest || "General Property Inquiry",
        "Client Message / Details": data.message || "Inquiry from website",
        "Lead Channel": data.source || "Website Contact Form",
        "Submission Timestamp": new Date().toLocaleString("en-PK", {
          timeZone: "Asia/Karachi",
          dateStyle: "full",
          timeStyle: "medium",
        }),
      }),
    });

    const result = await response.json();

    return NextResponse.json({
      success: true,
      message: "Lead received and forwarded to email successfully.",
      result,
    });
  } catch (error: any) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to forward lead to email.",
      },
      { status: 500 }
    );
  }
}
