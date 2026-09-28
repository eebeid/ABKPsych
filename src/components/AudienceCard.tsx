import Link from "next/link";
import { ArrowRight, UserCheck, HeartHandshake, Users } from "lucide-react";
import { AudienceInfo } from "@/config/practiceConfig";

interface AudienceCardProps {
  audience: AudienceInfo;
}

export function AudienceCard({ audience }: AudienceCardProps) {
  const getIcon = (id: string) => {
    switch (id) {
      case "individuals":
        return <UserCheck className="w-5 h-5 text-[#4F6752]" />;
      case "parents":
        return <HeartHandshake className="w-5 h-5 text-[#4F6752]" />;
      case "partners":
        return <Users className="w-5 h-5 text-[#4F6752]" />;
      default:
        return <UserCheck className="w-5 h-5 text-[#4F6752]" />;
    }
  };

  const targetLink = `/who-i-work-with${audience.anchor}`;

  return (
    <article className="editorial-card p-7 rounded-sm flex flex-col justify-between h-full group border border-[#E2E6E2] hover:border-[#4F6752]/50">
      <div>
        <div className="w-10 h-10 rounded-full bg-[#EFF3EF] flex items-center justify-center mb-5 group-hover:bg-[#4F6752] group-hover:text-[#FFFFFF] transition-all duration-300">
          {getIcon(audience.id)}
        </div>
        <h3 className="font-serif text-2xl text-[#1C241E] mb-2 group-hover:text-[#4F6752] transition-colors">
          {audience.title}
        </h3>
        <p className="text-[11px] uppercase tracking-wider text-[#6B826E] font-semibold mb-3">
          {audience.subtitle}
        </p>
        <p className="text-xs text-[#4A544C] leading-relaxed mb-6 font-light">
          {audience.summary}
        </p>
      </div>

      <div className="pt-4 border-t border-[#E2E6E2]">
        <Link
          href={targetLink}
          className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#4F6752] group-hover:text-[#3E5341] transition-colors"
        >
          Read Details
          <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
