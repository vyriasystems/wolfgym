export interface ScheduleBlock {
  modality: string;
  tag: string;
  rows: { label: string; days: string; time: string }[];
}

export const schedules: ScheduleBlock[] = [
  {
    modality: "Musculação",
    tag: "Sala de peso",
    rows: [
      { label: "Acesso ilimitado", days: "Segunda a sexta", time: "05h–22h" },
      { label: "Acesso ilimitado", days: "Sábado e domingo", time: "08h–12h" },
      { label: "Plano Básico", days: "Segunda a sexta", time: "11h–15h" },
    ],
  },
  {
    modality: "Funcional Adulto",
    tag: "Turmas",
    rows: [
      { label: "Manhã", days: "3x (seg/qua/sex) ou 5x (seg a sex)", time: "06h · 07h · 08h" },
      { label: "Noite", days: "3x (seg/qua/sex) ou 5x (seg a sex)", time: "17h · 18h · 19h" },
    ],
  },
  {
    modality: "Funcional Kids",
    tag: "3x semana",
    rows: [
      {
        label: "Turma",
        days: "Segunda, quarta e sexta",
        time: "3x na semana",
      },
    ],
  },
  {
    modality: "Boxe",
    tag: "3x semana",
    rows: [
      {
        label: "Turma única",
        days: "Segunda, terça e quinta",
        time: "18h30–19h30",
      },
    ],
  },
  {
    modality: "Muay Thai Kids",
    tag: "Kids",
    rows: [
      { label: "Semana", days: "Segunda, quarta e sexta", time: "09h e 17h" },
      { label: "Aulão", days: "Sábado", time: "09h" },
    ],
  },
  {
    modality: "Muay Thai Adulto",
    tag: "Adulto",
    rows: [
      { label: "Semana", days: "Segunda, quarta e sexta", time: "06h e 20h" },
      { label: "Aulão", days: "Domingo", time: "10h" },
    ],
  },
];
