import HeaderMenu from '../../components/HeaderMenu/HeaderMenu'
import ProductsCard from '../../components/ProductsCard/ProductsCard'
import Search from '../../components/Search/Search'
import './index.scss'

const Home = ({data}) => {
  return (
    <div className='home'>
      <HeaderMenu/>
      <Search/>
      <div className="home__products">
        {data.map(product => (
            <ProductsCard key={product.id} data={product}/>
          ))}
      </div>
    </div>
  )
}

export default Home