let day = 8;
let dayName;

switch (day) {
  case 1:
    dayName = "Chủ Nhật";
    break;
  case 2:
    dayName = "Thứ Hai";
    break;
  case 3:
    dayName = "Thứ Ba";
    break;
  case 4:
    dayName = "Thứ Tư";
    break;
  case 5:
    dayName = "Thứ Năm";
    break;
  case 6:
    dayName = "Thứ Sáu";
    break;
  case 7:
    dayName = "Thứ Bảy";
    break;
  default:
    dayName = "Không hợp lệ";
}

console.log(`Hôm nay là: ${dayName}`);
