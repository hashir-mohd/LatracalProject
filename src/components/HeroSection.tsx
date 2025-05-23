
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { getAllBooks } from "@/lib/data";

const HeroSection = () => {
  // Get first 4 books for the hero section
  const heroBooks = getAllBooks().slice(0, 4);
  
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-book-light to-muted py-16 md:py-24">
      <div className="container px-4 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Discover Your Next <span className="text-book-primary">Favorite Book</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-lg mx-auto md:mx-0">
              Join our community of readers and find your next literary adventure with authentic reviews and personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" asChild>
                <Link to="/books">Browse Books</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/register">Join Community</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-4 md:space-y-6 pt-8">
                {heroBooks.slice(0, 2).map((book, index) => (
                  <div key={`hero-book-${index}`} className="book-cover animate-float shadow-xl" style={{ animationDelay: `${index * 1}s` }}>
                    <img 
                      src={book.cover}
                      alt={`Book Cover - ${book.title}`}
                      className="aspect-[2/3] object-cover w-full rounded-md"
                    />
                  </div>
                ))}
              </div>
              <div className="space-y-4 md:space-y-6">
                {heroBooks.slice(2, 4).map((book, index) => (
                  <div key={`hero-book-${index + 2}`} className="book-cover animate-float shadow-xl" style={{ animationDelay: `${(index + 1) * 1.5}s` }}>
                    <img 
                      src={book.cover}
                      alt={`Book Cover - ${book.title}`}
                      className="aspect-[2/3] object-cover w-full rounded-md"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-48 h-48 rounded-full bg-book-primary/5 -translate-y-1/2 -translate-x-1/4"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-book-primary/5 translate-y-1/4 translate-x-1/4"></div>
    </section>
  );
};

export default HeroSection;
