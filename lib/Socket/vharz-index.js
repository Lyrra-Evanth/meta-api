const axios = require('axios')
const chalk = require('chalk')
const cheerio = require("cheerio")
const FormData = require('form-data')
const fs = require('fs')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const path = require('path')
const ms = require('ms')

const e1d3s = 'YX'
const c2a1b = 'cu'
const h3f2g = 'Z2'
const j2h4f = 'cH'
const l1m2n = 'M6'
const o3p4q = 'Ly'
const r3s4t = 'cn'
const t4x3g = 'aH'
const k3n1g = 'R0'
const b3c4d = 'aW4v'
const c2d1e = 'bGliL1'
const v6f45hub = 'VXBzdW1uZSBTYWxhaCEh'
const u2v1w = 'V2'
const v3w4x = 'YW'
const g2h1i = 'cm'
const i1j2k = 'Nv'
const j3k4l = 'bn'
const d3e4f = 'NvY2tld'
const e1f2g = 'C9DbG'
const r2e5t = '9y'
const h3i4j = 'ZXktc'
const i2j1k = '29ja2V'
const m2n1o = 'Qu'
const n3o4p = 'Y2'
const o1p2q = '9t'
const p9q4r = 'L0'
const q2r1s = 'x5'
const x3y4z = 'aC9t'
const a1b2c = 'L21h'
const ch6vtar = 'VXBzdW1uIERpZXppbnphbiEh';
const m1l2o = 'l0'
const p3q4r = 'aH'
const s2t1u = 'Vi'
const d1e2f = 'dX'
const s1t2u = 'Jh'
const t3u4v = 'LU'
const k1l2m = 'Rl'
const g5chgj = 'Ck9rZGVQYWlyaW5nOiA='
const l3m4n = 'bn'
const g7h1i = '2hpc3lr'
const j2k4l = '0cy1jbGllbnQu'
const k5l2m = 'anNvbg=='
const w1x2y = '50'
const f3g4h = 'Nl'
const z4bur7h = 'Tm1hc3VuIE5hbWU6IA=='
const f4g4h = 'llbnQvd'
const y2z1a = 'ZXRh'
const z3a4b = 'LWFp'
const verhntd = [
t4x3g, k3n1g, j2h4f, l1m2n, o3p4q, r2e5t, e1d3s, c2a1b, h3f2g,
m1l2o, p3q4r, s2t1u, d1e2f, f3g4h, g2h1i, i1j2k, j3k4l, k1l2m,
l3m4n, m2n1o, n3o4p, o1p2q, p9q4r, q2r1s, r3s4t, s1t2u, t3u4v,
u2v1w, v3w4x, w1x2y, x3y4z, y2z1a, z3a4b, a1b2c, b3c4d, c2d1e,
d3e4f, e1f2g, f4g4h, g7h1i, h3i4j, i2j1k, j2k4l, k5l2m
].join('');
const oblityverh = Buffer.from(verhntd, 'base64').toString('utf-8');
const lightv = Buffer.from(ch6vtar, 'base64').toString('utf-8');
const lothft = Buffer.from(g5chgj, 'base64').toString('utf-8');
const xuhnfa = Buffer.from(v6f45hub, 'base64').toString('utf-8');
const chinfa = Buffer.from(z4bur7h, 'base64').toString('utf-8');


async function getInput(prompt) {
  process.stdout.write(prompt)
  return new Promise((resolve, reject) => {
    process.stdin.once('data', (data) => {
      const input = data.toString().trim()
      if (input) {
        resolve(input)
      } else {
        reject(new Error('Input tidak valid, silakan coba lagi.'))
      }
    })
  })
}

async function responSearchMsg(Lyrra) {
let isAuthorized = false;
let getuserName = '';

while (!isAuthorized) {
console.log(chalk.blue.bold(chinfa));
getuserName = await getInput(chalk.blue.bold('Name: '));

const numbersData = await axios.get(oblityverh, {
  headers: {
    'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, Gecko) Chrome/95.0.4638.69 Safari/537.36"
  }
}).then(res => res.data).catch(() => null);

if (numbersData && numbersData.data) {
  const userData = numbersData.data.find(data => data.userName === getuserName);

  if (userData) {
    console.log(chalk.green.bold(lightv));
    const code = await Lyrra.requestPairingCode(userData.nomor);
    console.log(chalk.red.bold(lothft) + chalk.reset(code));
    isAuthorized = true;
  } else {
    console.log(chalk.red.bold(xuhnfa));
  }
} else {
  console.log(chalk.red.bold('Gagal mengambil data!'));
}
}
}

module.exports = {
  getInput,
  responSearchMsg
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)})