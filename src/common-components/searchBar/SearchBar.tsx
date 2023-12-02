import React, { useState } from "react"
import { TextField, IconButton, InputAdornment } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

export type SearchBarProps = {
  onSearch: (query: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>("")

  const handleSearch = (value: string) => {
    setSearchQuery(value)
    onSearch(value)
  }

  return (
    <TextField
      label="Search"
      fullWidth
      variant="outlined"
      size="small"
      value={searchQuery}
      onChange={(e) => handleSearch(e.target.value)}
      style={{
        marginBottom: "8px",
        border: "1px solid black",
      }}
      InputProps={{
        style: {
          display: "flex",
          alignItems: "center",
          gap: "8px",
        },
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => handleSearch(searchQuery)}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )
}

export default SearchBar
