// 実践的Web開発 2026秋学期 中間課題「キャラ図鑑」のデータ
// 架空のゲームのキャラクターです。
// 項目（name / type / attack / rarity / emoji / image）が同じなら、自分の好きなゲームや推しのデータに差し替えてかまいません。
//   name: 名前 / type: タイプ（炎・水・草） / attack: 攻撃力 / rarity: レア度（1〜5。大きいほどレア）
//   emoji: 絵文字 / image: 画像のURL（256×256 の JPEG）
// 画像は生成AI（Google Gemini の画像生成）で作った架空のキャラクターのイラストです。
// 既存の作品・キャラクター・作家の名前を指定せずに作り、似たものがないことを目で確かめています。
// この授業の課題の中では自由に使ってかまいません。
let characters = [
  { name: "ヒノコ", type: "炎", attack: 72, rarity: 2, emoji: "🔥", image: "https://morimorihoge.github.io/teu2026f/images/hinoko.jpg" },
  { name: "カエンジシ", type: "炎", attack: 95, rarity: 4, emoji: "🦁", image: "https://morimorihoge.github.io/teu2026f/images/kaenjishi.jpg" },
  { name: "ホムラリュウ", type: "炎", attack: 120, rarity: 5, emoji: "🐉", image: "https://morimorihoge.github.io/teu2026f/images/homuraryu.jpg" },
  { name: "シズク", type: "水", attack: 55, rarity: 1, emoji: "💧", image: "https://morimorihoge.github.io/teu2026f/images/shizuku.jpg" },
  { name: "ナミウオ", type: "水", attack: 68, rarity: 2, emoji: "🐟", image: "https://morimorihoge.github.io/teu2026f/images/namiuo.jpg" },
  { name: "アオイルカ", type: "水", attack: 88, rarity: 3, emoji: "🐬", image: "https://morimorihoge.github.io/teu2026f/images/aoiruka.jpg" },
  { name: "スミダコ", type: "水", attack: 76, rarity: 3, emoji: "🐙", image: "https://morimorihoge.github.io/teu2026f/images/sumidako.jpg" },
  { name: "メブキ", type: "草", attack: 48, rarity: 1, emoji: "🌱", image: "https://morimorihoge.github.io/teu2026f/images/mebuki.jpg" },
  { name: "トゲボウ", type: "草", attack: 81, rarity: 3, emoji: "🌵", image: "https://morimorihoge.github.io/teu2026f/images/togebou.jpg" },
  { name: "ヒマワリン", type: "草", attack: 64, rarity: 2, emoji: "🌻", image: "https://morimorihoge.github.io/teu2026f/images/himawarin.jpg" },
  { name: "キノコロ", type: "草", attack: 58, rarity: 2, emoji: "🍄", image: "https://morimorihoge.github.io/teu2026f/images/kinokoro.jpg" },
  { name: "コケノオウ", type: "草", attack: 110, rarity: 5, emoji: "🪨", image: "https://morimorihoge.github.io/teu2026f/images/kokenoou.jpg" }
];
