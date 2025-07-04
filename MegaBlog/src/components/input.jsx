import React,{useId} from 'react'

const input = React.forwardRef(function Input({
    label,
    type = 'text',
    className = '',
    ...props
},Ref){
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1'
            htmlFor={id}>
                {label}
            </label>}
            <input
                type={type}
                className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
                {...props}
                ref={Ref}
                id={id}
            />
        </div>
    )
})

export default input
