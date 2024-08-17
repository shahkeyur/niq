"use client";

import CategoryDropdown from "@/components/CategoryDropdown";
import { BarChart } from "@/components/ColumnChart";
import { ProductDetails } from "@/components/ProductDetails";
import { ProductDropdown } from "@/components/ProductDropdown";
import { AppContext } from "@/context/AppContext";
import { Button, Grid, Stack, styled, Typography } from "@mui/material";
import { useContext } from "react";

const Title = styled("h1")({
  backgroundColor: "lightblue",
  padding: 12,
});

const App = () => {
  const {
    selectedCategory,
    selectedProduct,
    setSelectedCategory,
    setSelectedProduct,
  } = useContext(AppContext)!;

  return (
    <Stack spacing={2} padding={3}>
      <Title>My Fabulous Store</Title>

      <Grid container>
        {/* Filters */}
        <Grid item md={3}>
          <Stack my={2} spacing={2} direction="row">
            {/* I could have this button inside of dropdown it self, just keeping them separate on purpose */}
            <CategoryDropdown />
            {selectedCategory && (
              <Button
                variant="contained"
                onClick={() => {
                  setSelectedCategory("");
                }}
              >
                X
              </Button>
            )}
          </Stack>
          {selectedCategory && (
            <Stack spacing={2} direction="row">
              <ProductDropdown />
              <Button
                variant="contained"
                onClick={() => {
                  setSelectedProduct("");
                }}
              >
                X
              </Button>
            </Stack>
          )}
        </Grid>

        {/* The content section */}
        <Grid md={9} item>
          {selectedProduct ? (
            <ProductDetails />
          ) : (
            selectedCategory && <BarChart />
          )}

          {!selectedCategory && (
            <Typography fontWeight="bold">Please select a category</Typography>
          )}
        </Grid>
      </Grid>
    </Stack>
  );
};

export default App;
