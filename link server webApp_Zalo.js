const baseURL = "http://api-nextcrm.nextcrm.vn/";

const DanhSachSanPham =
  "/api/loyalty-app/sell/list-product?page=1&search[branch_id]=1&pageLimit=50&filter_sort=price_asc";

const link_server = {
  DanhSachSanPham:
    "/api/loyalty-app/sell/list-product?page=1&search[branch_id]=1&pageLimit=50&filter_sort=price_asc",
  ChiTietSanPham:
    "/api/loyalty-app/sell/product-view?variation_id=289&unit_id=232&branch_id=14",
  DanhSachThuongHieu: "/api/loyalty-app/brands?page=1&pageLimit=5&strSearch=",
  ThongTimThuongHieu: "/api/loyalty-app/brands/2",
  DanhSachNhomSanPham:
    "/api/loyalty-app/product-category?strSearch=&is_suggest=1",
  DanhSachTheKhachHang: "/api/loyalty-app/membership-card-type",
};

/* 
deploy zalo app

B1: root => app
B2: baseURl in app.js (BrowserRouter)
B3: converts config in file static
B4: build
B5: zmp init
*/
