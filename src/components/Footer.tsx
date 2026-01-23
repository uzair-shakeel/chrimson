import React from "react";
import Link from "next/link";
import Image from "next/image";
import data from "./data.json";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const Footer: React.FC = () => {
  const footerContent = data.footer;
  const quickLinks: FooterLink[] = footerContent.quickLinks.list.map((l) => ({
    label: l.item,
    href: l.link,
  }));

  // Mapping from top-level services.sections
  const servicesLinks: FooterLink[] = data.services.sections.map((l) => ({
    label: l.title,
    href: l.link,
  }));
  const org = footerContent.office;

  const footerSections: FooterSection[] = [
    { title: footerContent.quickLinks.heading, links: quickLinks },
    // { title: data.services.heading, links: servicesLinks },
  ];

  return (
    <footer className="bg-[#0d1615]">
      <div className="px-4 sm:px-6">
        <div className="max-w-[1300px] mx-auto py-[70px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-6">
            {/* Logo Section */}
            <div>
              <Image
                src="/logo.svg"
                alt="Mavix Logo"
                width={200}
                height={80}
              />
            </div>

            <div></div>

            {/* Dynamic Footer Sections */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-white font-medium text-[20px] leading-[30px] mb-[25px] font-sora">
                  {section.title}
                </h3>
                <ul className="space-y-2.5">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-[#C8C8C8] text-[17px] leading-[30px] transition duration-300 hover:text-[#4d9fa8]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Section */}
            <div>
              <h3 className="text-white font-medium text-[20px] leading-[30px] mb-[25px] font-sora">
                Contact
              </h3>
              <ul className="space-y-2.5">
                {org?.address && (
                  <li>
                    <span className="text-[#C8C8C8] text-[17px] leading-[30px]">
                      {org.address}
                    </span>
                  </li>
                )}
                {org?.email && (
                  <li>
                    <span className="text-[#C8C8C8] text-[17px] leading-[30px]">
                      {org.email}
                    </span>
                  </li>
                )}
                {org?.mobile && (
                  <li>
                    <span className="text-[#C8C8C8] text-[17px] leading-[30px]">
                      {org.mobile}
                    </span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#121c1b] mt-4">
        <div className="max-w-7xl mx-auto px-4 py-[35px] flex justify-center items-center relative">
          <p className="text-[#C8C8C8] text-[17px] leading-[30px]">
            {footerContent.bottom.body}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
