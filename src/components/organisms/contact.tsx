import { ContainerTitle } from "../atoms/container-title";
import { CustomContainer } from "../atoms/custom-container";

const contacts = [
  {
    title: "Email",
    detail: "rhwlsgur051@gmail.com",
    href: "mailto:rhwlsgur051@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" className="size-6 fill-none stroke-current stroke-2" aria-hidden>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    ),
  },
  {
    title: "Resume",
    detail: "이력서 다운로드",
    href: "https://drive.google.com/file/d/1-bFXGwLtefAqs74YCrOWDmj75idKmvMj/view?usp=drive_link",
    icon: (
      <svg viewBox="0 0 24 24" className="size-6 fill-none stroke-current stroke-2" aria-hidden>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M12 18v-6" />
        <path d="M9 15l3 3 3-3" />
      </svg>
    ),
  },
];

export const ContactWrapper = () => {
  return (
    <CustomContainer>
      <ContainerTitle number="06" title="Contact" />
      <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
        {contacts.map((contact) => (
          <a
            key={contact.title}
            href={contact.href}
            target={contact.href.startsWith("http") ? "_blank" : undefined}
            rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-center gap-4 text-[#3B82F6] transition-opacity hover:opacity-80"
          >
            {contact.icon}
            <div className="flex flex-col gap-0.5">
              <span className="font-bold text-white">{contact.title}</span>
              <span className="text-sm text-[#ccc]">{contact.detail}</span>
            </div>
          </a>
        ))}
      </div>
    </CustomContainer>
  );
};
