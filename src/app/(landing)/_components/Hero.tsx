import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="container flex flex-col items-center gap-2 text-center text-foreground">
      <div
        className="inline-flex items-center gap-2 rounded-full border border-transparent bg-secondary px-3.5 py-1.5 text-sm font-normal text-secondary-foreground transition-colors hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        aria-hidden="true"
      >
        Strong, Scalable, Future-Proof
      </div>

      <h1 className="max-w-xl text-4xl font-semibold tracking-tighter md:text-6xl lg:leading-[1.1]">
        Building Web/App Solutions That Last
      </h1>

      <p className="max-w-xl text-balance text-base text-muted-foreground sm:text-xl md:text-wrap">
        Empowering Brands with High-Performance Digital Solutions.
      </p>

      {/* <div className="flex w-full items-center justify-center space-x-4 py-4">
        <Link href="/auth/join">
          <Button size="lg">Let&nbsp;s Talk</Button>
        </Link>
        <Link href="/auth/login">
          <Button variant="outline" size="lg" className="text-foreground">
            Log in
          </Button>
        </Link>
      </div> */}
    </section>
  );
};

export default Hero;
