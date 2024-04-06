import "./App.css"
import Left from "./left";
import Right from "./right";
import Header from "./header";
import Footer from "./footer";

const App = () => {

  return (
    <div
      className="App border-2
       absolute inset-0 bg-grid-slate-900/[0.04]
       bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05]
       dark:bg-bottom dark:border-b dark:border-slate-100/5"
    >
      <div className="flex justify-center">
        <Header/>
      </div>
      <div className="flex justify-between">
        <div className="w-1/3">
          <Left/>
        </div>
        <div className="w-2/3">
          <Right/>
        </div>
      </div>

      <div className="mt-6">
        <Footer/>
      </div>
    </div>

    // <div>
    //   <PDFDownloadLink document={<MyDocument />} fileName="my-document.pdf">
    //     {({ blob, url, loading, error }) => (loading ? 'Loading ...' : '下载 PDF')}
    //   </PDFDownloadLink>
    // </div>

  )
}

export default App
