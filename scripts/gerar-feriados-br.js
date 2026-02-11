const fs = require('fs');
const path = require('path');

// ---------- Cálculo da Páscoa (Gregorian) ----------
function easterDate(year) {
  // Meeus/Jones/Butcher algorithm
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31); // 3=Mar, 4=Apr
  const day = ((h + l - 7 * m + 114) % 31) + 1;

  // JS Date: month-1
  return new Date(year, month - 1, day);
}

function addDays(date, days) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

function toISO(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function fixed(year, mm, dd, name) {
  return { date: `${year}-${String(mm).padStart(2, '0')}-${String(dd).padStart(2, '0')}`, name, type: 'national' };
}

function buildYear(year) {
  const easter = easterDate(year);

  // Carnaval (terça) = 47 dias antes da Páscoa (domingo)
  const carnival = addDays(easter, -47);

  // Sexta-feira Santa = 2 dias antes
  const goodFriday = addDays(easter, -2);

  // Corpus Christi = 60 dias depois
  const corpusChristi = addDays(easter, 60);

  // Lista baseada no seu retorno (inclui Páscoa)
  const list = [
    fixed(year, 1, 1, 'Confraternização mundial'),
    { date: toISO(carnival), name: 'Carnaval', type: 'national' },
    { date: toISO(goodFriday), name: 'Sexta-feira Santa', type: 'national' },
    { date: toISO(easter), name: 'Páscoa', type: 'national' },
    fixed(year, 4, 21, 'Tiradentes'),
    fixed(year, 5, 1, 'Dia do trabalho'),
    { date: toISO(corpusChristi), name: 'Corpus Christi', type: 'national' },
    fixed(year, 7, 29, 'Aniversário de Paranaguá'),
    fixed(year, 9, 7, 'Independência do Brasil'),
    fixed(year, 10, 12, 'Nossa Senhora Aparecida'),
    fixed(year, 11, 2, 'Finados'),
    fixed(year, 11, 15, 'Proclamação da República'),
    fixed(year, 11, 20, 'Dia da consciência negra'),
    fixed(year, 12, 25, 'Natal'),

  ];

  // Ordena por data
  list.sort((a, b) => a.date.localeCompare(b.date));
  return list;
}

function buildRange(startYear, endYear) {
  const out = {};
  for (let y = startYear; y <= endYear; y++) {
    out[String(y)] = buildYear(y);
  }
  return out;
}

// ---------- MAIN ----------
const START = 2020; // ajuste como quiser (ex: 1900)
const END = 2100;

const data = buildRange(START, END);

const outPath = path.join(process.cwd(), 'src', 'assets', 'feriados-br.json');
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(data, null, 2), 'utf8');

console.log(`✅ Gerado: ${outPath} (${START}..${END})`);
