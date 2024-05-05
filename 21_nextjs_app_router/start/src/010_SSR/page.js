import { ENDPOINT } from "@/constants";
import ClientComp from "./components/ClientComp";
import ArticleList from "@/components/articleList";
export default async function SSR() {
  const articles = await fetch(ENDPOINT).then((res) => res.json());
  return (
    <>
      <div>SSR Page</div>
      <ClientComp></ClientComp>
      <ArticleList list={articles} basePath={"/010_SSR"}></ArticleList>
    </>
  );
}
