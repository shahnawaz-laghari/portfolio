// Keep this accurate: add real dates and coursework when you have them.
export type Education = {
  degree: string;
  field: string;
  school: string;
  status: string;
  highlights: string[];
};

export const education: Education[] = [
  {
    degree: "Bachelor's",
    field: "Software Engineering",
    school: "University of Sindh, Jamshoro",
    status: "Currently in third year",
    highlights: [
      "Studying software engineering principles, development practices, and university lab work.",
      "Software Project Management course project: Seatnix, an Android bus seat reservation app.",
      "Building Android apps with Flutter alongside coursework.",
    ],
  },
];
