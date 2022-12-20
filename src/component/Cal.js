import { useState } from "react";

const Cal = () =>{

    const [disp,setdisp] = useState(''); 
    const [fval,setfval] = useState(''); 
    const [sign,setsign] = useState(''); 

    const calc = (s) =>{
        setsign(s);
        setfval(disp);
        setdisp('');
    }

    const ans = () =>{
        if(sign=='+')
        {
            setdisp(parseFloat(fval)+parseFloat(disp));
        }

        if(sign=='-')
        {
            setdisp(parseFloat(fval)-parseFloat(disp));
        }

        if(sign=='*')
        {
            setdisp(parseFloat(fval)*parseFloat(disp));
        }

        if(sign=='/')
        {
            setdisp(parseFloat(fval)/parseFloat(disp));
        }

        if(sign=='.')
        {
            setdisp(parseFloat(fval).parseFloat(disp));
        }
        
    }

    const pe =()=>{
        setdisp(fval/100 * disp);
    }
    
    const sqr = () =>{
        setdisp(Math.pow(disp,2));
    }

    const sqrrt = () =>{
        setdisp(Math.sqrt(disp));
    }

    const onx = () =>{
        setdisp(1/disp);
    }

    const clr = () =>{
        setdisp('');
    }

    const ab = () =>{
        setdisp(Math.abs(disp));
        setdisp()
    }

    const c = () =>{
        setdisp(fval-1);
    }

    const backsp = () =>{
        setdisp(disp.slice(0,-1));  
    }

    return(
        <>
            <div className="main">
                <input type="text" className="in" value={disp} readOnly />
                <div className="row">
                    <div className="col">
                        <input type="button" value="%" className="btn" onClick={()=>{pe()}}/>
                        <input type="button" value="CE" className="btn" onClick={()=>{clr()}}/>
                        <input type="button" value="C" className="btn" onClick={()=>{clr()}}/>
                        <input type="button" value="B" className="btn" onClick={()=>{backsp()}}/>
                    </div>

                    <div className="col">
                        <input type="button" value="1/X" className="btn" onClick={()=>{onx()}}/>
                        <input type="button" value="x2" className="btn" onClick={()=>{sqr()}}/>
                        <input type="button" value="Sqrt" className="btn" onClick={()=>{sqrrt()}}/>
                        <input type="button" value="/" className="btn" onClick={()=>{calc('/')}}/>
                    </div>

                    <div className="col">
                        <input type="button" value="7" className="btn"  onClick={()=>{setdisp(disp+7)}}/>
                        <input type="button" value="8" className="btn"  onClick={()=>{setdisp(disp+8)}}/>
                        <input type="button" value="9" className="btn"  onClick={()=>{setdisp(disp+9)}}/>
                        <input type="button" value="*" className="btn" onClick={()=>{calc('*')}}/>
                    </div>

                    <div className="col">
                        <input type="button" value="4" className="btn"  onClick={()=>{setdisp(disp+4)}}/>
                        <input type="button" value="5" className="btn"  onClick={()=>{setdisp(disp+5)}}/>
                        <input type="button" value="6" className="btn"  onClick={()=>{setdisp(disp+6)}}/>
                        <input type="button" value="-" className="btn"  onClick={()=>{calc('-')}}/>
                    </div>

                    <div className="col">
                        <input type="button" value="1" className="btn"  onClick={()=>{setdisp(disp+1)}} />
                        <input type="button" value="2" className="btn"  onClick={()=>{setdisp(disp+2)}}/>
                        <input type="button" value="3" className="btn"  onClick={()=>{setdisp(disp+3)}}/>
                        <input type="button" value="+" className="btn" onClick={()=>{calc('+')}}/>
                    </div>

                    <div className="col">
                        <input type="button" value="+/-" className="btn" onClick={()=>{ab()}}/>
                        <input type="button" value="0" className="btn" onClick={()=>{setdisp(disp+0)}}/>
                        <input type="button" value="." className="btn"  onClick={()=>{calc('.')}}/>
                        <input type="button" value="=" className="btn"  onClick={()=>{ans()}}/>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Cal;