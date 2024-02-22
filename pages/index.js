import * as React from "react"
import { client } from "../tina/__generated__/client";

import Page from "../components/Page";

export default (props) => <Page {...props} />;

export const getStaticProps = async () => {
    
  const { data, query, variables } = await client.queries.page({
    relativePath: "home.mdx",
  });

  return {
    props: {
      data,
      query,
      variables
    },
  };
};
