# Assignment

Một React component có chức năng chuyển đổi một mảng hoặc một chuỗi các số thành dạng 
biểu đồ đường hoặc biểu đồ cột

## Usage/Examples

```javascript
<ChartGenarator 
        mode={mode} //"bars" or "line"
        data={data} //String or Array of number
        color={color} // String of a hex color value
/>
```
Ví dụ:

```javascript
      <ChartGenarator 
        mode={"bars"}
        data={[1,9,3,5,8,1,7,12,43,67,54,13,68,90,87,65,43,22,45]}
        color={"#000000"}
/>
```

## Authors

- [@BevisDo](https://github.com/BevisDo)

## Deployment

Cài đặt node_modules

```bash
  npm install
```

Chạy server ở localhost:3000

```bash
  npm start
```

## Feedback

If you have any feedback, please reach out to me at doanhtuan52@gmail.com
