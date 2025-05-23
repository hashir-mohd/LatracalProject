
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarRating from "@/components/StarRating";
import ReviewCard from "@/components/ReviewCard";
import { getBookById } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const BookDetail = () => {
  const { id } = useParams<{ id: string }>();
  const book = getBookById(id ? parseInt(id) : 0);
  const [userRating, setUserRating] = useState<number | null>(null);
  const [reviewContent, setReviewContent] = useState("");
  
  if (!book) {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Book not found</h1>
          <p>The book you are looking for does not exist.</p>
        </div>
        <Footer />
      </div>
    );
  }
  
  const handleRatingClick = (rating: number) => {
    setUserRating(rating);
  };
  
  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would submit the review to the backend
    // For now, just clear the form
    setUserRating(null);
    setReviewContent("");
    alert("Review submission would be processed here in a real app.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {/* Book Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-1">
              <div className="book-cover aspect-[2/3] max-w-xs mx-auto md:mx-0">
                <img
                  src={book.cover}
                  alt={`Cover of ${book.title}`}
                  className="h-full w-full object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">{book.title}</h1>
              <p className="text-xl mb-4">by {book.author.name}</p>
              
              <div className="flex items-center gap-2 mb-6">
                <StarRating rating={book.rating} size="lg" />
                <span className="text-lg font-medium">{book.rating.toFixed(1)}</span>
                <span className="text-muted-foreground">({book.reviews.length} reviews)</span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {book.genre.map((genre) => (
                  <span
                    key={genre}
                    className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {genre}
                  </span>
                ))}
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                <div>
                  <p className="text-sm text-muted-foreground">Published</p>
                  <p>{new Date(book.published).getFullYear()}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Pages</p>
                  <p>{book.pages}</p>
                </div>
              </div>
              
              <h2 className="text-xl font-semibold mb-3">About the Book</h2>
              <p className="text-foreground leading-relaxed mb-6">{book.description}</p>
              
              <Button size="lg">Add to Reading List</Button>
            </div>
          </div>
          
          <Separator className="my-12" />
          
          {/* Reviews Section */}
          <div>
            <h2 className="text-2xl font-serif font-bold mb-6">Reviews</h2>
            
            {/* Write a review */}
            <div className="bg-card rounded-lg border p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4">Write a Review</h3>
              
              <form onSubmit={handleSubmitReview}>
                <div className="mb-4">
                  <p className="mb-2">Your Rating</p>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => handleRatingClick(rating)}
                        className="p-1"
                      >
                        <StarRating
                          rating={userRating && userRating >= rating ? 1 : 0}
                          max={1}
                          size="lg"
                        />
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <Textarea
                    placeholder="Share your thoughts about this book..."
                    className="min-h-32"
                    value={reviewContent}
                    onChange={(e) => setReviewContent(e.target.value)}
                  />
                </div>
                
                <Button type="submit" disabled={!userRating || !reviewContent.trim()}>
                  Submit Review
                </Button>
              </form>
            </div>
            
            {/* Reviews list */}
            {book.reviews.length > 0 ? (
              <div>
                {book.reviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            ) : (
              <p className="text-center py-8 text-muted-foreground">
                No reviews yet. Be the first to review this book!
              </p>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookDetail;
