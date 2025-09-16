import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {
    DefaultDropdownDemo,
    MultiselectDropdownDemo,
    ComboboxDropdownDemo,
    FluidDropdownDemo,
    SizesDropdownDemo
} from './demos';

// Code examples
export const codeDefaultDropdown = `import Dropdown, { DropdownOption } from './components/drop-down-menu'

const options: DropdownOption[] = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
]

function MyComponent() {
  const [value, setValue] = useState('')
  
  return (
    <Dropdown
      options={options}
      value={value}
      onChange={setValue}
      placeholder="Select a country"
      label="Country"
      helperText="Choose your country"
    />
  )
}`;

export const codeMultiselectDropdown = `import Dropdown, { DropdownOption } from './components/drop-down-menu'

const options: DropdownOption[] = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue.js' },
  { value: 'angular', label: 'Angular' },
]

function MyComponent() {
  const [value, setValue] = useState([])
  
  return (
    <Dropdown
      options={options}
      value={value}
      onChange={setValue}
      placeholder="Select skills"
      label="Skills"
      variant="multiselect"
      showSelectAll
    />
  )
}`;

export const codeComboboxDropdown = `import Dropdown, { DropdownOption } from './components/drop-down-menu'

const options: DropdownOption[] = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
]

function MyComponent() {
  const [value, setValue] = useState('')
  
  return (
    <Dropdown
      options={options}
      value={value}
      onChange={setValue}
      placeholder="Type or select a country"
      label="Country"
      variant="combobox"
      filterable
    />
  )
}`;

export const codeFluidDropdown = `import Dropdown, { DropdownOption } from './components/drop-down-menu'

const options: DropdownOption[] = [
  { value: 'low', label: 'Low Priority' },
  { value: 'medium', label: 'Medium Priority' },
  { value: 'high', label: 'High Priority' },
]

function MyComponent() {
  const [value, setValue] = useState('')
  
  return (
    <Dropdown
      options={options}
      value={value}
      onChange={setValue}
      placeholder="Select priority level"
      label="Priority Level"
      style="fluid"
    />
  )
}`;

export const codeSizesDropdown = `import Dropdown, { DropdownOption } from './components/drop-down-menu'

const options: DropdownOption[] = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
]

function MyComponent() {
  const [value, setValue] = useState('')
  
  return (
    <div className="space-y-4">
      <Dropdown
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Small"
        size="sm"
      />
      <Dropdown
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Medium"
        size="md"
      />
      <Dropdown
        options={options}
        value={value}
        onChange={setValue}
        placeholder="Large"
        size="lg"
      />
    </div>
  )
}`;

// Tab data
export const defaultDropdownData = [
    {
        label: "Preview",
        content: <DefaultDropdownDemo />,
    },
    {
        label: "Code",
        content: (
            <div>
                <SyntaxHighlighter customStyle={{
                    height: '400px',
                    backgroundColor: '#F8F8F8',
                    padding: '40px',
                    fontSize: '14px'
                }} language="javascript" style={docco}>
                    {codeDefaultDropdown}
                </SyntaxHighlighter>
            </div>
        ),
    },
];

export const multiselectDropdownData = [
    {
        label: "Preview",
        content: <MultiselectDropdownDemo />,
    },
    {
        label: "Code",
        content: (
            <div>
                <SyntaxHighlighter customStyle={{
                    height: '400px',
                    backgroundColor: '#F8F8F8',
                    padding: '40px',
                    fontSize: '14px'
                }} language="javascript" style={docco}>
                    {codeMultiselectDropdown}
                </SyntaxHighlighter>
            </div>
        ),
    },
];

export const comboboxDropdownData = [
    {
        label: "Preview",
        content: <ComboboxDropdownDemo />,
    },
    {
        label: "Code",
        content: (
            <div>
                <SyntaxHighlighter customStyle={{
                    height: '400px',
                    backgroundColor: '#F8F8F8',
                    padding: '40px',
                    fontSize: '14px'
                }} language="javascript" style={docco}>
                    {codeComboboxDropdown}
                </SyntaxHighlighter>
            </div>
        ),
    },
];

export const fluidDropdownData = [
    {
        label: "Preview",
        content: <FluidDropdownDemo />,
    },
    {
        label: "Code",
        content: (
            <div>
                <SyntaxHighlighter customStyle={{
                    height: '400px',
                    backgroundColor: '#F8F8F8',
                    padding: '40px',
                    fontSize: '14px'
                }} language="javascript" style={docco}>
                    {codeFluidDropdown}
                </SyntaxHighlighter>
            </div>
        ),
    },
];

export const sizesDropdownData = [
    {
        label: "Preview",
        content: <SizesDropdownDemo />,
    },
    {
        label: "Code",
        content: (
            <div>
                <SyntaxHighlighter customStyle={{
                    height: '400px',
                    backgroundColor: '#F8F8F8',
                    padding: '40px',
                    fontSize: '14px'
                }} language="javascript" style={docco}>
                    {codeSizesDropdown}
                </SyntaxHighlighter>
            </div>
        ),
    },
];
