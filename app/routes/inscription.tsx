import type { Route } from "./+types/home";
import Inscription from "@/pages/inscription/inscription";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function InscriptionPage() {
  return <Inscription />;
}
