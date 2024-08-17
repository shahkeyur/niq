// src/components/ProductDetails.tsx
import urls from "@/configs/urls";
import { AppContext } from "@/context/AppContext";
import { useFetch } from "@/hooks/useFetch";
import { Product } from "@/models/Product";
import { Grid, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import ProductImage from "./ProductImage";

export const ProductDetails: React.FC = () => {
  const { selectedProduct } = useContext(AppContext)!;
  const { data: product, loading } = useFetch<Product>(
    urls.api.productByName(selectedProduct)
  );

  if (loading) return <p>Loading...</p>;

  return product ? (
    <Stack spacing={3}>
      <Typography variant="h3">{product.title}</Typography>

      <Grid container>
        <Grid md={3} item>
          <Typography textTransform="uppercase">{product.category}</Typography>

          <p>SKU: {product.id}</p>

          <Typography my={3} variant="h4">
            ${product.price}
          </Typography>
        </Grid>

        <Grid item>
          <ProductImage key={product.id} product={product} />
        </Grid>
      </Grid>
      <p>{product.description}</p>
    </Stack>
  ) : null;
};
