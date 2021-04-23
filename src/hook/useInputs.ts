import { useState, useCallback } from 'react'

function useInputs<T, U>(initialValue: T): [T, (e: U) => void, () => void]{
    const [ form, setForm ] = useState(initialValue)
    const onChange = useCallback((e) => {
        const { name, value } = e.target
        setForm(form => ({ ...form, [name]: value }))
    }, [])
    const reset = useCallback(() => setForm(initialValue), [initialValue])
    return [ form, onChange, reset ]
}

export default useInputs