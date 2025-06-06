import { Rifa } from "@/types";

export const rifasMockBase: Record<string, Rifa> = {
    "1": {
        id: "1",
        titulo: "Rifa Solidária",
        descricao: "Ajude uma causa e concorra a prêmios incríveis!",
        progresso: "100%",
        metodoPagamento: "Pix, Cartão",
        disponivel: true,
        preco: 3.99,
        totalNumbers: 100,
        premio: 250,
        saleMode: "a dezena",
        numerosVendidos: [1, 5, 17, 42],
        dataSorteio: "2025-05-03T18:55:00Z",
        canalTransmissao: "YouTube – Xerifão JB",
        contatos: [
            { nome: "Sophie", telefone: "22999679484", avatarUrl: "/sophie.png" },
            { nome: "Xerifão", telefone: "22997018404", avatarUrl: "/xerifao.png" },
        ],
        imagensPremioPrincipal: ["/rifa1-1.png"],
        premios: [
            { nome: "Pix R$250", imagens: ["/rifa1-2.png"] },
            { nome: "Brinde surpresa", imagens: [] }
        ],
        fazendinha: true,
    },
    "2": {
        id: "2",
        titulo: "Rifa Esperança",
        descricao: "Ajude a comunidade local e concorra a um smartphone novo.",
        progresso: "0%",
        metodoPagamento: "Pix, Dinheiro",
        disponivel: false, // não paga
        preco: 8.00,
        totalNumbers: 150,
        premio: "Smartphone",
        saleMode: "por número",
        numerosVendidos: [],
        dataSorteio: "2025-07-15T19:00:00Z",
        canalTransmissao: "YouTube – Esperança",
        contatos: [
            { nome: "Lucas", telefone: "21955554444", avatarUrl: "/lucas.png" },
            { nome: "Paula", telefone: "21944443333", avatarUrl: "/paula.png" },
        ],
        imagensPremioPrincipal: ["/rifa2-1.png"],
        premios: [
            { nome: "Smartphone", imagens: [] },
            { nome: "Acessório surpresa", imagens: [] }
        ],
        fazendinha: true,
    },
    "3": {
        id: "3",
        titulo: "Rifa do Bem",
        descricao: "Participe e ajude a ONG Amigos dos Animais. Prêmio: Bicicleta Aro 29.",
        progresso: "45%", // valor fixo para evitar hydration error
        metodoPagamento: "Pix, Boleto",
        disponivel: true,
        preco: 5.00,
        totalNumbers: 200,
        premio: "Bicicleta Aro 29",
        saleMode: "por número",
        numerosVendidos: [10, 23, 45, 67, 89, 101, 150],
        dataSorteio: "2025-06-10T20:00:00Z",
        canalTransmissao: "Instagram – @amigosanimais",
        contatos: [
            { nome: "Carlos", telefone: "21999998888", avatarUrl: "/carlos.png" },
            { nome: "Ana", telefone: "21988887777", avatarUrl: "/ana.png" },
        ],
        imagensPremioPrincipal: ["/rifa3-1.png"],
        premios: [
            { nome: "Bicicleta Aro 29", imagens: [] },
            { nome: "Vale-compras R$100", imagens: [] }
        ],
        fazendinha: false,
    },
    "4": {
        id: "4",
        titulo: "Rifa dos Sonhos",
        descricao: "Concorra a uma viagem e ajude projetos sociais.",
        progresso: "67%", // valor fixo para evitar hydration error
        metodoPagamento: "Cartão, Pix",
        disponivel: true,
        preco: 15.00,
        totalNumbers: 300,
        premio: "Viagem",
        saleMode: "por cota",
        numerosVendidos: [5, 12, 25, 33, 99, 120, 250],
        dataSorteio: "2025-08-01T21:00:00Z",
        canalTransmissao: "Facebook – Rifa dos Sonhos",
        contatos: [
            { nome: "Fernanda", telefone: "21933332222", avatarUrl: "/fernanda.png" },
            { nome: "Rafael", telefone: "21922221111", avatarUrl: "/rafael.png" },
        ],
        imagensPremioPrincipal: ["/rifa4-1.png"],
        premios: [
            { nome: "Viagem", imagens: [] },
            { nome: "Voucher R$500", imagens: [] },
            { nome: "Premiação especial", imagens: [] }
        ],
        fazendinha: false,
    },
    "5": {
        id: "5",
        titulo: "Rifa Natalina",
        descricao: "Concorra a uma cesta de Natal e ajude famílias carentes.",
        progresso: "55%",
        metodoPagamento: "Cartão, Dinheiro",
        disponivel: true,
        preco: 2.50,
        totalNumbers: 150,
        premio: "Cesta de Natal",
        saleMode: "por cota",
        numerosVendidos: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
        dataSorteio: "2024-12-20T19:30:00Z",
        canalTransmissao: "Facebook – Rifa Natalina",
        contatos: [
            { nome: "João", telefone: "21977776666", avatarUrl: "/joao.png" },
            { nome: "Maria", telefone: "21966665555", avatarUrl: "/maria.png" },
        ],
        imagensPremioPrincipal: ["/rifa5-1.png"],
        premios: [
            { nome: "Cesta de Natal", imagens: [] },
            { nome: "Panetone", imagens: [] },
            { nome: "Vale-presente", imagens: [] }
        ],
        fazendinha: false,
    }
};

const rifasMock = rifasMockBase;

export async function getRifaById(id: string): Promise<Rifa | null> {
    return rifasMock[id] || null;
}