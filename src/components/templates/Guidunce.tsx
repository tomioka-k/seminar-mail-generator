import React from "react";
import { SeminarProps } from "../types";

const Guidunce: React.FC<SeminarProps> = ({ seminar }) => {
  const template = `
  送信者名： ${seminar.senderName ? seminar.senderName : "{送信者名}"}
  送信元アドレス：${
    seminar.senderAdress ? seminar.senderAdress : "{送信元アドレス}"
  }

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
　【 ${seminar.name ? seminar.name : "{セミナー名}"} 】
     視聴用URLのご案内について  
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

このたびは、本セミナーにお申し込みいただき、誠にありがとうございます。

${
  seminar.method === "オンライン"
    ? `本セミナーはZOOMでのWebセミナー開催となります。
セミナーの開始時間になりましたら、視聴用URLにアクセスください。

※入室の際には、お名前・お申込み時のメールアドレスをご入力ください。

${seminar.urlForWatching ? seminar.urlForWatching : "{視聴用URL}"}
`
    : "本セミナーは会場での開催となります。"
}
また、ご不明な点がございましたら事務局までご連絡ください。

------------------------------------------------------------------------

${seminar.inquiry ? seminar.inquiry : "{お問合せ}"}

------------------------------------------------------------------------

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
■開催概要
【概要】　
${seminar.overview ? seminar.overview : "{セミナー概要}"}　
${
  seminar.CPD && seminar.method === "オンライン"
    ? "※CPD認定には全編視聴が条件となります"
    : `
    `
}
【開催日時】
${seminar.start ? seminar.start : "{開催日時}"}

【会場】
${seminar.place ? seminar.place : "{場所}"}

【費用】
${seminar.entryFee ? seminar.entryFee : "{費用}"}

${
  seminar.method === "オンライン"
    ? `
【ご視聴方法 / 操作方法】
・視聴用URLをクリックし、ご入室ください。
・セミナーの開始時間になりましたら、視聴用URLにアクセスください。

【注意事項】
・${seminar.CPD ? "※CPD認定には全編視聴が条件となります" : null}
・本セミナーの録画・録音、画面のキャプチャ、画面撮影は固くお断り致します。
・視聴前にご使用の端末で、以下URLより視聴確認をお願い致します。
　https://zoom.us/test
・企業内や学内ネットワークではご視聴いただけない場合がございます。
　その際は、別の回線（Wi-Fiルーター、テザリングなど）をご利用の上、ご視聴く
　ださい。


■講義資料
${seminar.document ? seminar.document : "{講義資料}"}


【ご視聴時のトラブル対処法】
■映像や音声が途切れてしまう場合
・開いているウィンドウをすべて閉じ、視聴URLから接続しなおしてください。
・配信視聴用のブラウザ以外のアプリケーションをすべて終了してください。
・視聴端末を電波の受信しやすい場所に移動して視聴してください。
・視聴端末の再起動、インターネットの再接続を行って視聴URLから接続しなおして
　ください。

■音声が聞こえない場合
・視聴端末本体がミュートになっていないかをご確認ください。
・視聴端末の音声再生デバイスの選択が問題ないかをご確認ください。
・視聴端末にて音声再生デバイスが認識されているかご確認ください。
・視聴ブラウザの音声再生がミュートになっていないかをご確認ください。  
`
    : ""
}
------------------------------------------------------------------------

${seminar.inquiry ? seminar.inquiry : "{お問合せ}"}

------------------------------------------------------------------------
`;

  return (
    <div>
      {template.split("\n").map((str, index) => (
        <React.Fragment key={index}>
          {str}
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Guidunce;
