
import { Star, StarHalf } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const StarRating = ({
  rating,
  max = 5,
  size = "md",
  className,
}: StarRatingProps) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = max - fullStars - (hasHalfStar ? 1 : 0);
  
  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5"
  };
  
  const starSize = sizeClasses[size];

  return (
    <div className={cn("flex items-center", className)}>
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={`full-${i}`}
          className={cn("text-yellow-500 fill-yellow-500", starSize)}
        />
      ))}
      
      {hasHalfStar && (
        <StarHalf className={cn("text-yellow-500 fill-yellow-500", starSize)} />
      )}
      
      {[...Array(emptyStars)].map((_, i) => (
        <Star
          key={`empty-${i}`}
          className={cn("text-yellow-500", starSize)}
        />
      ))}
    </div>
  );
};

export default StarRating;
