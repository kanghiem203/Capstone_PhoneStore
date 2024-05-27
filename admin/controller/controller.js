function renderProductList(productList) {
  // console.log("🚀 ~ renderProductList ~ productList:", productList);

  var productReverse = productList.reverse();
  var content = "";
  for (var i = 0; i < productReverse.length; i++) {
    var product = productReverse[i];


    var contentTr = `
    <tr> 
    <td>${product.id}</td>
    <td>${product.NamePro}</td>
    <td>
    <img width="70px" src="${product.Image}" alt="" />
    </td>
    <td>${product.Price}</td>
    <td>${product.Type}</td>
    <td>${product.Description}</td>
    <td>
    <button onclick="deleteProduct('${product.id}')" class="btn btn-danger me-1" title="Delete"><i class="fa fa-trash-alt"></i></button>
    <button onclick="editProduct('${product.id}')" class="btn btn-success me-1" title="Edit"><i class="fa fa-pencil-alt"></i></button>

    </td>
    

   
    </tr>
    
    `;
    content += contentTr;
  }
  document.getElementById("tblProductList").innerHTML = content;
}

function getInfoForm() {
  var nameProduct = document.getElementById("nameProduct").value;
  var image = document.getElementById("image").value;
  var price = document.getElementById("price").value;
  var type = document.getElementById("inputGroupSelect02").value;
  var description = document.getElementById("Description").value;

  var productCreate = {
    NamePro: nameProduct,
    Image: image,
    Price: price,
    Type: type,
    Description: description,
  };
  return productCreate;

}




