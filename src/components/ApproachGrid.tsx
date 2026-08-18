import Link from "next/link";
import { Compass, GitMerge, RefreshCw, ArrowRight } from "lucide-react";

export function ApproachGrid() {
  const steps = [
    {
      number: "01",
      title: "Understand",
      icon: <Compass className="w-6 h-6 text-[#3B4C61]" />,
      summary: "Making room for your full story, including feelings, memories, and experiences that have been difficult to put into words.",
      details: "We begin by exploring your experience without pre-packaged assumptions. Whether you are processing a new diagnosis, examining childhood memories, or navigating family expectations, therapy offers space to speak openly about what has been carried.",
    },
    {
      number: "02",
      title: "Connect",
      icon: <GitMerge className="w-6 h-6 text-[#3B4C61]" />,
      summary: "Exploring how identity, relationships, attachment patterns, communication, and neurotype intersect.",
      details: "In this phase, we look closely at how your sense of self interacts with the people around you. We examine repeating relational patterns, masking behaviors, family dynamics, and communication mismatches with curiosity rather than judgment.",
    },
    {
      number: "03",
      title: "Change",
      icon: <RefreshCw className="w-6 h-6 text-[#3B4C61]" />,
      summary: "Using deeper self-understanding to create room for authentic choices and healthier ways of relating.",
      details: "True change emerges from self-recognition. As clarity develops, you gain freedom to set sustainable boundaries, unmask safely, communicate your true needs, and relate to others with genuine self-compassion.",
    },
  ];

  return (
    <section className="py-16 bg-[#EBF0F5] border-y border-[#3B4C61]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#3B4C61] font-semibold">
            Therapeutic Philosophy
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#181A1D]">
            Curious rather than prescriptive.
          </h2>
          <p className="text-sm text-[#4A5056] leading-relaxed">
            My goal is not to tell you what your diagnosis should mean. It is to help you discover what it means to you, your relationships, and your life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.title}
              className="editorial-card p-6 sm:p-8 rounded-sm flex flex-col justify-between border border-[#3B4C61]/30 hover:border-[#3B4C61]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-3xl font-light text-[#3B4C61]">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-[#EBF0F5] border border-[#3B4C61]/30 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                <h3 className="font-serif text-2xl text-[#181A1D] mb-2">
                  {step.title}
                </h3>

                <p className="text-xs font-semibold text-[#3B4C61] mb-2 leading-snug">
                  {step.summary}
                </p>

                <p className="text-xs text-[#4A5056] leading-relaxed">
                  {step.details}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#E8E3DF]">
                <span className="text-[11px] uppercase tracking-wider text-[#3B4C61] font-semibold">
                  Phase {step.number} · Psychodynamic Insight
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/approach"
            className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-[#3B4C61] hover:text-[#253344] transition-colors"
          >
            Explore the Full Therapeutic Approach
            <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
