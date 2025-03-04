import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="font-bold text-2xl text-primary">
              Chip & Chill Store
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Giải pháp lưu trữ đám mây và phần mềm sáng tạo chuyên nghiệp
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Truy Cập Nhanh</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Dịch Vụ
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Bảng Giá
                </a>
              </li>
              <li>
                <a
                  href="#guarantees"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Cam Kết
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Liên Hệ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Liên Hệ</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                Email: minhhai113he@gmail.com
              </li>
              <li className="text-sm text-muted-foreground">
                Điện thoại: 0773448750
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Pháp Lý</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Điều Khoản Sử Dụng
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Chính Sách Bảo Mật
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Chip&Chill Store. Đã đăng ký bản
            quyền.
          </p>
        </div>
      </div>
    </footer>
  );
}
