import { KMHS } from './scripts/modules/kmhs.js'
import { DCS } from './scripts/modules/dcs.js'
import { PGU } from './scripts/modules/pgu.js'
import { MS } from './scripts/modules/ms.js'
import { PEPSI } from './scripts/modules/pepsi.js'
import { NMU } from './scripts/modules/nmu.js'
import { FRLNC } from './scripts/modules/frlnc.js'
import { QSO } from './scripts/modules/qso.js'
import { SMSOSQ } from './scripts/modules/smsosq.js'
import { BKLN } from './scripts/modules/bkln.js'
import { SOLI } from './scripts/modules/soli.js'
import { SPLD } from './scripts/modules/spld.js'
import { EMF } from './scripts/modules/emf.js'

const kmhs = document.getElementById("kmhs");
const dcs = document.getElementById("dcs");
const pgu = document.getElementById("pgu");
const ms = document.getElementById("ms");
const pepsi = document.getElementById("pepsi");
const nmu = document.getElementById("nmu");
const frlnc = document.getElementById("frlnc");
const qso = document.getElementById("qso");
const smsosq = document.getElementById("smsosq");
const bkln = document.getElementById("bkln");
const soli = document.getElementById("soli");
const spld = document.getElementById("spld");
const emf = document.getElementById("emf");

var modal = document.getElementById("modal");
var modalContent = document.getElementById("modal-content");
var modalClose = document.getElementById("modal-close");

modalClose.onclick = function () {
	modal.classList.remove("modal--is-visible");
}

kmhs.onclick = function() { injectHTML(KMHS) }
dcs.onclick = function() { injectHTML(DCS) }
pgu.onclick = function() { injectHTML(PGU) }
ms.onclick = function() { injectHTML(MS) }
pepsi.onclick = function() { injectHTML(PEPSI) }
nmu.onclick = function() { injectHTML(NMU) }
frlnc.onclick = function() { injectHTML(FRLNC) }
qso.onclick = function() { injectHTML(QSO) }
smsosq.onclick = function() { injectHTML(SMSOSQ) }
bkln.onclick = function() { injectHTML(BKLN) }
soli.onclick = function() { injectHTML(SOLI) }
spld.onclick = function() { injectHTML(SPLD) }
emf.onclick = function() { injectHTML(EMF) }

const injectHTML = function(html) {
	modalContent.innerHTML = html
	modal.classList.add("modal--is-visible");
}

import './styles/main.scss';