import * as React from "react"
import { client } from "../tina/__generated__/client";

import Page from "../components/Page";

export default (props) => <Page {...props} />;

export async function getStaticPaths() {
    const pages = await client.queries.page(); // Get all pages.

    const paths = pages.map(page => ({
        params: { page: page.name }
    }));

    return { paths, fallback: false };
}

export const getStaticProps = async (context) => {
    const pageName = context.page;
    
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
