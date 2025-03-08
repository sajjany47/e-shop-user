import Navbar from "./component/Navbar";
import ProductList from "./component/ProductList";
import ProductView from "./component/ProductView";

export default function Home() {
  return (
    <>
      <Navbar />
      <ProductView />
      <ProductList />
    </>
  );
}
