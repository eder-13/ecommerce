endpoints:

    #OBTENER TODOS LOS PRODUCTOS
    GET: /products?size=20&page=0&category=""
        size: cantidad de productos
        page: posicion del cursor
        category: si se quiere especificar a la categoria que deben pertenecer los productos
    
    #ANADIR PRODUCTO A FAVORITO
    POST: /products/add-favorite
        params: {
            idproduct: "", 
            email: ""    
        }
    
    #ELIMINAR PRODUCTO DE FAVORITO
    DELETE: /products/add-favorite
        params: {
            idproduct: "",
            email: ""
        }

    #CALIFICAR PRODUCTO
    POST: /products/rate
        params: {
            idproduct: "",
            email: "",
            rate: 0
        }

    #OBTENER LAS ORDENES
    GET: /orders?email=""
        email: email del usuario
    
    #CREAR NUEVA ORDEN
    POST: /orders
        params: {
            products: [
                idproduct: "",
                cantidad: 0
            ],
            direccion: "",
            email: ""
        }

    #EDITAR UNA ORDEN
    PUT: /orders
        params: {
            idorder: "",
            products: [
                idproduct: "",
                cantidad: 0
            ],
            direccion: "",
            email: ""
        }

    #ELIMINAR UNA ORDEN
    DELETE: /orders
        params: {
            idorder: ""
        }