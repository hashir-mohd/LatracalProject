
import { Review } from "@/lib/data";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import StarRating from "./StarRating";
import { formatDistance } from "date-fns";

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  const formattedDate = formatDistance(
    new Date(review.date),
    new Date(),
    { addSuffix: true }
  );
  
  const initials = review.user.name
    .split(' ')
    .map(name => name[0])
    .join('')
    .toUpperCase();

  return (
    <Card className="mb-4 hover:shadow-md transition-shadow">
      <CardHeader className="pb-2 pt-6 px-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="border border-muted">
              <AvatarImage src={review.user.avatar} alt={review.user.name} />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold">{review.user.name}</div>
              <div className="flex items-center gap-2">
                <StarRating rating={review.rating} size="sm" />
                <span className="text-xs text-muted-foreground">{formattedDate}</span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-6 pb-6 pt-0">
        <p className="text-foreground">{review.content}</p>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
