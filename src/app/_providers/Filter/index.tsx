'use client'

import { useState, useContext, createContext, SetStateAction } from "react"
import { ReactNode } from "react"



interface IContextType {
    categoryFilters: string[]
    setCategoryFilters: React.Dispatch<SetStateAction<string[]>>
    sort: string
    setSort: React.Dispatch<SetStateAction<string>>
}

export const INITIAL_FILTER_DATA = {
    categoryFilters: [],
    setCategoryFilters: () => [],
    sort: '',
    setSort: () => ''
}

export const FilterContext = createContext<IContextType>(INITIAL_FILTER_DATA)


export const FilterProvider = ({children} : {children: React.ReactNode}) => {
    const [categoryFilters, setCategoryFilters] = useState([])
    const [sort, setSort] = useState('-createdAt')
    return (
        <FilterContext.Provider 
        value={{
            categoryFilters, 
            setCategoryFilters, 
            sort, 
            setSort
            }}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => {
    return useContext(FilterContext)
}