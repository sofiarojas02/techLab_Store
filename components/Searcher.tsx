interface SearcherProps {
    searchValue: string;
    setSearchValue: (value: string) => void;
}

function Searcher({searchValue, setSearchValue} : SearcherProps){
    return (
        <div className="p-4 pt-10 w-full flex justify-center">
            <div className="w-full max-w-xs">
                <input 
                    type="text"
                    placeholder="Buscar..."
                    className="bg-white w-full px-3 py-1.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-blue-500 text-gray-700 placeholder-gray-400"
                    value={searchValue || ''}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </div>
        </div>
    )
}

export {Searcher}