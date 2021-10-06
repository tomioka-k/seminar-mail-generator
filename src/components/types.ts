export interface Seminar {
  senderName: string;
  senderAdress: string;
  name: string;
  description: string;
  overview: string;
  overviewDescription: string;
  start: string;
  place: string;
  entryFee: string;
  attendUrl: string;
  deadline: string;
  flyerUrl: string;
  inquiry: string;
  document: string;
}

export interface SeminarProps {
  seminar: Seminar;
}
