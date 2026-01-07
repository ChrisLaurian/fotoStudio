// src/services/ProductoService.js
const API_URL = 'http://192.168.100.5/FotoEstudio-Backend/index.php'; 


export const ProductoService = {
    // Método para listar (GET)
    async getProductos() {
        try {
            const response = await fetch(`${API_URL}/productos`);
            return await response.json();
        } catch (error) {
            console.error("Error al obtener productos:", error);
            throw error;
        }
    },

    async getProducto(id) {
        try {
            const response = await fetch(`${API_URL}/producto/${id}`);
            if (!response.ok) throw new Error("No se pudo obtener el producto");
            return await response.json();
        } catch (error) {
            console.error("Error en getProducto:", error);
            throw error;
        }
    },

    // 3. Guardar nuevo producto
    async guardarProducto(datos) {
        try {
            const formData = new URLSearchParams();
            formData.append('json', JSON.stringify(datos));

            const response = await fetch(`${API_URL}/productos`, {
                method: 'POST',
                body: formData,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });

            const text = await response.text(); 
            if (!text) throw new Error("Servidor vacío");
            return JSON.parse(text);
        } catch (error) {
            console.error("Error en guardarProducto:", error);
            throw error;
        }
    },

    // 4. Actualizar producto existente
    async actualizarProducto(id, datos) {
        try {
            const formData = new URLSearchParams();
            formData.append('json', JSON.stringify(datos));

            const response = await fetch(`${API_URL}/update-producto/${id}`, {
                method: 'POST',
                body: formData,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });

            return await response.json();
        } catch (error) {
            console.error("Error al actualizar:", error);
            throw error;
        }
    },

// En ProductoService.js
async subirImagen(archivo) {
    try {
        const formData = new FormData();
        formData.append('uploads', archivo); // 'uploads' debe coincidir con el PHP

        const response = await fetch(`${API_URL}/upload-file`, {
            method: 'POST',
            body: formData
            // IMPORTANTE: No pongas headers aquí, el navegador lo hace solo para archivos
        });
        return await response.json();
    } catch (error) {
        console.error("Error al subir imagen:", error);
        throw error;
    }
},

    // Dentro de export const ProductoService = { ...
async eliminarProducto(id) {
    try {
        const response = await fetch(`${API_URL}/delete-producto/${id}`);
        return await response.json();
    } catch (error) {
        console.error("Error al eliminar:", error);
        throw error;
    }
}
};