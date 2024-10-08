import { Product } from "@/models/Product";
import Image from "next/image";
import React, { useState } from "react";

interface ProductImageProps {
  product: Product;
}

export default function ProductImage({ product }: ProductImageProps) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <p>Loading image...</p>}
      <Image
        src={product.image}
        alt={product.title}
        height="200"
        width="200"
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)}
        style={{ visibility: loading ? "hidden" : "visible" }}
      />
    </>
  );
}
