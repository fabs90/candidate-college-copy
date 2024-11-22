// Import Packages
import { useState, useEffect } from "react";

// Import Service
import { fetchArticles } from "@/api/articlesService";

// Data Types
export interface Articles {
  id: number;
  title: string;
  author: string;
  slug: string;
  category: string;
  cover_landscape: string;
  cover: string;
  body: string;
  snippets: string;
  duration: number;
  created_at: string;
}

// Export Hooks
export const useArticlesData = () => {
  // Variables
  const [allArticles, setAllArticles] = useState<Articles[]>([]);
  const [latestSingleArticle, setLatestSingleArticle] = useState<Articles[]>(
    []
  );
  const [latestThreeArticles, setLatestThreeArticles] = useState<Articles[]>(
    []
  );

  useEffect(() => {
    // Fetch API
    const initializeArticles = async () => {
      try {
        const articles = await fetchArticles();

        // Used to sort data from current date to earliest date
        const sortedData = articles.sort((a: Articles, b: Articles) => {
          const dateA: any = new Date(a.created_at);
          const dateB: any = new Date(b.created_at);

          return dateB - dateA;
        });

        setAllArticles(sortedData);
        setLatestSingleArticle(sortedData.slice(0, 1));
        setLatestThreeArticles(sortedData.slice(1, 4));
      } catch (error) {
        console.log(error);
      }
    };
    initializeArticles();
  }, []);
  return { allArticles, latestSingleArticle, latestThreeArticles };
};
