import * as React from "react";

import { tinaField } from "tinacms/dist/react";

import MainBanner from "../components/ITStartup/MainBanner";
import Features from "../components/ITStartup/Features";
import ServicesArea from "../components/ITStartup/ServicesArea";
import OurFeatures from "../components/ITStartup/OurFeatures";
import FunFactsArea from "../components/Common/FunFactsArea";
import RecentWorks from "../components/Common/RecentWorks";
import Partner from "../components/Common/Partner";
import BlogPost from "../components/Common/BlogPost";
import DesignArea from "./ITStartup/DesignArea";
import Team from "../components/Common/Team";

const { Fragment } = React;

export default ({ page }) => {
  const { blocks } = page;
  if (blocks == null) return <></>;
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
          case "PageBlocksDesignAreaBlocks":
            return (
              <Fragment key={i + block.__typename}>
                <DesignArea data={block} />
              </Fragment>
            );
          case "PageBlocksOurFeatureAreaBlocks":
            return (
              <Fragment key={i + block.__typename}>
                <OurFeatures data={block} />
              </Fragment>
            );
          case "PageBlocksOurRecentBlock":
            return (
              <Fragment key={i + block.__typename}>
                <RecentWorks data={block} />
              </Fragment>
            );
          case "PageBlocksOurAwesomeTeamBlock":
            return (
              <Fragment key={i + block.__typename}>
                <Team data={block} />
              </Fragment>
            );
          case "PageBlocksFunfactsBlocks":
            return (
              <Fragment key={i + block.__typename}>
                <FunFactsArea data={block} />
              </Fragment>
            );
        }
      })}
    </>
  );
};
