import * as React from "react"

import { tinaField } from "tinacms/dist/react";

import MainBanner from "../components/ITStartup/MainBanner";
import Features from "../components/ITStartup/Features"
import ServicesArea from "../components/ITStartup/ServicesArea"
import OurFeatures from "../components/ITStartup/OurFeatures"
import FunFactsArea from "../components/Common/FunFactsArea"
import RecentWorks from "../components/Common/RecentWorks"
import Partner from "../components/Common/Partner"
import BlogPost from "../components/Common/BlogPost"

const { Fragment } = React;

export default ({ page }) => {
    const { blocks } = page;
    if (blocks == null) return (<></>);
    return (
        <>
          {blocks.map((block, i) => {
              switch (block.__typename) {
                case "PageBlocksMainBannerBlock":
                    return (
                        <Fragment key={i + block.__typename}>
                          <MainBanner data={block} />
                        </Fragment>
                    );
                case "PageBlocksFeaturesBlock":
                  return (
                      <Fragment key={i + block.__typename}>
                        <Features data={block} />
                      </Fragment>
                  );
                case "PageBlocksServicesAreaBlock":
                  return (
                      <Fragment key={i + block.__typename}>
                        <ServicesArea data={block} />
                      </Fragment>
                  );
              };
          })}
        </>
    );
};
