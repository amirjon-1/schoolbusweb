import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Footer } from '../components/Footer'

const content = [
  {
    title: 'SchoolBus Privacy Policy',
    body: 'This Privacy Policy explains how SchoolBus Campus Corp (“SchoolBus,” “we,” “us,” “our”) collects, uses, shares, and protects information when you use the SchoolBus mobile application and related services (collectively, the “Service”).\n\nSchoolBus is a student-only social carpool and cost-sharing platform. See the Terms and Conditions for details.',
  },
  {
    title: '1. Scope',
    body: 'This Privacy Policy applies to information collected through the Service. It does not apply to third-party websites, services, or apps that may be linked from the Service.',
  },
  {
    title: '2. Information We Collect',
    body: 'A) Information you provide\n\n1. Account and verification: Name (optional), username/handle (optional); .edu email address (required for student verification where available); school affiliation (you may provide it, or it may be inferred from your .edu domain); password or authentication token (depending on login method).\n\n2. Profile information: Profile photo (optional); bio, graduation year, campus, and other profile fields you choose to fill in (optional).\n\n3. Carpool content and activity: Ride/carpool posts you create (pickup area, destination area, date/time, seats, suggested cost-sharing amount, notes); requests/responses to rides, confirmations, and cancellations; messages and other communications sent through the Service; reports you submit (safety reports, content reports, support requests).\n\n4. Payments and reimbursements (if enabled): SchoolBus may allow users to coordinate cost-sharing reimbursements. If payments happen off-platform (cash, Venmo, etc.), we do not receive your payment credentials. If you enable in-app payments through a payment processor, we may collect limited transaction metadata (for example, amount, timestamp, status), while payment card details are typically handled by the processor.\n\n5. Customer support: Information you send to us (including attachments) when you contact support.\n\nB) Information collected automatically\n\n1. Device and usage information: Device type, OS version, app version; IP address, device identifiers (as permitted by your device settings), language; log data, crash reports, performance diagnostics.\n\n2. Approximate or precise location (only if you grant permission): Location may be used to show relevant carpools, estimate distance, and support safety features. We request permission before using location and you can change it in your device settings.\n\n3. Cookies and similar technologies: If we operate a web site associated with the Service, it may use cookies or similar technologies for authentication and basic analytics.',
  },
  {
    title: '3. How We Use Information',
    body: 'We use information to: provide and maintain the Service (account creation, verification, matching riders and drivers, messaging); personalize and improve the Service (for example, show relevant rides); support safety, integrity, and trust (detect abuse, investigate reports, enforce rules); communicate with you (service updates, security notices, support replies); analytics and performance (debugging, crash prevention, feature improvement); and legal compliance (respond to lawful requests, prevent fraud, protect rights).\n\nWe do not use personal data for cross-app tracking without permission, and if we ever engage in “tracking” as defined by Apple, we will request permission using Apple’s required framework.',
  },
  {
    title: '4. How We Share Information',
    body: 'A) Sharing with other users (core to the Service): Depending on your settings and the features you use, other users may see: your profile (name/handle, photo, campus, and other profile fields you chose to make visible); your ride posts and ride-related details; messages you send and receive; and limited verification signals (for example, “verified student” status).\n\nB) Sharing with service providers: We may share information with vendors who help us run the Service, such as: cloud hosting and databases; email delivery and verification services; maps and location services; analytics, logging, and crash reporting. These providers are permitted to use information only to provide services to us (subject to contractual restrictions).\n\nC) Legal, safety, and enforcement sharing: We may disclose information if we believe it is reasonably necessary to: comply with law or valid legal process; protect the safety, rights, or property of users, SchoolBus, or the public; investigate fraud, security, or technical issues; or enforce our Terms.\n\nD) Business transfers: If SchoolBus is involved in a merger, acquisition, financing, reorganization, bankruptcy, or sale of assets, information may be transferred as part of that transaction.',
  },
  {
    title: '5. Your Choices and Controls',
    body: 'You can: edit profile information in the app; control location permissions in your device settings; control push notifications in your device settings; and request access, deletion, or correction of your account data by contacting us.',
  },
  {
    title: '6. Data Retention',
    body: 'We keep information as long as necessary to: provide the Service; comply with legal obligations; and resolve disputes and enforce agreements. Retention periods vary depending on the type of data and why we need it (for example, safety reports may be retained longer than basic logs).',
  },
  {
    title: '7. Security',
    body: 'We use reasonable administrative, technical, and physical safeguards designed to protect information. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.',
  },
  {
    title: '8. Children’s Privacy',
    body: 'The Service is not directed to children under 13, and we do not knowingly collect personal information from children under 13. If you believe a child has provided personal data, contact us so we can take appropriate action.',
  },
  {
    title: '9. International Users',
    body: 'If you use the Service from outside the United States, your information may be processed in the United States or other countries where we or our service providers operate, subject to applicable law.',
  },
  {
    title: '10. Changes to this Privacy Policy',
    body: 'We may update this Privacy Policy from time to time. If changes are material, we will provide notice as required by law. The “Last Updated” date reflects the latest version.',
  },
  {
    title: '11. Contact Us',
    body: 'SchoolBus Campus Corp\nAttn: Privacy\nEmail: hiroshi@schoolbus.cc',
  },
]

export function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="border-b border-neutral-200 bg-white sticky top-0 z-10">
        <div className="mx-auto max-w-[720px] px-4 sm:px-6 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 font-medium text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded">
            <ArrowLeft className="h-4 w-4" aria-hidden /> Back to home
          </Link>
        </div>
      </header>
      <main className="flex-1 mx-auto w-full max-w-[720px] px-4 sm:px-6 py-10">
        <h1 className="text-3xl font-bold text-neutral-900 mb-2">Privacy Policy</h1>
        <p className="text-neutral-500 text-sm mb-10">Last updated: Feb 15, 2026</p>
        <div className="space-y-8">
          {content.map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-bold text-neutral-900 mb-2">{section.title}</h2>
              <div className="text-neutral-600 text-sm leading-relaxed space-y-3">
                {section.body.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
