'use client'
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
    const [showMenu, setShowMenu] = useState<boolean>(true); // Estado para controlar la visibilidad del menú

    useEffect(() => {
        const handleResize = () => {
            // Condición para mostrar u ocultar el menú basado en el tamaño de la pantalla
            if (window.innerWidth <= 790) { // Cambia 768 por el ancho de píxel que desees
                setShowMenu(false);
            } else {
                setShowMenu(true);
            }
        };

        // Agregar un event listener para el cambio de tamaño de la ventana
        window.addEventListener('resize', handleResize);

        // Limpia el event listener cuando el componente se desmonta para evitar memory leaks
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Se ejecuta solo una vez al montar el componente

    return (
        <div className="flex bg-pink-800 justify-between w-full text-white p-2">
            <div className="flex p-2 justify-center">
                <img src="/logo.png" alt="logo" className="w-32" />
            </div>

            {showMenu && ( // Renderizar el menú solo si showMenu es true
                <>
                    <div className="flex p-2 justify-center">
                        <h1 className="text-2xl font-bold">
                            Welcome to the React
                        </h1>
                    </div>
                    <div className="flex p-2 ustify-center">
                        <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
                            Contacto
                        </button>
                        <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded ml-2">
                            Sobre Mi
                        </button>
                        <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded ml-2">
                            Turno
                        </button>
                        <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded ml-2">
                            Profile
                        </button>
                        <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded ml-2">
                            Cart
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Header;
