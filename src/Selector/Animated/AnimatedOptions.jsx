import { FlexContainer } from "../Selector";
import Options from "../Options";
import { useSelectOptions } from "../selectionFunction";

const AnimatedOptions = ({ data }) => {

    const selected = useSelectOptions(data.length)
    return (<>
        {data.map((option, index) => {
            return <Options
                key={index}
                name={option}
                isSelected={selected === index} />
        })}
    </>);
}

export default AnimatedOptions;