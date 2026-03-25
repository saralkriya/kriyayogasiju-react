import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="About the practice"
            title="What is Kriya Yoga?"
            description="Kriya Yoga is a practical path that combines breath, awareness, and meditation to help you move inward. It is taught in a clear, step-by-step way so you can build a steady personal practice."
          />
          <div className="flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>
              The practice works with the breath and subtle energies, helping
              you quiet the mind and experience a deeper sense of presence. You
              are guided through each technique with clear instructions and
              space to experience it directly.
            </p>
            <p>
              Sessions are designed for sincere seekers—whether you are just
              beginning, reconnecting with practice, or deepening your existing
              meditation.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card/80 p-6 text-sm leading-relaxed text-muted-foreground shadow-sm">
          <h3 className="text-base font-semibold text-foreground md:text-lg">
            How a session flows
          </h3>
          <ul className="flex list-disc flex-col gap-2 pl-4">
            <li>Gentle settling and preparation of body and breath.</li>
            <li>Guided Kriya techniques taught step by step.</li>
            <li>Silent practice time to integrate the experience.</li>
            <li>Space for questions and simple practical guidance.</li>
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}

