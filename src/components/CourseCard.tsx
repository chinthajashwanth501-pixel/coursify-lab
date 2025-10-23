import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  category: string;
  duration: string;
  students: string;
  rating: number;
  price: string;
  image: string;
}

const CourseCard = ({
  title,
  description,
  category,
  duration,
  students,
  rating,
  price,
  image,
}: CourseCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-large hover:-translate-y-1 animate-scale-in bg-gradient-card">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform group-hover:scale-110"
        />
        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
          {category}
        </Badge>
      </div>
      
      <CardHeader>
        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
      </CardHeader>

      <CardContent>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{students}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span>{rating}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        <div>
          <span className="text-2xl font-bold text-primary">{price}</span>
        </div>
        <Button>Enroll Now</Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
