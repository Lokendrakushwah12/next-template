import userData from "@/data/userData";

const About = () => {
  const { about } = userData;

  return (
    <div className="border-b border-border border-dashed">
      <div className="xl:border-x border-border h-full  min-h-screen border-dashed p-4 max-w-screen-xl w-full mx-auto space-y-4 py-8 md:py-16">
        <div className="text-muted-foreground justify-between gap-8 rounded-2xl">
          {about}
        </div>
      </div>
    </div>
  );
};

export default About;