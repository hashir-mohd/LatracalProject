
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookCard from "@/components/BookCard";
import { getAllBooks, searchBooks, genres, Book } from "@/lib/data";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const BookList = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialSearch = queryParams.get("search") || "";
  
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [displayedBooks, setDisplayedBooks] = useState<Book[]>([]);
  
  useEffect(() => {
    if (searchTerm || selectedGenres.length > 0) {
      setDisplayedBooks(searchBooks(searchTerm, selectedGenres.length > 0 ? selectedGenres : undefined));
    } else {
      setDisplayedBooks(getAllBooks());
    }
  }, [searchTerm, selectedGenres]);
  
  const handleGenreToggle = (genre: string) => {
    setSelectedGenres(prev => 
      prev.includes(genre)
        ? prev.filter(g => g !== genre)
        : [...prev, genre]
    );
  };
  
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedGenres([]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container px-4 mx-auto py-8">
        <h1 className="text-3xl font-serif font-bold mb-8">Browse Books</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-card rounded-lg border p-6">
              <h2 className="font-semibold text-lg mb-4">Filters</h2>
              
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search books..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium text-sm mb-3">Genres</h3>
                <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
                  {genres.map(genre => (
                    <div key={genre} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`genre-${genre}`}
                        checked={selectedGenres.includes(genre)}
                        onCheckedChange={() => handleGenreToggle(genre)}
                      />
                      <Label htmlFor={`genre-${genre}`} className="text-sm">
                        {genre}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              
              {(searchTerm || selectedGenres.length > 0) && (
                <Button 
                  variant="outline" 
                  onClick={clearFilters}
                  className="w-full"
                >
                  Clear Filters
                </Button>
              )}
            </div>
          </div>
          
          {/* Books Grid */}
          <div className="lg:col-span-3">
            {/* Applied filters */}
            {(searchTerm || selectedGenres.length > 0) && (
              <div className="mb-6 flex flex-wrap gap-2 items-center">
                <span className="text-sm font-medium">Active Filters:</span>
                
                {searchTerm && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    Search: {searchTerm}
                  </Badge>
                )}
                
                {selectedGenres.map(genre => (
                  <Badge key={genre} variant="secondary" className="flex items-center gap-1">
                    {genre}
                  </Badge>
                ))}
              </div>
            )}
            
            {/* Results count */}
            <p className="text-sm text-muted-foreground mb-6">
              Showing {displayedBooks.length} {displayedBooks.length === 1 ? 'book' : 'books'}
            </p>
            
            {displayedBooks.length === 0 ? (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium mb-2">No books found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {displayedBooks.map(book => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookList;
