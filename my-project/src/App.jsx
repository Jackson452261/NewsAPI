import Navbar from "./components/navbar/Navbar";
import NewsFeed from "./components/NewsFeed/NewsFeed";
import { NewsProvider } from "./context/context";
 

export default function App() {
  return (
    <>
   <NewsProvider > 
    <Navbar />
    <NewsFeed />
    </NewsProvider>
    </>
  )
}