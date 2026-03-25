import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TeacherCard } from "@/components/shared/TeacherCard";
import { teachers } from "@/app/home-data";

export function LineageSection() {
  return (
    <SectionWrapper id="lineage">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Lineage & guidance"
          title="Taught in the spirit of an authentic Kriya tradition."
          description="You are guided with respect for the lineage and with a simple, contemporary language that makes the teachings accessible and grounded."
          align="center"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teachers.map((teacher) => (
            <TeacherCard
              key={teacher.name}
              name={teacher.name}
              role={teacher.role}
              imageSrc={teacher.imageSrc}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

