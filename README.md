# Clarifications

- This code has been implemented to meet the requirements of the assessment, it could have lots of more updates to make it more reusable and make it more meet standards like testing and splitting more components.

- I have tried my best to make it reusable, easy to read and clean code while limiting time spent on assessment to 3-4 hours.

- The PDF says to include readme with deployment instructions, however there's not much deploy instructions. I have hosted on Vercel which allows to just deploy with clicks. If it means how to build then using all you need to do is run `npm install` and `npm run build` to package it. You could then use `npm run start` to test on local server as well.

- There isn't any clarification on what to do if, user selected category, then selected product and now changes the category, what should happen ? Should it reset the product details and show the chart or leave up to user to reset the product to see chart. I have left it upto user to reset product if wants to see chart.In the same situation if user resets category after selecting product, in this case as well product details would still stay there, it should be easy to reset but I just haven't done as there's no requirement mentioned.

- I didn't see any dropdown for selecting chart option for price and rating in the provided screenshots. So instead of dropdown I have implemented the button group to just make it look nicer.

# Next.js Readme

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
