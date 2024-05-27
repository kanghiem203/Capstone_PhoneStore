

// Hàm lấy danh sách sản phẩm từ API thông qua service
async function fetchProductList() {
    try {
      const response = await productService.getListProduct();
      return response.data.reverse();
    } catch (error) {
      console.error('Error fetching product list:', error);
      return [];
    }
  }

// Hàm lọc và hiển thị sản phẩm theo loại
async function filterProductByType(type) {
  try {
      const productList = await fetchProductList(); // Sử dụng hàm fetchProductList mà không truyền tham số
      const filteredList = productList.filter(product => product.type === type);
      renderProductList(filteredList, 'filtered-products');
  } catch (error) {
      console.error('Error filtering product list:', error);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Lắng nghe sự kiện click trên các mục dropdown-item
  document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function(event) {
      event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ a
      const type = this.getAttribute('data-type'); // Lấy giá trị của thuộc tính data-type
      filterProductByType(type); // Gọi hàm filterProductByType với loại sản phẩm đã chọn
    });
  });
});

