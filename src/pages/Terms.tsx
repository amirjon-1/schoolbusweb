import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Footer } from '../components/Footer'

const content = [
  {
    title: 'SchoolBus Terms and Conditions',
    body: 'These Terms and Conditions (“Terms”) govern your access to and use of the SchoolBus mobile application and related services (the “Service”), provided by SchoolBus Campus Corp (“SchoolBus,” “we,” “us,” “our”). By creating an account or using the Service, you agree to these Terms. If you do not agree, do not use the Service.',
  },
  {
    title: '1. What SchoolBus Is (and is not)',
    body: 'SchoolBus is a student-only social carpool and cost-sharing platform that helps users discover, post, and coordinate carpools.\n\n• Drivers are not employees, agents, or representatives of SchoolBus.\n• SchoolBus does not dispatch vehicles, employ drivers, set fares, or guarantee ride availability.\n• Any carpool arrangement is a private, peer-to-peer arrangement between users.',
  },
  {
    title: '2. Eligibility',
    body: 'You must be at least 18 years old (or the age of majority where you live) to use the Service unless we explicitly allow otherwise in writing.\n\nStudent verification may be required, including verification through a .edu email address or other methods we provide.',
  },
  {
    title: '3. Accounts and Verification',
    body: 'You agree to:\n• Provide accurate information and keep it updated\n• Maintain the confidentiality of your login credentials\n• Notify us promptly of unauthorized access to your account\n\nWe may suspend or terminate accounts that we believe are fraudulent, unsafe, or in violation of these Terms.',
  },
  {
    title: '4. Driver Obligations (Carpool Hosts)',
    body: 'If you post or offer a carpool as a driver, you represent and warrant that:\n• You have a valid driver’s license\n• Your vehicle is safe and roadworthy\n• You maintain insurance as required by law\n• You comply with all applicable laws (traffic laws, seatbelt laws, campus rules, and any local regulations)\n\nYou are solely responsible for your conduct, vehicle operation, and compliance.',
  },
  {
    title: '5. Rider Obligations',
    body: 'If you join a carpool as a rider, you agree to:\n• Follow applicable laws and reasonable safety requests (seatbelts, respectful conduct)\n• Use reasonable judgment and personal safety practices\n• Not distract the driver or engage in unsafe behavior',
  },
  {
    title: '6. Cost-sharing and Payments',
    body: 'SchoolBus may allow drivers to suggest an amount to share gas, tolls, parking, and similar trip costs.\n\n• SchoolBus does not set, control, or guarantee any amounts.\n• Any cost-sharing is agreed directly between users.\n• SchoolBus is not responsible for payment disputes between users.\n• If we enable in-app payments in the future, additional payment terms may apply (including payment processor terms).\n\nYou are responsible for any taxes or reporting obligations that may apply to you.',
  },
  {
    title: '7. Safety Disclosures',
    body: '• SchoolBus is not an emergency service. If you are in immediate danger, call local emergency services.\n• SchoolBus does not conduct background checks unless explicitly stated in the app. Student verification (for example via .edu email) is not a guarantee of identity or safety.\n• You are responsible for using good judgment when meeting others.',
  },
  {
    title: '8. User Content, Community Standards, and Moderation',
    body: 'The Service may allow users to post content (profiles, ride posts, messages, photos, etc.) (“User Content”).\n\nYou agree not to post or send User Content that is illegal, threatening, harassing, discriminatory, sexually exploitative, or otherwise harmful.\n\nBecause SchoolBus includes user-generated content, we provide: reporting tools for unsafe or offensive content; user blocking tools; a way to filter objectionable material; and contact information so users can reach us. We may remove content and take enforcement action at our discretion, including suspending accounts.',
  },
  {
    title: '9. Prohibited Conduct',
    body: 'You agree not to:\n• Use the Service for commercial ridesharing, taxi services, or to offer transportation to the general public\n• Impersonate others or falsify student status\n• Collect user data (scraping, harvesting) without permission\n• Use the Service to facilitate illegal activity\n• Circumvent safety features, reporting systems, or account restrictions',
  },
  {
    title: '10. License and Intellectual Property',
    body: 'SchoolBus grants you a limited, non-exclusive, non-transferable, revocable license to use the app for personal, non-commercial use, subject to these Terms.\n\nThe Service and all associated content (excluding User Content) are owned by SchoolBus or its licensors and are protected by intellectual property laws.',
  },
  {
    title: '11. Third-Party Services',
    body: 'The Service may integrate third-party services (maps, payment processors, analytics). Your use of third-party services may be governed by their terms, and SchoolBus is not responsible for third-party services.',
  },
  {
    title: '12. Disclaimers',
    body: 'TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.\n\nSchoolBus does not guarantee: that a carpool will occur as planned; the identity, conduct, or qualifications of any user; or the safety of any trip or interaction.',
  },
  {
    title: '13. Limitation of Liability',
    body: 'TO THE MAXIMUM EXTENT PERMITTED BY LAW, SCHOOLBUS WILL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL.\n\nTO THE MAXIMUM EXTENT PERMITTED BY LAW, SCHOOLBUS’S TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THE SERVICE WILL NOT EXCEED USD $100 (OR THE AMOUNT YOU PAID SCHOOLBUS IN THE PAST 12 MONTHS, IF GREATER).\n\nSome jurisdictions do not allow certain limitations, so some of the above may not apply to you.',
  },
  {
    title: '14. Indemnification',
    body: 'You agree to indemnify and hold harmless SchoolBus and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses (including reasonable attorneys’ fees) arising out of or related to: your use of the Service; your carpools, driving, riding, or interactions with other users; your violation of these Terms; or your violation of any law or rights of a third party.',
  },
  {
    title: '15. Termination',
    body: 'You may stop using the Service at any time. We may suspend or terminate your account at any time if we believe you violated these Terms or if we believe it is necessary to protect the Service or users.',
  },
  {
    title: '16. Dispute Resolution and Governing Law',
    body: 'These Terms are governed by the laws of the State of [State], United States, without regard to conflict of laws principles.\n\nOptional arbitration clause (recommended to review with counsel before using): Any dispute arising out of or relating to these Terms or the Service will be resolved by binding arbitration on an individual basis, and you waive any right to participate in a class action. You may allow users to opt out of arbitration within 30 days of account creation by emailing legal@schoolbus.example.',
  },
  {
    title: '17. Apple-specific terms (for iOS users)',
    body: 'If you downloaded the app from Apple’s App Store:\n• These Terms are between you and SchoolBus, not Apple.\n• Apple has no obligation to provide maintenance or support for the app.\n• To the extent permitted by law, Apple is not responsible for claims relating to the app.\n• You must comply with applicable third-party terms (for example, your wireless data plan).\n• Apple and its subsidiaries are third-party beneficiaries of these Terms and may enforce them.',
  },
  {
    title: '18. Changes to these Terms',
    body: 'We may update these Terms from time to time. If changes are material, we will provide notice as required by law. Continued use after the effective date means you accept the updated Terms.',
  },
  {
    title: '19. Contact Us',
    body: 'SchoolBus Campus Corp\nhiroshi@schoolbus.cc',
  },
]

export function Terms() {
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
        <h1 className="text-3xl font-bold text-neutral-900 mb-2">Terms and Conditions</h1>
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
