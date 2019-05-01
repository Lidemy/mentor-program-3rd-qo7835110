``` js
function isValid(arr) {
  for(var i=0; i<arr.length; i++) {
    if (arr[i] <= 0) return 'invalid'
  }
  for(var i=2; i<arr.length; i++) {
    if (arr[i] !== arr[i-1] + arr[i-2]) return 'invalid'
  }
  return 'valid'
}

isValid([3, 5, 8, 13, 22, 35])
```

## 執行流程
1. 第一個迴圈，設定變數，i 為 0 ， i 小於 arr 的長度 (6)
2. arr[0](3) 大於 0 不符合條件，如果符合條件 回傳 invalid
3. i 為 1 小於 6 arr[1](5) 大於 0 不符合條件
4. i 為 2 小於 6 arr[2](8) 大於 0 不符合條件
5. i 為 3 小於 6 arr[3](13) 大於 0 不符合條件
6. i 為 4 小於 6 arr[4](22) 大於 0 不符合條件
7. i 為 5 小於 6 arr[5](35) 大於 0 不符合條件
8. i 為 6 不小於 6 跳出迴圈
9. 第二個迴圈，設定變數， i 為 2 ， i 小於 arr 的長度 (6)
10. 如果 arr[2](8) 等於 arr[1](5) + arr[0](3) 不回傳 invalid
11. 如果 arr[3](13) 等於 arr[2](8) + arr[1](5) 不回傳 invalid
12. 如果 arr[4](22) 不等於 arr[2](13) + arr[1](8) 回傳 invalid
15. 回傳 invalid

- 這是一個判斷是否為費式數列的函數