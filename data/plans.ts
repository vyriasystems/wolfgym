export type ClassModalityId =
  | "musculacao"
  | "funcional"
  | "boxe"
  | "muay-thai-kids"
  | "muay-thai-adulto";

export type ModalityId = ClassModalityId | "combo";

export type PriceKind = "monthly" | "pack";

export interface PlanOption {
  id: string;
  label: string;
  price: number;
  kind: PriceKind;
  period: string;
  savingsPerMonth?: number;
  details: string[];
}

export interface Modality {
  id: ClassModalityId;
  name: string;
  hook: string;
  short: string;
}

export const modalities: Modality[] = [
  {
    id: "musculacao",
    name: "Musculação",
    short: "Sala de peso",
    hook: "Peso, disciplina e o básico que não é básico.",
  },
  {
    id: "funcional",
    name: "Funcional",
    short: "Adulto",
    hook: "Condicionamento de verdade, sem enrolação.",
  },
  {
    id: "boxe",
    name: "Boxe",
    short: "Luta",
    hook: "Disciplina, força e foco pra vencer na vida.",
  },
  {
    id: "muay-thai-kids",
    name: "Muay Thai Kids",
    short: "Kids",
    hook: "Respeito, foco e energia — desde cedo na alcateia.",
  },
  {
    id: "muay-thai-adulto",
    name: "Muay Thai Adulto",
    short: "Adulto",
    hook: "A arte das oito armas. Corpo e cabeça no mesmo round.",
  },
];

export const planModalities: { id: ModalityId; name: string; note?: string }[] =
  [
    { id: "musculacao", name: "Musculação" },
    { id: "funcional", name: "Funcional" },
    { id: "boxe", name: "Boxe" },
    { id: "muay-thai-kids", name: "Muay Thai Kids" },
    { id: "muay-thai-adulto", name: "Muay Thai Adulto" },
    {
      id: "combo",
      name: "Combo Musculação+Funcional+Luta",
      note: "Musculação + Funcional 3x/semana ou luta",
    },
  ];

export const plansByModality: Record<ModalityId, PlanOption[]> = {
  musculacao: [
    {
      id: "musc-12",
      label: "12 meses recorrente",
      price: 125,
      kind: "monthly",
      period: "/mês",
      savingsPerMonth: 35,
      details: ["2 avaliações físicas", "Acesso ilimitado à sala de peso"],
    },
    {
      id: "musc-6",
      label: "6 meses recorrente",
      price: 145,
      kind: "monthly",
      period: "/mês",
      savingsPerMonth: 15,
      details: ["1 avaliação física", "Acesso ilimitado à sala de peso"],
    },
    {
      id: "musc-mensal",
      label: "Mensal",
      price: 160,
      kind: "monthly",
      period: "/mês",
      details: ["Acesso ilimitado à sala de peso"],
    },
    {
      id: "musc-basico",
      label: "Básico",
      price: 130,
      kind: "monthly",
      period: "/mês",
      details: ["Acesso restrito", "Seg–sex 11h–15h"],
    },
    {
      id: "musc-day-1",
      label: "Day Use — 1 diária",
      price: 30,
      kind: "pack",
      period: "",
      details: ["1 diária na sala de peso"],
    },
    {
      id: "musc-day-3",
      label: "Day Use — 3 diárias",
      price: 80,
      kind: "pack",
      period: "",
      details: ["Pacote de 3 diárias"],
    },
    {
      id: "musc-day-6",
      label: "Day Use — 6 diárias",
      price: 120,
      kind: "pack",
      period: "",
      details: ["Pacote de 6 diárias"],
    },
    {
      id: "musc-day-plus",
      label: "Day Use — acima de 6 diárias",
      price: 150,
      kind: "pack",
      period: "",
      details: ["Pacote acima de 6 diárias"],
    },
    {
      id: "musc-familia",
      label: "Casal / Família",
      price: 145,
      kind: "monthly",
      period: "/pessoa",
      details: ["Mínimo de 3 pessoas", "Valor por pessoa"],
    },
  ],
  funcional: [
    {
      id: "func-3x",
      label: "3x semana (seg/qua/sex)",
      price: 160,
      kind: "monthly",
      period: "/mês",
      details: ["Manhã 06h, 07h, 08h", "Noite 17h, 18h, 19h"],
    },
    {
      id: "func-3x-4m",
      label: "3x semana — 4 meses",
      price: 140,
      kind: "monthly",
      period: "/mês",
      savingsPerMonth: 20,
      details: [
        "Plano 4 meses",
        "Manhã 06h, 07h, 08h",
        "Noite 17h, 18h, 19h",
      ],
    },
    {
      id: "func-5x",
      label: "5x semana (seg a sex)",
      price: 190,
      kind: "monthly",
      period: "/mês",
      details: ["Manhã 06h, 07h, 08h", "Noite 17h, 18h, 19h"],
    },
    {
      id: "func-5x-4m",
      label: "5x semana — 4 meses",
      price: 160,
      kind: "monthly",
      period: "/mês",
      savingsPerMonth: 30,
      details: [
        "Plano 4 meses",
        "Manhã 06h, 07h, 08h",
        "Noite 17h, 18h, 19h",
      ],
    },
  ],
  boxe: [
    {
      id: "boxe-3x",
      label: "3x semana",
      price: 180,
      kind: "monthly",
      period: "/mês",
      details: ["Segunda, terça e quinta", "18h30–19h30"],
    },
    {
      id: "boxe-4m",
      label: "4 meses recorrente",
      price: 160,
      kind: "monthly",
      period: "/mês",
      savingsPerMonth: 20,
      details: ["Segunda, terça e quinta", "18h30–19h30"],
    },
  ],
  "muay-thai-kids": [
    {
      id: "mtk-mensal",
      label: "Mensal",
      price: 180,
      kind: "monthly",
      period: "/mês",
      details: [
        "Seg, qua e sex às 09h e 17h",
        "Aulão sábado às 09h",
      ],
    },
  ],
  "muay-thai-adulto": [
    {
      id: "mta-mensal",
      label: "Mensal",
      price: 180,
      kind: "monthly",
      period: "/mês",
      details: [
        "Seg, qua e sexta às 06h e 20h",
        "Aulão domingo às 10h",
      ],
    },
    {
      id: "mta-4m",
      label: "4 meses recorrente",
      price: 160,
      kind: "monthly",
      period: "/mês",
      savingsPerMonth: 20,
      details: [
        "Seg, qua e sexta às 06h e 20h",
        "Aulão domingo às 10h",
      ],
    },
  ],
  combo: [
    {
      id: "combo-mensal",
      label: "Mensal",
      price: 280,
      kind: "monthly",
      period: "/mês",
      details: [
        "Musculação + Funcional 3x/semana ou luta",
        "Acesso combinado na grade da modalidade",
      ],
    },
    {
      id: "combo-4m",
      label: "4 meses recorrente",
      price: 250,
      kind: "monthly",
      period: "/mês",
      savingsPerMonth: 30,
      details: [
        "Musculação + Funcional 3x/semana ou luta",
        "Acesso combinado na grade da modalidade",
      ],
    },
  ],
};
