import urls from "@/configs/urls";
import { AppContext } from "@/context/AppContext";
import { useFetch } from "@/hooks/useFetch";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useContext } from "react";

export default function CategoryDropdown() {
  const { selectedCategory, setSelectedCategory } = useContext(AppContext)!;
  const { data: categories, loading } = useFetch<string[]>(urls.api.categories);

  if (loading) return <p>Loading...</p>;

  return (
    <FormControl>
      <InputLabel id="category-label">Category</InputLabel>

      <Select
        sx={{ width: 200 }}
        labelId="category-label"
        label="Category"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value as string)}
      >
        {categories?.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
