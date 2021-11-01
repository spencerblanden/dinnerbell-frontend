import { useState } from 'react';

import { StyledMain } from '../styles';

const Show = (props) => {
    const [formState, setFormState ] = useState({
        content: ""
    });

    const handleChange = event => (
        setFormState({ content: event.target.value })
    );

    const handleSubmit = event => {
        event.preventDefault();
        props.createNote(formState, props.contact._id);
        setFormState({ content: '' }); // reset our form
    };

    return (
        <>
          
        </>
    );
};

export default Show;