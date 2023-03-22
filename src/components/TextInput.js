import { useState, useRef, useEffect } from 'react';


const TextInput = () => {

    const [message, setMessage] = useState('Happy Birthday!');
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus()
    }, [])


    const handleChange = (event) => {
        setMessage(event.target.value);
      }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(message);
        setMessage('');
    }
    
    return (
        <form onSubmit={handleSubmit}>
        <label>
          Write your message
          <input ref={inputRef} type="text" value={message} onChange={handleChange} />
        </label>
        <input type="submit" value="Save" />
      </form>
    )
}

export default TextInput;