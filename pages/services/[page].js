import * as React from "react"
import { client } from "../../tina/__generated__/client";

import Page from "../../components/Page";

export default (props) => <Page {...props} />;

export async function getStaticPaths() {
    const pagesResponse = await client.queries.pageConnection({
        filter: { pageType: { eq: "services" } }
    });

    let paths = pagesResponse?.data?.pageConnection?.edges
        ?.map(({ node }) => node)
        ?.map(({ _sys }) => ({
            params: { page: _sys.filename }
        }));
    paths = paths != null ? paths : [];

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
