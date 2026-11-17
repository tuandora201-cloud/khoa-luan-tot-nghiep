# Kịch bản kiểm thử tích hợp (chưa chạy)
- Đăng ký bệnh nhân, đăng nhập 4 vai trò, kiểm tra API từ chối token thiếu/sai.
- Admin thêm bác sĩ/dịch vụ; lễ tân tạo ca; bệnh nhân đặt lịch tương lai; thử hai yêu cầu đồng thời cùng khung giờ và ngoài ca.
- Lễ tân xác nhận, tiếp nhận; bác sĩ bắt đầu khám, lưu hồ sơ và điều trị, hoàn thành; thử bỏ qua trạng thái và truy cập hồ sơ bác sĩ khác.
- Lễ tân lập hóa đơn, ghi nhận hai lần thanh toán; thử vượt tổng tiền và hóa đơn trùng; bệnh nhân chỉ thấy hóa đơn của mình.
- Admin kiểm tra tổng doanh thu bằng tổng payments.
- AI: thêm tài liệu được duyệt, hỏi câu có nguồn, câu ngoài phạm vi, câu yêu cầu chẩn đoán, prompt injection, câu có dấu hiệu khẩn cấp; kiểm tra nguồn và không gửi hồ sơ cá nhân.
