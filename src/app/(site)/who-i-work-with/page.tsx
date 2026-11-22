import { Metadata } from "next";
import { UserCheck, HeartHandshake, Users, CheckCircle2 } from "lucide-react";
import { FormattedText } from "@/components/FormattedText";
import { getContent } from "@/lib/contentStore";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Who I Work With | Individuals, Parents & Partners | ABK Psychological Services",
  description:
    "Psychotherapy for adolescents and adults navigating autism and ADHD, as well as parents and partners processing the emotional impact of a diagnosis.",
};

export default function WhoIWorkWithPage() {
  const content = getContent();
  const audiences = content.audiences;

  const getIcon = (id: string) => {
    switch (id) {
      case "parents":
        return <HeartHandshake className="w-6 h-6 text-[var(--accent-primary)]" />;
      case "partners":
        return <Users className="w-6 h-6 text-[var(--accent-primary)]" />;
      default:
        return <UserCheck className="w-6 h-6 text-[var(--accent-primary)]" />;
    }
  };

  return (
    <div className="space-y-0">
      {/* Page Header */}
      <section className="py-16 bg-[#F9F8F5] border-b border-[#E2E6E2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C241E]">
            <FormattedText content={content.whoIWorkWithTitle} />
          </h1>
          <div className="text-base sm:text-lg text-[#4A544C] max-w-2xl mx-auto font-light leading-relaxed">
            <FormattedText as="div" content={content.whoIWorkWithIntro} />
          </div>

          {/* Navigation Anchors */}
          <div className="flex flex-wrap justify-center gap-2 pt-3">
            {audiences.map((audience) => (
              <a
                key={audience.id}
                href={`#${audience.id}`}
                className="px-4 py-2 bg-[#FFFFFF] border border-[#E2E6E2] text-xs font-semibold uppercase tracking-wider text-[#1C241E] hover:bg-[var(--accent-wash)] hover:text-[var(--accent-primary)] rounded-sm transition-colors"
              >
                {audience.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Audiences */}
      {audiences.map((audience, idx) => (
        <section
          key={audience.id}
          id={audience.id}
          className={`py-20 border-b border-[#E2E6E2] scroll-mt-20 ${
            idx % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#F9F8F5]"
          }`}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[var(--accent-wash)] flex items-center justify-center">
                {getIcon(audience.id)}
              </div>
              <div>
                <h2 className="font-serif text-3xl text-[#1C241E]">
                  {audience.title}
                </h2>
                {audience.subtitle && (
                  <p className="text-xs text-[var(--accent-muted)] uppercase tracking-wider font-medium mt-0.5">
                    {audience.subtitle}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-4 text-base text-[#4A544C] font-light leading-relaxed whitespace-pre-line">
              <FormattedText as="p" content={audience.description} />
            </div>

            {audience.keyThemes && audience.keyThemes.length > 0 && (
              <div className="p-5 bg-white border-l-4 border-[var(--accent-primary)] rounded-r-sm shadow-xs space-y-2">
                <h3 className="font-serif text-lg text-[#1C241E]">Key Exploration Areas:</h3>
                <ul className="space-y-2 text-xs text-[#4A544C]">
                  {audience.keyThemes.map((theme, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                      <span><FormattedText content={theme} /></span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {audience.boundaryNote && (
              <div className="p-5 bg-[#F3F1EC] border border-[#8A7F6E]/30 rounded-sm space-y-2">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8A7F6E] block">
                  Important Practice Boundary
                </span>
                <p className="text-xs text-[#1C241E] font-medium leading-relaxed">
                  <FormattedText content={audience.boundaryNote} />
                </p>
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
