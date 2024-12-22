import './NewsFeed.css'
import { useNewsContext } from '../../context/context'
import NewsCard from '../NewsCard/NewsCard'
import Loader from '../Loader/Loader'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import Pagination from '../Pagination/Pagination'
const NewsFeed = () => {
    const {articles, loading, error, currentPage, setCurrentPage, totalResults} = useNewsContext()

    if(loading) return<Loader />
    if(error) return <ErrorMessage message={error}></ErrorMessage>
  return (
    <div className='news-feed'>
        {articles.length === 0 ? <p className='no-news-message'>沒有新聞</p> : (
           <>
            <div className='news-grid'>
               {articles.map((article, index) => (
                <NewsCard key={index} article={article}></NewsCard>
               ))}
                </div>
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalResults={totalResults}></Pagination>
           </>
        )}
        NewsFeed</div>
  )
}

export default NewsFeed