import urls from "@/configs/urls";
import { AppContext } from "@/context/AppContext";
import { useFetch } from "@/hooks/useFetch";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useContext } from "react";

export const ProductDropdown: React.FC = () => {
  const { selectedCategory, selectedProduct, setSelectedProduct } =
    useContext(AppContext)!;
  const { data: products, loading } = useFetch<any[]>(
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
};
