import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx") ,
    route("/connexion" , "routes/connexion.tsx"),
    route("/inscription" , 'routes/inscription.tsx'),
    route("/listecourse" , "routes/listecourse.tsx"),
    route("/magasins", "routes/magasin.tsx" )
] satisfies RouteConfig;