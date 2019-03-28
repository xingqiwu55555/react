import { PageButton } from "./pages/PageButton";
import { PageTabNavigation } from "./pages/PageTabNavigation";
import { PageDetail } from "./pages/PageDetail";
import { PageRNActivityIndicator } from "./pages/PageRNActivityIndicator";
import { PageDrawerNavigation } from "./pages/PageDrawerNavigation";

export const baseRouteConfigs = {
  ActivityIndicator: {
    screen: PageRNActivityIndicator,
    title: "RNActivityIndicator"
  },
  Button: {
    screen: PageButton,
    title: "RNButton"
  },
  TabNavigation: {
    screen: PageTabNavigation,
    title: "TabNavigation"
  },
  DrawerNavigation: {
    screen: PageDrawerNavigation,
    title: "DrawerNavigation"
  },
  Detail: {
    screen: PageDetail,
    title: "Detail"
  }
};
