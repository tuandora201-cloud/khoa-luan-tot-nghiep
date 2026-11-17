# Élan Dental Studio — v0.2

Bản triển khai nghiệp vụ thử nghiệm, chưa được xác nhận chạy end-to-end. Node.js 22, Express, React/Vite, MySQL 8, Sequelize (truy vấn SQL tham số hóa), Yarn, Qdrant và Gemini. Dữ liệu mô phỏng; không dùng hồ sơ thật.

## Khởi chạy Windows
1. Cài MySQL Server 8 và MySQL Workbench. Mở `database/schema.sql` trong Workbench và chạy toàn bộ trên database mới. Nếu đã chạy schema v0.1, dùng database mới bằng cách đổi tên ở hai dòng đầu và DB_NAME; không ghi đè dữ liệu cũ.
2. Trong PowerShell, từ thư mục dự án: `cd backend`; `Copy-Item .env.example .env`; mở `.env` bằng VS Code, điền mật khẩu MySQL, JWT_SECRET ngẫu nhiên riêng (>=32 ký tự), DEMO_PASSWORD riêng (>=12 ký tự). Có thể dùng `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"` để tạo JWT_SECRET.
3. `yarn install`; `yarn seed`; `yarn start`. API: http://localhost:3001/api/health.
4. Terminal khác: `cd frontend`; `yarn install`; `yarn dev`. Mở http://localhost:5173.
5. Tài khoản mẫu: admin@elan.test, doctor@elan.test, reception@elan.test, patient@elan.test. Mật khẩu là DEMO_PASSWORD bạn đặt. Seed tạo lịch làm việc 30 ngày và dịch vụ giả lập.
6. AI: cài Docker, chạy `docker compose up -d` ở thư mục gốc. Điền GEMINI_API_KEY trong backend/.env, khởi động lại backend. Admin thêm tài liệu đã được chuyên gia phê duyệt trong Kho tri thức, đánh dấu phê duyệt để tạo embedding. Không đưa dữ liệu cá nhân vào chatbot. API có thể phát sinh chi phí. Nếu chưa có key, chatbot báo chưa cấu hình, không giả lập câu trả lời.

## Kiểm thử
`cd backend; yarn test` chạy 9 test chuyển trạng thái. Kiểm tra thủ công theo docs/test-plan.md. Chưa cài được dependency trong môi trường tạo bản này (DNS registry không truy cập được), chưa có MySQL Server, Qdrant hoặc API key. Không tuyên bố đã build hoặc chạy tích hợp.

## Giới hạn
Chưa có sửa/khóa tài khoản, lịch trống theo slot, thông báo tự động, lịch sử chat, chatbot tra cứu lịch trống, cá nhân hóa hồ sơ, Chart.js (hiện biểu đồ CSS), audit log đầy đủ, migration nâng cấp, khóa dependency, E2E và triển khai production. Điều trị theo hồ sơ từng buổi, chưa liên kết kế hoạch nhiều buổi. Hóa đơn một dịch vụ mỗi lịch, hỗ trợ nhiều lần thanh toán. Giao diện dashboard dùng form ID cho một số thao tác. Cần kiểm thử bảo mật, rate limit, xác thực dữ liệu, giao dịch đồng thời, và đánh giá RAG trước sử dụng thực tế.
