import NextTopLoader from "nextjs-toploader";
import { FC } from "react";

const TopLoader: FC = () => {
  return (
    <NextTopLoader
      color="blue"
      initialPosition={0.08}
      crawlSpeed={200}
      height={3}
      crawl={true}
      showSpinner={true}
      easing="ease"
      speed={200}
      shadow={`0 0 10px blue,0 0 5px blue`}
    />
  );
};

export default TopLoader;
