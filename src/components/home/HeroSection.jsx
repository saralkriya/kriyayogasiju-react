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
          Kriya Yoga is an umbrella term for the most ancient set of practices in Monistic Shaiva Tantra. It famously takes a disinterested view at mundane existence and elucidates prayogas soley for liberating the individual soul. As a result, since the beginning of the last Kali Yuga, it has been practiced mostly by renunciates in the Indian subcontinent. It takes a very pragmatic view of human evolution and employs techniques to raise Individual Prana or Kundalini. It is said that the complete set of 114 Kriyas were transmitted to the Saptharishis by Lord Sadashiva. As such, there are multiple lineages in Kriya Yoga tracing their origin to one of the Saptharishis. Also, in each of these lineages, there are one or more charismatic long-living Mula Gurus tasked with guiding disciples across yugas until their own dissolution.
          </p>
          <p>
          The Mula Guru in our Kriya Yoga lineage is the immortal yogi Maha Avathara Babaji. It is interesting to note that most of the well-known Kriya Yoga lineages trace their origins to this great disciple of Saptharishi Agasthya. Kriya Yoga is also considered a part of the Siddha tradition. The first Siddha is of course the absolute lord of the known and unknown universe – Bhagwan Sadashiva.
          </p>

        </div>
      </div>
    </SectionWrapper>
  );
}
