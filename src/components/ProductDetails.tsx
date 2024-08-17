// src/components/ProductDetails.tsx
import React, { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { useFetch } from "@/hooks/useFetch";
import { Grid, Stack, Typography } from "@mui/material";
import { Product } from "@/models/Product";
import Image from "next/image";

export const ProductDetails: React.FC = () => {
  const { selectedProduct } = useContext(AppContext)!;
  const { data: product, loading } = useFetch<Product>(
    `/products/${selectedProduct}`
  );

  if (loading) return <p>Loading...</p>;

  console.log(product);

  return product ? (
    <Stack spacing={3}>
      <Typography variant="h3">{product.title}</Typography>
      <Grid container>
        <Grid md={3} item>
          <Typography textTransform="uppercase">{product.category}</Typography>
          <p>SKU: {product.id}</p>
          <Typography my={3} variant="h4">
            Price: ${product.price}
          </Typography>
        </Grid>

        <Grid item>
          <Image
            key={product.id}
            src={product.image}
            alt={product.title}
            height="200"
            width="200"
          />
        </Grid>
      </Grid>
      <p>{product.description}</p>
    </Stack>
  ) : null;
};
