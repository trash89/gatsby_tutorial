import React from "react";
import Layout from "../components/Layout";
import AllRecipies from "../components/AllRecipies";
import SEO from "../components/SEO";
const Recipes = () => {
  return (
    <Layout>
      <SEO title="Recipes" />
      <main className="page">
        <AllRecipies />
      </main>
    </Layout>
  );
};

export default Recipes;
