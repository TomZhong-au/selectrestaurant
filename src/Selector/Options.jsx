import styled from 'styled-components';
import { css } from 'styled-components';

const selectedStyle=css`
    border: 1px solid red;
    
    box-shadow:  blueviolet 2px 2px 2px 2px;
`

const OptionContainer=styled.div`
    
    font-size: 36px;
    color:blue;
    border:1px solid black;
    padding: 1rem;
    ${({isSelected})=>isSelected&&selectedStyle}
`

const Options = ({name, isSelected}) => {
    return ( <OptionContainer isSelected={isSelected}>{name}</OptionContainer> );
}
 
export default Options;