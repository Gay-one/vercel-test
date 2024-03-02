class unit_type {
    constructor (hp,al,dl,ah,dh,aa,cm,cf,ci,cfe,am,oa) {
        this.hit_point = hp
        this.att_light = al
        this.def_light = dl
        this.att_hard = ah
        this.def_hard = dh
        this.anti_air = aa
        this.cost_man = cm
        this.cost_food = cf
        this.cost_iron = ci
        this.cost_feul = cfe
        this.ammor = am //boolean
        this.onair = oa //boolean
    }
}
class building_type {
    constructor (pm,pa,civ,feu,iro) {
        this.manpower_per_turn = pm
        this.ammo_per_turn = pa
        this.cost_civ = civ
        this.cost_fuel = feu
        this.cost_iron = iro
    }
}

export const barrack = new building_type(100,0,1000,500,300);
export const factory = new building_type(0,500,2000,1000,600);

export const infantry = new unit_type(20, 5, 7, 2, 1.5, 1, 1, 100, 20, 0, false, false);
export const antiTankInfantry = new unit_type(20, 3, 4, 12, 9, 1.5, 1, 100, 100, 0, false, false);
export const tank = new unit_type(200, 20, 15, 7, 6.5, 0, 4, 400, 1000, 500, true, false);
export const antiAirInfantry = new unit_type(20, 2, 7, 3, 1.5, 10, 1, 100, 100, 20, true, false);
export const airplane = new unit_type(50, 7.5, 7.5, 6.5, 6.5, 20, 1, 100, 1500, 700, false, true);
