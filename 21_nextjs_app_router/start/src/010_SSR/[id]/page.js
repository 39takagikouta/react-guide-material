import { ENDPOINT } from "@/constants";
import Article from "@/components/article";
export default async function SSR({ params }) {
  const article = await fetch(`${ENDPOINT}/${params.id}`).then((res) =>
    res.json()
  );
  return (
    <>
      <Article data={article}></Article>
    </>
  );
}
