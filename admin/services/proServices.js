var BASE_URL ='https://6652e72e813d78e6d6d68960.mockapi.io/products'

var proServices = {
    getListProduct: function(){
        return axios({
            url: BASE_URL,
            method: 'GET',
        })
    },
    deleteProduct: function(id){
        return axios({
            url: `${BASE_URL}/${id}`,
            method: 'DELETE',
            
        })
    },
    addProduct: function(productCreate){
        return axios({
            url: BASE_URL,
            data: productCreate,
            method: 'POST',
        })
    },
    getInfoProduct: function(id){
        return axios({
            url: `${BASE_URL}/${id}`,
            method: 'GET',
            
        })

    },
    updateProduct: function(id, productUpdate){
        return axios({
            url: `${BASE_URL}/${id}`,
            method: 'PUT',
            data: productUpdate,
            
        })
    },

    

}