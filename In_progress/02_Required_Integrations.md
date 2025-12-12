# 02. Required Integrations: Technical Specs

This document outlines the technical integrations required to make the Personal Portfolio functional and effective for lead generation.

## 1. Calendly Integration

### Purpose
Calendly automates the scheduling process, removing the friction of "email ping-pong" to find a meeting time. Real-time booking significantly increases the conversion rate from "interested visitor" to "booked lead."

### Placement Strategy
*   **Hero Section:** A primary CTA button ("Book a Free Strategy Call") that opens the Calendly modal.
*   **Sticky Footer/Floating Button:** A persistent "Let's Talk" button on mobile or desktop ensures the option is always available.
*   **End of Case Studies:** Capture interest right after demonstrating value. "Want results like this? Book a call."

### User Flow
1.  **Visitor** clicks "Book Consultation."
2.  **Modal/Embed** opens with available time slots.
3.  **Visitor** selects time and fills out intake form (Name, Email, Project Type).
4.  **Calendly** sends calendar invite to both parties.
5.  **Automation:** Redirect user to a custom "Thank You" page on the portfolio site (for analytics tracking).

---

## 2. Zapier Webhook

### Purpose
Zapier acts as the "glue" between your portfolio's contact forms and your business tools. Using webhooks allows for custom, flexible data handling without relying on specific platform plugins.

### Automation Examples
*   **Slack Notification:** When a form is submitted -> Send message to `#leads` channel with details.
*   **CRM/Sheets:** When a form is submitted -> Add row to "Leads" Google Sheet or create contact in HubSpot/Notion.
*   **Email Auto-responder:** When a form is submitted -> Trigger a Gmail draft or SendGrid email confirming receipt.

### Considerations
*   **Privacy:** Ensure you have consent to store and process their data (GDPR/CCPA compliance checkbox).
*   **User Expectations:** If the form says "We'll reply in 24 hours," ensure the automation supports that promise.
*   **Feedback:** The UI must clearly show "Success" or "Error" states. Do not leave the user wondering if the form went through while the webhook processes.

---

## 3. Analytics (Google Analytics vs. Plausible)

### Comparison
*   **Google Analytics 4 (GA4):**
    *   *Pros:* Industry standard, deep integration with Google Ads, free.
    *   *Cons:* Complex UI, privacy concerns (cookies), heavy script weight.
*   **Plausible Analytics:**
    *   *Pros:* Privacy-focused (no cookies, GDPR compliant), lightweight (<1kb), simple UI.
    *   *Cons:* Paid service (usually), less granular data for power users.

### Key Metrics to Track
*   **CTR (Click-Through Rate):** Percentage of users clicking the "Book Now" or "View Project" buttons.
*   **Scroll Depth:** How far down the homepage are users reading? (Helps optimize content placement).
*   **Outbound Clicks:** Are users clicking your GitHub, LinkedIn, or Medium links?
*   **Bounce Rate / Engagement Time:** Are users staying to read your case studies?

### Performance Tracking
*   **Goal Tracking:** Set up specific "Events" for:
    *   `form_submission`
    *   `calendly_booking`
    *   `file_download` (Resume/Lead Magnet)
*   **Funnel Visualization:** Track the path: Home -> Case Study -> Booking Page -> Thank You Page.
