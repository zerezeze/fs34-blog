import Header from "./components/Header";
import FormBase from "./components/FormBase";
import PostHeader from "./components/PostHeader";
import PostBase from "./components/PostBase";


function App() {
  

  return (
    <>
    <Header className="bg-black flex p-3 border-b-2 border-neutral-900 font-mono">
      <h1 className="ml-5 text-xl text-white font-semibold font-mono">Fs34Blog</h1>
      <FormBase className="ml-5 mt-1">
        <input  className="rounded" type="text" placeholder=" Pesquise aqui..."/>
        <button className="text-white border rounded px-3 border-white ml-3">Pesquisar</button>
      </FormBase>
    </Header>

    <PostHeader></PostHeader>
    <PostBase></PostBase>
    <PostHeader></PostHeader>
    <PostBase></PostBase>
    </>
    
   
  );
}

export default App
































