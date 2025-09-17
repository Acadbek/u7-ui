import { useState } from 'react';
import Dropdown, { type DropdownOption } from "../../../components/drop-down-menu";

// Sample data
const countries: DropdownOption[] = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'de', label: 'Germany' },
    { value: 'fr', label: 'France' },
    { value: 'jp', label: 'Japan' },
    { value: 'au', label: 'Australia' },
    { value: 'br', label: 'Brazil' },
    { value: 'in', label: 'India' },
    { value: 'cn', label: 'China' },
];

const skills: DropdownOption[] = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue.js' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'node', label: 'Node.js' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
    { value: 'csharp', label: 'C#' },
    { value: 'go', label: 'Go' },
    { value: 'rust', label: 'Rust' },
];

// Demo components
export const DefaultDropdownDemo = () => {
    const [value, setValue] = useState('')
    const handleChange = (newValue: string | string[]) => {
        if (typeof newValue === 'string') {
            setValue(newValue)
        }
    }
    return (
        <div className="flex justify-center items-center border border-gray items-center gap-4 h-[400px]">
            <div className="w-80">
                <Dropdown
                    options={countries}
                    value={value}
                    onChange={handleChange}
                    placeholder="Select a country"
                    label="Country"
                    helperText="Choose your country of residence"
                />
            </div>
        </div>
    )
}

export const MultiselectDropdownDemo = () => {
    const [value, setValue] = useState<string[]>([])
    const handleChange = (newValue: string | string[]) => {
        if (Array.isArray(newValue)) {
            setValue(newValue)
        }
    }
    return (
        <div className="flex justify-center items-center border border-gray items-center gap-4 h-[400px]">
            <div className="w-80">
                <Dropdown
                    options={skills}
                    value={value}
                    onChange={handleChange}
                    placeholder="Select skills"
                    label="Technical Skills"
                    helperText="Choose all relevant skills"
                    variant="multiselect"
                    showSelectAll
                />
            </div>
        </div>
    )
}

export const ComboboxDropdownDemo = () => {
    const [value, setValue] = useState('')
    const handleChange = (newValue: string | string[]) => {
        if (typeof newValue === 'string') {
            setValue(newValue)
        }
    }
    return (
        <div className="flex justify-center items-center border border-gray items-center gap-4 h-[400px]">
            <div className="w-80">
                <Dropdown
                    options={countries}
                    value={value}
                    onChange={handleChange}
                    placeholder="Type or select a country"
                    label="Country"
                    helperText="You can type to search or select from the list"
                    variant="combobox"
                    filterable
                />
            </div>
        </div>
    )
}

export const FluidDropdownDemo = () => {
    const [value, setValue] = useState('')
    const handleChange = (newValue: string | string[]) => {
        if (typeof newValue === 'string') {
            setValue(newValue)
        }
    }
    return (
        <div className="flex justify-center items-center border border-gray items-center gap-4 h-[400px]">
            <div className="w-80">
                <Dropdown
                    options={[
                        { value: 'low', label: 'Low Priority' },
                        { value: 'medium', label: 'Medium Priority' },
                        { value: 'high', label: 'High Priority' },
                        { value: 'urgent', label: 'Urgent' },
                    ]}
                    value={value}
                    onChange={handleChange}
                    placeholder="Select priority level"
                    label="Priority Level"
                    helperText="Choose the priority level for this task"
                    style="fluid"
                />
            </div>
        </div>
    )
}

export const SizesDropdownDemo = () => {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [value3, setValue3] = useState('')

    const handleChange1 = (newValue: string | string[]) => {
        if (typeof newValue === 'string') {
            setValue1(newValue)
        }
    }
    const handleChange2 = (newValue: string | string[]) => {
        if (typeof newValue === 'string') {
            setValue2(newValue)
        }
    }
    const handleChange3 = (newValue: string | string[]) => {
        if (typeof newValue === 'string') {
            setValue3(newValue)
        }
    }

    return (
        <div className="flex justify-center items-center border border-gray items-center gap-4 h-[400px]">
            <div className="w-80 space-y-4">
                <Dropdown
                    options={countries}
                    value={value1}
                    onChange={handleChange1}
                    placeholder="Small size"
                    label="Small"
                    size="sm"
                />
                <Dropdown
                    options={countries}
                    value={value2}
                    onChange={handleChange2}
                    placeholder="Medium size"
                    label="Medium"
                    size="md"
                />
                <Dropdown
                    options={countries}
                    value={value3}
                    onChange={handleChange3}
                    placeholder="Large size"
                    label="Large"
                    size="lg"
                />
            </div>
        </div>
    )
}
