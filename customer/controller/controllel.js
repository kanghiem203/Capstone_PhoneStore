// Hàm render danh sách sản phẩm
function renderProductList(productList) {
    const productContainer = document.getElementById('product-list');
    let content = '';
    productList.forEach(product => {
      content += `
        <div class="col-4 mb-4">
          <div class="card">
            <div class="card-body">
              <div class="item d-flex">
                <div class="left">
                  <img src="${product.Image}" class="rounded" alt="${product.NamePro}" width="90px" height="100px">
                </div>
                <div class="right ms-3">
                  <h5 class="card-title">${product.NamePro}</h5>
                  <h5 class="card-title text-secondary"><i class="fa fa-money-check-alt me-2"></i>${product.Price}</h5>
                  <p class="card-text">${product.Description}</p>
                </div>
              </div>
              <div class="bot mt-2 d-flex justify-content-between">
                <button class="btn btn-primary" onclick="addToCart('${product.id}')"><i class="fa fa-cart-plus"></i> Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      `;
    });
    productContainer.innerHTML = content;
  }
  
  // Hàm khởi tạo trang
  async function initializePage() {
    const productList = await fetchProductList();
    renderProductList(productList);
  }
  
  // Gọi hàm khởi tạo khi trang được tải
  document.addEventListener('DOMContentLoaded', initializePage);

 