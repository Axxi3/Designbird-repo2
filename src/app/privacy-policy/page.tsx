'use client';

import React from 'react';
import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] w-full  text-white">
      {/* Header */}
      <div className="bg-[#1a1a1a] border-b pt-18 border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 mb-6"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Terms and Conditions
          </h1>
          <p className="text-gray-400 text-lg">
            Last updated: January 28, 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-invert max-w-none">
          
          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6">1. Acceptance of Terms</h2>
            <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6">
              <p className="text-gray-300 leading-relaxed">
                By accessing and using Designbird&apos;s services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6">2. Services Description</h2>
            <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6">
              <p className="text-gray-300 leading-relaxed mb-4">
                Designbird provides creative education services including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>UI/UX Design courses</li>
                <li>Graphic Design training</li>
                <li>Web Development education</li>
                <li>Digital Marketing courses</li>
                <li>2D Animation training</li>
                <li>Video Editing courses</li>
                <li>Communication & Freelancing skills</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6">3. Payment and Refunds</h2>
            <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6 space-y-4">
              <p className="text-gray-300 leading-relaxed">
                All course fees must be paid in advance. We accept various payment methods as displayed on our website.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Refund requests must be made within 7 days of course enrollment. Refunds are subject to our refund policy terms.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6">4. Student Responsibilities</h2>
            <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6">
              <ul className="list-disc list-inside text-gray-300 space-y-3">
                <li>Attend classes regularly and on time</li>
                <li>Complete assignments and projects as instructed</li>
                <li>Respect fellow students and instructors</li>
                <li>Maintain professional conduct during classes</li>
                <li>Not share course materials without permission</li>
                <li>Use learning resources responsibly</li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6">5. Intellectual Property</h2>
            <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6">
              <p className="text-gray-300 leading-relaxed mb-4">
                All course materials, including but not limited to videos, documents, assignments, and resources, are the intellectual property of Designbird.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Students are granted limited access to these materials for educational purposes only and may not redistribute or commercialize them.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6">6. Privacy and Data Protection</h2>
            <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6">
              <p className="text-gray-300 leading-relaxed mb-4">
                We respect your privacy and are committed to protecting your personal data. Information collected is used solely for educational and administrative purposes.
              </p>
              <p className="text-gray-300 leading-relaxed">
                For detailed information about how we handle your data, please refer to our Privacy Policy.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6">7. Limitation of Liability</h2>
            <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6">
              <p className="text-gray-300 leading-relaxed">
                Designbird shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6">8. Modifications</h2>
            <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6">
              <p className="text-gray-300 leading-relaxed">
                Designbird reserves the right to modify these terms at any time. We will notify users of any changes via email or website announcement. Continued use of our services constitutes acceptance of modified terms.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-6">9. Contact Information</h2>
            <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-6">
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="text-gray-300 space-y-2">
                <p><strong>Email:</strong> contact@designbird.in</p>
                <p><strong>Address:</strong> A1/24, SSB Sarani, Aranyak East, Sector 2A, Bidhannagar, Durgapur, West Bengal 713212</p>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-[#1a1a1a] border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p className="text-gray-400 mb-4">
            Ready to start your creative journey?
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-white font-semibold rounded-full hover:scale-105 transition-transform duration-200"
          >
            Explore Our Courses
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
