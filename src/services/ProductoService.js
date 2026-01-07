// La URL apunta a tu carpeta en htdocs y al archivo index.php
const API_URL = 'http://localhost/FotoEstudio-Backend/index.php';

export const ProductoService = {
    
    // Obtener todos los productos (fotos del estudio)
    async getProductos() {
        try {
            const response = await fetch(`${API_URL}/productos`);
            return await response.json();
        } catch (error) {
            console.error("Error al obtener productos:", error);
            throw error;
        }
    },

    // Obtener un solo producto por ID
    async getProducto(id) {
        try {
            const response = await fetch(`${API_URL}/producto/${id}`);
            return await response.json();
        } catch (error) {
            console.error("Error al obtener el producto:", error);
            throw error;
        }
    },

    // Eliminar un producto
    async deleteProducto(id) {
        try {
            const response = await fetch(`${API_URL}/delete-producto/${id}`);
            return await response.json();
        } catch (error) {
            console.error("Error al eliminar:", error);
            throw error;
        }
    }
};