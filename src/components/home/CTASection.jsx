import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PrimaryCTAButton } from "@/components/shared/PrimaryCTAButton";

export function CTASection() {
  return (
    <SectionWrapper
      id="cta"
      className="pb-16 md:pb-20 lg:pb-24"
    >
      <div className="rounded-3xl border border-border bg-primary/5 px-6 py-10 text-center shadow-sm backdrop-blur md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6">
          <SectionHeading
            eyebrow="Begin your practice"
            title="Ready to experience Kriya Yoga?"
            description="Join a guided session or reach out with a question. You do not need prior experience—just a sincere interest and a little quiet time."
            align="center"
          />
          <PrimaryCTAButton href="#contact">
            Connect about upcoming sessions
          </PrimaryCTAButton>
        </div>
      </div>
    </SectionWrapper>
  );
}

