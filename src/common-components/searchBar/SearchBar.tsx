import React, { useState } from "react"
import { TextField, Button } from "@mui/material"

export type SearchBarProps = {
  onSearch: (query: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>("")

  const handleSearch = () => {
    onSearch(searchQuery)
  }

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <TextField
        label="Search"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </div>
  )
}

export default SearchBar
