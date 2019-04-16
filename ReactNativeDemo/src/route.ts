import { PageButton } from "./pages/PageButton";
import { PageTabNavigation } from "./pages/PageTabNavigation";
import { PageDetail } from "./pages/PageDetail";
import { PageRNActivityIndicator } from "./pages/PageRNActivityIndicator";
import { PageDrawerNavigation } from "./pages/PageDrawerNavigation";
import { PageRNDatePickerIOS } from "./pages/PageRNDatePickerIOS";

export const baseRouteConfigs = {
  ActivityIndicator: {
    screen: PageRNActivityIndicator,
    title: "ActivityIndicator"
  },
  Button: {
    screen: PageButton,
    title: "Button"
  },
  DatePickerIOS: {
    screen: PageRNDatePickerIOS,
    title: "DatePickerIOS"
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
