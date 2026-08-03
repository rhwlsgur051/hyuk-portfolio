export const HeroSection = () => {
  return (
    <div className="overflow-x-hidden bg-[#070B17]">
      <div
        className="
          relative mx-auto flex h-[620px] w-full max-w-[1472px] items-start
          px-4 pt-24 pb-12
          lg:gap-[108px] lg:pt-[120px] lg:pb-[52px]
        "
      >
        <div
          className="
            pointer-events-none absolute right-[-47px] top-1/2 z-0
            w-[min(560px,100%)] min-w-[402px] -translate-y-1/2
            lg:relative lg:right-auto lg:top-auto lg:w-auto lg:min-w-0 lg:translate-y-0 lg:shrink-0
          "
        >
          <img
            src="/images/hero.svg"
            alt=""
            className="h-auto w-full min-w-[402px] max-w-none brightness-50 lg:min-w-0 lg:brightness-100"
          />
        </div>

        <div className="relative z-10 flex w-full flex-col gap-[180px] lg:max-w-none lg:gap-[27px]">
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-[24px]">
            <div className="text-3xl font-light sm:text-4xl lg:text-[48px]">
              Frontend Developer
            </div>
            <div className="text-2xl font-bold sm:text-3xl lg:text-[32px]">
              KoJinHyuk
            </div>
            <div className="text-sm font-light sm:text-base lg:text-[16px]">
              사용자 경험을 고민하고, 더 나은 내일을 만드는 개발자
            </div>
          </div>

          <div className="flex flex-col gap-5 sm:flex-row sm:gap-10 lg:gap-[48px]">
            <HeroItem
              title="Resume"
              text="이력서 다운로드"
              url="https://drive.google.com/file/d/1-bFXGwLtefAqs74YCrOWDmj75idKmvMj/view?usp=drive_link"
              icon={
                <svg
                  viewBox="0 0 24 24"
                  className="size-5 fill-none stroke-current stroke-2 sm:size-6"
                  aria-hidden
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6" />
                  <path d="M12 18v-6" />
                  <path d="M9 15l3 3 3-3" />
                </svg>
              }
            />
            <HeroItem
              title="Contact"
              text="rhwlsgur051@gmail.com"
              url="mailto:rhwlsgur051@gmail.com"
              icon={
                <svg
                  viewBox="0 0 24 24"
                  className="size-5 fill-none stroke-current stroke-2 sm:size-6"
                  aria-hidden
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const HeroItem = ({
  title,
  text,
  url,
  icon,
}: {
  title: string;
  text: string;
  url: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col gap-2 sm:gap-[12px]">
      <div className="text-base font-bold text-[#3E5DB2] sm:text-[18px]">
        {title}
      </div>
      <div className="flex items-center gap-2 text-sm font-light sm:gap-[12px] sm:text-[16px]">
        <span className="text-[#3B82F6]">{icon}</span>
        <a
          href={url}
          className="break-all hover:underline"
          target={url.startsWith("http") ? "_blank" : undefined}
          rel={url.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {text}
        </a>
      </div>
    </div>
  );
};
