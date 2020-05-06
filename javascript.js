

let name = "t2yer";                 // 変数の定義
name = "t3yer";                     // 変数の更新
oddNumber = 11;                     // 2語以上は大文字で区切る
console.log(name);                  // コンソールに出力
console.log(name === "t3yer");      // 演算子 → 等しい
const member = "test";              // 定数の定義 (定数は変数の更新ができない)

conosle.log(`こんにちは、${name}`);  // テンプレートリテラル


//////// 条件式
if (oddNumber > 10) {
  console.log("10より大きい");       // if ({}の最後に「;」はなし)
} else if (oddNumber > 12) {
  console.log("12より大きい");       // else ifの処理
} else {
  // 次の処理                        // elseの処理
}

///////// or文 (and文は、&&)
if (oddNumber >= 10 || oddNumber < 100) {
  console.log("numberは2桁です");
}

///////// switch文
const color = "赤";
switch (color) {
  case "赤":
    console.log("ストップ！");
    break;                          // breakがないと次の処理にいく
  case "黄":
    console.log("要注意");
    break;
  default:
    console.log("colorの値が正しくありません");
    break;
}

////////// while文
while (oddNumber <= 20) {
  console.log(oddNumber);
  number++;
}

////////// for文
for (let number1 = 1; number1 <= 100; number++) {
  console.log(number);
}


///////// 配列
const animals = ["dog", "cat", "sheep"];  // 配列
animals[2] = "rabbit";                    // インデックス指定で更新
const character2 = [                      // 配列内にobject
  { name2: "手裏剣", price: 300 },
  { name2: "刀", price: 200 },
  { name2: "おだんご" }
];

console.log(animals.length);              // 要素数を表示
console.log(character2[1].price);         // objectの表示
console.log(`${character.age}`);          //

for (let i = 0; i < 3; i++) {
  console.log(animals[i]);          // 配列の表示
}

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);          // 配列の表示
}

///////// object
const character = { name: "にんじゃわんこ", age: 14 };  // object


character.age = 20;                 // objectの更新
console.log(character);
console.log(character.name);
