import { createContext, Dispatch, SetStateAction, useContext } from 'react'
import { SelectedFiltersType } from './filter'

export const FilterContext = createContext<
  {
    selectedFilters: SelectedFiltersType,
    setSelectedFilters: Dispatch<SetStateAction<SelectedFiltersType>>
  } | null>(null)

const useFilterContext = () => {
  const context = useContext(FilterContext)

  if (!context) {
    throw new Error(
      'Filter compound components should be used only with FilterContext'
    )
  }
  return context
}

export default useFilterContext


