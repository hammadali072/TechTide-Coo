export const COMPANY = {
  name: "FidayinCorporate",
  address: "11-12 Old Bond Street, Mayfair London W1S 4PN, United Kingdom",
  email: "info@fidayincorporate.io",
  phone: "+44 20 4620 5555",
  websiteName: "FidayinCorporate",
};

export const LegalPagesData = {
  "privacy-policy": {
    slug: "privacy-policy",
    title: "Privacy Policy",
    accentWord: "Privacy",
    pill: "Legal",
    intro: "Learn how we collect, use, and protect your personal information when you interact with our website and services.",
    lastUpdated: "October 5, 2026",
    iconName: "ShieldCheckIcon",
    summary: [
      "We collect information you provide via forms (contact, strategy call) and technical data like IP addresses.",
      "Your data is used to provide services, communicate with you, and improve our website.",
      "We never sell your personal information to third parties.",
      "You have the right to access, correct, or delete your data at any time."
    ],
    sections: [
      {
        id: "who-we-are",
        title: "Who We Are",
        blocks: [
          { type: "paragraph", text: `This Privacy Policy applies to all personal information collected by ${COMPANY.name} ("we," "us," or "our") when you visit our website (${COMPANY.websiteName}) or use our services.` },
          { type: "paragraph", text: `We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This policy outlines our practices regarding data collection, usage, and your rights.` }
        ]
      },
      {
        id: "information-we-collect",
        title: "Information We Collect",
        blocks: [
          { type: "paragraph", text: "We may collect and process the following categories of personal information about you:" },
          {
            type: "list", style: "bullet", items: [
              "Contact Information: Name, email address, phone number, and company details when you submit forms on our website.",
              "Communication Data: Any messages, project details, or other information you send to us via email or our contact forms.",
              "Technical Data: IP address, browser type and version, time zone setting, browser plug-in types, operating system, and platform information.",
              "Usage Data: Information about how you use our website, products, and services, collected through cookies and similar tracking technologies."
            ]
          }
        ]
      },
      {
        id: "how-we-use-your-information",
        title: "How We Use Your Information",
        blocks: [
          { type: "paragraph", text: "We use the information we collect for various purposes, including:" },
          {
            type: "list", style: "bullet", items: [
              "To provide, operate, and maintain our website and services.",
              "To respond to your inquiries, schedule strategy calls, and provide customer support.",
              "To send you administrative information, marketing communications (if you have opted in), and updates about our services.",
              "To monitor and analyze trends, usage, and activities to improve our website's functionality and user experience.",
              "To comply with legal obligations and protect against fraudulent or illegal activity."
            ]
          }
        ]
      },
      {
        id: "sharing-your-information",
        title: "Sharing Your Information",
        blocks: [
          { type: "paragraph", text: "We do not sell your personal data. However, we may share your information with trusted third parties in the following circumstances:" },
          {
            type: "list", style: "bullet", items: [
              "Service Providers: We may share data with vendors who assist us with hosting, CRM management [Confirm: CRM provider name], email delivery, and analytics [Confirm: analytics provider].",
              "Legal Requirements: We may disclose your information if required to do so by law or in response to valid requests by public authorities.",
              "Business Transfers: In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business."
            ]
          }
        ]
      },
      {
        id: "international-transfers",
        title: "International Data Transfers",
        blocks: [
          { type: "paragraph", text: `As a company based in Pakistan, the information we collect may be processed and stored in Pakistan or other countries where our service providers operate. We take appropriate measures to ensure that your personal information receives an adequate level of protection when transferred internationally.` }
        ]
      },
      {
        id: "data-retention-and-security",
        title: "Data Retention and Security",
        blocks: [
          { type: "paragraph", text: "We retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy [Confirm: standard retention period, e.g., 2 years], or as required by law." },
          { type: "paragraph", text: "We have implemented reasonable technical and organizational security measures designed to protect your personal data from unauthorized access, use, alteration, or disclosure. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure." }
        ]
      },
      {
        id: "your-rights",
        title: "Your Privacy Rights",
        blocks: [
          { type: "paragraph", text: "Depending on your location (such as under the GDPR or CCPA), you may have certain rights regarding your personal information:" },
          {
            type: "list", style: "bullet", items: [
              "The right to access and receive a copy of your personal data.",
              "The right to rectify or update inaccurate or incomplete data.",
              "The right to request deletion of your personal data.",
              "The right to object to or restrict the processing of your data.",
              "The right to data portability.",
              "The right to withdraw consent at any time where we rely on consent to process your data."
            ]
          },
          { type: "paragraph", text: `To exercise any of these rights, please contact us at ${COMPANY.email}.` }
        ]
      },
      {
        id: "third-party-links",
        title: "Third-Party Links",
        blocks: [
          { type: "paragraph", text: "Our website may contain links to third-party websites, plug-ins, and applications (such as LinkedIn, X, Instagram, and embedded Google Maps). Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements." }
        ]
      },
      {
        id: "changes-to-policy",
        title: "Changes to This Policy",
        blocks: [
          { type: "paragraph", text: "We may update this Privacy Policy from time to time. The updated version will be indicated by an updated \"Last updated\" date and the updated version will be effective as soon as it is accessible. We encourage you to review this Privacy Policy frequently to be informed of how we are protecting your information." }
        ]
      },
      {
        id: "contact-us",
        title: "Contact Us",
        blocks: [
          { type: "paragraph", text: `If you have questions or comments about this Privacy Policy, you may contact us at:` },
          {
            type: "list", style: "bullet", items: [
              `Name: ${COMPANY.name}`,
              `Address: ${COMPANY.address}`,
              `Email: ${COMPANY.email}`,
              `Phone: ${COMPANY.phone}`
            ]
          }
        ]
      }
    ]
  },
  "terms-of-service": {
    slug: "terms-of-service",
    title: "Terms of Service",
    accentWord: "Terms",
    pill: "Legal",
    intro: "Read the rules, guidelines, and agreements that govern your use of our website and services.",
    lastUpdated: "October 5, 2026",
    iconName: "FileTextIcon",
    summary: [
      "By using our website, you agree to these terms.",
      "Specific client projects are governed by a separate written Statement of Work (SOW).",
      "We retain intellectual property rights until full payment is received.",
      "Services are provided 'as is' without warranties of any kind."
    ],
    sections: [
      {
        id: "acceptance-of-terms",
        title: "Acceptance of Terms",
        blocks: [
          { type: "paragraph", text: `These Terms of Service ("Terms") govern your access to and use of the ${COMPANY.websiteName} website and any related services provided by ${COMPANY.name}. By accessing our website or using our services, you agree to be bound by these Terms and our Privacy Policy.` },
          { type: "paragraph", text: "If you do not agree with any part of these Terms, you must not use our website." }
        ]
      },
      {
        id: "services-overview",
        title: "Services Overview",
        blocks: [
          { type: "paragraph", text: `${COMPANY.name} provides a variety of digital services, including but not limited to:` },
          {
            type: "list", style: "bullet", items: [
              "Web and Custom Software Development",
              "Mobile App Development",
              "AI and Automation Solutions",
              "SaaS Product Engineering",
              "SEO and Digital Marketing",
              "Cloud Architecture and DevOps"
            ]
          },
          { type: "paragraph", text: "Information provided on this website is for general marketing purposes. Specific engagements, deliverables, timelines, and costs for client projects will be governed by a separate, mutually agreed-upon Statement of Work (SOW) or Master Services Agreement (MSA)." }
        ]
      },
      {
        id: "client-responsibilities",
        title: "Client Responsibilities",
        blocks: [
          { type: "paragraph", text: "If you engage us for a project, you agree to provide timely access to necessary materials, information, and feedback required for us to perform our services. You represent and warrant that you have the rights to any assets (logos, text, images, etc.) you provide to us." }
        ]
      },
      {
        id: "payments",
        title: "Payments and Invoicing",
        blocks: [
          { type: "paragraph", text: "For custom project engagements, payment terms will be detailed in your specific SOW. Generally, we require an upfront deposit before commencing work, with milestone payments due upon completion of specific deliverables. Late payments may result in the suspension of services." }
        ]
      },
      {
        id: "intellectual-property",
        title: "Intellectual Property",
        blocks: [
          { type: "paragraph", text: "Unless otherwise specified in a written agreement, all materials, software, designs, and content created by us remain the exclusive property of FidayinCorporate until full payment has been received. Upon full payment, intellectual property rights for the specific deliverables transfer to the client, subject to any third-party licenses." },
          { type: "paragraph", text: "The content on this website (text, graphics, logos) is owned by us and protected by copyright and intellectual property laws." }
        ]
      },
      {
        id: "acceptable-use",
        title: "Acceptable Use",
        blocks: [
          { type: "paragraph", text: "You agree not to use our website or services to:" },
          {
            type: "list", style: "bullet", items: [
              "Violate any local, national, or international law.",
              "Transmit any harmful code, viruses, or malware.",
              "Attempt to gain unauthorized access to our systems or networks.",
              "Reproduce, duplicate, copy, or resell any part of our website."
            ]
          }
        ]
      },
      {
        id: "disclaimer",
        title: "Disclaimer of Warranties",
        blocks: [
          { type: "paragraph", text: "Our website and services are provided on an 'as is' and 'as available' basis. We make no warranties, expressed or implied, and hereby disclaim all warranties, including implied warranties of merchantability, fitness for a particular purpose, or non-infringement." },
          { type: "paragraph", text: "Testimonials and case studies on our website reflect individual client experiences; we do not guarantee specific results for your business." }
        ]
      },
      {
        id: "limitation-of-liability",
        title: "Limitation of Liability",
        blocks: [
          { type: "paragraph", text: `In no event shall ${COMPANY.name} or its directors, employees, or partners be liable for any indirect, consequential, incidental, special, or punitive damages arising out of your use of our website or services, even if we have been advised of the possibility of such damages.` }
        ]
      },
      {
        id: "indemnification",
        title: "Indemnification",
        blocks: [
          { type: "paragraph", text: "You agree to indemnify, defend, and hold harmless FidayinCorporate from and against any claims, liabilities, damages, losses, and expenses arising out of your violation of these Terms or your use of our services." }
        ]
      },
      {
        id: "governing-law",
        title: "Governing Law and Jurisdiction",
        blocks: [
          { type: "paragraph", text: "These Terms shall be governed by and construed in accordance with the laws of Pakistan. Any legal action or proceeding arising out of or related to these Terms shall be brought exclusively in the courts of Lahore, Pakistan." }
        ]
      },
      {
        id: "contact",
        title: "Contact Us",
        blocks: [
          { type: "paragraph", text: `For questions about these Terms, please contact us at ${COMPANY.email}.` }
        ]
      }
    ]
  },
  "cookie-policy": {
    slug: "cookie-policy",
    title: "Cookie Policy",
    accentWord: "Cookie",
    pill: "Legal",
    intro: "Understand how and why we use cookies and similar tracking technologies on our website.",
    lastUpdated: "October 5, 2026",
    iconName: "CookieIcon",
    summary: [
      "We use cookies to ensure our website functions properly.",
      "Analytics cookies help us understand how visitors interact with our site.",
      "You can manage your cookie preferences through your browser settings."
    ],
    sections: [
      {
        id: "what-are-cookies",
        title: "What Are Cookies?",
        blocks: [
          { type: "paragraph", text: "Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work efficiently, as well as to provide reporting information and personalized experiences." }
        ]
      },
      {
        id: "how-we-use-cookies",
        title: "How We Use Cookies",
        blocks: [
          { type: "paragraph", text: `We use first-party and third-party cookies on the ${COMPANY.websiteName} website for several reasons. Some cookies are required for technical reasons in order for our website to operate, while others enable us to track and target the interests of our users to enhance their experience.` }
        ]
      },
      {
        id: "types-of-cookies",
        title: "Types of Cookies We Use",
        blocks: [
          { type: "paragraph", text: "The specific types of first and third-party cookies served through our website and the purposes they perform are described in the table below:" },
          {
            type: "table",
            headers: ["Category", "Purpose", "Examples", "Duration"],
            rows: [
              [
                "Strictly Necessary",
                "Essential for the website to function properly. Cannot be switched off.",
                "Security, network management, load balancing.",
                "Session"
              ],
              [
                "Preferences",
                "Allows the website to remember choices you make (e.g., language, region).",
                "Theme settings, language preferences.",
                "1 Year"
              ],
              [
                "Analytics",
                "Helps us understand how visitors interact with the website by collecting reporting information anonymously.",
                "[Confirm: Google Analytics / Plausible / etc.]",
                "Up to 2 Years"
              ],
              [
                "Marketing / Third-Party",
                "Used to track visitors across websites to display relevant ads, or embedded third-party content.",
                "Google Maps embeds, social media sharing buttons.",
                "Varies by provider"
              ]
            ]
          }
        ]
      },
      {
        id: "how-to-manage-cookies",
        title: "How to Manage Cookies",
        blocks: [
          { type: "paragraph", text: "You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website, though your access to some functionality and areas of our website may be restricted." },
          { type: "callout", title: "Browser Settings", text: "To manage cookies in your browser, please navigate to your browser's settings or preferences menu. Look for the 'Privacy' or 'Security' section. The exact steps vary depending on whether you are using Chrome, Firefox, Safari, Edge, or another browser." }
        ]
      },
      {
        id: "updates",
        title: "Updates to This Policy",
        blocks: [
          { type: "paragraph", text: "We may update this Cookie Policy from time to time to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed about our use of cookies." }
        ]
      },
      {
        id: "contact",
        title: "Contact Us",
        blocks: [
          { type: "paragraph", text: `If you have any questions about our use of cookies or other technologies, please email us at ${COMPANY.email}.` }
        ]
      }
    ]
  }
};
