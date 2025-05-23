
import HeroSection from "@/components/HeroSection";
import { getFeaturedBooks } from "@/lib/data";
import BookCard from "@/components/BookCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const featuredBooks = getFeaturedBooks();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        <section className="py-16 container px-4 mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-serif font-bold">Featured Books</h2>
            <Button variant="outline" asChild>
              <Link to="/books">View All</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            {featuredBooks.map(book => (
              <BookCard key={book.id} book={book} featured={true} />
            ))}
          </div>
        </section>
        
        <section className="py-16 bg-muted">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">Join Our Reading Community</h2>
            <p className="max-w-2xl mx-auto text-lg mb-8">
              Connect with fellow book lovers, discover new titles, and share your thoughts on your latest reads.
            </p>
            <Button size="lg" asChild>
              <Link to="/register">Sign Up Now</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
