import { useLoaderData } from "react-router";
import { authenticate } from "../shopify.server";
import {
  PRODUCTS_QUERY,
  VARIANTS_QUERY,
  COLLECTIONS_QUERY,
} from "../graphql/queries";
import ResourcePicker from "../components/ResourcePicker";

export async function loader({ request }) {
  const { admin } = await authenticate.admin(request);

  const productsRes = await admin.graphql(PRODUCTS_QUERY);
  const variantsRes = await admin.graphql(VARIANTS_QUERY);
  const collectionsRes = await admin.graphql(COLLECTIONS_QUERY);

  const products = (await productsRes.json()).data.products.nodes;
  const collections = (await collectionsRes.json()).data.collections.nodes;

  // Flatten variants
  const variants =
    (await variantsRes.json()).data.products.nodes.flatMap(
      (p) => p.variants.nodes
    );

  return { products, variants, collections };
}

export default function Index() {
  const data = useLoaderData();
  return <ResourcePicker data={data} />;
}
