import './app.css';
import { useEffect, useState } from 'react';
import Header from './Containers/Header';
import HighLightedContent from './Containers/HighLightedContent';


function MainContainer({children}){
return(<main>
    {children}
</main>
)
}

function App (){
    const [foo, setFoo] = useState (2);
    const [bar, setBar] = useState (20);

    useEffect(()=> {
        console.log('App render userEffect ....');
        return () =>{
            document.removeEventListener()
        }
    });
    useEffect(()=>{ 
    console.log('App render userEffect  una vez....'); 
},[] );
useEffect(()=>{ 
    console.log('App render userEffect  with foo....'); 
},[foo] );

    console.log('APP MOUNTED', foo);

    return (
        <div className='App'>
        <Header />
        <MainContainer />
        <HighLightedContent />
        <NewContainer />
        <button onClick={()=> setfoo ('fooChanged')}>change</button>
        <MainContainer />
        </div>
    );
}
function HighLightedContent(){
    return ( <section />)
    <img src="" alt="">
}
function NewItems (){}

export default 