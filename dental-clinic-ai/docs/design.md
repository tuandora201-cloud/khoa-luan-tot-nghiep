# Thiết kế nền tảng v0.1
Một phòng khám, bốn vai trò. React SPA + REST Express + Sequelize + MySQL. RAG dự kiến Qdrant và Gemini, chưa kết nối.

## Quy tắc cần hoàn thiện trước API nghiệp vụ
- Lịch hẹn có thời điểm bắt đầu/kết thúc; khóa hàng bác sĩ trong transaction rồi kiểm tra giao nhau trước khi tạo hoặc đổi lịch. Index không tự ngăn trùng khoảng thời gian.
- Bệnh án thuộc bệnh nhân và lượt khám; kế hoạch điều trị có nhiều buổi; hóa đơn và thanh toán độc lập trạng thái lịch.
- RBAC và kiểm tra quyền trên từng đối tượng; bệnh nhân chỉ xem dữ liệu của mình; bác sĩ chỉ xem hồ sơ được phân công.
- Chatbot dùng tài liệu đã duyệt, không chẩn đoán, không gửi hồ sơ cá nhân sang AI mặc định. Giá và lịch lấy từ API nghiệp vụ.

## ERD nền tảng (chưa đầy đủ)
roles 1—N users; users 1—0..1 patients; users 1—0..1 doctors; patients 1—N appointments; doctors 1—N appointments; services 1—N appointments.

## Giai đoạn tiếp theo
Chốt lịch làm việc, bệnh án, điều trị, hóa đơn, thông báo, audit và kho tri thức; hoàn thiện ERD và migration; sau đó auth, API và dashboard.
