import { Footer } from "@/src/components/footer/footer";
import Header from "@/src/components/header/header";
import MainLayout from "@/src/components/layout/main-layout";
import "@/styles/globals.css";
import "@/styles/general.scss";

export default function App({ Component, pageProps }) {
  // this is not a cleanest way to add header and footer
  // we will create main Layout component
  // return (
  //   <>
  //     <Header />
  //     <Component {...pageProps} />
  //     <Footer />
  //   </>
  // );
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
