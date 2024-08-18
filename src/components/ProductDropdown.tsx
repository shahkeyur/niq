import urls from "@/configs/urls";
import useAppContext from "@/hooks/useAppContext";
import { useFetch } from "@/hooks/useFetch";
import { Product } from "@/models/Product";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export default function ProductDropdown() {
  const { selectedCategory, selectedProduct, setSelectedProduct } =
    useAppContext();
  const { data: products, loading } = useFetch<Product[]>(
    urls.api.categoryByName(selectedCategory)
  );

  if (loading) return <p>Loading...</p>;

  return (
    <FormControl>
      <InputLabel id="product-label">Product</InputLabel>

      <Select
        labelId="product-label"
        label="Product"
        sx={{ width: 200 }}
        value={selectedProduct}
        onChange={(e) => setSelectedProduct(e.target.value as string)}
      >
        {products?.map((product) => (
          <MenuItem key={product.id} value={product.id}>
            {product.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
