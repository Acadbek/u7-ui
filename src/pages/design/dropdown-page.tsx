import Tabs from '../../components/tabs'
import {
    defaultDropdownData,
    multiselectDropdownData,
    comboboxDropdownData,
    fluidDropdownData,
    sizesDropdownData
} from './dropdown/constants';

const DropdownPage = () => {
    return (
        <div un-flex='~ col' gap-8>
            <Tabs items={defaultDropdownData} />
            <Tabs items={multiselectDropdownData} />
            <Tabs items={comboboxDropdownData} />
            <Tabs items={fluidDropdownData} />
            <Tabs items={sizesDropdownData} />
        </div>
    )
}

export default DropdownPage