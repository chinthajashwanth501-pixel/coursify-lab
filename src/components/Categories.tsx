import { Code, Palette, TrendingUp, Languages, Camera, Music } from "lucide-react";

const categories = [
  {
    icon: Code,
    name: "Development",
    courses: "150+ courses",
    color: "text-primary",
  },
  {
    icon: Palette,
    name: "Design",
    courses: "120+ courses",
    color: "text-accent",
  },
  {
    icon: TrendingUp,
    name: "Business",
    courses: "200+ courses",
    color: "text-secondary",
  },
  {
    icon: Languages,
    name: "Languages",
    courses: "80+ courses",
    color: "text-primary",
  },
  {
    icon: Camera,
    name: "Photography",
    courses: "90+ courses",
    color: "text-accent",
  },
  {
    icon: Music,
    name: "Music",
    courses: "60+ courses",
    color: "text-secondary",
  },
];

const Categories = () => {
  return (
    <section id="categories" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4 md:text-4xl">
            Browse by Category
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our diverse range of course categories and find the perfect learning path for you.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group cursor-pointer rounded-lg border bg-card p-6 text-center transition-all hover:shadow-medium hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 flex justify-center">
                  <div className={`rounded-full bg-muted p-4 transition-colors group-hover:bg-primary/10`}>
                    <Icon className={`h-8 w-8 ${category.color} transition-transform group-hover:scale-110`} />
                  </div>
                </div>
                <h3 className="font-semibold mb-1">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.courses}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
