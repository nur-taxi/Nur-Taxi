export interface User {
  id: string;
  telefon: string;
  ism: string;
  familiya?: string;
  yaratilgan_vaqt: Date;
}

export interface Driver {
  id: string;
  telefon: string;
  ism: string;
  familiya: string;
  mashina_raqami: string;
  onlayn: boolean;
  faol: boolean;
}