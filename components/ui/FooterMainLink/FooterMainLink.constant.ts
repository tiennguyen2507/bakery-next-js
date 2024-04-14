export type FooterLinkType = Array<{
  title: string;
  children: Array<{ name: string; path: string }>;
}>;

export const clubs: FooterLinkType = [
  {
    title: "COOLCLUB",
    children: [
      { name: "Đăng kí thành viên", path: "/" },
      { name: "Ưu đãi & Đặc quyền", path: "/" },
    ],
  },
];

export const policy: FooterLinkType = [
  {
    title: "CHÍNH SÁCH",
    children: [
      { name: "Chính sách đổi trả 60 ngày", path: "/" },
      { name: "Chính sách khuyến mãi", path: "/" },
      { name: "Chính sách bảo mật", path: "/" },
      { name: "Chính sách giao hàng", path: "/" },
    ],
  },
  {
    title: "COOLMATE.ME",
    children: [{ name: "Lịch sử thay đổi website", path: "/" }],
  },
];

export const customerCares: FooterLinkType = [
  {
    title: "CHĂM SÓC KHÁCH HÀNG",
    children: [
      { name: "Trải nghiệm mua sắm 100% hài lòng", path: "/" },
      { name: "Hỏi đáp - FAQs", path: "/" },
    ],
  },
  {
    title: "KIẾN THỨC MẶC ĐẸP",
    children: [
      { name: "Hướng dẫn chọn size", path: "/" },
      { name: "Blog", path: "/" },
      { name: "Group mặc đẹp sống chất", path: "/" },
    ],
  },
];

export const documentRecruitment: FooterLinkType = [
  {
    title: "TÀI LIỆU - TUYỂN DỤNG",
    children: [
      { name: "Tuyển dụng", path: "/" },
      { name: "Đăng ký bản quyền", path: "/" },
    ],
  },
  {
    title: "VỀ COOLMATE",
    children: [
      { name: "Coolmate 101", path: "/" },
      { name: "DVKH xuất sắc", path: "/" },
      { name: "Câu chuyện về Coolmate", path: "/" },
      { name: "Nhà máy", path: "/" },
      { name: "Care & Share", path: "/" },
    ],
  },
];

export const addressContact: FooterLinkType = [
  {
    title: "ĐỊA CHỈ LIÊN HỆ",
    children: [
      {
        name: "Văn phòng Hà Nội: Tầng 3-4, Tòa nhà BMM, KM2, Đường Phùng Hưng, Phường Phúc La, Quận Hà Đông, TP Hà Nội",
        path: "/",
      },
      {
        name: "Văn phòng Tp HCM: Lầu 1, Số 163 Trần Trọng Cung, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh",
        path: "/",
      },
    ],
  },
];
