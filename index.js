import { TwitterApi } from 'twitter-api-v2';
import fs from 'fs';

// 🔑 Ambil environment variables dari GitHub Secrets
const client = new TwitterApi({
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_SECRET,
});

(async () => {
  try {
    // 📝 Isi tweet kamu
    const textTweet = `
‼️ ShopeeFood Diskon 90% s/d 17RB 🍝
Resto Tertentu | Restock tiap jam ⏰ 

Klik tab " voucher " untuk klaim 👇👇 
https://spf.shopee.co.id/9Utq7h7lPg
https://spf.shopee.co.id/9Utq7h7lPg

gofood grabfood kode promo go grab shopee food gojek gratis ongkir
`;

    // 📸 Upload gambar
    const mediaId1 = await client.v1.uploadMedia('1.jpg');

    // 🐦 Kirim tweet dengan teks + dua gambar
    const tweet = await client.v2.tweet({
      text: textTweet,
      media: { media_ids: [mediaId1, mediaId2] },
    });

    console.log('✅ Tweet terkirim:', tweet.data.id);
  } catch (error) {
    console.error('❌ Gagal kirim tweet:', error);
  }
})();

