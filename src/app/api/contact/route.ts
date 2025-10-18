import { NextRequest, NextResponse } from 'next/server';

// API route to handle contact form submissions
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, subject, message } = body;

    // Basic validation
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // In a real application, you would:
    // 1. Send an email notification to the company
    // 2. Save the data to a database
    // 3. Possibly send an auto-reply to the user

    // For this example, we'll just log the data
    console.log('Contact form submission:', {
      firstName,
      lastName,
      email,
      phone,
      subject,
      message,
      timestamp: new Date().toISOString()
    });

    // In a real implementation, you would use a service like:
    // - Resend for email sending
    // - Database service to store submissions
    // - etc.

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    );
  }
}