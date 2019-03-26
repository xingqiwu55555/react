import { PageButton } from "./pages/PageButton";
import { PageTabNavigation } from "./pages/PageTabNavigation";
import { PageDetail } from "./pages/PageDetail";
import { PageRNActivityIndicator } from "./pages/PageRNActivityIndicator";

export const baseRouteConfigs = {
  ActivityIndicator: {
    screen: PageRNActivityIndicator,
    title: "ActivityIndicator"
  },
  Button: {
    screen: PageButton,
    title: "Button"
  },
  TabNavigation: {
    screen: PageTabNavigation,
      title: "TabNavigation"
  },
  Detail: {
    screen: PageDetail,
    title: "Detail"
  }
};
