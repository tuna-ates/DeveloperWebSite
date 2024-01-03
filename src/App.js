
import { useContext, useEffect } from 'react';
import './App.css';
import axios from "axios"
import Footer from './components/Footer';
import Header from './components/Header';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { DataContext } from './contexts/DataContexts';
import useLocalStorage from './hooks/useLocalStorage';
import useDocumentSetter from './hooks/useDocumentSetter';
import { fakeData } from './data/fakeData';
import useAxios, { REQ_TYPE } from './hooks/useAxios';


function App() {
  //const {data,setData}=useContext(DataContext)
  const [documentSetter]=useDocumentSetter()
  const [dogReg,data,loading,err]=useAxios()
  useEffect(()=>{
    //  axios.post("https://reqres.in/api/workintech",fakeData)
    //  .then((res)=>{
    //   console.log("data",res.data);
    //   setData(res.data);
    //  })
    dogReg({regType:REQ_TYPE.POST,
      endPoint:"workintech",
    payload:fakeData
  })
     documentSetter();
  },[])
  return (<>
    <Header/>
    <Skills/>
    <Profile/>
    <Projects/>
    <Footer/>
    </>
  );
}

export default App;
