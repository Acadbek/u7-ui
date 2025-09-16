import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '../../utils/cn'

export interface DropdownOption {
  value: string
  label: string
  disabled?: boolean
}

export interface DropdownProps {
  options: DropdownOption[]
  value?: string | string[]
  onChange?: (value: string | string[]) => void
  placeholder?: string
  label?: string
  helperText?: string
  disabled?: boolean
  error?: boolean
  errorMessage?: string
  variant?: 'default' | 'multiselect' | 'combobox'
  size?: 'sm' | 'md' | 'lg'
  style?: 'default' | 'fluid'
  filterable?: boolean
  className?: string
  showSelectAll?: boolean
}

// Type-specific props for better type safety
export interface SingleSelectDropdownProps extends Omit<DropdownProps, 'value' | 'onChange'> {
  value?: string
  onChange?: (value: string) => void
}

export interface MultiSelectDropdownProps extends Omit<DropdownProps, 'value' | 'onChange'> {
  value?: string[]
  onChange?: (value: string[]) => void
}

const Dropdown: React.FC<DropdownProps> = ({
  options = [],
  value,
  onChange,
  placeholder = 'Select an option',
  label,
  helperText,
  disabled = false,
  error = false,
  errorMessage,
  variant = 'default',
  size = 'md',
  style = 'default',
  className,
  showSelectAll = false,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const isMultiselect = variant === 'multiselect'
  const isCombobox = variant === 'combobox'
  const isFluid = style === 'fluid'

  // Get selected values
  const selectedValues = Array.isArray(value) ? value : value ? [value] : []
  const selectedOptions = options.filter(option => selectedValues.includes(option.value))

  // Filter options based on search
  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchValue.toLowerCase())
  )

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setSearchValue('')
        setFocusedIndex(-1)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        if (!isOpen) {
          setIsOpen(true)
        } else {
          setFocusedIndex(prev =>
            prev < filteredOptions.length - 1 ? prev + 1 : 0
          )
        }
        break
      case 'ArrowUp':
        e.preventDefault()
        if (isOpen) {
          setFocusedIndex(prev =>
            prev > 0 ? prev - 1 : filteredOptions.length - 1
          )
        }
        break
      case 'Enter':
        e.preventDefault()
        if (isOpen && focusedIndex >= 0) {
          handleOptionSelect(filteredOptions[focusedIndex])
        } else if (isCombobox && searchValue) {
          handleComboboxSubmit()
        } else if (!isOpen) {
          setIsOpen(true)
        }
        break
      case 'Escape':
        setIsOpen(false)
        setSearchValue('')
        setFocusedIndex(-1)
        break
      case 'Tab':
        setIsOpen(false)
        setSearchValue('')
        setFocusedIndex(-1)
        break
    }
  }

  const handleOptionSelect = (option: DropdownOption) => {
    if (option.disabled) return

    if (isMultiselect) {
      const newValues = selectedValues.includes(option.value)
        ? selectedValues.filter(v => v !== option.value)
        : [...selectedValues, option.value]
      onChange?.(newValues)
    } else {
      onChange?.(option.value)
      setIsOpen(false)
      setSearchValue('')
      setFocusedIndex(-1)
    }
  }

  // Handle combobox custom value entry
  const handleComboboxSubmit = () => {
    if (isCombobox && searchValue && !options.find(opt => opt.label.toLowerCase() === searchValue.toLowerCase())) {
      onChange?.(searchValue)
      setIsOpen(false)
      setFocusedIndex(-1)
    }
  }

  const handleSelectAll = () => {
    if (isMultiselect) {
      const allValues = filteredOptions.map(option => option.value)
      const isAllSelected = allValues.every(val => selectedValues.includes(val))

      if (isAllSelected) {
        // Deselect all filtered options
        const newValues = selectedValues.filter(val => !allValues.includes(val))
        onChange?.(newValues)
      } else {
        // Select all filtered options
        const newValues = [...new Set([...selectedValues, ...allValues])]
        onChange?.(newValues)
      }
    }
  }

  const clearSelection = () => {
    if (isMultiselect) {
      onChange?.([])
    } else {
      onChange?.('')
    }
  }

  const getDisplayText = () => {
    if (isMultiselect) {
      if (selectedValues.length === 0) return placeholder
      if (selectedValues.length === 1) return selectedOptions[0]?.label || ''
      return `${selectedValues.length} items selected`
    }

    if (isCombobox && searchValue) return searchValue

    // For single select, find the selected option
    if (typeof value === 'string' && value) {
      const selectedOption = options.find(option => option.value === value)
      return selectedOption?.label || placeholder
    }

    return placeholder
  }

  const getSizeClasses = () => {
    if (isFluid) {
      return 'h-16'
    }

    switch (size) {
      case 'sm': return 'h-8'
      case 'lg': return 'h-12'
      default: return 'h-10'
    }
  }

  const getMenuSizeClasses = () => {
    if (isFluid) {
      return 'py-2'
    }

    switch (size) {
      case 'sm': return 'py-1'
      case 'lg': return 'py-3'
      default: return 'py-2'
    }
  }

  const isAllSelected = isMultiselect && filteredOptions.length > 0 &&
    filteredOptions.every(option => selectedValues.includes(option.value))
  const isPartiallySelected = isMultiselect && filteredOptions.some(option =>
    selectedValues.includes(option.value)) && !isAllSelected

  // Handle input change for combobox
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isCombobox) {
      setSearchValue(e.target.value)
      setIsOpen(true)
    }
  }

  return (
    <div ref={dropdownRef} className={cn('relative w-full', className)}>
      {/* Label */}
      {label && !isFluid && (
        <label className="block text-sm font-medium text-gray-900 mb-1">
          {label}
        </label>
      )}

      {/* Field */}
      <div
        className={cn(
          'relative border  cursor-pointer transition-all duration-200',
          'focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500',
          getSizeClasses(),
          {
            'border-red-300 bg-red-50': error,
            'border-gray-300 bg-white': !error && !disabled,
            'border-gray-200 bg-gray-50 cursor-not-allowed': disabled,
            'px-3 py-2': !isFluid,
            'px-4 py-4': isFluid,
          }
        )}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        tabIndex={disabled ? -1 : 0}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={label}
      >
        {/* Fluid label */}
        {label && isFluid && (
          <motion.div
            className="absolute top-1 left-4 text-xs text-gray-500 pointer-events-none"
            animate={{
              y: isOpen || getDisplayText() !== placeholder ? -8 : 0,
              scale: isOpen || getDisplayText() !== placeholder ? 0.85 : 1,
            }}
            transition={{ duration: 0.2 }}
          >
            {label}
          </motion.div>
        )}

        {/* Selected values display */}
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            {/* Multiselect tags */}
            {isMultiselect && selectedValues.length > 0 && (
              <div className="flex items-center gap-1">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-blue-100 text-blue-800 text-xs px-2 py-1  flex items-center gap-1"
                >
                  <span>{selectedValues.length}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      clearSelection()
                    }}
                    className="hover:bg-blue-200  p-0.5 transition-colors"
                  >
                    <i className="i-tabler:x w-3 h-3" />
                  </button>
                </motion.div>
              </div>
            )}

            {/* Display text or input for combobox */}
            {isCombobox ? (
              <input
                type="text"
                value={searchValue || (typeof value === 'string' ? value : '')}
                onChange={handleInputChange}
                placeholder={placeholder}
                className={cn(
                  'flex-1 bg-transparent border-none outline-none text-sm',
                  {
                    'text-gray-500': !searchValue && !value,
                    'text-gray-900': searchValue || value,
                    'text-gray-400': disabled,
                  }
                )}
                disabled={disabled}
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <span className={cn(
                'truncate',
                {
                  'text-gray-500': getDisplayText() === placeholder,
                  'text-gray-900': getDisplayText() !== placeholder,
                  'text-gray-400': disabled,
                }
              )}>
                {getDisplayText()}
              </span>
            )}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2">
            {/* Clear button */}
            {((!isMultiselect && !isCombobox && value) || (isMultiselect && selectedValues.length > 0) || (isCombobox && (searchValue || value))) && (
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation()
                  if (isCombobox) {
                    setSearchValue('')
                    onChange?.('')
                  } else {
                    clearSelection()
                  }
                }}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <i className="i-tabler:x w-4 h-4" />
              </motion.button>
            )}

            {/* Dropdown arrow */}
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-gray-400"
            >
              <i className="i-tabler:chevron-down w-4 h-4" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Helper text or error message */}
      {(helperText || errorMessage) && !isFluid && (
        <div className={cn(
          'mt-1 text-sm',
          error ? 'text-red-600' : 'text-gray-500'
        )}>
          {error ? errorMessage : helperText}
        </div>
      )}

      {/* Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className={cn(
              'absolute z-50 w-full mt-1 bg-white border border-gray-200  shadow-lg',
              'max-h-60 overflow-auto',
              getMenuSizeClasses()
            )}
            role="listbox"
          >
            {/* Select All option for multiselect */}
            {isMultiselect && showSelectAll && filteredOptions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className={cn(
                  'flex items-center gap-3 px-3 py-2 cursor-pointer border-b border-gray-100',
                  'hover:bg-gray-50 transition-colors'
                )}
                onClick={handleSelectAll}
              >
                <div className="flex items-center justify-center w-4 h-4">
                  <i
                    className={`w-4 h-4 ${isAllSelected ? 'i-tabler:checkbox' : isPartiallySelected ? 'i-tabler:minus' : 'i-tabler:square'}`}
                  />
                </div>
                <span className="text-sm text-gray-700">Select all</span>
              </motion.div>
            )}

            {/* Options */}
            {filteredOptions.map((option, index) => {
              const isSelected = selectedValues.includes(option.value)
              const isFocused = index === focusedIndex

              return (
                <motion.div
                  key={option.value}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.02 }}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2 cursor-pointer transition-colors',
                    {
                      'bg-blue-50 text-blue-900': isSelected,
                      'bg-gray-50': isFocused && !isSelected,
                      'hover:bg-gray-50': !isSelected && !isFocused,
                      'opacity-50 cursor-not-allowed': option.disabled,
                    }
                  )}
                  onClick={() => handleOptionSelect(option)}
                  onMouseEnter={() => setFocusedIndex(index)}
                >
                  {/* Checkbox for multiselect */}
                  {isMultiselect && (
                    <div className="flex items-center justify-center w-4 h-4">
                      <i
                        className={`w-4 h-4 ${isSelected ? 'i-tabler:checkbox' : 'i-tabler:square'}`}
                      />
                    </div>
                  )}

                  {/* Option text */}
                  <span className={cn(
                    'text-sm flex-1',
                    {
                      'text-gray-400': option.disabled,
                      'text-gray-900': !option.disabled,
                    }
                  )}>
                    {option.label}
                  </span>

                  {/* Selected indicator for single select */}
                  {!isMultiselect && isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-blue-600"
                    >
                      <i className="i-tabler:check w-4 h-4" />
                    </motion.div>
                  )}
                </motion.div>
              )
            })}

            {/* Add custom value option for combobox */}
            {isCombobox && searchValue && !filteredOptions.find(opt => opt.label.toLowerCase() === searchValue.toLowerCase()) && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={cn(
                  'flex items-center gap-3 px-3 py-2 cursor-pointer border-t border-gray-100',
                  'hover:bg-gray-50 transition-colors'
                )}
                onClick={() => {
                  onChange?.(searchValue)
                  setIsOpen(false)
                  setSearchValue('')
                  setFocusedIndex(-1)
                }}
              >
                <i className="i-tabler:plus w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-700">Add "{searchValue}"</span>
              </motion.div>
            )}

            {/* No options message */}
            {filteredOptions.length === 0 && !(isCombobox && searchValue) && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="px-3 py-2 text-sm text-gray-500 text-center"
              >
                No options found
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Dropdown