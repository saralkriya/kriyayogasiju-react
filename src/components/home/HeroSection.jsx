import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function HeroSection() {
  return (
    <SectionWrapper
      id="hero"
      className="bg-primary text-primary-foreground"
    >
      <div className="mx-auto flex w-full flex-col items-center gap-8 pt-8 pb-16 md:pt-10 md:pb-20 lg:pb-24">
        <SectionHeading
          title="Kriya Yoga"
          align="center"
        />
        <div className="max-w-3xl space-y-4 text-center text-sm leading-relaxed md:text-base">
          <p>
            Kriya Yoga is an umbrella term for the most ancient set of
            practices in Monistic Shaiva Tantra. It takes a disinterested view
            at mundane existence and elucidates progressive steps for liberating
            the individual soul.
          </p>
          <p>
            Since the beginning of the last Kali Yuga, it has been practiced
            mostly by renunciants in the Indian subcontinent. It offers a
            deeply pragmatic view of human evolution and employs techniques to
            raise individual prana or kundalini.
          </p>
          <p>
            The complete set of Kriyas were transmitted to the Saptharishis by
            Lord Sadashiva. Through this tradition, sincere aspirants are given
            clear, structured methods to trace their origin to the one Self.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
