import React,{useId} from 'react'

function Select({
    options,
    label,
    className,
    ...props
},ref) {
  const id = React.useId()
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className=''></label>}
        <select
            {...props}
            ref={ref}
            id={id}
            className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        >
            {options?.map((option)=>(
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
      
    </div>
  )
}

export default React.forwardRef(Select)
