import React, { useContext, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { AppContext } from "@/context/AppContext";
import { useFetch } from "@/hooks/useFetch";
import { DataGrid } from "@mui/x-data-grid";
import { Button, ButtonGroup, Rating, Stack } from "@mui/material";

enum ChartBy {
  Price = "price",
  Rating = "rating",
}

export const BarChart: React.FC = () => {
  const { selectedCategory } = useContext(AppContext)!;
  const { data: products, loading } = useFetch<any[]>(
    `/products/category/${selectedCategory}`
  );
  const [chartBy, setChartBy] = useState(ChartBy.Price);

  if (loading) return <p>Loading...</p>;

  const priceOptions = {
    chart: { type: "column" },
    title: { text: "Price Comparison" },
    xAxis: { categories: products?.map((product) => product.title) },
    yAxis: { title: { text: "Price (USD)" } },
    series: [
      { name: "Price", data: products?.map((product) => product.price) },
    ],
  };

  const ratingOptions = {
    chart: { type: "column" },
    title: { text: "Rating Comparison" },
    xAxis: { categories: products?.map((product) => product.title) },
    yAxis: { title: { text: "Rating" } },
    series: [
      {
        name: "Rating",
        data: products?.map((product) => product.rating.rate),
      },
    ],
  };

  return (
    <>
      {/* Instead of dropdown implementing the  */}
      <ButtonGroup variant="contained" color="primary">
        <Button
          variant={chartBy === ChartBy.Price ? "contained" : "outlined"}
          onClick={() => setChartBy(ChartBy.Price)}
        >
          By Price
        </Button>
        <Button
          variant={chartBy === ChartBy.Rating ? "contained" : "outlined"}
          onClick={() => setChartBy(ChartBy.Rating)}
        >
          By Rating
        </Button>
      </ButtonGroup>
      <HighchartsReact
        highcharts={Highcharts}
        options={chartBy === ChartBy.Price ? priceOptions : ratingOptions}
      />
      <div>
        <DataGrid
          rows={products || []}
          columns={[
            { field: "title", headerName: "Title", width: 150 },
            { field: "price", headerName: "Price", width: 110 },
            { field: "description", headerName: "Description", width: 250 },
            {
              field: "rating",
              headerName: "Ratings",
              width: 250,
              renderCell: (params) => (
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Rating readOnly value={params.value.rate}></Rating>
                  <span> ({params.value.count})</span>
                </Stack>
              ),
            },
          ]}
        />
      </div>
    </>
  );
};
