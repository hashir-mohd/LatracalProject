
import { Book } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";

interface BookCardProps {
  book: Book;
  featured?: boolean;
}

const BookCard = ({ book, featured = false }: BookCardProps) => {
  return (
    <Link to={`/books/${book.id}`}>
      <Card className={cn(
        "book-card h-full transition-all duration-300 overflow-hidden",
        featured ? "md:flex-row" : "flex-col"
      )}>
        <div className={cn(
          "book-cover",
          featured ? "md:w-1/3 aspect-[2/3]" : "w-full aspect-[2/3]"
        )}>
          <img
            src={book.cover}
            alt={`Cover of ${book.title}`}
            className="h-full w-full object-cover"
          />
        </div>
        
        <CardContent className={cn(
          "flex flex-col p-4",
          featured ? "md:w-2/3 justify-center" : ""
        )}>
          <div className="flex items-start justify-between mb-2">
            <h3 className={cn(
              "font-serif font-bold line-clamp-2",
              featured ? "text-2xl md:text-3xl" : "text-lg"
            )}>
              {book.title}
            </h3>
          </div>
          
          <p className="text-sm text-muted-foreground mb-2">{book.author.name}</p>
          
          <div className="flex items-center gap-2 mb-2">
            <StarRating rating={book.rating} size={featured ? "md" : "sm"} />
            <span className="text-sm text-muted-foreground">
              {book.rating.toFixed(1)}
            </span>
          </div>
          
          {featured && (
            <p className="line-clamp-3 text-muted-foreground mt-2">
              {book.description}
            </p>
          )}
          
          <div className="flex flex-wrap gap-1 mt-2">
            {book.genre.slice(0, 2).map((genre) => (
              <span
                key={genre}
                className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
              >
                {genre}
              </span>
            ))}
            {book.genre.length > 2 && (
              <span className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                +{book.genre.length - 2}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

import { cn } from "@/lib/utils";

export default BookCard;
