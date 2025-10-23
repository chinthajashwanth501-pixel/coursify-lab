import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
      <div className="absolute inset-0 opacity-10">
        <img
          src={heroImage}
          alt="Education and learning"
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center animate-fade-in">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary-foreground md:text-6xl">
            Unlock Your Potential with
            <span className="block mt-2">Expert-Led Courses</span>
          </h1>
          <p className="mb-8 text-lg text-primary-foreground/90 md:text-xl">
            Learn new skills, advance your career, and achieve your goals with our comprehensive online courses.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button variant="hero" size="lg">
              Explore Courses
            </Button>
            <Button variant="secondary" size="lg">
              Start Free Trial
            </Button>
          </div>

          <div className="mt-12 mx-auto max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search for courses..."
                className="pl-12 h-12 bg-background/80 backdrop-blur border-background/20 shadow-large"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
