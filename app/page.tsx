import { redirect } from "next/navigation";

export default function Home() {
  // Redirect to the marketing homepage
  redirect("/marketing");
}
