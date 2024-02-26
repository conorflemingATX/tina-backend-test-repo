import * as React from "react"
import { client } from "../../tina/__generated__/client";

import Page from "../../components/Page";

export default (props) => <Page {...props} />;

export async function getStaticPaths() {
    const pagesResponse = await client.queries.pageConnection({
        filter: { pageType: { eq: "company" } }
    });
    let paths = pagesResponse?.data?.pageConnection?.edges
        ?.map(({ node }) => node)
        ?.reduce((ps, { _sys }) => {
            const [ _pageType, filename, ...rest ] = _sys.filename.split("__");
            return filename != null
                ? [ ...ps, { params: { page: filename } } ]
                : ps; 
        }, []);
    paths = paths != null ? paths : [];
    return { paths, fallback: false };
}

export const getStaticProps = async (context) => {
    const pageName = context.params.page;
    const { data, query, variables } = await client.queries.page({
        relativePath: `/company__${pageName}.mdx`,
    });

    return {
        props: {
            data,
            query,
            variables
        },
    };
};
