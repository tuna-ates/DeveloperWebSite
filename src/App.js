/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useEffect } from "react";
import "./App.css";
import { fakeData } from "./data/fakeData";
import useAxios, { REQ_TYPE } from "./hooks/useAxios";
import useDocumentSetter from "./hooks/useDocumentSetter";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import { DataContext } from "./contexts/DataContexts";

function App() {
  //const {data,setData}=useContext(DataContext)
   const [documentSetter] = useDocumentSetter();
   const [dogReg, data, loading, err] = useAxios();
  
  
   useEffect(() => {
     //  axios.post("https://reqres.in/api/workintech",fakeData)
     //  .then((res)=>{
     //   console.log("data",res.data);
     //   setData(res.data);
     //  })
     dogReg({
      regType: REQ_TYPE.POST,
       endPoint: "workintech",
       payload: fakeData,
     });
     documentSetter();
   }, []);
  
  return (
    <div>
       <Header />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
      <ToastContainer /> 
      
    </div>
  );
}

export default App;
