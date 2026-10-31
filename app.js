(() => {
"use strict";
const $=id=>document.getElementById(id);
const worlds={
 hardware:{title:"Hardware Kingdom",desc:"Xưởng kỹ thuật: lắp ráp, kiểm tra tương thích và chẩn đoán phần cứng.",icon:"🖥️",levels:[
 {id:"h1",title:"Lắp ráp bo mạch chủ",kind:"board",desc:"Bạn được giao lắp một bộ PC văn phòng. Chọn từng linh kiện ở khay, sau đó chọn đúng khu vực lắp trên bo mạch chủ.",note:"CPU đặt vào socket tương thích; RAM vào khe DIMM; SSD M.2 vào khe M.2; card đồ họa vào PCIe x16; dây nguồn đúng đầu cắm.",win:"Đặt đúng 8 linh kiện vào đúng khu vực. Các linh kiện phải khớp vị trí vật lý.",parts:[["CPU","▦","Socket CPU","Bộ xử lý trung tâm – thực hiện lệnh và tính toán"],["RAM DDR4","▤","Khe DIMM","Bộ nhớ tạm – giữ dữ liệu đang dùng"],["GPU","▰","PCIe x16","Xử lý và xuất hình ảnh"],["SSD M.2","▱","Khe M.2","Lưu hệ điều hành, ứng dụng và tệp"],["Nguồn ATX 24-pin","▥","Nguồn ATX","Cấp điện cho bo mạch chủ"],["Tản nhiệt CPU","❄","Trên CPU","Giúp CPU không quá nóng"],["Pin CMOS","◉","Khu vực pin CMOS","Giữ đồng hồ và một số thiết lập khi tắt máy"],["Cổng SATA","▤","Cổng SATA","Kết nối ổ cứng hoặc SSD SATA"]],slots:["Socket CPU","Khe DIMM","PCIe x16","Khe M.2","Nguồn ATX","Trên CPU","Khu vực pin CMOS","Cổng SATA"],correct:[0,1,2,3,4,5,6,7]},
 {id:"h2",title:"Nhận diện phần cứng cơ bản",kind:"choice",desc:"Khám phá những bộ phận quen thuộc bên trong và bên ngoài máy tính. Mỗi bộ phận có một nhiệm vụ riêng.",note:"CPU xử lý lệnh; RAM giữ thông tin đang dùng; ổ lưu trữ giữ tệp lâu dài; bo mạch chủ kết nối các bộ phận; nguồn cấp điện; màn hình và bàn phím giúp người dùng giao tiếp với máy.",win:"Nhận biết đúng các bộ phận và công dụng.",questions:[
 ["Máy có card đồ họa rời. Dây HDMI đang cắm vào cổng trên mainboard, không phải card đồ họa. Việc đầu tiên nên làm?",["Cắm dây vào cổng xuất hình của card đồ họa rời","Thay CPU ngay","Format ổ SSD","Tháo pin CMOS"],0],
 ["Sau khi cắm đúng cổng, màn hình vẫn No Signal. Máy vừa được vệ sinh và RAM có thể bị lỏng. Nên làm gì khi đã tắt nguồn, rút điện?",["Tháo và lắp lại RAM đúng khớp, thử từng thanh","Cập nhật trình duyệt","Thay bàn phím","Xóa phân vùng ổ cứng"],0],
 ["Máy phát 5 tiếng bíp ngắn theo tài liệu BIOS của nhà sản xuất ghi lỗi bộ nhớ. Hướng xử lý phù hợp?",["Kiểm tra RAM/khe RAM theo hướng dẫn bo mạch chủ","Thay màn hình cảm ứng","Cài lại Word","Đổi dây mạng LAN"],0]]},
 {id:"h3",title:"Thiết bị nhập và thiết bị xuất",kind:"match",desc:"Giúp bạn Nam phân biệt thiết bị gửi thông tin vào máy tính và thiết bị đưa kết quả từ máy tính ra ngoài.",note:"Thiết bị nhập: bàn phím, chuột, micro, webcam, máy quét. Thiết bị xuất: màn hình, loa, máy in. Một số thiết bị có thể vừa nhập vừa xuất.",win:"Ghép đúng thiết bị với tác dụng chính.",pairs:[["Bàn phím","Nhập chữ và số"],["Chuột","Điều khiển con trỏ, chọn lệnh"],["Micro","Nhập âm thanh"],["Màn hình","Hiển thị hình ảnh và chữ"],["Loa","Phát âm thanh"],["Máy in","In nội dung ra giấy"]],options:["Nhập chữ và số","Điều khiển con trỏ, chọn lệnh","Nhập âm thanh","Hiển thị hình ảnh và chữ","Phát âm thanh","In nội dung ra giấy"]},
 {id:"h4",title:"Kết nối các thiết bị",kind:"match",desc:"Chọn đúng cách kết nối để máy tính nhận được thiết bị và hoạt động bình thường.",note:"USB thường dùng cho chuột, bàn phím và nhiều thiết bị khác; HDMI truyền hình ảnh và âm thanh đến màn hình; dây mạng giúp kết nối mạng có dây; Wi-Fi kết nối mạng không dây; Bluetooth kết nối thiết bị ở khoảng cách gần.",win:"Ghép đúng cổng hoặc cách kết nối.",pairs:[["Chuột có dây","Cổng USB"],["Màn hình và máy tính","Cáp HDMI"],["Máy tính bàn vào mạng có dây","Cáp mạng Ethernet"],["Tai nghe không dây","Bluetooth"],["Máy tính kết nối mạng không dây","Wi-Fi"]],options:["Cổng USB","Cáp HDMI","Cáp mạng Ethernet","Bluetooth","Wi-Fi"]},
 {id:"h5",title:"Phần mềm máy tính",kind:"choice",desc:"Khám phá những chương trình giúp máy tính khởi động, học tập, giải trí và làm việc.",note:"Hệ điều hành giúp máy tính hoạt động và quản lý thiết bị. Phần mềm ứng dụng giúp người dùng soạn thảo, vẽ, học tập, xem video. Phần mềm cần phần cứng để chạy.",win:"Phân biệt đúng hệ điều hành và phần mềm ứng dụng.",questions:[
 ["Đèn DRAM trên mainboard sáng vàng liên tục, máy không qua POST sau khi nâng cấp RAM.",["RAM chưa tương thích, lắp chưa khít hoặc khe RAM có vấn đề","Ổ cứng đầy","Chuột hết pin","Máy thiếu phần mềm diệt virus"],0],
 ["Đèn VGA sáng, máy không xuất hình sau khi lắp GPU mới.",["Kiểm tra GPU cắm hết khe PCIe và dây nguồn PCIe","Xóa lịch sử trình duyệt","Đổi DNS","Tắt âm thanh hệ thống"],0],
 ["Máy tự tắt ngay khi chạy tác vụ nặng sau khi thay GPU công suất cao.",["Kiểm tra công suất/chất lượng PSU và nhiệt độ","Đổi hình nền","Gỡ bộ gõ tiếng Việt","Tắt Bluetooth"],0],
 ["BIOS nhận CPU và RAM nhưng không tìm thấy ổ khởi động.",["Kiểm tra kết nối ổ, chế độ lưu trữ và thứ tự boot","Thay card mạng","Cắm lại loa","Đổi độ phân giải"],0]]},
 {id:"h6",title:"Đội cứu hộ máy tính lớp 6",kind:"choice",desc:"Giúp bạn Mai hiểu các bộ phận của máy tính và cách chúng phối hợp để hoàn thành bài học.",note:"Phần cứng là các bộ phận có thể nhìn thấy hoặc chạm vào. Phần mềm là chương trình hướng dẫn máy tính làm việc. Phần mềm cần phần cứng để chạy; phần cứng cần phần mềm để hoạt động theo yêu cầu. Thiết bị nhập đưa thông tin vào, thiết bị xuất đưa kết quả ra.",win:"Trả lời đúng 5 tình huống về phần cứng, phần mềm và kết nối.",questions:[
 ["Mai gõ bài văn bằng bàn phím. Bàn phím có tác dụng gì?",["Đưa chữ và lệnh vào máy tính","In bài văn ra giấy","Phát âm thanh","Lưu điện khi mất điện"],0],
 ["Sau khi máy xử lý bài văn, Mai muốn nhìn thấy nội dung trên màn hình. Màn hình là thiết bị gì?",["Thiết bị xuất","Thiết bị nhập","Bộ nhớ lưu trữ","Phần mềm"],0],
 ["Mai dùng chuột để chọn một biểu tượng trên màn hình. Chuột giúp máy tính làm gì?",["Nhận thao tác điều khiển từ người dùng","Phát hình ảnh ra ngoài","Lưu bài tập lâu dài","Cấp điện cho máy"],0],
 ["Máy tính có bàn phím và màn hình nhưng không có phần mềm soạn thảo. Mai có thể làm gì?",["Cài hoặc mở một phần mềm soạn thảo phù hợp để viết bài","Dùng màn hình thay cho phần mềm","Tháo bàn phím","Máy tự hiểu bài văn cần viết"],0],
 ["Vì sao phần cứng và phần mềm cần hỗ trợ lẫn nhau?",["Phần cứng thực hiện công việc, phần mềm đưa ra hướng dẫn để máy làm đúng việc","Phần mềm có thể chạy mà không cần thiết bị","Phần cứng tự biết mọi yêu cầu của người dùng","Hai phần không liên quan đến nhau"],0]]}
 ]},
 software:{title:"Software City",desc:"Thành phố phần mềm: lựa chọn, cài đặt và quản lý ứng dụng đúng cách.",icon:"💿",levels:[
 {id:"s1",title:"Phân loại kho phần mềm",kind:"match",desc:"Phân loại các phần mềm theo vai trò chính. Một số công cụ có nhiều chức năng, hãy chọn nhóm phù hợp nhất trong tình huống này.",note:"Hệ điều hành quản lý tài nguyên máy tính; ứng dụng phục vụ công việc; tiện ích hỗ trợ bảo trì, bảo mật hoặc nén dữ liệu.",win:"Phân loại chính xác 6 phần mềm.",pairs:[["Windows 11","Hệ điều hành"],["Ubuntu","Hệ điều hành"],["Microsoft Excel","Phần mềm ứng dụng"],["Google Chrome","Phần mềm ứng dụng"],["7-Zip","Tiện ích hệ thống"],["Windows Security","Tiện ích bảo mật"]],options:["Hệ điều hành","Phần mềm ứng dụng","Tiện ích hệ thống","Tiện ích bảo mật"]},
 {id:"s2",title:"Kỹ sư cài đặt phần mềm",kind:"sequence",desc:"Phòng máy cần cài một phần mềm học tập từ trang chính thức. Sắp xếp quy trình an toàn theo thứ tự.",note:"Kiểm tra yêu cầu hệ thống và nguồn tải trước khi cài; đọc điều khoản; chọn thành phần cần thiết; kiểm tra sau cài đặt.",win:"Sắp xếp đúng 5 bước.",steps:["Kiểm tra cấu hình và dung lượng trống đáp ứng yêu cầu","Truy cập trang chính thức của nhà phát triển","Tải bộ cài và kiểm tra chữ ký/nguồn phát hành nếu có","Chạy trình cài đặt, đọc điều khoản và chọn tùy chọn phù hợp","Mở phần mềm, kiểm tra hoạt động và cập nhật bản vá"]},
 {id:"s3",title:"Điều tra giấy phép",kind:"choice",desc:"Một nhóm học sinh chuẩn bị phần mềm cho phòng máy. Xác định cách sử dụng hợp pháp và phù hợp.",note:"Phần mềm miễn phí không đồng nghĩa với mã nguồn mở. Phần mềm dùng thử có giới hạn; phần mềm thương mại cần giấy phép phù hợp.",win:"Giải quyết đúng 4 tình huống bản quyền.",questions:[
 ["Một phần mềm ghi Freeware. Nhận định nào chính xác nhất?",["Được dùng miễn phí theo điều kiện nhà phát hành; chưa chắc có mã nguồn mở","Luôn được sửa và phát hành lại mã nguồn","Không cần đọc điều khoản","Chắc chắn dùng được trong mọi mục đích thương mại"],0],
 ["Phòng máy muốn cài phần mềm thương mại cho 30 máy. Cần làm gì?",["Kiểm tra số lượng và loại giấy phép cho 30 thiết bị/người dùng","Mua một bản rồi sao chép tùy ý","Tắt Internet để không bị phát hiện","Đổi tên file cài đặt"],0],
 ["Một phần mềm Trial hết 30 ngày dùng thử. Hành động đúng?",["Mua giấy phép hoặc gỡ/cân nhắc giải pháp thay thế hợp pháp","Tìm cách bẻ khóa","Chỉnh lùi ngày hệ thống để né giới hạn","Chia sẻ key không rõ nguồn"],0],
 ["Mã nguồn mở có nghĩa là gì?",["Mã nguồn được cung cấp theo giấy phép cho phép xem/sửa/phân phối theo điều kiện","Không có tác giả","Không bao giờ có phí","Không cần tuân thủ giấy phép"],0]]},
 {id:"s4",title:"Chọn công cụ đúng việc",kind:"match",desc:"Máy tính văn phòng gặp các yêu cầu khác nhau. Ghép nhiệm vụ với công cụ phù hợp.",note:"Chọn công cụ theo mục đích, tránh cài phần mềm không rõ nguồn hoặc cấp quyền quá mức.",win:"Ghép đúng 5 yêu cầu.",pairs:[["Tạo bảng tính và tính tổng","Microsoft Excel / LibreOffice Calc"],["Nén nhiều tệp thành một gói","7-Zip"],["Chống mã độc và quét hệ thống","Windows Security"],["Họp trực tuyến có chia sẻ màn hình","Ứng dụng họp trực tuyến"],["Chỉnh sửa ảnh raster","Phần mềm chỉnh sửa ảnh"]],options:["Microsoft Excel / LibreOffice Calc","7-Zip","Windows Security","Ứng dụng họp trực tuyến","Phần mềm chỉnh sửa ảnh"]},
 {id:"s5",title:"Xử lý lỗi cài đặt",kind:"choice",desc:"Phần mềm không cài được trên máy phòng lab. Phân tích thông báo và chọn cách xử lý an toàn.",note:"Kiểm tra kiến trúc 32/64-bit, quyền cài đặt, dung lượng, yêu cầu hệ thống và nguồn tải.",win:"Chọn đúng giải pháp trong 4 ca.",questions:[
 ["Trình cài đặt báo 'This app can't run on your PC' trên Windows 64-bit.",["Kiểm tra phiên bản/kiến trúc ứng dụng và yêu cầu hệ điều hành","Tắt toàn bộ bảo mật","Xóa thư mục Windows","Tăng âm lượng loa"],0],
 ["Bộ cài tải từ một trang quảng cáo lạ yêu cầu tắt antivirus.",["Hủy cài đặt, tải từ trang chính thức và kiểm tra tính an toàn","Tắt antivirus rồi tiếp tục","Cấp quyền quản trị ngay","Chia sẻ bộ cài cho cả lớp"],0],
 ["Thông báo thiếu dung lượng ổ đĩa xuất hiện.",["Dọn dẹp tệp không cần thiết hoặc chọn ổ phù hợp sau khi kiểm tra","Xóa ngẫu nhiên thư mục hệ thống","Format tất cả ổ","Gỡ driver bàn phím"],0],
 ["Ứng dụng cần quyền quản trị để cài driver được giáo viên phê duyệt.",["Xác minh nguồn và nhờ người có quyền quản trị thực hiện","Mượn mật khẩu người khác","Tải bản crack","Tắt UAC vĩnh viễn"],0]]}
 ]},
 os:{title:"OS Fortress",desc:"Pháo đài hệ điều hành: khởi động, quản lý tệp và xử lý sự cố.",icon:"⚙️",levels:[
 {id:"o1",title:"Giải mã chuỗi khởi động",kind:"sequence",desc:"Sắp xếp các giai đoạn khởi động máy tính theo trình tự khái quát.",note:"Firmware UEFI/BIOS khởi tạo phần cứng, tìm thiết bị khởi động, chạy bootloader, nạp nhân hệ điều hành rồi hiển thị màn hình đăng nhập.",win:"Sắp xếp đúng 6 giai đoạn.",steps:["Nhấn nút nguồn, firmware UEFI/BIOS bắt đầu POST","Firmware khởi tạo và kiểm tra các thiết bị cơ bản","Firmware tìm thiết bị khởi động theo thứ tự boot","Bootloader được nạp và chuyển quyền điều khiển","Kernel và các dịch vụ hệ điều hành được nạp","Màn hình đăng nhập/desktop sẵn sàng"]},
 {id:"o2",title:"Task Manager — truy tìm thủ phạm",kind:"choice",desc:"Máy tính chậm bất thường. Dựa vào dữ liệu Task Manager, chọn hành động xử lý phù hợp.",note:"CPU, RAM, Disk và Network thể hiện mức sử dụng tài nguyên. Không kết thúc tiến trình hệ thống khi chưa hiểu chức năng.",win:"Chẩn đoán đúng 4 trường hợp.",questions:[
 ["CPU duy trì 98%, tiến trình lạ chiếm phần lớn tài nguyên và không thuộc ứng dụng đã cài.",["Kiểm tra tên/nhà phát hành, quét bảo mật trước khi xử lý","Tắt máy bằng cách rút điện","Xóa file hệ thống","Tăng độ sáng màn hình"],0],
 ["RAM gần 100% do nhiều tab trình duyệt và ứng dụng cùng mở.",["Lưu công việc, đóng tab/ứng dụng không cần và xem ứng dụng tiêu thụ RAM","Xóa driver đồ họa","Tắt tường lửa","Đổi mật khẩu Wi-Fi"],0],
 ["Disk 100% liên tục, máy phản hồi chậm. Bước kiểm tra đầu tiên?",["Xem tiến trình sử dụng đĩa, tình trạng ổ và tác vụ cập nhật","Format ngay ổ C","Thay màn hình","Gỡ mọi ứng dụng"],0],
 ["Một tiến trình có tên System đang hoạt động. Có nên End task ngay?",["Không; xác định tiến trình và tác động trước khi kết thúc","Có, mọi tiến trình đều có thể tắt","Xóa file System","Tắt nguồn ngay"],0]]},
 {id:"o3",title:"Hồ sơ định dạng tệp",kind:"match",desc:"Khôi phục dữ liệu cho nhóm học tập. Ghép phần mở rộng với loại tệp tương ứng.",note:"Phần mở rộng giúp nhận biết định dạng, nhưng không đảm bảo tệp an toàn. Không mở tệp đáng ngờ chỉ vì đuôi quen thuộc.",win:"Nhận diện chính xác 6 định dạng.",pairs:[[".docx","Tài liệu văn bản"],[".xlsx","Bảng tính"],[".pptx","Bài trình chiếu"],[".jpg","Ảnh raster"],[".mp3","Âm thanh"],[".zip","Tệp nén"]],options:["Tài liệu văn bản","Bảng tính","Bài trình chiếu","Ảnh raster","Âm thanh","Tệp nén"]},
 {id:"o4",title:"Khôi phục tệp bị xóa",kind:"choice",desc:"Một học sinh lỡ xóa thư mục bài tập. Hãy chọn quy trình phục hồi có khả năng thành công cao và hạn chế ghi đè dữ liệu.",note:"Kiểm tra Recycle Bin, lịch sử phiên bản và bản sao lưu. Hạn chế ghi thêm dữ liệu vào ổ chứa tệp đã mất.",win:"Chọn đúng cách xử lý trong 3 tình huống.",questions:[
 ["Tệp vừa bị xóa bằng phím Delete thông thường.",["Kiểm tra Recycle Bin và chọn Restore","Cài nhiều ứng dụng vào ổ C","Format ổ","Tắt máy bằng nút nguồn"],0],
 ["Tệp bị xóa khỏi Recycle Bin, máy có bật File History/backup.",["Kiểm tra bản sao lưu hoặc Previous Versions","Tạo tệp mới cùng tên để khôi phục","Xóa thêm dữ liệu","Đổi hình nền"],0],
 ["Tệp rất quan trọng bị xóa vĩnh viễn khỏi SSD.",["Ngừng ghi dữ liệu lên ổ và nhờ người có chuyên môn đánh giá khả năng phục hồi","Tiếp tục tải game vào ổ","Chạy dọn ổ liên tục","Chống phân mảnh SSD"],0]]},
 {id:"o5",title:"Sự cố màn hình xanh",kind:"choice",desc:"Máy tính khởi động lại và xuất hiện BSOD sau khi cài driver mới. Chọn kế hoạch khắc phục.",note:"Ghi lại mã dừng, xác định thay đổi gần nhất, dùng Safe Mode/System Restore hoặc driver ổn định; sao lưu dữ liệu trước thao tác lớn.",win:"Lập đúng phương án xử lý 4 bước.",questions:[
 ["Lỗi xuất hiện ngay sau khi cập nhật driver card đồ họa.",["Khởi động Safe Mode và rollback/cài driver chính thức ổn định","Cài driver từ trang chia sẻ không rõ nguồn","Xóa mọi phân vùng","Tắt cập nhật mãi mãi"],0],
 ["Trước khi sửa lỗi hệ thống, ưu tiên nào quan trọng?",["Sao lưu dữ liệu quan trọng nếu còn truy cập được","Đổi mật khẩu email của bạn bè","Xóa thư mục Documents","Tắt màn hình"],0],
 ["Máy vào được Windows nhưng lỗi lặp lại. Cần thu thập thông tin gì?",["Stop code, thời điểm lỗi và thay đổi phần cứng/phần mềm gần đây","Màu chuột","Tên Wi-Fi hàng xóm","Độ sáng màn hình"],0],
 ["Sau khi rollback driver, máy hoạt động ổn định. Nên làm gì tiếp?",["Ghi nhận phiên bản ổn định và chỉ cập nhật driver tương thích từ nguồn chính thức","Cài lại driver lỗi ngay","Xóa bản sao lưu","Tắt Windows Update vĩnh viễn"],0]]}
 ]},
 digital:{title:"Digital World",desc:"Thế giới số: bảo vệ danh tính, dữ liệu và kết nối mạng.",icon:"🛡️",levels:[
 {id:"d1",title:"Điều tra email giả mạo",kind:"choice",desc:"Bạn là thành viên đội phản ứng an toàn số. Kiểm tra các dấu hiệu trong email và chọn hành động đúng.",note:"Kiểm tra tên miền người gửi, URL thực tế, lỗi bất thường, yêu cầu khẩn cấp và tệp đính kèm. Không nhập mật khẩu/OTP qua liên kết đáng ngờ.",win:"Phân tích đúng 4 tình huống.",questions:[
 ["Email hiển thị tên 'Ngân hàng' nhưng địa chỉ gửi là support@bank-secure.example và yêu cầu xác minh gấp.",["Xem đây là dấu hiệu đáng ngờ, không bấm link; xác minh qua kênh chính thức","Trả lời kèm mật khẩu","Chuyển tiếp cho cả lớp","Tải tệp đính kèm"],0],
 ["Liên kết hiển thị tenmien-nganhang.vn nhưng khi rê chuột hiện URL khác.",["Không mở; báo cáo và truy cập trang chính thức bằng cách tự nhập địa chỉ","Bấm vì tên hiển thị đáng tin","Nhập OTP thử","Tắt trình duyệt"],0],
 ["Bạn nhận file .exe từ người lạ với lời nhắn 'ảnh kỷ yếu'.",["Không chạy tệp, xác minh người gửi và quét theo quy trình an toàn","Mở ngay","Đổi đuôi thành .jpg","Tắt antivirus"],0],
 ["Bạn đã nhập mật khẩu vào trang giả mạo.",["Đổi mật khẩu từ trang chính thức, đăng xuất phiên lạ, bật MFA và báo người phụ trách","Chờ xem có mất tài khoản không","Gửi OTP cho người gửi email","Xóa lịch sử trình duyệt là đủ"],0]]},
 {id:"d2",title:"Phá khóa mật khẩu yếu",kind:"choice",desc:"Đánh giá thói quen mật khẩu. Chọn phương án bảo vệ tài khoản tốt nhất trong từng tình huống.",note:"Dùng mật khẩu dài, riêng biệt cho từng dịch vụ; ưu tiên passphrase và trình quản lý mật khẩu; bật xác thực đa yếu tố.",win:"Chọn đúng 4 quyết định bảo mật.",questions:[
 ["Bạn đang dùng cùng một mật khẩu cho email, mạng xã hội và tài khoản học tập.",["Tạo mật khẩu riêng, dài cho từng dịch vụ và dùng password manager","Giữ nguyên vì dễ nhớ","Gửi mật khẩu cho bạn thân lưu hộ","Chỉ đổi một ký tự"],0],
 ["Một trang web yêu cầu mã OTP qua điện thoại để 'nhân viên hỗ trợ' đăng nhập hộ.",["Không cung cấp OTP; nhân viên hỗ trợ không cần mã bí mật của bạn","Đọc OTP qua điện thoại","Gửi ảnh màn hình OTP","Lưu OTP trong hồ sơ công khai"],0],
 ["Phương án nào tốt hơn cho mật khẩu chính?",["Cụm mật khẩu dài, khó đoán, không tái sử dụng và bật MFA","12345678","Tên + ngày sinh","Tên lớp + số thứ tự"],0],
 ["Bạn nghi ngờ mật khẩu bị lộ trong một vụ rò rỉ.",["Đổi mật khẩu tại dịch vụ chính thức, kiểm tra phiên đăng nhập và bật MFA","Đăng bài công khai mật khẩu để hỏi","Dùng lại mật khẩu cũ","Tắt thông báo bảo mật"],0]]},
 {id:"d3",title:"Kiến trúc mạng mini",kind:"match",desc:"Phòng máy có modem/router, switch, máy tính và access point. Ghép thiết bị với vai trò phù hợp.",note:"Router định tuyến giữa các mạng; switch kết nối thiết bị trong LAN; access point cung cấp kết nối Wi-Fi; modem kết nối đường truyền ISP.",win:"Ghép đúng 5 thiết bị và chức năng.",pairs:[["Router","Định tuyến giữa các mạng"],["Switch","Kết nối nhiều thiết bị trong mạng LAN"],["Access Point","Cung cấp kết nối mạng không dây"],["Modem/ONT","Kết nối đường truyền từ nhà cung cấp dịch vụ"],["Ethernet","Truyền dữ liệu mạng có dây"]],options:["Định tuyến giữa các mạng","Kết nối nhiều thiết bị trong mạng LAN","Cung cấp kết nối mạng không dây","Kết nối đường truyền từ nhà cung cấp dịch vụ","Truyền dữ liệu mạng có dây"]},
 {id:"d4",title:"Quyền riêng tư ứng dụng",kind:"choice",desc:"Một ứng dụng mới xin quyền truy cập camera, micro, vị trí và danh bạ. Hãy đánh giá quyền cần thiết.",note:"Chỉ cấp quyền tối thiểu cần cho chức năng. Có thể xem lại và thu hồi quyền trong cài đặt quyền riêng tư.",win:"Xử lý đúng 4 yêu cầu quyền.",questions:[
 ["Ứng dụng đèn pin yêu cầu quyền danh bạ và vị trí chính xác.",["Từ chối quyền không liên quan và cân nhắc gỡ ứng dụng","Cho phép tất cả để ứng dụng chạy nhanh","Đăng danh bạ lên mạng","Tắt khóa màn hình"],0],
 ["Ứng dụng học trực tuyến cần micro trong giờ học.",["Chỉ cấp quyền micro khi dùng chức năng cần thiết","Cấp cả quyền vị trí và danh bạ","Luôn bật micro nền","Chia sẻ tài khoản"],0],
 ["Bạn đăng ảnh thẻ học sinh có đầy đủ mã số và thông tin cá nhân lên mạng công khai.",["Gỡ/ẩn ảnh và tránh chia sẻ dữ liệu định danh công khai","Đăng lại ở nhiều nhóm","Thêm số điện thoại","Để chế độ công khai"],0],
 ["Thiết bị lạ đăng nhập tài khoản của bạn.",["Đăng xuất phiên lạ, đổi mật khẩu và kiểm tra MFA","Bỏ qua cảnh báo","Gửi mã xác minh cho thiết bị lạ","Tắt email cảnh báo"],0]]},
 {id:"d5",title:"Ứng cứu sự cố dữ liệu",kind:"sequence",desc:"Phòng máy phát hiện một máy có dấu hiệu mã độc và tệp bị đổi đuôi. Sắp xếp quy trình phản ứng ban đầu.",note:"Cô lập thiết bị để hạn chế lây lan, báo người phụ trách, không tự ý xóa dấu vết; khôi phục từ bản sao lưu sạch sau khi xử lý.",win:"Sắp xếp đúng 5 bước ứng cứu.",steps:["Ngắt kết nối mạng của máy nghi nhiễm để hạn chế lây lan","Báo giáo viên/quản trị viên và ghi nhận dấu hiệu, thời điểm","Không cắm USB hoặc đăng nhập tài khoản quan trọng trên máy nghi nhiễm","Nhờ người có chuyên môn kiểm tra, làm sạch hoặc cài đặt lại từ nguồn tin cậy","Khôi phục dữ liệu từ bản sao lưu sạch và cập nhật biện pháp phòng ngừa"]}
 ]}};

// ===== BẢN LỚP 6: câu hỏi ngắn, tình huống gần gũi, đáp án cân bằng =====
const grade6Questions = {
 h2:[
  ["Máy tính bật nhưng màn hình tối. Em nên kiểm tra điều gì trước?",["Màn hình đã bật và dây cắm chắc chưa?","Máy in đã có giấy hay chưa?","Loa đã được tăng âm lượng chưa?","Chuột đã được lau sạch chưa?"],0],
  ["Màn hình hiện “No Signal”. Dây nào cần kiểm tra?",["Dây HDMI hoặc VGA nối màn hình","Dây nguồn của loa ngoài","Dây mạng nối modem","Dây USB của bàn phím"],0],
  ["Sau khi vệ sinh máy, máy không nhận bàn phím USB. Em nên thử gì?",["Rút ra rồi cắm lại vào cổng USB khác","Đổi hình nền máy tính ngay","Xóa các tệp trong thùng rác","Tăng độ phân giải màn hình"],0]
 ],
 h5:[
  ["Quạt máy tính kêu to và thân máy rất nóng. Em nên làm gì?",["Lưu bài, tắt máy và báo người lớn kiểm tra","Tiếp tục chơi game để thử máy","Che các khe thoát gió lại","Đặt máy sát tường cho gọn"],0],
  ["Máy tính để lâu không dùng, bụi bám nhiều ở khe gió. Việc nào phù hợp?",["Nhờ người lớn vệ sinh máy đúng cách","Dùng vật nhọn chọc sâu vào máy","Đổ nước lên khe thông gió","Bịt kín khe gió để tránh bụi"],0],
  ["Máy tính không có tiếng dù video đang phát. Em kiểm tra gì?",["Âm lượng và thiết bị phát âm thanh","Màu sắc của màn hình máy tính","Dung lượng ổ cứng còn trống","Tên thư mục đang mở"],0],
  ["Một dây cáp bị sờn và lộ lõi đồng. Em nên làm gì?",["Ngừng sử dụng và báo người lớn thay dây","Quấn giấy quanh dây rồi dùng tiếp","Kéo mạnh dây để thử độ bền","Để dây dưới chân bàn"],0]
 ],
 s3:[
  ["Phần mềm miễn phí thường được gọi là gì?",["Phần mềm có thể dùng miễn phí theo điều kiện","Phần mềm luôn không có tác giả","Phần mềm không cần cài đặt","Phần mềm chỉ chạy khi mất mạng"],0],
  ["Bạn muốn cài trò chơi trả phí cho máy của lớp. Em nên làm gì?",["Xin phép giáo viên và dùng bản quyền phù hợp","Sao chép từ máy lạ bất kỳ","Tải bản đã bẻ khóa trên mạng","Mượn tài khoản của người khác"],0],
  ["Một trang web yêu cầu tắt phần mềm bảo vệ để tải ứng dụng. Em nên làm gì?",["Dừng lại và hỏi giáo viên trước khi tải","Tắt bảo vệ rồi tải ngay","Nhấn mọi nút hiện trên trang","Gửi đường dẫn cho cả lớp"],0],
  ["Phần mềm mã nguồn mở có điểm gì đặc biệt?",["Mã nguồn được chia sẻ theo giấy phép","Luôn phải trả phí hàng tháng","Chỉ dùng được trên điện thoại","Không thể cập nhật phiên bản"],0]
 ],
 s5:[
  ["Máy báo không đủ dung lượng khi cài ứng dụng học tập. Em nên làm gì?",["Báo giáo viên và kiểm tra dung lượng trống","Xóa ngẫu nhiên thư mục Windows","Tắt máy bằng cách rút điện","Đổi tên ứng dụng rồi cài lại"],0],
  ["Em tải ứng dụng từ một trang lạ có nhiều quảng cáo. Cách an toàn là gì?",["Dừng tải và tìm trang chính thức","Bấm nút tải xuất hiện đầu tiên","Cài mọi tiện ích được gợi ý","Chia sẻ tệp cho các bạn"],0],
  ["Ứng dụng yêu cầu quyền truy cập danh bạ nhưng chỉ dùng để vẽ. Em nên chọn gì?",["Không cấp quyền không cần thiết","Cho phép tất cả các quyền","Gửi danh bạ cho ứng dụng","Tắt khóa màn hình máy"],0],
  ["Sau khi cài ứng dụng, biểu tượng không xuất hiện ở màn hình chính. Em nên làm gì?",["Tìm ứng dụng trong danh sách đã cài","Xóa toàn bộ tài liệu học tập","Cài thêm nhiều bản giống nhau","Tắt phần mềm bảo vệ máy"],0]
 ],
 o2:[
  ["Máy tính chạy chậm vì có quá nhiều ứng dụng đang mở. Em nên làm gì?",["Lưu bài và đóng ứng dụng không cần thiết","Rút dây nguồn để máy nghỉ","Xóa các thư mục hệ thống","Tắt màn hình rồi chờ"],0],
  ["Task Manager cho biết ứng dụng nào đang dùng nhiều bộ nhớ. Em dùng thông tin đó để làm gì?",["Tìm ứng dụng đang chiếm nhiều RAM","Đổi mật khẩu tài khoản học tập","Kiểm tra màu sắc màn hình","Tăng âm lượng loa ngoài"],0],
  ["Một cửa sổ lạ tự xuất hiện và yêu cầu cài phần mềm. Em nên làm gì?",["Đóng lại và hỏi giáo viên trước khi cài","Nhấn đồng ý để xem tiếp","Nhập thông tin cá nhân vào đó","Chuyển tiếp cửa sổ cho bạn bè"],0],
  ["Khi máy tính bị treo, thao tác nào nên thử trước?",["Chờ một chút rồi nhờ giáo viên hỗ trợ","Liên tục nhấn nút nguồn nhiều lần","Rút tất cả dây cáp ngay lập tức","Đập nhẹ vào bàn phím máy"],0]
 ],
 o4:[
  ["Em lỡ xóa bài tập bằng phím Delete. Nơi nào nên kiểm tra đầu tiên?",["Thùng rác Recycle Bin","Thư mục tải nhạc","Cài đặt màn hình","Trình phát video"],0],
  ["Tệp trong thùng rác vẫn còn. Em muốn lấy lại tệp đó. Chọn thao tác nào?",["Chọn Restore để khôi phục","Chọn Empty để làm trống","Đổi tên thùng rác","Tắt máy rồi mở lại"],0],
  ["Em không tìm thấy bài tập quan trọng. Nên làm gì?",["Báo giáo viên và kiểm tra bản sao lưu","Tải phần mềm lạ để tìm ngay","Xóa thêm các thư mục khác","Mượn tài khoản của bạn"],0]
 ],
 o5:[
  ["Máy tính hiện thông báo cần khởi động lại để cập nhật. Em nên làm gì?",["Lưu bài rồi khởi động lại theo hướng dẫn","Rút dây nguồn khi máy đang chạy","Xóa thư mục cập nhật","Tắt màn hình trong nhiều giờ"],0],
  ["Sau khi cài một ứng dụng lạ, máy hoạt động bất thường. Em nên làm gì?",["Báo giáo viên và không tiếp tục mở ứng dụng","Tải thêm ứng dụng tương tự","Tắt phần mềm bảo vệ máy","Chia sẻ ứng dụng cho bạn bè"],0],
  ["Trước khi sửa lỗi máy tính, việc nào giúp bảo vệ bài tập?",["Lưu và sao lưu tệp quan trọng","Đổi ảnh nền máy tính","Xóa lịch sử trình duyệt","Tắt âm thanh hệ thống"],0],
  ["Một thông báo yêu cầu gửi mật khẩu để sửa máy. Em nên làm gì?",["Không gửi mật khẩu và báo giáo viên","Gửi mật khẩu để sửa nhanh","Viết mật khẩu lên màn hình","Gửi mật khẩu vào nhóm lớp"],0]
 ],
 d1:[
  ["Em nhận tin nhắn báo trúng thưởng và yêu cầu bấm link lạ. Em nên làm gì?",["Không bấm link và hỏi người lớn","Bấm link để nhận quà ngay","Gửi tin nhắn cho cả lớp","Nhập số điện thoại và mật khẩu"],0],
  ["Một người lạ xin mã OTP của em để xác minh tài khoản. Em nên làm gì?",["Không chia sẻ mã OTP với bất kỳ ai","Gửi mã để họ kiểm tra giúp","Chụp màn hình mã rồi gửi","Đăng mã lên nhóm lớp"],0],
  ["Email có tệp đính kèm từ người em không quen. Em nên làm gì?",["Không mở tệp và hỏi giáo viên","Tải về rồi mở ngay","Chuyển tiếp cho nhiều bạn","Đổi tên tệp rồi chạy"],0],
  ["Trang đăng nhập có địa chỉ khác lạ dù logo giống trang quen thuộc. Em nên làm gì?",["Đóng trang và tự mở địa chỉ chính thức","Nhập mật khẩu để thử","Lưu trang vào dấu trang","Gửi thông tin để kiểm tra"],0]
 ],
 d2:[
  ["Mật khẩu nào an toàn hơn?",["Một cụm dài, khó đoán và không dùng lại","Tên và ngày sinh của em","12345678 dễ nhớ nhất","Tên lớp ghép với số 1"],0],
  ["Bạn thân hỏi mượn mật khẩu tài khoản học tập. Em nên làm gì?",["Không chia sẻ mật khẩu, nhờ giáo viên hỗ trợ","Gửi mật khẩu qua tin nhắn","Viết mật khẩu vào vở chung","Đăng mật khẩu trong nhóm lớp"],0],
  ["Khi đăng nhập máy tính dùng chung ở phòng tin học, em cần làm gì?",["Đăng xuất tài khoản sau khi sử dụng","Lưu mật khẩu trên trình duyệt","Để tài khoản mở cho bạn sau","Gửi mật khẩu cho người kế tiếp"],0],
  ["Một ứng dụng xin quyền camera dù không cần chụp ảnh. Em nên làm gì?",["Từ chối quyền không cần thiết","Cho phép tất cả để khỏi hỏi lại","Bật camera cả ngày","Gửi ảnh cá nhân cho ứng dụng"],0]
 ],
 d4:[
  ["Khi đăng ảnh lên mạng, thông tin nào không nên công khai?",["Địa chỉ nhà và số điện thoại riêng","Ảnh phong cảnh ở công viên","Hình vẽ em tự làm","Ảnh món ăn trong bữa trưa"],0],
  ["Một người lạ trên mạng hỏi tên trường và lịch học của em. Em nên làm gì?",["Không cung cấp và báo người lớn","Gửi đầy đủ lịch học cho họ","Hẹn gặp người đó một mình","Chia sẻ vị trí trực tiếp"],0],
  ["Ứng dụng đèn pin xin quyền truy cập micro. Em nên làm gì?",["Từ chối quyền không liên quan","Cho phép micro hoạt động liên tục","Gửi bản ghi âm cho ứng dụng","Mở camera để thay thế"],0],
  ["Em dùng máy tính ở thư viện và đăng nhập email. Trước khi rời máy cần làm gì?",["Đăng xuất và đóng trình duyệt","Để nguyên hộp thư đang mở","Lưu mật khẩu để lần sau nhanh","Nhờ người lạ giữ tài khoản"],0]
 ]
};
// Mỗi thế giới có thêm một minigame thao tác, tổng cộng 24 cửa ải.
worlds.hardware.levels.push({
 id:"h6",title:"Circuit Runner – Thu thập chip",kind:"runner",
 desc:"Điều khiển robot đi trong mê cung bo mạch, thu thập 5 chip dữ liệu rồi tìm cổng thoát.",
 note:"Mỗi chip tượng trưng cho một bước kiểm tra phần cứng. Quan sát đường đi, tránh vùng điện lỗi và tìm lối ra.",
 win:"Thu thập đủ 5 chip và chạm cổng thoát.",
});
worlds.software.levels.push({
 id:"s6",title:"Memory Chip – Ghép cặp biểu tượng",kind:"memory",
 desc:"Lật các thẻ để ghép đúng 6 cặp biểu tượng phần mềm với chức năng của chúng.",
 note:"Quan sát biểu tượng, ghi nhớ vị trí và ghép cặp. Không cần trả lời câu hỏi dài.",
 win:"Ghép đủ 6 cặp với số lượt lật càng ít càng tốt.",
 pairs:[["📝","Soạn thảo văn bản"],["📊","Bảng tính"],["🌐","Trình duyệt web"],["🎨","Chỉnh sửa ảnh"],["🗜️","Nén tệp"],["🛡️","Bảo vệ máy tính"]]
});
worlds.os.levels.push({
 id:"o6",title:"File Sort Depot – Phân loại tệp",kind:"sort",
 desc:"Các tệp đang bị xáo trộn trong kho. Kéo từng tệp vào đúng thư mục để khôi phục trật tự.",
 note:"Tệp văn bản, hình ảnh, âm thanh và video có thể được sắp xếp vào các thư mục riêng để dễ tìm.",
 win:"Phân loại chính xác 8 tệp.",
 files:[
  ["BaiTap.docx","Văn bản"],["KeHoach.xlsx","Bảng tính"],["AnhLop.jpg","Hình ảnh"],["Logo.png","Hình ảnh"],
  ["NhacNen.mp3","Âm thanh"],["BaiHat.wav","Âm thanh"],["GioiThieu.mp4","Video"],["HuongDan.avi","Video"]
 ],
 folders:["Văn bản","Bảng tính","Hình ảnh","Âm thanh","Video"]
});
worlds.digital.levels.push({
 id:"d6",title:"Cyber Maze – Mê cung an toàn số",kind:"maze",
 desc:"Dẫn nhân vật đi qua mê cung, thu thập 3 khiên bảo vệ rồi đến cổng an toàn.",
 note:"Ba chiếc khiên đại diện cho mật khẩu an toàn, cảnh giác đường link lạ và bảo vệ thông tin cá nhân.",
 win:"Thu thập đủ 3 khiên và đến cổng an toàn."
});

const worldOrder=["hardware","software","os","digital"];
const allLevels=worldOrder.flatMap(k=>worlds[k].levels);
Object.entries(grade6Questions).forEach(([id,questions])=>{const level=allLevels.find(x=>x.id===id);if(level)level.questions=questions;});
let player={name:"",className:"",xp:0,completed:[],best:{},scores:{}};
const key="ic3gs6_adventure_grade6_v4";
try{const saved=JSON.parse(localStorage.getItem(key)||"null");if(saved)player={...player,...saved}}catch(e){}
let activeWorld=null,activeLevel=null,answers={},timerId=null,seconds=0,penalties=0,choiceModel=[],matchOptions=[],matchCorrect=[];
const save=()=>localStorage.setItem(key,JSON.stringify(player));
const escapeHtml=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function view(id){["welcomeView","worldView","levelView","gameView","rankingView","teacherView","guideView"].forEach(x=>$(x).classList.add("hidden"));$(id).classList.remove("hidden");document.querySelectorAll(".nav-link").forEach(b=>b.classList.toggle("active",b.dataset.view===id.replace("View","")))}
function completedIn(k){return worlds[k].levels.filter(l=>player.completed.includes(l.id)).length}
function worldUnlocked(k){const i=worldOrder.indexOf(k);return i===0||completedIn(worldOrder[i-1])===worlds[worldOrder[i-1]].levels.length}
function updateProfile(){
 $("playerLabel").textContent=player.name||"Nhà thám hiểm";$("profileName").textContent=player.name||"—";$("profileClass").textContent=player.className||"—";$("totalXp").textContent=player.xp+" XP";$("badgeCount").textContent=worldOrder.filter(k=>completedIn(k)===worlds[k].levels.length).length+" / 4";$("playerLevel").textContent="Level "+(1+Math.floor(player.xp/250));
 const total=allLevels.length;const count=player.completed.length;$("progressText").textContent=count+" / "+total;$("progressBar").style.width=(count/total*100)+"%";
 worldOrder.forEach(k=>{$("progress-"+k).textContent=completedIn(k)+"/"+worlds[k].levels.length+" hoàn thành"+(worldUnlocked(k)?"":" · 🔒")});
 $("gamePlayer").textContent=player.name+" · "+player.className;$("asideXp").textContent=player.xp;
}
if(player.name){view("worldView");updateProfile()}else view("welcomeView");
$("playerName").value=player.name;$("playerClass").value=player.className;
$("startAdventure").onclick=()=>{let n=$("playerName").value.trim(),c=$("playerClass").value.trim();if(!n||!c){alert("Hãy nhập tên và lớp.");return}player.name=n;player.className=c;save();updateProfile();view("worldView");submitScore()};
document.querySelectorAll("[data-view]").forEach(b=>b.addEventListener("click",()=>{if(!player.name){view("welcomeView");return}const v=b.dataset.view;view(v+"View");if(v==="ranking")loadRanking()}));
$("brandHome").onclick=e=>{e.preventDefault();if(player.name)view("worldView");else view("welcomeView")};
document.querySelectorAll("[data-world]").forEach(b=>b.onclick=()=>openWorld(b.dataset.world));
$("backWorld").onclick=()=>view("worldView");$("backLevels").onclick=()=>{stopTimer();openWorld(activeWorld)};
function openWorld(k){if(!worldUnlocked(k)){alert("Hãy hoàn thành tất cả cửa ải ở thế giới trước.");return}activeWorld=k;const w=worlds[k];$("worldEyebrow").textContent="WORLD "+String(worldOrder.indexOf(k)+1).padStart(2,"0");$("worldTitle").textContent=w.title;$("worldDescription").textContent=w.desc;const list=$("levelList");list.innerHTML="";list.className="level-list mini-map mini-map-"+k;
 w.levels.forEach((l,i)=>{const prev=i===0||player.completed.includes(w.levels[i-1].id),done=player.completed.includes(l.id);const b=document.createElement("button");b.className="level-card map-node "+(done?"is-done":"")+(prev?" is-open":"");b.disabled=!prev;b.innerHTML=`<span class="level-number">${done?"✓":String(i+1).padStart(2,"0")}</span><span class="level-info"><b>${escapeHtml(l.title)}</b><small>${escapeHtml(l.kind.toUpperCase())} · Cửa ải ${i+1}</small></span><span class="level-status">${done?"ĐÃ QUA":prev?"▶ VÀO ẢI":"🔒 KHÓA"}</span>`;b.onclick=()=>startLevel(l);list.appendChild(b)});
 view("levelView")}
function startLevel(level){activeLevel=level;answers={};penalties=0;seconds=0;choiceModel=[];matchOptions=[];matchCorrect=[];if(level.kind==="match"){matchOptions=[...level.options];for(let k=matchOptions.length-1;k>0;k--){const r=Math.floor(Math.random()*(k+1));[matchOptions[k],matchOptions[r]]=[matchOptions[r],matchOptions[k]]}matchCorrect=level.pairs.map(p=>matchOptions.indexOf(p[1]));}if(level.kind==="choice"){choiceModel=level.questions.map((q,i)=>{const order=q[1].map((_,j)=>j);for(let k=order.length-1;k>0;k--){const r=Math.floor(Math.random()*(k+1));[order[k],order[r]]=[order[r],order[k]]}return {idx:i,order,correct:order.indexOf(q[2])}});for(let k=choiceModel.length-1;k>0;k--){const r=Math.floor(Math.random()*(k+1));[choiceModel[k],choiceModel[r]]=[choiceModel[r],choiceModel[k]]}}const wi=worldOrder.indexOf(activeWorld);$("gameWorld").textContent="WORLD "+String(wi+1).padStart(2,"0")+" · "+worlds[activeWorld].title;$("gameHeading").textContent=level.title;$("missionTag").textContent=level.id.toUpperCase()+" · CHALLENGE";$("missionTitle").textContent=level.title;$("missionDescription").textContent=level.desc;$("learningNote").textContent=level.note;$("winCondition").textContent=level.win;$("gameXp").textContent=player.best[level.id]||100;$("feedback").className="feedback hidden";$("taskCounter").textContent=level.kind==="board"?"8 linh kiện · gắn trực tiếp lên bo mạch":level.kind==="choice"?level.questions.length+" tình huống cần xử lý":level.kind==="match"?level.pairs.length+" cặp cần ghép":level.kind==="sequence"?level.steps.length+" bước cần sắp xếp":level.kind==="runner"?"5 chip dữ liệu · tìm cổng thoát":level.kind==="memory"?"6 cặp thẻ cần ghép":level.kind==="sort"?"8 tệp cần phân loại":"3 khiên · tìm cổng an toàn";
 renderLevel();view("gameView");startTimer()}
function startTimer(){stopTimer();seconds=0;timerId=setInterval(()=>{seconds++;$("timer").textContent=String(Math.floor(seconds/60)).padStart(2,"0")+":"+String(seconds%60).padStart(2,"0")},1000)}
function stopTimer(){if(timerId){clearInterval(timerId);timerId=null}}
function renderLevel(){const a=$("gameArea");a.innerHTML="";if(activeLevel.kind==="board")renderBoard(a);else if(activeLevel.kind==="choice")renderChoices(a);else if(activeLevel.kind==="match")renderMatch(a);else if(activeLevel.kind==="sequence")renderSequence(a);else if(activeLevel.kind==="runner")renderRunner(a,false);else if(activeLevel.kind==="maze")renderRunner(a,true);else if(activeLevel.kind==="memory")renderMemory(a);else if(activeLevel.kind==="sort")renderSort(a);$("gameProgressBar").style.width="0%"}

function partDrawing(i){
 const common='viewBox="0 0 120 54" role="img" aria-label="Hình minh họa linh kiện"';
 const drawings=[
 `<svg ${common}><rect x="35" y="5" width="50" height="44" rx="5" fill="#87999b" stroke="#dce8d9" stroke-width="2"/><rect x="44" y="13" width="32" height="28" rx="2" fill="#344c50" stroke="#c5d0b7"/><path d="M28 12h7M28 22h7M28 32h7M28 42h7M85 12h7M85 22h7M85 32h7M85 42h7" stroke="#d2b56a" stroke-width="3"/></svg>`,
 `<svg ${common}><rect x="8" y="18" width="104" height="18" rx="3" fill="#244e3e" stroke="#a9c49b" stroke-width="2"/><rect x="18" y="21" width="15" height="12" fill="#182b31"/><rect x="39" y="21" width="15" height="12" fill="#182b31"/><rect x="60" y="21" width="15" height="12" fill="#182b31"/><rect x="81" y="21" width="15" height="12" fill="#182b31"/><path d="M15 37v5m8-5v5m8-5v5m8-5v5m8-5v5m8-5v5m8-5v5m8-5v5m8-5v5m8-5v5" stroke="#d5b85c" stroke-width="2"/></svg>`,
 `<svg ${common}><rect x="10" y="8" width="100" height="38" rx="5" fill="#253b49" stroke="#91a9b6" stroke-width="2"/><circle cx="42" cy="27" r="14" fill="#566b77" stroke="#c2d2d5" stroke-width="2"/><circle cx="42" cy="27" r="5" fill="#1c2934"/><circle cx="79" cy="27" r="14" fill="#566b77" stroke="#c2d2d5" stroke-width="2"/><circle cx="79" cy="27" r="5" fill="#1c2934"/><path d="M17 45h86" stroke="#d3b65d" stroke-width="3"/></svg>`,
 `<svg ${common}><rect x="10" y="20" width="100" height="14" rx="3" fill="#315b4a" stroke="#9fc49c" stroke-width="2"/><rect x="17" y="23" width="30" height="8" fill="#172c32"/><rect x="52" y="23" width="25" height="8" fill="#172c32"/><circle cx="96" cy="27" r="3" fill="#d4b95e"/><path d="M16 35v5m8-5v5m8-5v5" stroke="#d5b85c" stroke-width="2"/></svg>`,
 `<svg ${common}><path d="M20 12h80v30H20z" fill="#374b59" stroke="#d1dfdf" stroke-width="2"/><path d="M30 17h60v20H30z" fill="#1d2d3b"/><path d="M39 20v14m8-14v14m8-14v14m8-14v14m8-14v14m8-14v14" stroke="#d7b95e" stroke-width="2"/><path d="M100 20h10v14h-10" fill="#d7b95e"/></svg>`,
 `<svg ${common}><circle cx="60" cy="27" r="22" fill="#435a66" stroke="#c8d6d7" stroke-width="2"/><circle cx="60" cy="27" r="7" fill="#a7b8bb"/><path d="M60 7c11 2 13 9 4 15M80 27c-2 11-9 13-15 4M60 47c-11-2-13-9-4-15M40 27c2-11 9-13 15-4" fill="#9eafb0" stroke="#253a47" stroke-width="2"/></svg>`
 ];
 return drawings[i]||"";
}

function renderBoard(a){
 const parts=activeLevel.parts, placed=answers.board||{};
 const boardSvg=`<svg class="board-art" viewBox="0 0 900 560" role="img" aria-label="Bo mạch chủ ATX với socket CPU, khe RAM, khe PCI Express và các cổng kết nối">
 <defs>
  <linearGradient id="pcb" x2="1" y2="1"><stop stop-color="#245b4c"/><stop offset=".48" stop-color="#17483e"/><stop offset="1" stop-color="#0d302f"/></linearGradient>
  <linearGradient id="metal" x2="1" y2="1"><stop stop-color="#eef2e8"/><stop offset=".45" stop-color="#aab9b0"/><stop offset="1" stop-color="#647b79"/></linearGradient>
  <linearGradient id="blackMetal" x2="0" y2="1"><stop stop-color="#46565b"/><stop offset="1" stop-color="#17252d"/></linearGradient>
  <pattern id="trace" width="38" height="38" patternUnits="userSpaceOnUse"><path d="M0 19H13V0M13 19V38M13 19H38" fill="none" stroke="#78c9a1" stroke-opacity=".25" stroke-width="2"/></pattern>
  <pattern id="pins" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="4.5" cy="4.5" r="1.5" fill="#d9c77a"/></pattern>
 </defs>
 <rect x="8" y="8" width="884" height="544" rx="24" fill="#101820" stroke="#a4b8ae" stroke-width="12"/>
 <rect x="28" y="28" width="844" height="504" rx="15" fill="url(#pcb)" stroke="#c2d0c4" stroke-width="3"/>
 <rect x="28" y="28" width="844" height="504" rx="15" fill="url(#trace)"/>
 ${[[52,52],[848,52],[52,508],[848,508],[440,52],[440,508]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="10" fill="#17242a" stroke="#c2b879" stroke-width="3"/><circle cx="${x}" cy="${y}" r="4" fill="#0b171c"/>`).join("")}
 <!-- Rear I/O block -->
 <rect x="45" y="92" width="62" height="330" rx="8" fill="url(#blackMetal)" stroke="#9cae9e" stroke-width="3"/>
 ${[0,1,2,3,4].map(i=>`<rect x="57" y="${112+i*58}" width="38" height="30" rx="3" fill="#111e25" stroke="#829b91" stroke-width="2"/>`).join("")}
 <text x="75" y="450" fill="#d5e5d9" font-size="12" text-anchor="middle">REAR I/O</text>
 <!-- CPU socket with pin field -->
 <rect x="150" y="105" width="250" height="230" rx="12" fill="#17242b" stroke="#b9c8b7" stroke-width="9"/>
 <rect x="170" y="125" width="210" height="190" rx="7" fill="url(#pins)" stroke="#6e817d" stroke-width="5"/>
 <rect x="207" y="160" width="136" height="120" rx="5" fill="url(#metal)" stroke="#d6dfd0" stroke-width="5"/>
 <rect x="220" y="173" width="110" height="94" rx="3" fill="#637a76" stroke="#253d3a" stroke-width="4"/>
 <path d="M195 145h-18v22m178-22h18v22M195 295h-18v-22m178 22h18v-22" fill="none" stroke="#d7bd6d" stroke-width="5"/>
 <text x="275" y="92" fill="#e7f2e7" font-size="18" font-weight="bold" text-anchor="middle">CPU SOCKET</text>
 <!-- DIMM slots -->
 ${[0,1,2,3].map(i=>`<rect x="${470+i*40}" y="90" width="23" height="270" rx="4" fill="#101c22" stroke="#d5c27a" stroke-width="3"/><rect x="${475+i*40}" y="100" width="13" height="250" rx="2" fill="#263d39"/>`).join("")}
 <text x="530" y="75" fill="#e7f2e7" font-size="18" font-weight="bold" text-anchor="middle">4 × DIMM RAM</text>
 <!-- VRM heatsinks and capacitors -->
 <rect x="145" y="355" width="245" height="55" rx="7" fill="url(#blackMetal)" stroke="#9eb5a6" stroke-width="3"/>
 ${[0,1,2,3,4,5,6].map(i=>`<rect x="${158+i*32}" y="363" width="20" height="39" rx="3" fill="#728b82" stroke="#c3d2c4" stroke-width="2"/>`).join("")}
 ${[0,1,2,3,4,5,6,7].map(i=>`<ellipse cx="${420+(i%4)*32}" cy="${380+Math.floor(i/4)*35}" rx="11" ry="13" fill="#273c43" stroke="#b4c4ad" stroke-width="3"/><ellipse cx="${420+(i%4)*32}" cy="${380+Math.floor(i/4)*35}" rx="5" ry="6" fill="#a4b7a9"/>`).join("")}
 <!-- PCIe slots -->
 <rect x="190" y="440" width="450" height="20" rx="4" fill="#111d23" stroke="#d1bf79" stroke-width="3"/>
 <rect x="200" y="445" width="425" height="10" fill="#b59e56"/>
 <rect x="225" y="475" width="300" height="14" rx="3" fill="#17252b" stroke="#c9b56f" stroke-width="2"/>
 <text x="415" y="430" fill="#e7f2e7" font-size="16" font-weight="bold" text-anchor="middle">PCI EXPRESS</text>
 <!-- M.2 and SATA -->
 <rect x="665" y="180" width="145" height="28" rx="4" fill="#111d23" stroke="#c4b56e" stroke-width="3"/>
 <circle cx="795" cy="194" r="6" fill="#d7c47a"/>
 <text x="735" y="165" fill="#e7f2e7" font-size="15" font-weight="bold" text-anchor="middle">M.2 NVMe</text>
 ${[0,1,2,3].map(i=>`<rect x="680" y="${255+i*36}" width="110" height="22" rx="3" fill="#17252b" stroke="#c3b578" stroke-width="2"/>`).join("")}
 <text x="735" y="245" fill="#e7f2e7" font-size="15" font-weight="bold" text-anchor="middle">SATA PORTS</text>
 <!-- 24 pin and power -->
 <rect x="790" y="350" width="48" height="105" rx="5" fill="#111d23" stroke="#c6d3bd" stroke-width="3"/>
 ${[0,1,2,3,4].map(i=>`<path d="M800 ${362+i*17}h28" stroke="#d2bd72" stroke-width="5"/>`).join("")}
 <text x="752" y="480" fill="#e7f2e7" font-size="13" font-weight="bold" text-anchor="middle">ATX 24-PIN</text>
 <!-- CMOS battery -->
 <circle cx="590" cy="405" r="35" fill="#17252b" stroke="#c4cdb8" stroke-width="5"/>
 <circle cx="590" cy="405" r="26" fill="#b8c3b5" stroke="#e4e8d9" stroke-width="3"/>
 <text x="590" y="410" fill="#35464a" font-size="13" font-weight="bold" text-anchor="middle">CR2032</text>
 <text x="590" y="455" fill="#e7f2e7" font-size="12" text-anchor="middle">CMOS</text>
 <!-- Chipset -->
 <rect x="680" y="75" width="100" height="62" rx="6" fill="url(#blackMetal)" stroke="#aab9a9" stroke-width="3"/>
 <text x="730" y="111" fill="#e7f2e7" font-size="14" font-weight="bold" text-anchor="middle">CHIPSET</text>
 </svg>`;
 const pos=[["cpu","SOCKET CPU",30,39],["ram","KHE RAM DIMM",59,30],["gpu","PCIe x16",47,83],["ssd","KHE M.2",82,34],["psu","NGUỒN 24-PIN",85,78],["cooler","TẢN CPU",30,22],["cmos","PIN CMOS",66,73],["sata","CỔNG SATA",83,54]];
 let html=`<div class="assembly-brief"><b>🧰 Nhiệm vụ kỹ thuật viên</b><span>Chọn linh kiện ở cột bên trái, đọc chức năng rồi kéo thả hoặc chạm vào đúng vị trí trên bo mạch ở bên phải. Bo mạch được mô phỏng theo bố cục ATX thực tế.</span></div>
 <div class="assembly-workbench"><section class="assembly-tray"><div class="assembly-panel-heading"><b>🧩 KHO LINH KIỆN</b><small>Chọn một linh kiện để lắp</small></div>`;
 const partGroups=[["🧠 CPU / TẢN NHIỆT",[0,5]],["💾 BỘ NHỚ / LƯU TRỮ",[1,3]],["🎮 ĐỒ HỌA",[2]],["🔌 NGUỒN & KẾT NỐI",[4,6,7]]];
 partGroups.forEach(([label,ids])=>{html+=`<div class="parts-group-title">${label}</div><div class="assembly-parts">`;ids.forEach(i=>{const p=parts[i];html+=`<button class="part-card ${Object.values(placed).includes(i)?"part-used":""}" draggable="true" data-part="${i}"><span class="part-shape">${partDrawing(i)}</span><b>${escapeHtml(p[0])}</b><small>${escapeHtml(p[3]||p[2]||"Linh kiện máy tính")}</small><em>${Object.values(placed).includes(i)?"✓ Đã lắp":"Chưa lắp"}</em></button>`});html+="</div>";});
 html+=`</section><section class="assembly-board-panel"><div class="assembly-panel-heading"><b>🖥️ BO MẠCH CHỦ ATX</b><small>Nhấn vào vùng viền vàng để đặt linh kiện</small></div><div class="assembly-stage">${boardSvg}`;
 pos.forEach(([key,label,x,y],i)=>{const partIndex=placed[i];html+=`<button class="board-drop ${partIndex!==undefined?"filled":""}" data-slot="${i}" style="left:${x}%;top:${y}%"><span>${partIndex!==undefined?partDrawing(partIndex):"＋"}</span><b>${partIndex!==undefined?escapeHtml(parts[partIndex][0]):label}</b><small>${partIndex!==undefined?"Đã lắp · chạm để thay":"Vị trí lắp"}</small></button>`});
 html+=`</div><div class="assembly-legend"><span>🟢 Linh kiện đã lắp</span><span>🟡 Vị trí đang chờ</span></div><p class="assembly-tip">💡 Mỗi linh kiện chỉ được lắp một lần. Hãy quan sát hình dáng và tên khu vực tương ứng.</p></section></div>`;
 a.innerHTML=html;
 const choosePart=i=>{answers.active=i;a.querySelectorAll(".part-card").forEach(x=>x.classList.toggle("selected",Number(x.dataset.part)===i));feedback(true,parts[i][0]+": "+parts[i][3]+". Hãy đặt vào đúng vị trí trên bo mạch.")};
 const place=(slot,part)=>{if(part===undefined){feedback(false,"Hãy chọn linh kiện ở kho bên trái trước.");return}answers.board=answers.board||{};Object.keys(answers.board).forEach(k=>{if(answers.board[k]===part)delete answers.board[k]});answers.board[slot]=part;answers.active=undefined;renderBoard(a);const count=Object.keys(answers.board).length;$("gameProgressBar").style.width=(count/parts.length*100)+"%";};
 a.querySelectorAll("[data-part]").forEach(b=>{b.onclick=()=>choosePart(Number(b.dataset.part));b.ondragstart=e=>{e.dataTransfer.setData("text/plain",b.dataset.part);e.dataTransfer.effectAllowed="move"}});
 a.querySelectorAll("[data-slot]").forEach(b=>{b.onclick=()=>place(Number(b.dataset.slot),answers.active);b.ondragover=e=>{e.preventDefault();b.classList.add("drag-over")};b.ondragleave=()=>b.classList.remove("drag-over");b.ondrop=e=>{e.preventDefault();b.classList.remove("drag-over");place(Number(b.dataset.slot),Number(e.dataTransfer.getData("text/plain")))}});
}
function renderChoices(a){let html='<div class="scenario-box"><span class="scenario-label">CASE FILE · PHÂN TÍCH DỮ KIỆN</span><p>Đọc từng tình huống. Chọn phương án tốt nhất và có căn cứ kỹ thuật. Thứ tự câu hỏi và đáp án được xáo trộn mỗi lượt.</p></div><div class="choice-list">';
 choiceModel.forEach((item,pos)=>{const q=activeLevel.questions[item.idx];html+=`<section class="question-block"><div class="question-title"><span>CASE ${String(pos+1).padStart(2,"0")}</span><b>${escapeHtml(q[0])}</b></div>`;item.order.forEach((original,j)=>html+=`<button class="choice" data-q="${item.idx}" data-a="${j}"><span class="letter">${"ABCD"[j]}</span><span>${escapeHtml(q[1][original])}</span></button>`);html+="</section>"});
 a.innerHTML=html+"</div>";a.querySelectorAll(".choice").forEach(b=>b.onclick=()=>{const q=Number(b.dataset.q);answers[q]=Number(b.dataset.a);a.querySelectorAll(`[data-q="${q}"]`).forEach(x=>x.classList.toggle("selected",x===b));$("gameProgressBar").style.width=(Object.keys(answers).length/activeLevel.questions.length*100)+"%"})}
function renderMatch(a){let html='<div class="scenario-box"><span class="scenario-label">TECH MATCHING</span><p>Chọn phương án phù hợp nhất cho từng dòng. Không có gợi ý theo thứ tự.</p></div><div class="match-grid">';
 activeLevel.pairs.forEach((p,i)=>{html+=`<div class="match-item"><label>${escapeHtml(p[0])}</label><select data-match="${i}"><option value="">— Chọn chức năng —</option>${matchOptions.map((o,j)=>`<option value="${j}">${escapeHtml(o)}</option>`).join("")}</select></div>`});a.innerHTML=html+"</div>";a.querySelectorAll("select").forEach(s=>s.onchange=()=>{if(s.value==="")delete answers[s.dataset.match];else answers[s.dataset.match]=Number(s.value);$("gameProgressBar").style.width=(Object.keys(answers).length/activeLevel.pairs.length*100)+"%"})}
function renderSequence(a){let steps=[...activeLevel.steps].map((v,i)=>({v,i}));for(let i=steps.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[steps[i],steps[j]]=[steps[j],steps[i]]}let html='<div class="scenario-box"><span class="scenario-label">SEQUENCE PROTOCOL</span><p>Chọn thứ tự thực hiện cho mỗi bước. Hãy suy luận theo quy trình kỹ thuật, không đoán theo vị trí hiển thị.</p></div><div class="sequence-list">';
 steps.forEach((s,i)=>html+=`<div class="sequence-row"><b>${escapeHtml(s.v)}</b><select data-step="${s.i}"><option value="">Thứ tự...</option>${steps.map((_,n)=>`<option value="${n+1}">${n+1}</option>`).join("")}</select></div>`);a.innerHTML=html+"</div>";a.querySelectorAll("select").forEach(s=>s.onchange=()=>{if(s.value==="")delete answers[s.dataset.step];else answers[s.dataset.step]=Number(s.value);$("gameProgressBar").style.width=(Object.keys(answers).length/steps.length*100)+"%"})}

function renderRunner(a,isMaze){
 const canvasId="adventureCanvas";
 const cols=10,rows=7,cell=54;
 const playerPos={x:0,y:0};
 const chips=isMaze?[[1,2],[4,1],[7,5]]:[[2,1],[4,3],[7,1],[6,5],[8,4]];
 const walls=isMaze?[[2,0],[2,1],[2,3],[3,3],[4,3],[6,1],[6,2],[6,3],[8,3],[8,4]]:
 [[1,3],[2,3],[3,3],[5,1],[5,2],[5,3],[7,3],[7,4],[3,5],[4,5]];
 const exit=isMaze?{x:9,y:6}:{x:9,y:0};
 const collected=new Set();
 const title=isMaze?"MÊ CUNG AN TOÀN SỐ":"ĐƯỜNG ĐUA MẠCH ĐIỆN";
 a.innerHTML=`<div class="arcade-head"><b>🕹️ ${title}</b><span id="arcadeCount">0 / ${chips.length} vật phẩm</span></div>
 <div class="arcade-stage"><canvas id="${canvasId}" width="${cols*cell}" height="${rows*cell}" aria-label="${title}"></canvas></div>
 <div class="arcade-controls"><button data-move="up">▲</button><div><button data-move="left">◀</button><button data-move="down">▼</button><button data-move="right">▶</button></div><small>Dùng phím mũi tên hoặc WASD</small></div>
 <p class="arcade-hint">${isMaze?"Thu thập 3 khiên 🛡️, sau đó tìm cổng xanh.":"Thu thập 5 chip 💎, tránh vùng mạch đỏ và tìm cổng đích."}</p>
 <div id="arcadeStatus" class="arcade-status">Bắt đầu di chuyển để khám phá bản đồ!</div>`;
 const canvas=$(canvasId),ctx=canvas.getContext("2d");
 const draw=()=>{
  ctx.clearRect(0,0,canvas.width,canvas.height);
  for(let y=0;y<rows;y++)for(let x=0;x<cols;x++){
   ctx.fillStyle=(x+y)%2?"#1c3150":"#20395a";ctx.fillRect(x*cell,y*cell,cell-2,cell-2);
   ctx.strokeStyle="#45698b";ctx.strokeRect(x*cell+2,y*cell+2,cell-6,cell-6);
  }
  walls.forEach(([x,y])=>{ctx.fillStyle="#7b527d";ctx.fillRect(x*cell+3,y*cell+3,cell-8,cell-8);ctx.fillStyle="#b18ac2";ctx.fillRect(x*cell+9,y*cell+9,cell-20,cell-20)});
  chips.forEach(([x,y],i)=>{if(!collected.has(i)){ctx.font="30px sans-serif";ctx.textAlign="center";ctx.fillText(isMaze?"🛡️":"💎",x*cell+cell/2,y*cell+cell/2+10)}});
  ctx.fillStyle=collected.size===chips.length?"#6cf59a":"#f0bd58";ctx.fillRect(exit.x*cell+7,exit.y*cell+7,cell-18,cell-18);
  ctx.font="25px sans-serif";ctx.textAlign="center";ctx.fillText("🚪",exit.x*cell+cell/2,exit.y*cell+cell/2+9);
  ctx.font="32px sans-serif";ctx.fillText(isMaze?"🧑‍🚀":"🤖",playerPos.x*cell+cell/2,playerPos.y*cell+cell/2+11);
  $("arcadeCount").textContent=collected.size+" / "+chips.length+" vật phẩm";
 };
 const move=(dx,dy)=>{
  const nx=playerPos.x+dx,ny=playerPos.y+dy;
  if(nx<0||ny<0||nx>=cols||ny>=rows||walls.some(([x,y])=>x===nx&&y===ny))return;
  playerPos.x=nx;playerPos.y=ny;
  chips.forEach(([x,y],i)=>{if(x===nx&&y===ny)collected.add(i)});
  if(nx===exit.x&&ny===exit.y){
   if(collected.size===chips.length){answers.runnerWon=true;$("arcadeStatus").textContent="🎉 Tuyệt vời! Bạn đã thu thập đủ vật phẩm và mở được cổng.";feedback(true,"Đã hoàn thành mục tiêu minigame!");$("gameProgressBar").style.width="100%";}
   else $("arcadeStatus").textContent="Cổng còn khóa! Bạn cần tìm đủ "+chips.length+" vật phẩm.";
  }else $("arcadeStatus").textContent=collected.size===chips.length?"Đã đủ vật phẩm! Hãy tìm cổng thoát.":"Tiếp tục khám phá và tìm vật phẩm.";
  draw();
 };
 a.querySelectorAll("[data-move]").forEach(b=>b.onclick=()=>{const m=b.dataset.move;move(m==="left"?-1:m==="right"?1:0,m==="up"?-1:m==="down"?1:0)});
 if(window.ic3MoveHandler)document.removeEventListener("keydown",window.ic3MoveHandler);
 window.ic3MoveHandler=e=>{
  const map={ArrowUp:[0,-1],w:[0,-1],ArrowDown:[0,1],s:[0,1],ArrowLeft:[-1,0],a:[-1,0],ArrowRight:[1,0],d:[1,0]};
  const k=e.key.length===1?e.key.toLowerCase():e.key;
  if(map[k]&&$("gameView")&&!$("gameView").classList.contains("hidden")){e.preventDefault();move(...map[k])}
 };
 document.addEventListener("keydown",window.ic3MoveHandler);
 draw();
}
function renderMemory(a){
 const deck=[];
 activeLevel.pairs.forEach((pair,i)=>{deck.push({pair:i,side:0,value:pair[0]},{pair:i,side:1,value:pair[1]})});
 for(let i=deck.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[deck[i],deck[j]]=[deck[j],deck[i]]}
 let open=[],matched=new Set(),moves=0,locked=false;
 a.innerHTML=`<div class="memory-top"><b>🧠 Ghi nhớ và ghép đúng cặp</b><span id="memoryMoves">Lượt lật: 0</span></div><div class="memory-grid">${deck.map((c,i)=>`<button class="memory-card" data-card="${i}"><span class="memory-back">?</span><span class="memory-front">${escapeHtml(c.value)}</span></button>`).join("")}</div><p class="arcade-hint">Lật hai thẻ mỗi lượt. Một thẻ là biểu tượng, thẻ còn lại là chức năng tương ứng.</p>`;
 const cards=[...a.querySelectorAll("[data-card]")];
 cards.forEach((b,i)=>b.onclick=()=>{
  if(locked||matched.has(i)||open.includes(i))return;
  b.classList.add("flipped");open.push(i);
  if(open.length===2){
   moves++;$("memoryMoves").textContent="Lượt lật: "+moves;
   const [x,y]=open;
   if(deck[x].pair===deck[y].pair){
    matched.add(x);matched.add(y);cards[x].classList.add("matched");cards[y].classList.add("matched");open=[];
    if(matched.size===deck.length){answers.memoryWon=true;$("gameProgressBar").style.width="100%";feedback(true,"Bạn đã ghép đủ 6 cặp sau "+moves+" lượt!");}
   }else{
    locked=true;setTimeout(()=>{cards[x].classList.remove("flipped");cards[y].classList.remove("flipped");open=[];locked=false},750);
   }
  }
 });
}
function renderSort(a){
 let selected=null;answers.sortMap={};
 a.innerHTML=`<div class="sort-instructions">📂 Kéo từng tệp vào thư mục phù hợp. Nếu dùng màn hình cảm ứng, chạm tệp rồi chạm thư mục.</div>
 <div class="file-depot"><h4>📦 KHO TỆP BỊ XÁO TRỘN</h4><div class="file-grid">${activeLevel.files.map((f,i)=>`<button class="file-card" draggable="true" data-file="${i}"><span>📄</span><b>${escapeHtml(f[0])}</b></button>`).join("")}</div></div>
 <h4>🗂️ CÁC THƯ MỤC</h4><div class="folder-grid">${activeLevel.folders.map((f,i)=>`<button class="folder-card" data-folder="${i}"><span>📁</span><b>${escapeHtml(f)}</b><small>Thả tệp vào đây</small></button>`).join("")}</div>
 <p id="sortStatus" class="arcade-status">Đã phân loại 0 / ${activeLevel.files.length} tệp.</p>`;
 const assign=(file,folder)=>{
  if(file===null){$("sortStatus").textContent="Hãy chọn một tệp trước.";return}
  const name=activeLevel.folders[folder];
  answers.sortMap[file]=name;
  const card=a.querySelector(`[data-file="${file}"]`);card.classList.add("file-placed");
  card.querySelector("b").textContent=activeLevel.files[file][0]+" ✓";
  const folderEl=a.querySelector(`[data-folder="${folder}"]`);folderEl.classList.add("folder-active");
  selected=null;
  $("sortStatus").textContent="Đã xếp "+Object.keys(answers.sortMap).length+" / "+activeLevel.files.length+" tệp. Có thể chọn lại tệp để sửa vị trí.";
  $("gameProgressBar").style.width=(Object.keys(answers.sortMap).length/activeLevel.files.length*100)+"%";
 };
 a.querySelectorAll("[data-file]").forEach(b=>{
  b.onclick=()=>{selected=Number(b.dataset.file);a.querySelectorAll(".file-card").forEach(x=>x.classList.toggle("selected",x===b));};
  b.ondragstart=e=>{e.dataTransfer.setData("text/plain",b.dataset.file)};
 });
 a.querySelectorAll("[data-folder]").forEach(b=>{
  b.onclick=()=>{if(selected!==null)assign(selected,Number(b.dataset.folder));};
  b.ondragover=e=>e.preventDefault();
  b.ondrop=e=>{e.preventDefault();assign(Number(e.dataTransfer.getData("text/plain")),Number(b.dataset.folder));};
 });
}
function validate(){
 const l=activeLevel;
 if(l.kind==="board"){const m=answers.board||{};return Object.keys(m).length===l.correct.length&&l.correct.every((v,i)=>m[i]===v)}
 if(l.kind==="choice")return choiceModel.every(item=>answers[item.idx]===item.correct);
 if(l.kind==="match")return l.pairs.every((p,i)=>answers[i]!==undefined&&matchOptions[answers[i]]===p[1]);
 if(l.kind==="sequence")return l.steps.every((s,i)=>answers[i]===i+1);
 if(l.kind==="runner"||l.kind==="maze")return answers.runnerWon===true;
 if(l.kind==="memory")return answers.memoryWon===true;
 if(l.kind==="sort")return l.files.every((f,i)=>answers.sortMap&&answers.sortMap[i]===f[1]);
 return false;
}
$("checkAnswer").onclick=()=>{
 const l=activeLevel;
 const filled=l.kind==="board"?Object.keys(answers.board||{}).length:
  l.kind==="sort"?Object.keys(answers.sortMap||{}).length:
  l.kind==="runner"||l.kind==="maze"||l.kind==="memory"?(validate()?1:0):
  Object.keys(answers).length;
 const required=l.kind==="board"?l.parts.length:l.kind==="choice"?l.questions.length:l.kind==="match"?l.pairs.length:l.kind==="sequence"?l.steps.length:l.kind==="sort"?l.files.length:1;
 if(filled<required){if(l.kind==="board"){const missing=l.parts.map((p,i)=>({p,i})).filter(x=>!Object.values(answers.board||{}).includes(x.i));feedback(false,"Còn thiếu "+missing.length+" linh kiện: "+missing.map(x=>x.p[0]).join(", ")+". Mỗi linh kiện có vị trí riêng trên bo mạch; hãy lắp đủ trước khi kiểm tra.");}else{feedback(false,"Bạn còn thiếu "+(required-filled)+" câu/thao tác. Hãy hoàn thành tất cả rồi kiểm tra nhé.");}return}
 if(validate()){finishLevel()}else{penalties+=1;feedback(false,l.kind==="board"?"Có linh kiện đặt sai vị trí. CPU vào socket, RAM vào khe DIMM, card đồ họa vào PCIe, SSD vào khe M.2; nguồn và tản nhiệt phải đúng khu vực. Mỗi lần kiểm tra sai trừ 5 XP thưởng.":"Chưa chính xác. Hãy đọc lại gợi ý kiến thức bên cạnh, suy nghĩ xem bộ phận nào nhận thông tin, xử lý, lưu trữ hoặc đưa kết quả ra. Mỗi lần kiểm tra sai trừ 5 XP thưởng.");$("gameXp").textContent=Math.max(50,100-penalties*5)}
};
function feedback(ok,msg){$("feedback").className="feedback "+(ok?"good":"bad");$("feedback").textContent=msg}
function finishLevel(){stopTimer();const first=!player.completed.includes(activeLevel.id);const speedBonus=Math.max(0,Math.min(15,Math.floor((240-seconds)/20)));const earned=Math.max(50,100-penalties*5+speedBonus);if(first){player.completed.push(activeLevel.id);player.xp+=earned;player.best[activeLevel.id]=earned}else{player.best[activeLevel.id]=Math.max(player.best[activeLevel.id]||0,earned)}player.scores[activeLevel.id]=earned;save();updateProfile();submitScore();$("completionTitle").textContent=first?"Nhiệm vụ hoàn thành!":"Luyện tập thành công!";$("completionText").textContent=`${player.name}, bạn đã vượt qua "${activeLevel.title}" trong ${Math.floor(seconds/60)} phút ${seconds%60} giây. ${first?"XP đã được cộng vào hồ sơ.":"Màn này đã được tính điểm trước đó nên không cộng trùng XP."}`;$("rewardXp").textContent=(first?"+"+earned:"Đã đạt "+(player.best[activeLevel.id]||earned))+" XP";$("completionModal").classList.remove("hidden")}
$("continueButton").onclick=()=>{$("completionModal").classList.add("hidden");openWorld(activeWorld);updateProfile()};
function apiUrl(){return window.IC3_CONFIG?.GOOGLE_SCRIPT_URL||""}
async function submitScore(){const row={name:player.name,className:player.className,xp:player.xp,completed:player.completed.length};let local=JSON.parse(localStorage.getItem("ic3gs6_local_scores")||"[]");let ix=local.findIndex(x=>x.name===row.name&&x.className===row.className);if(ix>=0)local[ix]=row;else local.push(row);localStorage.setItem("ic3gs6_local_scores",JSON.stringify(local));const url=apiUrl();if(!url)return;try{await fetch(url,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({action:"submit",...row})})}catch(e){console.warn("Leaderboard sync failed",e)}}
async function loadRanking(){const status=$("syncStatus"),url=apiUrl();status.classList.remove("online");try{if(!url)throw Error("offline");const r=await fetch(url+"?action=leaderboard");const d=await r.json();if(!d.ok)throw Error("invalid");renderRanking(d.rows||[]);status.textContent="● Google Sheets đang hoạt động";status.classList.add("online")}catch(e){renderRanking(JSON.parse(localStorage.getItem("ic3gs6_local_scores")||"[]"));status.textContent=url?"● Không thể kết nối Sheets":"● Chế độ trên thiết bị"}}
function renderRanking(rows){const body=$("rankingBody");if(!rows.length){body.innerHTML='<tr><td colspan="5">Chưa có thành tích. Hãy hoàn thành nhiệm vụ đầu tiên!</td></tr>';return}body.innerHTML=rows.sort((a,b)=>b.xp-a.xp||b.completed-a.completed).slice(0,50).map((r,i)=>`<tr><td>${["🥇","🥈","🥉"][i]||i+1}</td><td>${escapeHtml(r.name)}</td><td>${escapeHtml(r.className)}</td><td><b style="color:#a8f04b">${Number(r.xp)||0} XP</b></td><td>${Number(r.completed)||0} / ${allLevels.length}</td></tr>`).join("")}
$("refreshRanking").onclick=loadRanking;
let teacherPassword="",teacherCurrentRows=[];
function gradeStudent(r){const rate=allLevels.length?Number(r.completed||0)/allLevels.length:0;if(rate>=.8)return "Xuất sắc – hoàn thành rất tốt";if(rate>=.5)return "Tốt – nắm được phần lớn nội dung";if(rate>=.25)return "Đạt – cần luyện tập thêm";return "Cần cố gắng – nên ôn lại bài cơ bản";}
function teacherRows(){let rows=JSON.parse(localStorage.getItem("ic3gs6_local_scores")||"[]");return rows;}
function renderTeacher(rows){teacherCurrentRows=rows;const filter=$("teacherClassFilter"),old=filter.value,classes=[...new Set(rows.map(r=>r.className).filter(Boolean))].sort();filter.innerHTML='<option value="">Tất cả lớp</option>'+classes.map(c=>`<option value="${escapeHtml(c)}">${escapeHtml(c)}</option>`).join("");filter.value=classes.includes(old)?old:"";const visible=rows.filter(r=>!filter.value||r.className===filter.value);$("teacherSummary").innerHTML=`<div><b>${rows.length}</b><span>Học sinh</span></div><div><b>${classes.length}</b><span>Lớp</span></div><div><b>${rows.reduce((n,r)=>n+(Number(r.completed)||0),0)}</b><span>Lượt hoàn thành</span></div>`;$("teacherBody").innerHTML=visible.length?visible.sort((a,b)=>b.xp-a.xp).map(r=>`<tr><td>${escapeHtml(r.name)}</td><td><input class="teacher-class-edit" value="${escapeHtml(r.className)}" data-old-class="${escapeHtml(r.className)}" data-student="${escapeHtml(r.name)}"><button class="btn ghost teacher-save-class" data-reclass="${escapeHtml(r.name)}">Lưu lớp</button></td><td>${Number(r.xp)||0}</td><td>${Number(r.completed)||0}/${allLevels.length}</td><td>${gradeStudent(r)}</td></tr>`).join(""):'<tr><td colspan="5">Chưa có học sinh trong bộ lọc này.</td></tr>';}
async function openTeacher(){const pass=prompt("Nhập mật khẩu giáo viên:");if(pass===null)return;const url=apiUrl();if(!url){alert("Trang giáo viên cần kết nối Google Sheets để xác thực an toàn. Hãy cấu hình Apps Script theo README.");return}try{const r=await fetch(url,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({action:"teacher-list",password:pass})});const d=await r.json();if(!d.ok){alert(d.error||"Không xác thực được.");return}teacherPassword=pass;view("teacherView");renderTeacher(d.rows||[]);}catch(e){alert("Không kết nối được máy chủ giáo viên.");}}

$("teacherEntry").onclick=openTeacher;
$("teacherRefresh").onclick=async()=>{const url=apiUrl();if(!url||!teacherPassword)return;try{const r=await fetch(url,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({action:"teacher-list",password:teacherPassword})});const d=await r.json();if(d.ok)renderTeacher(d.rows||[]);}catch(e){alert("Không thể cập nhật dữ liệu.");}};
$("teacherClassFilter").onchange=()=>renderTeacher(teacherCurrentRows);
$("exportStudents").onclick=()=>{const rows=teacherCurrentRows;const csv=[["Học sinh","Lớp","XP","Hoàn thành","Đánh giá"],...rows.map(r=>[r.name,r.className,r.xp,r.completed,gradeStudent(r)])].map(row=>row.map(v=>'"'+String(v??"").replace(/"/g,'""')+'"').join(",")).join("\\r\\n");const blob=new Blob(["\\ufeff"+csv],{type:"text/csv;charset=utf-8"});const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="ket-qua-IC3-GS6.csv";a.click();URL.revokeObjectURL(a.href);};
$("teacherBody").addEventListener("click",async e=>{const b=e.target.closest("[data-reclass]");if(!b)return;const row=b.closest("tr"),input=row.querySelector(".teacher-class-edit"),oldClass=input.dataset.oldClass,newClass=input.value.trim();if(!newClass){alert("Tên lớp không được để trống.");return}try{const r=await fetch(apiUrl(),{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({action:"teacher-update-class",password:teacherPassword,name:b.dataset.reclass,oldClass,newClass})});const d=await r.json();if(!d.ok)throw Error(d.error||"Không cập nhật được");teacherCurrentRows=teacherCurrentRows.map(x=>x.name===b.dataset.reclass&&x.className===oldClass?{...x,className:newClass}:x);renderTeacher(teacherCurrentRows);alert("Đã cập nhật lớp cho học sinh.");}catch(err){alert("Không cập nhật được lớp: "+err.message);}});
$("clearRanking").onclick=async()=>{if(!confirm("Bạn có chắc muốn xóa toàn bộ bảng xếp hạng? Thao tác này không thể hoàn tác."))return;const url=apiUrl();localStorage.removeItem("ic3gs6_local_scores");try{const r=await fetch(url,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({action:"teacher-delete",password:teacherPassword})});const d=await r.json();if(!d.ok)throw Error(d.error||"Không xóa được");renderTeacher([]);alert("Đã xóa bảng xếp hạng.");}catch(e){alert("Không xóa được dữ liệu máy chủ: "+e.message);}};
$("logoutButton").onclick=()=>{if(!player.name)return;if(!confirm("Đăng xuất tài khoản hiện tại? Tiến trình trên thiết bị vẫn được lưu."))return;stopTimer();player.name="";player.className="";save();$("playerName").value="";$("playerClass").value="";$("playerLabel").textContent="Nhà thám hiểm";view("welcomeView");};
})();
