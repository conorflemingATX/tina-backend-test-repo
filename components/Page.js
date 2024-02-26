import * as React from "react";
import { useTina } from "tinacms/dist/react";

import Layout from "../components/Layout";
import Navbar from "../components/_App/Navbar";
import Blocks from "../components/Blocks";
import Footer from "../components/_App/Footer";

export default function Page({ query, variables, data: pageData }) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const {
    data: { page },
  } = useTina({
    query: query,
    variables: variables,
    data: pageData,
  });

  return (
    <Layout>
      <Navbar />
      <Blocks page={page} />
      <Footer />
    </Layout>
  );
}
