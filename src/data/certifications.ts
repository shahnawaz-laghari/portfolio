// Certificate details taken from the certificate itself. Do not publish the CNIC number.
export type Certification = {
  slug: string;
  title: string;
  issuer: string;
  program: string;
  period: string;
  image: string;
  summary: string;
  details: string[];
};

export const certifications: Certification[] = [
  {
    slug: "web-developer-pitp",
    title: "Web Developer — IT Training Programme",
    issuer: "Mehran University of Engineering and Technology, Jamshoro",
    program: "People's Information Technology Programme (PITP) Phase-II · Government of Sindh",
    period: "17 Nov 2025 – 9 Jan 2026",
    image: "/certificates/web-developer-pitp.jpg",
    summary: "2-month government IT training programme completed as a Web Developer (Batch 2).",
    details: [
      "Successfully completed a 2-month IT Training Programme as a Web Developer.",
      "Conducted from 17th November 2025 to 9th January 2026 (Batch 2).",
      "Organised by the Science & Information Technology Department, Government of Sindh, at MUET Jamshoro.",
    ],
  },
];
