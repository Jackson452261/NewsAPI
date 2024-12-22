import axios from "axios";
import { useEffect, useState, useContext, createContext } from "react";

const NewsContext = createContext();

export const useNewsContext = () => useContext(NewsContext);

export const NewsProvider = ({ children }) => {
  const API_KEY = "59fa13395d6043f1bd1b0a3093df099c";
  const BASE_URL = "https://newsapi.org/v2";

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const fetchNews = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${BASE_URL}/top-headlines`, {
        params: {
          apiKey: API_KEY,
          country: "us",
          page: currentPage,
          pageSize: 6,
        },
      });
      console.log(response.data.articles);
      setArticles(response.data.articles);
      setTotalResults(response.data.totalResults)
    } catch (err) {
      setError("找不到這新聞");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(); // 注意這裡需要執行函數
  }, [currentPage]);

  return (
    <NewsContext.Provider value={{ articles, loading, error, fetchNews, currentPage, setCurrentPage, totalResults }}>
      {children}
    </NewsContext.Provider>
  );
};
