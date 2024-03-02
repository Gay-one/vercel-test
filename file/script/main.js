import { barrack } from "./unitbuilding_type.js";
import { factory } from "./unitbuilding_type.js";
import { infantry } from "./unitbuilding_type.js";
import { antiTankInfantry } from "./unitbuilding_type.js";
import { tank } from "./unitbuilding_type.js";
import { antiAirInfantry } from "./unitbuilding_type.js";
import { airplane } from "./unitbuilding_type.js";
//สถานะทรัพยากร
class r_status {
    constructor(f,i,a,fe,man,civ){
        this.food=f
        this.iron=i
        this.ammo=a
        this.feul=fe
        this.manpower=man
        this.civil=civ
        this.vicp=0
        this.recruitp=0
        this.infantry=0
        this.antiTankInfantry=0
        this.tank=0
        this.antiAirInfantry=0
        this.airplane=0
    }
}
//สถานะพื้นที่ที่มีทรัพเพิ่มต่อเทริน
class land {
    constructor(f,i,fe,civ){
        this.food_p=f
        this.iron_p=i
        this.feul_p=fe
        this.civil_p=civ
        this.factory=0
        this.barrack=0
        this.emptyslot=5
        this.worker=0
        this.owner='none'
    }
}
//สุ่มทรัพ
let randomNum = function(i){ 
    let len //จำนวนลูป
    let nuw //จำนวนทรัพมากที่สุดที่ควรมี
    let max //จำนวนทรัพน้อยที่สุดที่ควรมี
    if(i==1){
        len=6
        nuw=2000
        max=300
    }else{
        len=4
        nuw=200
        max=0
    }
    let num = []
    for(let i = 0; i<len; i++){
       num.push(Math.max(max,Math.floor(Math.random() * nuw)))
    }
    return num
}
let area_1 = new land(...randomNum(0))
let area_2 = new land(...randomNum(0))
let area_3 = new land(...randomNum(0))
let area_4 = new land(...randomNum(0))
let area_5 = new land(...randomNum(0))
let area_6 = new land(...randomNum(0))
let area_7 = new land(...randomNum(0))
let area_8 = new land(...randomNum(0))
let area_9 = new land(...randomNum(0))

let player_status = new r_status(...randomNum(1))
let enemy_status = new r_status(...randomNum(1))

let player_food = document.getElementById('Foods')
let player_iron = document.getElementById('Irons')
let player_ammo = document.getElementById('Ammunitons')
let player_feul = document.getElementById('Feul')
let player_manpower = document.getElementById('Manpower')
let player_civil = document.getElementById('Civilians')
let player_vitoryP = document.getElementById('Victory-Point')

player_food.innerText=`Foods: ${player_status.food}`
player_iron.innerText=`Irons: ${player_status.iron}`
player_ammo.innerText=`Ammunitons: ${player_status.ammo}`
player_feul.innerText=`Feul: ${player_status.feul}`
player_manpower.innerText=`Manpower: ${player_status.manpower}`
player_civil.innerText=`Civilians: ${player_status.civil}`
player_vitoryP.innerText=`Victory-Point: ${player_status.vicp}`

for(let i=0;i<9;i++){
    let box = document.createElement('div')
    let content =  document.getElementById('Content')
    box.classList.add('layout-land')
    box.id=`Area-${i+1}`
    content.appendChild(box)
    box.innerText = `${area_1}`
}
const report_box = document.getElementById('Report')
const army_report = document.createElement('div')
army_report.innerHTML = `<div class=box_report><span class=box_report-B>Recruit Point: ${player_status.recruitp}</span><span class=box_report-B><button id=Order>Order</button></span></div>
                         <div class=box_report><span class=box_report-B>Infantry: ${player_status.infantry}</span><span class=box_report-B><button id=inf>+</button></span></div>
                         <div class=box_report><span class=box_report-B>AntiTankInfantry: ${player_status.antiTankInfantry}</span><span class=box_report-B><button id=int>+</button></span></div>
                         <div class=box_report><span class=box_report-B>Tank: ${player_status.tank}</span><span class=box_report-B><button id=t>+</button></span></div>
                         <div class=box_report><span class=box_report-B>AntiAirInfantry: ${player_status.antiAirInfantry}</span><span class=box_report-B><button id=ina>+</button></span></div>
                         <div class=box_report><span class=box_report-B>Airplane: ${player_status.airplane}</span><span class=box_report-B><button id=a>+</button></span></div>`
report_box.appendChild(army_report)
document.getElementById('inf').addEventListener('click',()=>{
    player_status.infantry++
    console.log(player_status.infantry)
})