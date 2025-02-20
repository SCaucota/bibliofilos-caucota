import { useState, createContext } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleEmptySearch = () => {
        setSearchTerm('');
    }

    return(
        <SearchContext.Provider value={{searchTerm, setSearchTerm, handleEmptySearch}}>
            {children}
        </SearchContext.Provider>
    )
}