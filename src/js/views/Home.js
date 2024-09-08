import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { ContactCard } from "../component/contactCard.js";
import { Navbar } from "../component/navbar.js";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchContactos();
    }, [actions]);

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar el contacto?");
        if (confirmDelete) {
            actions.deleteContact(id);
        }
    };

    return (
        <>
            <Navbar />
            <div>
                {store.contactos.map((contact, index) => (
                    <ContactCard key={index} contact={contact} contactDelete={handleDelete} />
                ))}
            </div>
        </>
    );
};