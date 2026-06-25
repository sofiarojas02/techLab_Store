import { useDispatch } from 'react-redux';
import StartSVG from '../fav/startIcon'
import { setFavorite } from '@/slices/dataSlice';

function ProductCard({title, image,category, price, favorite, id}) {

  const dispatch = useDispatch()

  const addFavorite = (id) => {
    dispatch(setFavorite({productId: id}))
  }

  

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col h-[450px] w-full max-w-[320px] overflow-hidden">
      
      <div className="flex justify-between items-center p-4 border-b border-gray-100">
        <h3 className="text-lg font-medium text-gray-800">
          {title}
          </h3>
        <button 
        className="p-1.5 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors cursor-pointer"
        onClick={() => addFavorite(id)}
        >
        <StartSVG 
        className={`${favorite ? "text-yellow-500" : ''} fill-current`} />
      </button>
      </div>

      <div className="flex-1 flex items-center justify-center p-6 bg-white">
        <img 
          src={image || "https://via.placeholder.com/150"} 
          alt={title} 
          className="max-h-full max-w-full object-contain object-center"
        />
      </div>

      <div className="p-4 bg-white ">
        <p className="text-sm text-gray-600 font-normal">
          {category}
          </p>

        <p className='text-sm'>
          {price}
        </p>
      </div>

    </div>
  );
}

export {ProductCard}