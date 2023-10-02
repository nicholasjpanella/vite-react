import { lazy } from "react";
import { Navigate } from "react-router";

type ViewConfig = {
  path: string;
  viewComponent: () => Promise<any>;
  hidden?: () => boolean;
  nested?: boolean;
};

type LazyReturn = ReturnType<typeof lazy>;
type LazyViewConfig = Omit<ViewConfig, "viewComponent"> & {
  element?: LazyReturn;
};

const viewsCollection: ViewConfig[] = [
  {
    path: "/home",
    viewComponent: () => import("@src/views/home"),
  },
  {
    path: "/office",
    viewComponent: () => import("@src/views/office"),
  },
];

const lazyViews: LazyViewConfig[] = viewsCollection.map(
  ({ viewComponent: component, ...config }) => ({
    ...config,
    element: lazy(component),
  })
);

export default lazyViews;
