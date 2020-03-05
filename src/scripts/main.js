

import { KMHS } from './modules/kmhs.js'
import { DCS } from './modules/dcs.js'
import { PGU } from './modules/pgu.js'
import { MS } from './modules/ms.js'
import { PEPSI } from './modules/pepsi.js'
import { NMU } from './modules/nmu.js'
import { FRLNC } from './modules/frlnc.js'
import { QSO } from './modules/qso.js'
import { SMSOSQ } from './modules/smsosq.js'
import { BKLN } from './modules/bkln.js'
import { SOLI } from './modules/soli.js'
import { SPLD } from './modules/spld.js'
import { EMF } from './modules/emf.js'

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

//testing //////////////////////////////////
import { sendMail } from './modules/mail.js'
const mailer = document.getElementById("mail")
mailer.onclick = function() { 
	sendMail()
}
/////////////////////////////////////////////////////
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