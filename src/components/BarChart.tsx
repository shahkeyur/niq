import React, { useContext } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { AppContext } from "@/context/AppContext";
import { useFetch } from "@/hooks/useFetch";

export const BarChart: React.FC = () => {
  const { selectedCategory } = useContext(AppContext)!;
  const { data: products, loading } = useFetch<any[]>(
    `/products/category/${selectedCategory}`
  );

  if (loading) return <p>Loading...</p>;

  const options = {
    chart: { type: "bar" },
    title: { text: "Product Prices" },
    xAxis: { categories: products?.map((product) => product.title) },
    yAxis: { title: { text: "Price (USD)" } },
    series: [
      { name: "Price", data: products?.map((product) => product.price) },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};
