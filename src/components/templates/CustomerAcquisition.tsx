import React from "react";
import { SeminarProps } from "../types";

const CustomerAcquisition: React.FC<SeminarProps> = ({ seminar }) => {
  const template = `
  送信者名： ${seminar.senderName ? seminar.senderName : "{送信者名}"}
  送信元アドレス：${
    seminar.senderAdress ? seminar.senderAdress : "{送信元アドレス}"
  }

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 
┏━┳┓ 
┣┳┫┃ ${seminar.name ? seminar.name : "{セミナー名}"} 
┃┣┻┫ ${seminar.attendUrl ? seminar.attendUrl : "{申込フォームURL}"}
┗┻━┛ 
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 
    
${seminar.description ? seminar.description : "{セミナー説明文}"}
    
┏┓━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
┗□ セミナー概要
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${seminar.overview ? seminar.overview : "{セミナー概要}"}

  ${
    seminar.overviewDescription
      ? seminar.overviewDescription
      : "{セミナー概要説明}"
  }

日時：${seminar.start ? seminar.start : "{日時}"}
    
会場：${seminar.place ? seminar.place : "{場所}"}

費用：${seminar.entryFee ? seminar.entryFee : "{費用}"}
    
▼「${seminar.name ? seminar.name : "{セミナー名}"}」のお申込みはこちら ▼

${seminar.attendUrl ? seminar.attendUrl : "{申込フォームURL}"}

※お申込み締め切り：${seminar.deadline ? seminar.deadline : "{申込締切}"} まで

▼「${seminar.name ? seminar.name : "{セミナー名}"}」の詳細はこちら ▼

${seminar.flyerUrl ? seminar.flyerUrl : "{詳細URL}"}

【当セミナーに関するお問い合わせ先】

${seminar.inquiry ? seminar.inquiry : "{お問合せ}"}

`;

  return (
    <>
      {template.split("\n").map((str, index) => (
        <React.Fragment key={index}>
          {str}
          <br />
        </React.Fragment>
      ))}
    </>
  );
};

export default CustomerAcquisition;
