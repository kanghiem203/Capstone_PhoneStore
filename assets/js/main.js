var productList = [];

// Call API
function fectchProductList() {
    document.getElementById("exampleModalLabel").innerText = "Add New Product";

    document.getElementById("btnAdd").style.display = "block";
    document.getElementById("btnUpdate").style.display = "none ";
  proServices
    .getListProduct()
    .then(function (res) {
      console.log("🚀 ~ res:", res);
      var productList = res.data;
      renderProductList(productList);
    })
    .catch(function (err) {
      console.log("🚀 ~ err:", err);
    });
}

fectchProductList();

// Delete Function
function deleteProduct(id) {
  proServices
    .deleteProduct(id)
    .then(function (res) {
      fectchProductList();
    })
    .catch(function (err) {
      console.log("🚀 ~ deleteProduct ~ err:", err);
    });
}

//get information from form from user

function addProduct() {
    
    
  var productCreate = getInfoForm();

  proServices
    .addProduct(productCreate)
    .then(function (res) {
      fectchProductList();
      var exampleModal = bootstrap.Modal.getInstance(
        document.getElementById("exampleModal")
      );
      if (exampleModal) {
        exampleModal.hide();
      }
      resetForm();
      alert("Product added successfully.");
    })
    .catch(function (err) {
      console.log("🚀 ~ proServices.addProduct ~ err:", err);
    });
}

//reset form
function resetForm() {
  document.getElementById("nameProduct").value = "";
  document.getElementById("image").value = "";
  document.getElementById("price").value = "";
  document.getElementById("inputGroupSelect02").value = "";
  document.getElementById("Description").value = "";
}

// UPDATE

var idProductUpdate;
function editProduct(id) {
//   console.log("🚀 ~ editProduct ~ id:", id);
  idProductUpdate =id;

  proServices
    .getInfoProduct(id)
    .then(function (res) {
      // console.log("🚀 ~ proServices.getInfoProduct ~ res:", res)
      var product = res.data;
      document.getElementById("nameProduct").value = product.NamePro;
      document.getElementById("image").value = product.Image;
      document.getElementById("price").value = product.Price;
      document.getElementById("inputGroupSelect02").value = product.Type;
      document.getElementById("Description").value = product.Description;

      document.getElementById("exampleModalLabel").innerText = "Edit Product";

      document.getElementById("btnUpdate").style.display = "block";
      document.getElementById("btnAdd").style.display = "none";

      var exampleModalElement = document.getElementById("exampleModal");
      var exampleModal =
        bootstrap.Modal.getOrCreateInstance(exampleModalElement);
      exampleModal.show();
    })
    .catch(function (err) {
      console.log("🚀 ~ proServices.getInfoProduct ~ err:", err);
    });
}

function updateProduct() {
  var productUpdate = getInfoForm(); // Get infor from form from user input

  proServices
    .updateProduct(idProductUpdate, productUpdate)
    .then(function (res) {
      fectchProductList();
      var exampleModal = bootstrap.Modal.getInstance(
        document.getElementById("exampleModal")
      );
      if (exampleModal) {
        exampleModal.hide();
      };
      alert("Product updated successfully.");
      resetForm();


    })
    .catch(function (err) {
      console.log("🚀 ~ proServices.updateProduct ~ err:", err);
    });
}



// Search by name


// Hàm lấy danh sách sản phẩm từ API và lưu vào biến productList
function fetchProductList() {
  proServices.getListProduct()
    .then(function (res) {
      productList = res.data; // Lưu danh sách sản phẩm vào biến toàn cục
      renderProductList(productList); // Hiển thị danh sách sản phẩm
    })
    .catch(function (err) {
      console.log("🚀 ~ err:", err);
    });
}

// Hàm tìm kiếm sản phẩm
function searchProduct(event) {
  event.preventDefault(); // Ngăn chặn hành động mặc định của nút submit
  var searchInput = document.getElementById("searchInput").value.toLowerCase(); // Lấy giá trị từ trường tìm kiếm và chuyển thành chữ thường
  console.log("Search input: ", searchInput); // Kiểm tra giá trị của searchInput
  var filteredProducts = [];

  // Lọc sản phẩm dựa trên tên sản phẩm chứa từ khóa tìm kiếm
  for (var i = 0; i < productList.length; i++) {
    var productName = productList[i].NamePro.toLowerCase();
    if (productName.includes(searchInput)) {
      filteredProducts.push(productList[i]);
    }
  }

  // Hiển thị kết quả tìm kiếm
  console.log("Filtered products: ", filteredProducts); // Kiểm tra kết quả lọc
  displaySearchResults(filteredProducts);
}

// Hàm hiển thị kết quả tìm kiếm
function displaySearchResults(results) {
  var tableBody = document.getElementById("tblProductList");
  tableBody.innerHTML = "";
  results.forEach(product => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${product.id}</td>
      <td>${product.NamePro}</td>
      <td><img src="${product.Image}" alt="${product.NamePro}" style="width: 50px; height: 50px;"></td>
      <td>${product.Price}</td>
      <td>${product.Type}</td>
      <td>${product.Description}</td>
      <td>
        <button onclick="deleteProduct('${product.id}')" class="btn btn-danger me-1" title="Delete"><i class="fa fa-trash-alt"></i></button>
        <button onclick="editProduct('${product.id}')" class="btn btn-success me-1" title="Edit"><i class="fa fa-pencil-alt"></i></button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

// Gắn sự kiện submit cho form
document.querySelector("form").addEventListener("submit", searchProduct);

// Gọi hàm để lấy danh sách sản phẩm từ API khi trang được tải
fetchProductList();



// Sort


// Hàm lấy danh sách sản phẩm từ API và lưu vào biến productList
function fetchProductList() {
  proServices.getListProduct()
    .then(function (res) {
      productList = res.data; // Lưu danh sách sản phẩm vào biến toàn cục
      renderProductList(productList); // Hiển thị danh sách sản phẩm
    })
    .catch(function (err) {
      console.log("🚀 ~ err:", err);
    });
}

// Hàm tìm kiếm sản phẩm
function searchProduct(event) {
  event.preventDefault(); // Ngăn chặn hành động mặc định của nút submit
  var searchInput = document.getElementById("searchInput").value.toLowerCase(); // Lấy giá trị từ trường tìm kiếm và chuyển thành chữ thường
  console.log("Search input: ", searchInput); // Kiểm tra giá trị của searchInput
  var filteredProducts = [];

  // Lọc sản phẩm dựa trên tên sản phẩm chứa từ khóa tìm kiếm
  for (var i = 0; i < productList.length; i++) {
    var productName = productList[i].NamePro.toLowerCase();
    if (productName.includes(searchInput)) {
      filteredProducts.push(productList[i]);
    }
  }

  // Hiển thị kết quả tìm kiếm
  console.log("Filtered products: ", filteredProducts); // Kiểm tra kết quả lọc
  displaySearchResults(filteredProducts);
}

// Hàm hiển thị kết quả tìm kiếm
function displaySearchResults(results) {
  var tableBody = document.getElementById("tblProductList");
  tableBody.innerHTML = "";
  results.forEach(product => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${product.id}</td>
      <td>${product.NamePro}</td>
      <td><img src="${product.Image}" alt="${product.NamePro}" style="width: 50px; height: 50px;"></td>
      <td>${product.Price}</td>
      <td>${product.Type}</td>
      <td>${product.Description}</td>
      <td>
        <button onclick="deleteProduct('${product.id}')" class="btn btn-danger me-1" title="Delete"><i class="fa fa-trash-alt"></i></button>
        <button onclick="editProduct('${product.id}')" class="btn btn-success me-1" title="Edit"><i class="fa fa-pencil-alt"></i></button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

// Hàm sắp xếp sản phẩm
function sortProducts(order) {
  let sortedProducts = [...productList];
  if (order === 'high-to-low') {
    sortedProducts.sort((a, b) => b.Price - a.Price);
  } else if (order === 'low-to-high') {
    sortedProducts.sort((a, b) => a.Price - b.Price);
  }
  displaySearchResults(sortedProducts);
}

// Gắn sự kiện submit cho form
document.querySelector("form").addEventListener("submit", searchProduct);

// Gọi hàm để lấy danh sách sản phẩm từ API khi trang được tải
fetchProductList();






