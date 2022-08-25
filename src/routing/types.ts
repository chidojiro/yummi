export type RouteItem = {
  path: string;
  component: any;
};

export type Route = Record<string, RouteItem>;
