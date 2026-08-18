import Link from "next/link";
import { ArrowRight, UserCheck, HeartHandshake, Users, Sparkles } from "lucide-react";
import { AudienceInfo } from "@/config/practiceConfig";

interface AudienceCardProps {
  audience: AudienceInfo;
}

export function AudienceCard({ audience }: AudienceCardProps) {
  const getIcon = (id: string) => {
    switch (id) {
      case "adults":
        return <UserCheck className="w-5 h-5 text-[#3B4C61]" />;
      case "parents":
        return <HeartHandshake className="w-5 h-5 text-[#3B4C61]" />;
      case "partners":
        return <Users className="w-5 h-5 text-[#3B4C61]" />;
      case "siblings":
        return <Sparkles className="w-5 h-5 text-[#3B4C61]" />;
      default:
        return <UserCheck className="w-5 h-5 text-[#3B4C61]" />;
    }
  };

  const targetLink = `/who-i-work-with${audience.anchor}`;

  return (
    <article className="editorial-card p-6 rounded-sm flex flex-col justify-between h-full group border border-[#3B4C61]/20 hover:border-[#3B4C61]">
      <div>
        <div className="w-10 h-10 rounded-full bg-[#EBF0F5] border border-[#7A8DA6]/30 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
          {getIcon(audience.id)}
        </div>
        <h3 className="font-serif text-xl text-[#181A1D] mb-1.5 group-hover:text-[#3B4C61] transition-colors">
          {audience.title}
        </h3>
        <p className="text-[11px] uppercase tracking-wider text-[#3B4C61] font-semibold mb-3">
          {audience.subtitle}
        </p>
        <p className="text-xs text-[#4A5056] leading-relaxed mb-4">
          {audience.summary}
        </p>
      </div>

      <div className="pt-3 border-t border-[#E8E3DF]">
        <Link
          href={targetLink}
          className="inline-flex items-center text-[11px] font-semibold uppercase tracking-wider text-[#3B4C61] group-hover:text-[#253344] transition-colors"
        >
          Explore Therapy Details
          <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
