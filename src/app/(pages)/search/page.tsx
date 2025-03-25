import SearchShoe from "@/app/components/SearchShoe";
import { getListProductByKeyWord } from "@/app/service/shoeApi";

export default async function SearchPage({searchParams}) {

  const { tenGiay } = searchParams;
  console.log("tenGiay:", tenGiay);// nike

  const listInitShoe = await getListProductByKeyWord(tenGiay);
  console.log("listInitShoe:", listInitShoe);
  return <SearchShoe initDataListShoe={listInitShoe} />;
}
