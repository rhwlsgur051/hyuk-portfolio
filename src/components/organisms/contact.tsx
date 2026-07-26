import { ContainerTitle } from "../atoms/container-title";
import { CustomContainer } from "../atoms/custom-container";

const contacts = [
  {
    title: "GitHub",
    detail: "github.com/rhwlsgur051",
    href: "https://github.com/rhwlsgur051",
    icon: (
      <svg viewBox="0 0 24 24" className="size-6 fill-current" aria-hidden>
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.998.108-.776.42-1.305.763-1.605-2.665-.303-5.467-1.333-5.467-5.931 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.241 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.624-5.48 5.921.431.372.815 1.102.815 2.222 0 1.606-.015 2.902-.015 3.296 0 .32.216.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
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
];

export const ContactWrapper = () => {
  return (
    <CustomContainer>
      <ContainerTitle number="05" title="Contact" />
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
