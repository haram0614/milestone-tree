
addLayer("sp", {
    name: "super-prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "SP", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 3, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#65A0B0",
    requires(){
		return new Decimal(1e98);
	}, // Can be a function that takes requirement increases into account
    resource: "super-prestige points", // Name of prestige currency
    baseResource: "prestige points", // Name of resource prestige is based on
    baseAmount() {return player.p.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
		if(player.ap.activeChallenge==12)return new Decimal(0);
		if(player.m.effective.gte(27))mult=mult.mul(tmp.m.milestone27Effect);
		if(hasUpgrade("sp",21))mult=mult.mul(upgradeEffect("sp",21));
		if(hasUpgrade("sp",22))mult=mult.mul(upgradeEffect("sp",22));
		if(hasUpgrade("hp",21))mult=mult.mul(upgradeEffect("hp",21));
		if(hasUpgrade("hp",22))mult=mult.mul(upgradeEffect("hp",22));
		if(hasUpgrade("ap",13))mult=mult.mul(upgradeEffect("ap",13));
		mult=mult.mul(tmp.hp.buyables[12].effect);
		if(sha512_256(localStorage.supporterCode).slice(0,2) == 'b4' && window.supporterCodeInput){return mult.mul(2)}
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        mult = new Decimal(1)
		if(player.m.effective.gte(27))mult=mult.mul(tmp.ap.challenges[12].rewardEffect);
		if(hasUpgrade("t",13))mult=mult.mul(1.005);
		if(hasUpgrade("t",33))mult=mult.mul(1.005);
		if(player.t.activeChallenge==31||player.t.activeChallenge==41)mult=mult.mul(tmp.t.dilationEffect);
		mult=mult.mul(layers.t.getSpecialEffect(31));
		if(player.um.points.gte(25))mult=mult.mul(1.02);
		mult=mult.mul(tmp.t.buyables[12].effect);
        return mult
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
	exponent: 0.1,
    hotkeys: [
        {key: "s", description: "S: Reset for super-prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return player.m.effective.gte(25) && player.r.universe==0},
	upgrades: {
        rows: 4,
        cols: 4,
		11: {
			title: "Super-Prestige Upgrade 11",
            description: "First Milestone's effect is boosted by your super-prestige points.",
            cost: new Decimal(1),
            unlocked() { return true}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=50;
				if(player.m.effective.gte(31))base+=5;
				if(player.m.effective.gte(49))base+=5;
				if(player.m.effective.gte(59))base+=5;
				if(player.m.effective.gte(69))base+=5;
				if(player.m.effective.gte(79))base+=10;
				if(player.m.effective.gte(89))base+=5;
				if(hasUpgrade("sp",44))base+=10;
				if(player.um.points.gte(30))base+=2;
				if(player.um.points.gte(31))base+=3;//100
				if(player.um.points.gte(49))base+=5;//105
				if(player.um.points.gte(59))base+=5;//110
				if(player.um.points.gte(69))base+=5;//115
				if(player.um.points.gte(79))base+=5;//120
				if(player.um.points.gte(89))base+=1;//121
                let ret = Decimal.pow(base,Decimal.log10(player[this.layer].points.add(1)).pow(0.9).add(1))
                return ret;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
		12: {
			title: "Super-Prestige Upgrade 12",
            description: "First Milestone's effect is boosted by your super-prestige points.",
            cost: new Decimal(4),
            unlocked() { return true}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=10;
				if(player.m.effective.gte(32))base+=1;
				if(player.m.effective.gte(49))base+=1;
				if(player.m.effective.gte(59))base+=2;
				if(player.m.effective.gte(69))base+=1;
				if(player.m.effective.gte(79))base+=2;
				if(player.m.effective.gte(89))base+=1;
				if(hasUpgrade("sp",44))base+=2;
				if(player.um.points.gte(30))base+=2;
				if(player.um.points.gte(32))base+=3;//25
				if(player.um.points.gte(49))base+=5;//30
				if(player.um.points.gte(59))base+=2;//32
				if(player.um.points.gte(69))base+=2;//34
				if(player.um.points.gte(79))base+=3;//37
				if(player.um.points.gte(89))base+=3;//40
                let ret = Decimal.pow(base,Decimal.log10(player[this.layer].points.add(1)).pow(0.9).add(1))
                return ret;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
		13: {
			title: "Super-Prestige Upgrade 13",
            description: "Prestige Point gain is boosted by your super-prestige points.",
            cost: new Decimal(1e15),
            unlocked() { return player.m.effective.gte(30)}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=3;
				if(player.m.effective.gte(33))base+=0.5;
				if(player.m.effective.gte(49))base+=0.5;
				if(player.m.effective.gte(59))base+=0.92;
				if(player.m.effective.gte(69))base+=0.58;
				if(player.m.effective.gte(79))base+=1;
				if(player.m.effective.gte(89))base+=0.5;
				if(hasUpgrade("sp",44))base+=1;
				if(player.um.points.gte(33))base+=2;//10
				if(player.um.points.gte(49))base+=2;//12
				if(player.um.points.gte(59))base+=1;//13
				if(player.um.points.gte(69))base+=2;//15
				if(player.um.points.gte(79))base+=1;//16
				if(player.um.points.gte(89))base+=1;//17
                let ret = Decimal.pow(base,Decimal.log10(player[this.layer].points.add(1)).pow(0.9).add(1))
                return ret;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
		14: {
			title: "Super-Prestige Upgrade 14",
            description: "Prestige Point gain is boosted by your super-prestige points.",
            cost: new Decimal(1e37),
            unlocked() { return player.m.effective.gte(30)}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=1.5;
				if(player.m.effective.gte(34))base+=0.5;
				if(player.m.effective.gte(49))base+=0.5;
				if(player.m.effective.gte(59))base+=0.5;
				if(player.m.effective.gte(69))base+=0.5;
				if(player.m.effective.gte(79))base+=0.766;
				if(player.m.effective.gte(89))base+=0.234;
				if(hasUpgrade("sp",44))base+=1;
				if(player.um.points.gte(34))base+=0.5;//6
				if(player.um.points.gte(49))base+=1;//7
				if(player.um.points.gte(59))base+=0.5;//7.5
				if(player.um.points.gte(69))base+=0.5;//8
				if(player.um.points.gte(79))base+=0.5;//8.5
				if(player.um.points.gte(89))base+=0.5;//9
                let ret = Decimal.pow(base,Decimal.log10(player[this.layer].points.add(1)).pow(0.9).add(1))
                return ret;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
		21: {
			title: "Super-Prestige Upgrade 21",
            description: "Super-Prestige Point gain is boosted by your super-prestige points.",
            cost: new Decimal(1e63),
            unlocked() { return player.m.effective.gte(35)}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=1.3;
                let ret = Decimal.pow(base,Decimal.log10(player[this.layer].points.add(1)).pow(0.9).add(1))
                return ret;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
		22: {
			title: "Super-Prestige Upgrade 22",
            description: "Super-Prestige Point gain is boosted by your super-prestige points.",
            cost: new Decimal(1e110),
            unlocked() { return player.m.effective.gte(35)}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=1.1;
                let ret = Decimal.pow(base,Decimal.log10(player[this.layer].points.add(1)).pow(0.9).add(1))
                return ret;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
		23: {
			title: "Super-Prestige Upgrade 23",
            description: "6th and 27th Milestone's effect ^(2+(meta-milestones))",
            cost: new Decimal(1e185),
            unlocked() { return player.m.effective.gte(40)}, // The upgrade is only visible when this is true、
        },
		24: {
			title: "Super-Prestige Upgrade 24",
            description: "Third Milestone's effect is boosted by your super-prestige points.",
            cost: new Decimal(1e227),
            unlocked() { return player.m.effective.gte(40)}, // The upgrade is only visible when this is true、
        },
		31: {
			title: "Super-Prestige Upgrade 31",
            description: "Milestone Cost Scaling is weaker based on your super-prestige points.",
            cost: new Decimal("1e6864"),
			effect(){
				let p=player.sp.points.add(1e20).log10().log10().div(65);
				if(hasUpgrade("sp",32))p=p.mul(2);
				if(hasUpgrade("sp",33))p=p.mul(1.5);
				if(hasUpgrade("sp",34))p=p.mul(1.2);
				if(hasUpgrade("t",21))p=p.mul(1.1);
				if(player.um.points.gte(55))p=p.mul(1.001);
				if(player.um.points.gte(55)&&hasUpgrade("sp",32))p=p.mul(1.001);
				if(player.um.points.gte(55)&&hasUpgrade("sp",33))p=p.mul(1.001);
				if(player.um.points.gte(55)&&hasUpgrade("sp",34))p=p.mul(1.001);
				return p.add(1);
			},
            unlocked() { return player.m.effective.gte(55)}, // The upgrade is only visible when this is true
            effectDisplay() { return format(this.effect(),4)+"x weaker" }, // Add formatting to the effect
        },
		32: {
			title: "Super-Prestige Upgrade 32",
            description: "Super-Prestige Upgrade 31 is boosted.",
            cost: new Decimal("1e9617"),
            unlocked() { return player.m.effective.gte(55)}, // The upgrade is only visible when this is true
        },
		33: {
			title: "Super-Prestige Upgrade 33",
            description: "Super-Prestige Upgrade 31 is boosted.",
            cost: new Decimal("1e13713"),
            unlocked() { return player.m.effective.gte(55)}, // The upgrade is only visible when this is true
        },
		34: {
			title: "Super-Prestige Upgrade 34",
            description: "Super-Prestige Upgrade 31 is boosted.",
            cost: new Decimal("1e13839"),
            unlocked() { return player.m.effective.gte(55)}, // The upgrade is only visible when this is true
        },
		41: {
			title: "Super-Prestige Upgrade 41",
            description: "Same as Super-Prestige Upgrade 24. To buy this upgrade, You need to complete AP challenge 2 15 times.",
            cost(){
				if(player.ap.challenges[12]<15)return new Decimal(Infinity);
				return new Decimal("e447e8");
			},
            unlocked() { return player.m.effective.gte(127)}, // The upgrade is only visible when this is true
        },
		42: {
			title: "Super-Prestige Upgrade 42",
            description: "Same as Super-Prestige Upgrade 24. To buy this upgrade, You need to complete AP challenge 4 21 times.",
            cost(){
				if(player.ap.challenges[22]<21)return new Decimal(Infinity);
				return new Decimal("e478e8");
			},
            unlocked() { return player.m.effective.gte(127)}, // The upgrade is only visible when this is true
        },
		43: {
			title: "Super-Prestige Upgrade 43",
            description: "First Super-Prestige buyable is cheaper. You can buy this upgrade while you're in AP challenge 6.",
            cost(){
				if(player.ap.activeChallenge!=32)return new Decimal(Infinity);
				return new Decimal("e4e10");
			},
            unlocked() { return player.m.effective.gte(127)}, // The upgrade is only visible when this is true
        },
		44: {
			title: "Super-Prestige Upgrade 44",
            description: "First row of Super-Prestige upgrades is boosted. You can buy this upgrade while you're in T challenge 5.",
            cost(){
				if(player.t.activeChallenge!=31)return new Decimal(Infinity);
				return new Decimal("e127e5");
			},
            unlocked() { return player.m.effective.gte(127)}, // The upgrade is only visible when this is true
        },
	},
	buyables: {
		rows: 1,
		cols: 2,
		11:{
			title(){
				return "Prestige Multiplier";
			},
			display(){
				let data = tmp[this.layer].buyables[this.id];
				return "Level: "+format(player[this.layer].buyables[this.id])+"<br>"+
				"Prestige Point is multiplied by "+format(data.effect)+"<br>"+
				"Cost for Next Level: "+format(data.cost)+" Super-Prestige points";
			},
			cost(){
				let a=player[this.layer].buyables[this.id];
				if(a.gte(3)){
					let p=1.309;
					if(hasUpgrade("sp",43))p-=0.029;
					a=a.div(3).pow(p).mul(3);
				}
				if(player.um.points.gte(77))return Decimal.pow("ee3",a);
				return new Decimal("1e652955").mul(Decimal.pow("1e12345",a));
			},
			canAfford() {
                   return player[this.layer].points.gte(tmp[this.layer].buyables[this.id].cost)
			},
               buy() { 
                   player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
               },
			  effect(){
				  if(player.ap.activeChallenge==32||player.r.activeChallenge==11)return new Decimal(1);
				  let eff=new Decimal("1e10000").pow(player[this.layer].buyables[this.id]);
				  if(hasUpgrade("hp",31))eff=eff.pow(1.05);
				  eff=eff.pow(tmp.ap.challenges[32].rewardEffect);
				  return eff;
			  },
			  unlocked(){
				  return player.m.effective.gte(77);
			  }
		},
		12:{
			title(){
				return "Softcap Delayer";
			},
			display(){
				let data = tmp[this.layer].buyables[this.id];
				return "Level: "+format(player[this.layer].buyables[this.id])+"<br>"+
				"1st Milestone's softcap starts "+format(data.effect)+"x later<br>"+
				"Cost for Next Level: "+format(data.cost)+" Super-Prestige points";
			},
			cost(){
				let a=player[this.layer].buyables[this.id];
				a=Decimal.pow(2,a);
				return new Decimal(1).mul(Decimal.pow((hasUpgrade("ep",13)?"ee9":"ee10"),a));
			},
			canAfford() {
                   return player[this.layer].points.gte(tmp[this.layer].buyables[this.id].cost)
			},
               buy() { 
                   player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
               },
			  effect(){
				  if(player.ap.activeChallenge==32||player.r.activeChallenge==11)return new Decimal(1);
				  let b=0.02;
				  if(player.m.effective.gte(132))b+=0.01;
				  let eff=new Decimal(1).add(player[this.layer].buyables[this.id].mul(b));
				  eff=eff.pow(tmp.ap.challenges[32].rewardEffect);
				  return eff;
			  },
			  unlocked(){
				  return player.m.effective.gte(129);
			  }
		},
	},
	branches: ["p"],
	passiveGeneration(){
		if(player.um.points.gte(57))return 1e20;
		if(player.m.effective.gte(135))return 1e10;
		if(player.m.effective.gte(57))return 1;
		return 0;
	},
	softcap(){
		if(player.t.activeChallenge==42)return getPointSoftcapStart();
		return new Decimal(Infinity);
	},
	softcapPower(){
		if(player.t.activeChallenge==42)return new Decimal(0);
		return new Decimal(1);
	},
		doReset(l){
			if(l=="sp"){return;}
			if(l=="hp")if(player.um.points.gte(65))layerDataReset("sp",["upgrades","buyables"]);else if(player.m.effective.gte(65))layerDataReset("sp",["upgrades"]);else layerDataReset("sp",[]);
			if(l=="ap")if(player.um.points.gte(81))layerDataReset("sp",["upgrades","buyables"]);else if(player.m.effective.gte(81))layerDataReset("sp",["upgrades"]);else layerDataReset("sp",[]);
			if(l=="t")if(player.um.points.gte(100))layerDataReset("sp",["upgrades","buyables"]);else if(player.m.effective.gte(100))layerDataReset("sp",["upgrades"]);else layerDataReset("sp",[]);
			if(l=="hb")if(player.um.points.gte(104))layerDataReset("sp",["upgrades","buyables"]);else if(player.m.effective.gte(104))layerDataReset("sp",["upgrades"]);else layerDataReset("sp",[]);
			if(l=="a")layerDataReset("sp",["upgrades"]);
		},
	update(){
		if(player.m.effective.gte(83)){
			var target=player.sp.points.add(1).div("1e652955").log("1e12345");
			if(player.um.points.gte(77))target=player.sp.points.add(1).log("ee3");
			if(target.gte(3)){
				let p=1.309;
				if(hasUpgrade("sp",43))p-=0.029;
				target=target.div(3).pow(1/p).mul(3);
			}
			target=target.add(1).floor();
			if(target.gt(player.sp.buyables[11])){
				player.sp.buyables[11]=target;
			}
		}
		if(player.m.effective.gte(130)){
			var target=player.sp.points.add(1).div(1).log((hasUpgrade("ep",13)?"ee9":"ee10")).max(0.1).log(2);
			target=target.add(1).floor();
			if(target.gt(player.sp.buyables[12])){
				player.sp.buyables[12]=target;
			}
		}
	}
})