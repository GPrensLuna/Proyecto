package main

import (
	"log"
	"net/http"
)

func main() {
	// Ruta para servir los archivos estáticos de React
	fs := http.FileServer(http.Dir("./build"))
	http.Handle("/", fs)

	// Rutas adicionales en Go para el backend
	http.HandleFunc("/api/productos", getProductos)
	http.HandleFunc("/api/compras", handleCompras)

	log.Fatal(http.ListenAndServe(":8080", nil))
}

func getProductos(w http.ResponseWriter, r *http.Request) {
	// Lógica para obtener los productos desde la base de datos o una API
	// y enviar la respuesta al cliente
}

func handleCompras(w http.ResponseWriter, r *http.Request) {
	// Lógica para procesar las solicitudes de compra, almacenar los datos,
	// enviar confirmaciones por correo electrónico, etc.
}
