# IC3 GS6 Adventure — Grade 6 Treasure Edition

Website trò chơi học tập IC3 GS6 dành cho học sinh lớp 6, chạy tĩnh trên GitHub Pages.

## Bản cập nhật
- Bản đồ vượt ải theo phong cách hành trình kho báu, các nút mở khóa theo tiến độ.
- 21 thử thách: Hardware Kingdom có 6 cửa ải; các thế giới còn lại giữ bộ thử thách hiện có.
- Sửa điều hướng render các trò chơi Runner, Maze, Memory và Sort; trước đây các dạng này có thể mở màn chơi trống.
- Xáo trộn câu hỏi và đáp án trắc nghiệm theo lượt; xáo trộn thứ tự lựa chọn ở trò ghép cặp.
- Chấp nhận tên lớp tự do, ví dụ `6.2`, `6A2`, `6A1`.
- Lắp ráp 8 linh kiện trên bo mạch 2D; khay linh kiện không hiển thị tên linh kiện, thay bằng hình minh họa và chức năng. Linh kiện chia theo nhóm CPU/Tản nhiệt, Bo mạch & kết nối, Bộ nhớ/Lưu trữ, Đồ họa, Nguồn.
- Báo rõ linh kiện còn thiếu; giải thích nguyên tắc lắp và trừ 5 XP thưởng mỗi lần kiểm tra sai.
- Có nút đăng xuất; tiến trình cá nhân vẫn lưu trên trình duyệt.
- Có trang giáo viên: danh sách học sinh, lọc lớp, đổi/phân lớp, đánh giá tự động, xuất CSV mở được bằng Excel, làm mới và xóa bảng xếp hạng.

## Chạy thử
Mở `index.html` hoặc dùng VS Code Live Server. Học sinh nhập tên và tên lớp tự do.

## Kết nối Google Sheets
1. Mở Google Sheet → Extensions → Apps Script.
2. Dán nội dung `google-apps-script/Code.gs`.
3. Trong Apps Script, mở **Project Settings → Script Properties → Add script property**.
4. Tạo property `TEACHER_PASSWORD` và đặt giá trị mật khẩu giáo viên mà nhà trường đã thống nhất. Mật khẩu được lưu phía máy chủ, không nhúng trong mã nguồn GitHub.
5. Deploy → New deployment → Web app. Chọn Execute as: Me; Who has access: Anyone.
6. Sao chép URL `/exec`, dán vào `config.js` tại `GOOGLE_SCRIPT_URL`.
7. Mỗi lần cập nhật Apps Script, tạo deployment version mới.

**Lưu ý bảo mật:** Vì Google Apps Script Web App công khai endpoint bảng điểm, mật khẩu giáo viên chỉ dùng để bảo vệ thao tác quản trị; không chia sẻ mật khẩu này. Không đặt mật khẩu trong `app.js`, `config.js` hoặc repository công khai.

## GitHub Pages
1. Tạo repository GitHub mới.
2. Giải nén ZIP, tải trực tiếp các tệp trong thư mục dự án lên root repository (không tải thư mục cha).
3. Vào Settings → Pages → Deploy from a branch → `main` → `/(root)` → Save.
4. Sau khi GitHub Pages triển khai xong, mở URL website để kiểm tra.

## Giới hạn hiện tại
- Tiến trình cá nhân lưu ở trình duyệt của học sinh; không tự đồng bộ giữa nhiều thiết bị.
- Bảng xếp hạng và trang giáo viên tập trung cần Google Sheets được cấu hình và triển khai đúng.
- Xuất kết quả hiện ở định dạng CSV UTF-8, mở được bằng Excel.
- Bo mạch là mô phỏng 2D phục vụ học tập, không thay thế hướng dẫn tháo lắp máy tính thật.
