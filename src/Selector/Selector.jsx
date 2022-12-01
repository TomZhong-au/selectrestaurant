import styled from 'styled-components';
import { css } from 'styled-components';
import { useState } from 'react';
import Options from './Options';
import { useSelectOptions } from './selectionFunction';
import AnimatedOptions from './Animated/AnimatedOptions';

export const FlexContainer=styled.div`
    display:flex;
    gap:1rem;
    margin: 2rem;
`
const StyledButton=styled.button`
    font-size: 2rem;
    color:white;
    background-color: ${({isAnimationStarted})=>isAnimationStarted?"grey":"red"};
    :focus{
        outline:none;
    }
`

const Selector = () => {
const [input, setInput] = useState("")
const [optionData,setOptionData]=useState([])
const [isAnimationStarted, setIsAnimationStarted] = useState(false)

const handleInput=(e)=>{
    setInput(e.target.value)
    setIsAnimationStarted(false)
}

const handleKeyDown=(e)=>{
    const latestInput=e.key
    if (latestInput===',' || latestInput===";"){
        
        setOptionData(input.split(","))
    }
}

const handleStart=()=>{
    if (optionData.length>2){
        setIsAnimationStarted(prev=>!prev)
    }

}

    return ( <div>
        <label htmlFor='input'>Input the restaurant you want to go</label>
        <input id='input' value={input} onChange={handleInput} onKeyDown={handleKeyDown}/>
        <FlexContainer>

        {isAnimationStarted
        ?<AnimatedOptions data={optionData}/>
        :optionData.map((option,index)=> {return <Options key={index} name={option} isSelected={false}/>})}
        
        </FlexContainer>
        <StyledButton onClick={handleStart} isAnimationStarted={isAnimationStarted}>{isAnimationStarted?"reset":"start"}</StyledButton>
    </div> );
}
 
export default Selector;