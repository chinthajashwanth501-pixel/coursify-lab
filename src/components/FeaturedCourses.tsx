import CourseCard from "./CourseCard";

const courses = [
  {
    title: "Complete Web Development Bootcamp",
    description: "Master HTML, CSS, JavaScript, React, Node.js and more in this comprehensive course.",
    category: "Development",
    duration: "40 hours",
    students: "12.5K",
    rating: 4.8,
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
  },
  {
    title: "UI/UX Design Masterclass",
    description: "Learn to design beautiful, user-friendly interfaces with industry-standard tools.",
    category: "Design",
    duration: "30 hours",
    students: "8.3K",
    rating: 4.9,
    price: "$44.99",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
  },
  {
    title: "Digital Marketing Strategy",
    description: "Build effective marketing campaigns and grow your business online.",
    category: "Marketing",
    duration: "25 hours",
    students: "15.2K",
    rating: 4.7,
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    title: "Data Science with Python",
    description: "Dive into data analysis, visualization, and machine learning with Python.",
    category: "Data Science",
    duration: "45 hours",
    students: "10.1K",
    rating: 4.9,
    price: "$54.99",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    title: "Mobile App Development",
    description: "Create stunning iOS and Android apps with React Native.",
    category: "Development",
    duration: "35 hours",
    students: "7.8K",
    rating: 4.6,
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
  },
  {
    title: "Photography Fundamentals",
    description: "Master camera settings, composition, and post-processing techniques.",
    category: "Photography",
    duration: "20 hours",
    students: "6.4K",
    rating: 4.8,
    price: "$34.99",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=600&fit=crop",
  },
];

const FeaturedCourses = () => {
  return (
    <section id="courses" className="py-20">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4 md:text-4xl">
            Featured Courses
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our most popular courses taught by industry experts and professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
