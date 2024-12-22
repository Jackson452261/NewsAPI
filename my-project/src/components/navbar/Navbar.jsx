 
import './navbar.css'
const Navbar = () => {

      const categories = ["商業",
        "公司",
        "通常",
        "健康",
        "科學",
        "運動",
        "科技"
      ]
  return (
   <nav className='header'>
    <div className='logo'>
        <h2>REACT</h2>
        <p>news APP</p>
    </div>

    <ul className='category-list'>
        {categories.map((singleCategory) => (
              <li key={singleCategory} className='category-item'>{singleCategory}</li>
        ))}
    </ul>
    <div className='search-bar'>
        <form>
            <input type='text' name='search' placeholder='請輸入' />
            <button type='submit'>搜尋</button>
        </form>

    </div>
   </nav>
  )
}

export default Navbar