import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { InfoCard } from "@/components/shared/InfoCard";
import { benefits } from "@/app/home-data";

export function BenefitsSection() {
  return (
    <SectionWrapper id="benefits">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Why Kriya Yoga"
          title="Benefits you can feel in daily life."
          description="Practices are simple, steady, and repeatable—supporting both your inner life and how you show up in the world."
          align="center"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => (
            <InfoCard
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

