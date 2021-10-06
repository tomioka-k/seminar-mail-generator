import React from "react";
import { SeminarProps } from "../types";

const Thanks: React.FC<SeminarProps> = ({ seminar }) => {
  const template = `
  送信者名： ${seminar.senderName ? seminar.senderName : "{送信者名}"}
  送信元アドレス：${
    seminar.senderAdress ? seminar.senderAdress : "{送信元アドレス}"
  }

${seminar.name}事務局でございます。
このたびはセミナーにご参加・お申込みいただき、誠にありがとうございました。

{{ 任意の文章 }}


▼アンケートご協力のお願い
------------------------------------------------------------------
下記アンケートにご協力をお願いいたします。
{{ アンケートURL }}
締切：{{ 締切 }}
------------------------------------------------------------------

ご不明点、お困りのことなどございましたらお気軽にご相談ください。
ご要望に合わせて対応いたします。

今後ともよろしくお願いいたします。

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

export default Thanks;
