# Weather Web

Weather Web là một ứng dụng thời tiết xây dựng bằng **Next.js**, sử dụng **OpenWeatherMap API** để lấy dữ liệu thời tiết và **MongoDB** để lưu trữ thông tin. Dự án cung cấp thông tin thời tiết cho thành phố Hà Nội, Việt Nam, tương tự như giao diện của AccuWeather.

## Cấu trúc Dự án

Dự án này sử dụng các công nghệ sau:
- **Next.js**: Framework React để tạo ứng dụng full-stack với SSR (Server Side Rendering) và SSG (Static Site Generation).
- **Node.js**: Xử lý logic phía server.
- **MongoDB**: Cơ sở dữ liệu NoSQL để lưu trữ các thông tin liên quan đến thời tiết.
- **Axios**: Thư viện để gửi yêu cầu HTTP tới API.
- **Material UI**: Thư viện giao diện người dùng.

## Cài đặt

1. Clone repository về máy của bạn:

   ```bash
   git clone <url của repository>
   cd weather-web
2. Cài đặt các dependencies:

  ```bash
  npm install

3. Đảm bảo bạn có một cơ sở dữ liệu MongoDB. Bạn có thể sử dụng MongoDB Atlas hoặc cài đặt MongoDB cục bộ.

4. Tạo một file .env.local để cấu hình các biến môi trường. Ví dụ:

env
MONGODB_URI=mongodb://localhost:27017/weather-web
OPENWEATHERMAP_API_KEY=<your_openweathermap_api_key>

## Chạy Dự án
Để chạy dự án ở chế độ phát triển:


  ```bash
npm run dev
##  **Truy cập vào ứng dụng ở địa chỉ:**

bash
Sao chép
Chỉnh sửa
http://localhost:3000
