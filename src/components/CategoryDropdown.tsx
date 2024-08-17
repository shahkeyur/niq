import urls from "@/configs/urls";
import useAppContext from "@/hooks/useAppContext";
import { useFetch } from "@/hooks/useFetch";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function CategoryDropdown() {
  const { selectedCategory, setSelectedCategory } = useAppContext();
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
