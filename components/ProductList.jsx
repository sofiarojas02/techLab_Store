import '../css/ProductList.css'

function ProductList ({children}){
    return(
        <div className="ProductList">
            {children}
        </div>
    )
}

export {ProductList}