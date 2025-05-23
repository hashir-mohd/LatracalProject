
export interface Author {
  id: number;
  name: string;
  photo?: string;
}

export interface Review {
  id: number;
  userId: number;
  bookId: number;
  rating: number;
  content: string;
  date: string;
  user: {
    id: number;
    name: string;
    avatar?: string;
  };
}

export interface Book {
  id: number;
  title: string;
  author: Author;
  cover: string;
  genre: string[];
  published: string;
  pages: number;
  description: string;
  rating: number;
  reviews: Review[];
  featured?: boolean;
}

export const books: Book[] = [
  {
    id: 1,
    title: "The Midnight Library",
    author: { id: 1, name: "Matt Haig" },
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop",
    genre: ["Fiction", "Fantasy", "Contemporary"],
    published: "2020-09-29",
    pages: 304,
    description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices. Would you have done anything different, if you had the chance to undo your regrets?",
    rating: 4.5,
    reviews: [
      {
        id: 1,
        userId: 1,
        bookId: 1,
        rating: 5,
        content: "This book completely changed my perspective on life. I couldn't put it down!",
        date: "2023-10-22",
        user: {
          id: 1,
          name: "Sarah Johnson",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&auto=format&fit=crop"
        }
      },
      {
        id: 2,
        userId: 2,
        bookId: 1,
        rating: 4,
        content: "A beautiful exploration of choices and regret. Highly recommended for anyone feeling lost.",
        date: "2023-09-15",
        user: {
          id: 2,
          name: "Michael Chen",
          avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&auto=format&fit=crop"
        }
      }
    ],
    featured: true
  },
  {
    id: 2,
    title: "Project Hail Mary",
    author: { id: 2, name: "Andy Weir" },
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=800&auto=format&fit=crop",
    genre: ["Science Fiction", "Adventure"],
    published: "2021-05-04",
    pages: 496,
    description: "Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the Earth itself will perish. But he doesn't know that. He can't even remember his own name, let alone the nature of his assignment or how to complete it.",
    rating: 4.8,
    reviews: [
      {
        id: 3,
        userId: 3,
        bookId: 2,
        rating: 5,
        content: "As a fan of The Martian, I was not disappointed. The science is fascinating and the story is captivating.",
        date: "2023-11-05",
        user: {
          id: 3,
          name: "Alex Rivera",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&auto=format&fit=crop"
        }
      }
    ],
    featured: true
  },
  {
    id: 3,
    title: "Klara and the Sun",
    author: { id: 3, name: "Kazuo Ishiguro" },
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
    genre: ["Science Fiction", "Literary Fiction"],
    published: "2021-03-02",
    pages: 320,
    description: "From the bestselling author of Never Let Me Go and The Remains of the Day, a stunning new novel that asks, what does it mean to love? A thrilling feat of world-building, a novel of exquisite tenderness and impeccable restraint, Klara and the Sun is a magnificent achievement.",
    rating: 4.2,
    reviews: [
      {
        id: 4,
        userId: 4,
        bookId: 3,
        rating: 4,
        content: "Ishiguro's prose is as elegant as ever. The story unfolds slowly but beautifully.",
        date: "2023-08-30",
        user: {
          id: 4,
          name: "Emma Thompson",
          avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&auto=format&fit=crop"
        }
      }
    ],
    featured: false
  },
  {
    id: 4,
    title: "The Invisible Life of Addie LaRue",
    author: { id: 4, name: "V.E. Schwab" },
    cover: "https://images.unsplash.com/photo-1610882648335-ced8fc8fa6b6?q=80&w=800&auto=format&fit=crop",
    genre: ["Fantasy", "Historical Fiction", "Romance"],
    published: "2020-10-06",
    pages: 448,
    description: "A Life No One Will Remember. A Story You Will Never Forget. France, 1714: in a moment of desperation, a young woman makes a Faustian bargain to live forever—and is cursed to be forgotten by everyone she meets.",
    rating: 4.7,
    reviews: [
      {
        id: 5,
        userId: 5,
        bookId: 4,
        rating: 5,
        content: "Heartbreaking and beautiful. This story will stay with me forever.",
        date: "2023-12-01",
        user: {
          id: 5,
          name: "David Park",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&auto=format&fit=crop"
        }
      }
    ],
    featured: true
  },
  {
    id: 5,
    title: "Mexican Gothic",
    author: { id: 5, name: "Silvia Moreno-Garcia" },
    cover: "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?q=80&w=800&auto=format&fit=crop",
    genre: ["Horror", "Gothic", "Historical Fiction"],
    published: "2020-06-30",
    pages: 320,
    description: "After receiving a frantic letter from her newly-wed cousin begging for someone to save her from a mysterious doom, Noemí Taboada heads to High Place, a distant house in the Mexican countryside.",
    rating: 4.0,
    reviews: [
      {
        id: 6,
        userId: 6,
        bookId: 5,
        rating: 4,
        content: "Atmospheric and chilling. A perfect modern gothic novel.",
        date: "2023-10-15",
        user: {
          id: 6,
          name: "Sophia Rodriguez",
          avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&auto=format&fit=crop"
        }
      }
    ],
    featured: false
  },
  {
    id: 6,
    title: "The Song of Achilles",
    author: { id: 6, name: "Madeline Miller" },
    cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=800&auto=format&fit=crop",
    genre: ["Historical Fiction", "Fantasy", "LGBT"],
    published: "2011-09-20",
    pages: 416,
    description: "Greece in the age of heroes. Patroclus, an awkward young prince, has been exiled to the court of King Peleus and his perfect son Achilles. Despite their differences, the boys develop a tender friendship that blossoms into something deeper as they grow into young men.",
    rating: 4.9,
    reviews: [
      {
        id: 7,
        userId: 7,
        bookId: 6,
        rating: 5,
        content: "A beautiful retelling that broke my heart and then put it back together. Stunning prose.",
        date: "2023-11-22",
        user: {
          id: 7,
          name: "Jamie Wilson",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&auto=format&fit=crop"
        }
      }
    ],
    featured: false
  }
];

export const genres = [
  "Fiction",
  "Fantasy",
  "Science Fiction",
  "Mystery",
  "Thriller",
  "Romance",
  "Horror",
  "Historical Fiction",
  "Contemporary",
  "Adventure",
  "Literary Fiction",
  "Gothic",
  "LGBT"
];

export function getFeaturedBooks(): Book[] {
  return books.filter(book => book.featured);
}

export function getAllBooks(): Book[] {
  return books;
}

export function getBookById(id: number): Book | undefined {
  return books.find(book => book.id === id);
}

export function searchBooks(query: string, genreFilter?: string[]): Book[] {
  const lowerQuery = query.toLowerCase();
  return books.filter(book => {
    const matchesQuery = 
      book.title.toLowerCase().includes(lowerQuery) || 
      book.author.name.toLowerCase().includes(lowerQuery) ||
      book.description.toLowerCase().includes(lowerQuery);
    
    if (!genreFilter || genreFilter.length === 0) {
      return matchesQuery;
    }
    
    const matchesGenre = book.genre.some(g => genreFilter.includes(g));
    return matchesQuery && matchesGenre;
  });
}
