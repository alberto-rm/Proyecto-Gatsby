import React from 'react';

const ContactForm = () => {

    return (
        <form >
            <legend>Crear nuevo personaje</legend>
            <fieldset>
                <label>
                    <p>Nombre</p>
                    <input type="text" name="name" value="" />
                </label>
            </fieldset>
        </form>
    )
}

export default ContactForm;