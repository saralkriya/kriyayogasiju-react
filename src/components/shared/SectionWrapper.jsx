export function SectionWrapper({ id, className = "", children }) {
  return (
    <section
      id={id}
      className={`py-12 md:py-16 lg:py-20 ${className}`}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col px-4 lg:px-8">
        {children}
      </div>
    </section>
  );
}

