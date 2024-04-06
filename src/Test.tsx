import Header from "./header";
import Left from "./left";
import Right from "./right";
import Footer from "./footer";
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
const MyDocument = () => {
  return(

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

    // <Document>
    //   <Page size="A4">
    //     <View>
    //       <View
    //
    //       >
    //         <View style={{flex: 1,justifyContent:"center"}}>
    //           <Header/>
    //         </View>
    //         <View style={{flex:1,justifyContent:"space-between"}}>
    //           <View style={{width:window.innerWidth/3}}>
    //             <Left/>
    //           </View>
    //           <View style={{width:window.innerWidth/3*2}}>
    //             <Right/>
    //           </View>
    //         </View>
    //
    //         <View style={{marginTop: 24}} >
    //           <Footer/>
    //         </View>
    //       </View>
    //     </View>
    //   </Page>
    // </Document>
  )
}

// 创建样式
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    padding: 20
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    backgroundColor: 'white',
    borderRadius: 5
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center'
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 10,
    borderRadius: 5
  },
  table: {
    width: '100%',
    marginBottom: 10
  },
  tableRow: {
    flexDirection: 'row',
    borderBottom: '1 solid black',
    padding: 5
  },
  tableCell: {
    flex: 1,
    padding: 5
  }
});

export default MyDocument