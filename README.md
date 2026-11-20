# NexuCare Odontologia

Landing page de uma clínica odontológica fictícia, criada para estudo e
portfólio. O projeto apresenta atendimento para bebês, crianças e adultos,
um catálogo de 12 tratamentos com filtros e um formulário de agendamento
demonstrativo.

## Tecnologias

- Next.js App Router com exportação estática
- React e TypeScript
- Tailwind CSS e Lucide React

## Rodar localmente

Com Node.js instalado, execute na raiz do projeto:

```bash
npm ci
npm run dev
```

Abra http://localhost:3000 ou o endereço indicado no terminal.
No PowerShell do Windows, use `npm.cmd` se `npm` estiver bloqueado.

## Gerar e testar a versão estática

```bash
npm run build
npx serve out
```

O build gera a pasta `out/`. Abra o endereço mostrado pelo servidor
estático para testar a página exportada.

## Estrutura

| Caminho                  | Responsabilidade                      |
| ------------------------ | ------------------------------------- |
| `app/page.tsx`           | Composição da página inicial          |
| `app/layout.tsx`         | Idioma, fontes e metadados            |
| `app/components/`        | Seções, formulário, filtros e JSON-LD |
| `app/data/treatments.ts` | Catálogo compartilhado de tratamentos |
| `next.config.ts`         | Configuração da exportação estática   |

## Demonstração

O formulário valida os campos no navegador e simula a solicitação.
Use dados fictícios durante o teste. O endereço e o telefone são
ilustrativos, e o mapa abre a cidade de referência, Capanema–PA.
