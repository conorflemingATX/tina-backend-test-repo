import * as React from "react"
import { client } from "../tina/__generated__/client";

import Page from "../components/Page";

export default (props) => <Page {...props} />;

export async function getStaticPaths() {
    // Filter by pageType === "none" || == null.
    const pagesResponse = await client.queries.pageConnection({
        filter: { pageType: { eq: "" } } 
    });
    const pages = pagesResponse?.data?.pageConnection?.edges.map(({ node }) => node);

    const paths = pages.map(({ _sys }) => ({
        params: { page: _sys.filename }
    }));

    return { paths, fallback: false };
}

export const getStaticProps = async (context) => {
    const pageName = context.params.page;
    
    const { data, query, variables } = await client.queries.page({
        relativePath: `${pageName}.mdx`,
    });

    return {
        props: {
            data,
            query,
            variables
        },
    };
};
