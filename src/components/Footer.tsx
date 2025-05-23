
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-book-primary" />
              <span className="font-serif text-xl font-bold">BookReview</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Discover your next favorite read with our community of book lovers.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/books" className="text-sm text-muted-foreground hover:text-primary">
                  Browse Books
                </Link>
              </li>
              <li>
                <Link to="/genres" className="text-sm text-muted-foreground hover:text-primary">
                  Genres
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Account</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/login" className="text-sm text-muted-foreground hover:text-primary">
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-sm text-muted-foreground hover:text-primary">
                  Create Account
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-sm text-muted-foreground hover:text-primary">
                  My Profile
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-muted-foreground/20">
          <p className="text-sm text-center text-muted-foreground">
            &copy; {new Date().getFullYear()} BookReview. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
