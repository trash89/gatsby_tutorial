import React from "react";
import Layout from "../components/Layout";
import AllRecipies from "../components/AllRecipies";

const Recipes = () => {
  return (
    <Layout>
      <main className="page">
        <AllRecipies />
      </main>
    </Layout>
  );
};

export default Recipes;
