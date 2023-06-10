import React from "react";
import { ReactComponent as Chatzalo } from "../../../icon/chatText.svg";
import "./detail.css";

const DetailProduct = () => {
  const VND = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    currencyDisplay: "code",
  });
  return (
    <React.Fragment>
      <div className="detail__backgroundimage">
        <img
          src="https://newcdn.onshop.asia/images/narylee/bo-ni-bong-hinh-tho-cute-de-thuong.jpg"
          alt="lỗi"
        />
        <div>
          <h2>Bộ đồ mặc nhà cotton áo cộc quần sooc ST9043</h2>
          <p className="price">{VND.format(6452200)}</p>
        </div>
      </div>

      <div className="detail__background">
        <div>
          <h4>Chi tiết sản phẩm</h4>
          <ul>
            <h3>MÔ TẢ SẢN PHẨM:</h3>
            <li>Tên sản phẩm: Đồ bộ mặc nhà cotton áo cộc quần sooc</li>
            <li>Chất liệu vải: Cotton</li>
            <li>Số size: S-M-L-XL</li>
            <li>Màu sắc: Xanh két, biến đậm, hồng nâu, tím nhạt</li>
            <li>Thương hiệu: Sunfly</li>
            <li>Xuất xứ: Việt Nam</li>
          </ul>
          <h3>ĐIỂM NHẤN NỐI BẬT:</h3>
          <h4>Chất liệu và tính năng nổi bật của chất liệu: </h4>
          <ul>
            <li>Thành phần: 92% cotton compact, 8% spandex</li>
            <li>
              Ưu điểm của chất liệu: bề mặt mượt mà, hạn chế tối đa đến 90% sự
              bai nhão, xù lông. Chất liệu có ưu điểm co giãn, thấm hút và
              thoáng khí. Kết cấu sợi dài hơn cotton thường gấp 2-3 lần
            </li>
          </ul>
          <ul>
            <h4>Điểm nhấn thiết kế:</h4>
            <li>Họa tiết thỏ độc đáo, mới lạ</li>
            <li>Điểm nhấn đường can phối ở quần tăng phần độc đáo</li>
            <li>Form đáng thoải mái, trẻ trung, năng động</li>
          </ul>
          <ul>
            <h4>Tính năng, công dụng của sản phẩm: </h4>
            <li>Thoái mái, mát mẻ khi mặc ở nhà</li>
            <li>Trẻ trung, hợp thời trang, đa năng khi dạo phố, mua sắm</li>
            <li>Mềm mại dễ chịu khi mặc đi ngủ</li>
          </ul>
          <p>
            <b>Xuất xứ</b>: Sản phẩm được thiết kế độc quyền và sản xuất tỉ mỉ
            từng khâu, cam kết đảm bảo chất lượng bởi Sunfly.
          </p>
          <ul>
            <h4>Size màu sản phẩm:</h4>
            <li>Các màu sản phẩm: Xanh két, biển đậm, hồng nâu, tím nhạt</li>
            <b>
              (Lưu ý: Do điều kiện thiết bị và ánh sáng khác nhau, màu sắc thực
              tế của sản phẩm có thể chênh lệch khoảng 3 - 5% so với màu thực tế
              của sản phẩm).
            </b>
            <li>Các size: S-M-L-XL</li>
          </ul>
          <p>
            <b>Tư vấn chọn size:</b> Tham khảo bảng chọn size của sunfly. Hoặc
            chat để được nhân viên tư vaná thêm veè size phù hợp.
          </p>
          <div>
            <img
              src="https://file.hstatic.net/1000304105/file/bang_size_nu_8886a4789fd34d10881e2d4d0b339040.jpg"
              alt=""
            />
          </div>
          <h3>CHÍNH SÁCH ĐÔI TRẢ:</h3>
          <p>
            Giao hàng đúng size- màu, lỗi 1 đổi 1. Nếu có bất kì khiếu nại cần
            SUNFLY hỗ trợ về sản phẩm, khi mở sản phẩm, khách hàng vui lòng quay
            lại video quá trình mở sản phẩm để được đảm bảo 100% đổi lại sản
            phẩm mới nếu SUNFLY giao bị lỗi.
          </p>
          <div>
            <img
              src="https://bizweb.dktcdn.net/100/424/488/files/doi-tra.jpg?v=1622728800229"
              alt=""
            />
          </div>
          <h3>HƯỚNG DẤN SỬ DỤNG </h3>
          <div style={{ paddingBottom: "1rem" }}>
            <img
              src="https://hellodongphuc.com/uploads/images/quy-trinh-giat-dung-cach.jpg"
              alt=""
            />
          </div>
          <h3>vỀ THƯƠNG HIỆU THỜI TRANG SUNFLY: </h3>
          <ul>
            <li>
              Sunfly được ra đời với sứ mệnh mang lại vẻ đẹp tươi trẻ,tự tin và
              năng động cho các chị em phụ nữ VN trong những giờ phút bên gia
              đình và người thân. Sau hơn 17 năm xây dựng và phát phát
              triển,Sunfly vẫn luôn tự hào là 1 thương hiệu thời trang mặc nhà
              đứng đầu tại thị trường Việt Nam.
            </li>
            <li>Cảm ơn các bạn đã tin tưởng và yêu thích SUNFLY</li>
            <li>
              Hãy Follow các kênh của Sunfly ngay, để được nhận ngay các ưu đãi
              độc quyền và được chăm sóc chu đáo nhất.
            </li>
            <li>
              Hãy chia sẻ sản phẩm của SUNFLY cho bạn bè người thân khi thích
              sản phẩm.
            </li>
          </ul>
        </div>
      </div>
      <div className="detail__footer drop-shadow-4xl">
        <div>
          <Chatzalo />
        </div>
        <button className="bt-add">Thêm vào giỏ hàng</button>
        <button className="bt-buy">Mua ngay</button>
      </div>
    </React.Fragment>
  );
};

export default DetailProduct;
