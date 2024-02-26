import * as React from "react"
import { client } from "../tina/__generated__/client";

import Page from "../components/Page";

export default (props) => <Page {...props} />;

// Update all static path functions to use the new filenames format.
export async function getStaticPaths() {
    // Filter by pageType === "none" || == null.
    const pagesResponse = await client.queries.pageConnection({
        filter: { pageType: { eq: "none" } }
    });
    let paths = pagesResponse?.data?.pageConnection?.edges
        ?.map(({ node }) => node)
        ?.reduce((ps, { _sys }) => {
            const filename = _sys.filename.split("__")[1];
            if (filename != null) ps.push({
                params: { page: filename }
            });
            return ps;
        }, []);
    paths = paths != null ? paths : [];

    return { paths, fallback: false };
}

export const getStaticProps = async (context) => {
    const pageName = context.params.page;
    
    const { data, query, variables } = await client.queries.page({
        relativePath: `none__${pageName}.mdx`,
    });

    return {
        props: {
            data,
            query,
            variables
        },
    };
};
