
addLayer("ap", {
    name: "atomic-prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "AP", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 3, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#A0E0E0",
    requires: new Decimal("1e1997"), // Can be a function that takes requirement increases into account
    resource: "atomic-prestige points", // Name of prestige currency
    baseResource: "hyper-prestige points", // Name of resource prestige is based on
    baseAmount() {return player.hp.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
		if(hasUpgrade("ap",21))mult=mult.mul(upgradeEffect("ap",21));
		if(hasUpgrade("t",62))mult=mult.mul(upgradeEffect("t",62));
		if(sha512_256(localStorage.supporterCode).slice(0,2) == 'b4' && window.supporterCodeInput){return mult.mul(2)}
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        let m=layers.a.effect();
		if(hasUpgrade("t",22))m=m.mul(1.01);
		if(player.um.points.gte(80))m=m.mul(1.04);
		return m;
    },
    row: 4, // Row the layer is in on the tree (0 is the first row)
	exponent: 0.005,
    hotkeys: [
        {key: "a", description: "A: Reset for atomic-prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return player.m.effective.gte(80) && player.r.universe==0},
	branches(){
		if(player.r.stage>=1)return ["se","hp"];
		return ["hp"]
	},
	softcap:new Decimal(Infinity),
	softcapPower:new Decimal(1),
	
	upgrades: {
        rows: 3,
		cols: 4,
		11: {
			title: "Atomic-Prestige Upgrade 11",
            description: "First Milestone's effect is boosted by your atomic-prestige points.",
            cost: new Decimal(1),
            unlocked() { return true}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=new Decimal("1e2000");
				if(player.m.effective.gte(84))base=base.mul("1e4000");
				if(player.m.effective.gte(94))base=base.mul("1e4000");
				if(player.um.points.gte(84))base=base.mul("1e500");
                let ret = Decimal.pow(base,Decimal.log10(player[this.layer].points.add(1)).pow(0.9).add(1))
				if(player.um.points.gte(84))return ret.mul("e2e5");
                return ret.mul("1e48000").mul(Decimal.pow("1e500",player[this.layer].points.min(140)));
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
		12: {
			title: "Atomic-Prestige Upgrade 12",
            description: "Prestige Point gain is boosted by your atomic-prestige points.",
            cost: new Decimal(4),
            unlocked() { return true}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=new Decimal("1e1000");
				if(player.m.effective.gte(84))base=base.mul("1e2000");
				if(player.m.effective.gte(94))base=base.mul("1e2000");
				if(player.um.points.gte(84))base=base.mul("1e2500");
                let ret = Decimal.pow(base,Decimal.log10(player[this.layer].points.add(1)).pow(0.9).add(1))
				if(player.um.points.gte(84))return ret.mul("e2e5");
                return ret.mul("1e39000").mul(Decimal.pow("1e150",player[this.layer].points.min(500)));
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
		13: {
			title: "Atomic-Prestige Upgrade 13",
            description: "Super-Prestige Point gain is boosted by your atomic-prestige points.",
            cost: new Decimal(5000),
            unlocked() { return true}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=new Decimal("1e5000");
				if(player.m.effective.gte(84))base=base.mul("1e1000");
				if(player.m.effective.gte(94))base=base.mul("1e1000");
				if(player.um.points.gte(84))base=base.mul("1e100");
                let ret = Decimal.pow(base,Decimal.log10(player[this.layer].points.add(1)).pow(0.9).add(1))
				if(player.um.points.gte(84))return ret.mul("e2e5");
                return ret.mul("1e20000").mul(Decimal.pow("1e30",player[this.layer].points.sqrt().min(2300)));
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
		14: {
			title: "Atomic-Prestige Upgrade 14",
            description: "Hyper-Prestige Point gain is boosted by your atomic-prestige points.",
            cost: new Decimal(50000),
            unlocked() { return true}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=new Decimal("1e15");
				if(player.m.effective.gte(84))base=base.mul("1e10");
				if(player.m.effective.gte(94))base=base.mul("1e10");
				if(player.um.points.gte(84))base=base.mul("1e65");
                let ret = Decimal.pow(base,Decimal.log10(player[this.layer].points.add(1)).pow(0.9).add(1))
				return ret;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
		21: {
			title: "Atomic-Prestige Upgrade 21",
            description: "Atomic-Prestige Point gain is boosted by your atomic-prestige points.",
            cost: new Decimal(200000),
            unlocked() { return true}, // The upgrade is only visible when this is true
			effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
				let base=1.4;
                let ret = Decimal.pow(base,Decimal.log10(player[this.layer].points.add(1)).pow(0.9).add(1))
				return ret;
            },
            effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        },
		22: {
			title: "Atomic-Prestige Upgrade 22",
            description: "Each upgrade in this row unlocks an Atomic-Prestige challenge.",
            cost: new Decimal(2e9),
            unlocked() { return true}, // The upgrade is only visible when this is true
        },
		23: {
			title: "Atomic-Prestige Upgrade 23",
            description: "Milestone Cost Scaling is weaker based on your atomic-prestige points.",
            cost: new Decimal(3e18),
            unlocked() { return true}, // The upgrade is only visible when this is true
			effect() {
				let p=player.ap.points.add(1e20).log10().log10().div(200);
				if(hasUpgrade("ap",24))p=p.mul(4);
				if(hasUpgrade("ap",33))p=p.mul(2);
				if(hasUpgrade("ap",34))p=p.mul(1.2);
				return p.add(1);
            },
            effectDisplay() { return format(this.effect(),4)+"x weaker" }, // Add formatting to the effect
        },
		24: {
			title: "Atomic-Prestige Upgrade 24",
            description: "Atomic-Prestige Upgrade 23 is boosted.",
            cost: new Decimal(2e35),
            unlocked() { return true}, // The upgrade is only visible when this is true
        },
		31: {
			title: "Atomic-Prestige Upgrade 31",
            description: "The Second Hyper-Prestige buyable's effect ^1.5.",
            cost: new Decimal("1e5470"),
            unlocked() { return hasUpgrade("t",44);}, // The upgrade is only visible when this is true
        },
		32: {
			title: "Atomic-Prestige Upgrade 32",
            description: "1st Milestone's softcap starts later based on your atomic-prestige points.",
            cost: new Decimal("1e5613"),
            unlocked() { return hasUpgrade("t",44);}, // The upgrade is only visible when this is true
			effect() {
				let p=player.ap.points.add(1e20).log10().log10().div(57);
				if(hasUpgrade("ap",33))p=p.mul(2);
				if(hasUpgrade("ap",34))p=p.mul(1.2);
				return p.add(1);
            },
            effectDisplay() { return format(this.effect(),4)+"x later" },
        },
		33: {
			title: "Atomic-Prestige Upgrade 33",
            description: "Atomic-Prestige Upgrade 23 and 32 are boosted.",
            cost: new Decimal("1e6045"),
            unlocked() { return hasUpgrade("t",44);}, // The upgrade is only visible when this is true
        },
		34: {
			title: "Atomic-Prestige Upgrade 34",
            description: "Atomic-Prestige Upgrade 23 and 32 are boosted.",
            cost: new Decimal("1e6951"),
            unlocked() { return hasUpgrade("t",44);}, // The upgrade is only visible when this is true
        },
	},
	
	challenges: {
        rows: 3,
		cols: 2,
		11:{
                name: "No Prestige Boost",
                completionLimit: Infinity,
			    challengeDescription() {return "You can't gain prestige boosts.<br>"+format(challengeCompletions(this.layer, this.id),player.m.effective.gte(120)?4:0) +" completions"},
                unlocked() { return hasUpgrade("ap",22) && hasUpgrade("ap",21) },
                goal: function(){
					if(player.m.effective.gte(120))return this.goalAfter120(Math.ceil(player.ap.challenges[11]+0.001));
					if(player.ap.challenges[11]>=5)return new Decimal("1e46730000").pow(Decimal.pow(1.3,Decimal.pow(player.ap.challenges[11]-5,1.5)));
					return [new Decimal("1e1960000"),new Decimal("1e3550000"),new Decimal("1e4950000"),new Decimal("1e8150000"),new Decimal("e21640000")][player.ap.challenges[11]]
				},
                currencyDisplayName: "points",
                currencyInternalName: "points",
                rewardDescription() { return "Prestige Boost's effect is better." },
		completionsAfter120(){
			let p=player.points;
			if(player.m.effective.gte(193)&&player.r.stage>=1){
				if(p.lte("1e1000000"))return 0;
				return p.log10().div(1000000).log(1.25).pow(1/1.3).toNumber();
			}
			if(player.m.effective.gte(166)){
				if(p.lte("1e1000000"))return 0;
				return p.log10().div(1000000).log(1.28).pow(1/1.3).toNumber();
			}
			if(player.m.effective.gte(130)){
				if(p.lte("1e1000000"))return 0;
				return p.log10().div(1000000).log(1.3).pow(1/1.3).toNumber();
			}
			if(p.lte("1e1400000"))return 0;
			return p.log10().div(1400000).log(1.32).pow(1/1.3).toNumber();
		},
		goalAfter120(x=player.ap.challenges[11]){
			if(player.m.effective.gte(193)&&player.r.stage>=1)return Decimal.pow(10,Decimal.pow(1.25,Decimal.pow(x,1.3)).mul(1000000));
			if(player.m.effective.gte(166))return Decimal.pow(10,Decimal.pow(1.28,Decimal.pow(x,1.3)).mul(1000000));
			if(player.m.effective.gte(130))return Decimal.pow(10,Decimal.pow(1.3,Decimal.pow(x,1.3)).mul(1000000));
			return Decimal.pow(10,Decimal.pow(1.32,Decimal.pow(x,1.3)).mul(1400000));
		},
		canComplete(){
			return player.points.gte(tmp.ap.challenges[this.id].goal)&&player.m.effective.lt(110);
		},
		
		},
		12:{
                name: "No Super-Prestige",
                completionLimit: Infinity,
			    challengeDescription() {return "You can't gain super-prestige points.<br>"+format(challengeCompletions(this.layer, this.id),player.m.effective.gte(120)?4:0) +" completions"},
                unlocked() { return hasUpgrade("ap",22) && hasUpgrade("ap",22) },
                goal: function(){
					if(player.m.effective.gte(120))return this.goalAfter120(Math.ceil(player.ap.challenges[12]+0.001));
					if(player.ap.challenges[12]>=5)return new Decimal("1e60560000").pow(Decimal.pow(1.3,Decimal.pow(player.ap.challenges[12]-5,1.5)));
					return [new Decimal("1e2300000"),new Decimal("1e4870000"),new Decimal("1e7000000"),new Decimal("e12500000"),new Decimal("e28880000")][player.ap.challenges[12]]
				},
                currencyDisplayName: "points",
                currencyInternalName: "points",
				rewardEffect() {
                    let ret = 1+player.ap.challenges[12]*0.05;
					if(player.ap.challenges[12]>=5){
						ret=1.2+player.ap.challenges[12]*0.01;
						if(player.m.effective.gte(122))ret=1.175+player.ap.challenges[12]*0.015;
						if(player.m.effective.gte(138))ret=1.15+player.ap.challenges[12]*0.02;
						if(player.m.effective.gte(144))ret=1.125+player.ap.challenges[12]*0.025;
						if(player.m.effective.gte(196)&&player.r.stage>=1)ret=1.1+player.ap.challenges[12]*0.03;
						if(player.m.effective.gte(197)&&player.r.stage>=1)ret=1.075+player.ap.challenges[12]*0.035;
						if(player.m.effective.gte(198)&&player.r.stage>=1)ret=1.05+player.ap.challenges[12]*0.04;
					}
                    return ret;
                },
                rewardDisplay() { return "Super-Prestige points ^"+format(this.rewardEffect()) },
                rewardDescription() { return "Super-Prestige points is boosted based on this challenge's completions." },
		completionsAfter120(){
			let p=player.points;
			if(player.m.effective.gte(193)&&player.r.stage>=1){
				if(p.lte("1e1000000"))return 0;
				return p.log10().div(1000000).log(1.25).pow(1/1.3).toNumber();
			}
			if(player.m.effective.gte(167)){
				if(p.lte("1e1000000"))return 0;
				return p.log10().div(1000000).log(1.28).pow(1/1.3).toNumber();
			}
			if(player.m.effective.gte(152)){
				if(p.lte("1e1000000"))return 0;
				return p.log10().div(1000000).log(1.3).pow(1/1.3).toNumber();
			}
			if(player.m.effective.gte(130)){
				if(p.lte("1e1500000"))return 0;
				return p.log10().div(1500000).log(1.31).pow(1/1.3).toNumber();
			}
			if(p.lte("1e1700000"))return 0;
			return p.log10().div(1700000).log(1.32).pow(1/1.3).toNumber();
		},
		goalAfter120(x=player.ap.challenges[12]){
			if(player.m.effective.gte(193)&&player.r.stage>=1)return Decimal.pow(10,Decimal.pow(1.25,Decimal.pow(x,1.3)).mul(1000000));
			if(player.m.effective.gte(167))return Decimal.pow(10,Decimal.pow(1.28,Decimal.pow(x,1.3)).mul(1000000));
			if(player.m.effective.gte(152))return Decimal.pow(10,Decimal.pow(1.3,Decimal.pow(x,1.3)).mul(1000000));
			if(player.m.effective.gte(130))return Decimal.pow(10,Decimal.pow(1.31,Decimal.pow(x,1.3)).mul(1500000));
			return Decimal.pow(10,Decimal.pow(1.32,Decimal.pow(x,1.3)).mul(1700000));
		},
		canComplete(){
			return player.points.gte(tmp.ap.challenges[this.id].goal)&&player.m.effective.lt(110);
		},
		
		},
		21:{
                name: "No Self-Boost",
                completionLimit: Infinity,
			    challengeDescription() {return "3rd milestone's effect is always 1.<br>"+format(challengeCompletions(this.layer, this.id),player.m.effective.gte(120)?4:0) +" completions"},
                unlocked() { return hasUpgrade("ap",22) && hasUpgrade("ap",23) },
                goal: function(){
					if(player.m.effective.gte(120))return this.goalAfter120(Math.ceil(player.ap.challenges[21]+0.001));
					if(player.ap.challenges[21]>=5)return new Decimal("1e57090000").pow(Decimal.pow(1.3,Decimal.pow(player.ap.challenges[21]-5,1.5)));
					return [new Decimal("1e1615000"),new Decimal("1e4130000"),new Decimal("1e7150000"),new Decimal("e18060000"),new Decimal("e34850000")][player.ap.challenges[21]]
				},
                currencyDisplayName: "points",
                currencyInternalName: "points",
                rewardDescription() { return "3rd milestone's effect is better." },
		completionsAfter120(){
			let p=player.points;
			if(player.m.effective.gte(193)&&player.r.stage>=1){
				if(p.lte("1e1000000"))return 0;
				return p.log10().div(1000000).log(1.25).pow(1/1.3).toNumber();
			}
			if(player.m.effective.gte(168)){
				if(p.lte("1e1000000"))return 0;
				return p.log10().div(1000000).log(1.28).pow(1/1.3).toNumber();
			}
			if(player.m.effective.gte(152)){
				if(p.lte("1e1000000"))return 0;
				return p.log10().div(1000000).log(1.3).pow(1/1.3).toNumber();
			}
			if(player.m.effective.gte(130)){
				if(p.lte("1e1000000"))return 0;
				return p.log10().div(1000000).log(1.3).pow(1/1.34).toNumber();
			}
			if(p.lte("1e1140000"))return 0;
			return p.log10().div(1140000).log(1.3).pow(1/1.36).toNumber();
		},
		goalAfter120(x=player.ap.challenges[21]){
			if(player.m.effective.gte(193)&&player.r.stage>=1)return Decimal.pow(10,Decimal.pow(1.25,Decimal.pow(x,1.3)).mul(1000000));
			if(player.m.effective.gte(168))return Decimal.pow(10,Decimal.pow(1.28,Decimal.pow(x,1.3)).mul(1000000));
			if(player.m.effective.gte(152))return Decimal.pow(10,Decimal.pow(1.3,Decimal.pow(x,1.3)).mul(1000000));
			if(player.m.effective.gte(130))return Decimal.pow(10,Decimal.pow(1.3,Decimal.pow(x,1.34)).mul(1000000));
			return Decimal.pow(10,Decimal.pow(1.3,Decimal.pow(x,1.36)).mul(1140000));
		},
		canComplete(){
			return player.points.gte(tmp.ap.challenges[this.id].goal)&&player.m.effective.lt(110);
		},
		
		},
		22:{
                name: "Reduced Points",
                completionLimit: Infinity,
			    challengeDescription() {
			if(player.m.effective.gte(122))return "1st milestone's effect is replaced by (log10(1st milestone's effect+1))^(milestones)<br>"+format(challengeCompletions(this.layer, this.id),player.m.effective.gte(120)?4:0) +" completions";
			return "1st milestone's effect is replaced by (log10(1st milestone's effect+1))^100<br>"+format(challengeCompletions(this.layer, this.id),4) +" completions";
		},
                unlocked() { return hasUpgrade("ap",22) && hasUpgrade("ap",24) },
                goal: function(){
					if(player.m.effective.gte(120))return this.goalAfter120(Math.ceil(player.ap.challenges[22]+0.001));
					if(player.ap.challenges[22]>=5)return new Decimal("1e740").pow(Decimal.pow(1.035,player.ap.challenges[22]-5));
					return [new Decimal("1e614"),new Decimal("1e627"),new Decimal("1e671"),new Decimal("1e713"),new Decimal("1e725")][player.ap.challenges[22]]
				},
                currencyDisplayName: "points",
                currencyInternalName: "points",
                rewardDescription() { return "3rd milestone's effect is better, again." },
		completionsAfter120(){
			let p=player.points.add(10).log10().div(600).log(1.035);
			if(p.lte(3)){
				return p.toNumber()/2+3;
			}
			return p.toNumber();
		},
		goalAfter120(x=player.ap.challenges[22]){
			if(player.ap.challenges[22]<=3){
				return Decimal.pow(10,Decimal.pow(1.035,x*2-3).mul(600));
			}
			return Decimal.pow(10,Decimal.pow(1.035,x).mul(600));
		},
		canComplete(){
			return player.points.gte(tmp.ap.challenges[this.id].goal)&&player.m.effective.lt(110);
		},
		
		},
		31:{
                name: "No Prestige",
                completionLimit: Infinity,
			    challengeDescription() {return "You can't gain prestige points.<br>"+format(challengeCompletions(this.layer, this.id),player.m.effective.gte(120)?4:0) +" completions"},
                unlocked() { return player.m.effective.gte(95) },
                goal: function(){
					if(player.m.effective.gte(120))return this.goalAfter120(Math.ceil(player.ap.challenges[31]+0.001));
					if(player.ap.challenges[31]>=5)return new Decimal("1e18040000").pow(Decimal.pow(1.3,Decimal.pow(player.ap.challenges[31]-5,1.5)));
					return [new Decimal("1e3891000"),new Decimal("1e4171000"),new Decimal("1e6322000"),new Decimal("1e8035000"),new Decimal("1e9196000")][player.ap.challenges[31]]
				},
                currencyDisplayName: "points",
                currencyInternalName: "points",
                rewardDescription() { return "Prestige Boost's effect is better." },
		completionsAfter120(){
			let p=player.points;
			if(player.m.effective.gte(152)){
				if(p.lte("1e1600000"))return 0;
				return p.log10().div(1000000).log(1.2).pow(1/1.35).toNumber();
			}
			if(player.m.effective.gte(136)){
				if(p.lte("1e1600000"))return 0;
				return p.log10().div(1600000).log(1.2).pow(1/1.35).toNumber();
			}
			if(p.lte("1e1700000"))return 0;
			return p.log10().div(1700000).log(1.2).pow(1/1.36).toNumber();
		},
		goalAfter120(x=player.ap.challenges[31]){
			if(player.m.effective.gte(152))return Decimal.pow(10,Decimal.pow(1.2,Decimal.pow(x,1.35)).mul(1000000));
			if(player.m.effective.gte(136))return Decimal.pow(10,Decimal.pow(1.2,Decimal.pow(x,1.35)).mul(1600000));
			return Decimal.pow(10,Decimal.pow(1.2,Decimal.pow(x,1.36)).mul(1700000));
		},
		canComplete(){
			return player.points.gte(tmp.ap.challenges[this.id].goal)&&player.m.effective.lt(110);
		},
		
		},
		32:{
                name: "Disabled Buyables",
                completionLimit: Infinity,
			    challengeDescription() {return "All Prestige, Super-Prestige and Hyper-Prestige buyables have no effect.<br>"+format(challengeCompletions(this.layer, this.id),player.m.effective.gte(120)?4:0) +" completions"},
                unlocked() { return player.m.effective.gte(128) },
                goal: function(){
					return this.goalAfter120(Math.ceil(player.ap.challenges[32]+0.002));
				},
                currencyDisplayName: "points",
                currencyInternalName: "points",
				rewardEffect() {
                    let ret = 1+player.ap.challenges[32]*0.05;
                    return ret;
                },
                rewardDisplay() { return "Effect of All Prestige, Super-Prestige and Hyper-Prestige Buyables ^"+format(this.rewardEffect()) },
                rewardDescription() { return "Effect of All Prestige, Super-Prestige and Hyper-Prestige Buyables is better." },
		completionsAfter120(){
			let p=player.points;
			if(player.m.effective.gte(225)){
				if(p.lte("ee6"))return 0;
				return p.log10().div(1e6).log(1.2).pow(1/1.47).toNumber();
			}
			if(player.m.effective.gte(218)){
				if(p.lte("ee6"))return 0;
				return p.log10().div(1e6).log(1.2).pow(1/1.475).toNumber();
			}
			if(player.m.effective.gte(212)){
				if(p.lte("ee6"))return 0;
				return p.log10().div(1e6).log(1.2).pow(1/1.48).toNumber();
			}
			if(player.m.effective.gte(209)){
				if(p.lte("ee6"))return 0;
				return p.log10().div(1e6).log(1.2).pow(1/1.5).toNumber();
			}
			if(player.m.effective.gte(202)){
				if(p.lte("ee7"))return 0;
				return p.log10().div(1e7).log(1.2).pow(1/1.5).toNumber();
			}
			if(player.m.effective.gte(195)){
				if(p.lte("ee8"))return 0;
				return p.log10().div(1e8).log(1.2).pow(1/1.5).toNumber();
			}
			if(player.m.effective.gte(169)){
				if(p.lte("e1.15e9"))return 0;
				return p.log10().div(1.15e9).log(1.2).pow(1/1.5).toNumber();
			}
			if(player.m.effective.gte(152)){
				if(p.lte("e5e9"))return 0;
				return p.log10().div(5e9).log(1.2).pow(1/1.5).toNumber();
			}
			if(player.m.effective.gte(141)){
				if(p.lte("e1e10"))return 0;
				return p.log10().div(1e10).log(1.2).pow(1/1.5).toNumber();
			}
			if(player.m.effective.gte(130)){
				if(p.lte("e2e10"))return 0;
				return p.log10().div(2e10).log(1.2).pow(1/1.5).toNumber();
			}
			if(p.lte("e3e10"))return 0;
			return p.log10().div(3e10).log(1.2).pow(1/1.5).toNumber();
		},
		goalAfter120(x=player.ap.challenges[31]){
			if(player.m.effective.gte(225))return Decimal.pow(10,Decimal.pow(1.2,Decimal.pow(x,1.47)).mul(1e6));
			if(player.m.effective.gte(218))return Decimal.pow(10,Decimal.pow(1.2,Decimal.pow(x,1.475)).mul(1e6));
			if(player.m.effective.gte(212))return Decimal.pow(10,Decimal.pow(1.2,Decimal.pow(x,1.48)).mul(1e6));
			if(player.m.effective.gte(209))return Decimal.pow(10,Decimal.pow(1.2,Decimal.pow(x,1.5)).mul(1e6));
			if(player.m.effective.gte(202))return Decimal.pow(10,Decimal.pow(1.2,Decimal.pow(x,1.5)).mul(1e7));
			if(player.m.effective.gte(195))return Decimal.pow(10,Decimal.pow(1.2,Decimal.pow(x,1.5)).mul(1e8));
			if(player.m.effective.gte(169))return Decimal.pow(10,Decimal.pow(1.2,Decimal.pow(x,1.5)).mul(1.15e9));
			if(player.m.effective.gte(152))return Decimal.pow(10,Decimal.pow(1.2,Decimal.pow(x,1.5)).mul(5e9));
			if(player.m.effective.gte(141))return Decimal.pow(10,Decimal.pow(1.2,Decimal.pow(x,1.5)).mul(1e10));
			if(player.m.effective.gte(130))return Decimal.pow(10,Decimal.pow(1.2,Decimal.pow(x,1.5)).mul(2e10));
			return Decimal.pow(10,Decimal.pow(1.2,Decimal.pow(x,1.5)).mul(3e10));
		},
		canComplete(){
			return player.points.gte(tmp.ap.challenges[this.id].goal)&&player.m.effective.lt(110);
		},
		
		},
	},
	buyables: {
		rows: 1,
		cols: 2,
		11:{
			title(){
				return "Softcap Delayer";
			},
			display(){
				let data = tmp[this.layer].buyables[this.id];
				return "Level: "+format(player[this.layer].buyables[this.id])+"<br>"+
				"1st Milestone's softcap starts "+format(data.effect)+"x later<br>"+
				"Cost for Next Level: "+format(data.cost)+" Atomic-Prestige points";
			},
			cost(){
				let a=player[this.layer].buyables[this.id];
				a=Decimal.pow(2,a);
				return new Decimal(1).mul(Decimal.pow("e5e23",a));
			},
			canAfford() {
                   return player[this.layer].points.gte(tmp[this.layer].buyables[this.id].cost)
			},
               buy() { 
                   player[this.layer].buyables[this.id] = player[this.layer].buyables[this.id].add(1)
               },
			  effect(){
				  if(player.ap.activeChallenge==32)return new Decimal(1);
				  let b=0.03;
				  let eff=new Decimal(1).add(player[this.layer].buyables[this.id].mul(b));
				  if(player.m.effective.gte(222))eff=eff.pow(tmp.ap.challenges[32].rewardEffect);
				  return eff;
			  },
			  unlocked(){
				  return player.m.effective.gte(221);
			  }
		},
	},
	passiveGeneration(){
		if(player.um.points.gte(90))return 1e20;
		if(player.m.effective.gte(135))return 1e10;
		if(player.m.effective.gte(90))return 5;
		return 0;
	},
		doReset(l){
			if(l=="ap"){return;}
			if(l=="t")if(player.m.effective.gte(102))layerDataReset("ap",["upgrades"]);else layerDataReset("ap",[]);
			if(l=="a")layerDataReset("ap",["upgrades"]);
		},
		update(){
			if(player.m.effective.gte(103)&&!player.t.activeChallenge){
				let keep=3;
				if(player.m.effective.gte(108))keep=6;
				player.ap.challenges[11]=Math.max(player.ap.challenges[11],keep);
				player.ap.challenges[12]=Math.max(player.ap.challenges[12],keep);
				player.ap.challenges[21]=Math.max(player.ap.challenges[21],keep);
				player.ap.challenges[22]=Math.max(player.ap.challenges[22],keep);
				player.ap.challenges[31]=Math.max(player.ap.challenges[31],keep);
			}
			if(player.m.effective.gte(110)&&player.m.effective.lt(120)){
				if(player.ap.activeChallenge){
					if(player.points.gte(layers.ap.challenges[player.ap.activeChallenge].goal())){
						player.ap.challenges[player.ap.activeChallenge]++;
					}
				}
			}
			if(player.m.effective.gte(120)){
				if(player.ap.activeChallenge){
					player.ap.challenges[player.ap.activeChallenge]=Math.max(player.ap.challenges[player.ap.activeChallenge],layers.ap.challenges[player.ap.activeChallenge].completionsAfter120());
				}
			}
			if(player.m.effective.gte(114)){
				for(var i in player.ap.challenges){
					player.t.highestAPC[player.t.activeChallenge||0][i]=Math.max(player.t.highestAPC[player.t.activeChallenge||0][i],player.ap.challenges[i]);
					player.ap.challenges[i]=Math.max(player.t.highestAPC[player.t.activeChallenge||0][i],player.ap.challenges[i]);
				}
			}
			if(player.m.effective.gte(145)){
				player.ap.challenges[11]=Math.max(player.ap.challenges[11],layers.ap.challenges[11].completionsAfter120());
			}
			if(player.m.effective.gte(146)){
				player.ap.challenges[12]=Math.max(player.ap.challenges[12],layers.ap.challenges[12].completionsAfter120());
			}
			if(player.m.effective.gte(147)){
				player.ap.challenges[21]=Math.max(player.ap.challenges[21],layers.ap.challenges[21].completionsAfter120());
			}
			if(player.m.effective.gte(148)){
				player.ap.challenges[31]=Math.max(player.ap.challenges[31],layers.ap.challenges[31].completionsAfter120());
			}
			if(player.m.effective.gte(149)){
				player.ap.challenges[32]=Math.max(player.ap.challenges[32],layers.ap.challenges[32].completionsAfter120());
			}
			if(player.m.effective.gte(161)){
				player.ap.challenges[22]=Math.max(player.ap.challenges[22],getPointGenBeforeSoftcap().add(1e100).log10().pow(player.m.points).add(10).mul(player.m.points).log10().div(600).log(1.035).toNumber());
			}else if(player.m.effective.gte(157)){
				player.ap.challenges[22]=Math.max(player.ap.challenges[22],player.points.add(1e100).log10().pow(player.m.points).add(10).log10().div(600).log(1.035).toNumber());
			}
		if(player.m.effective.gte(222)){
			var target=player.ap.points.add(1).div(1).log("e5e23").max(0.1).log(2);
			target=target.add(1).floor();
			if(target.gt(player.ap.buyables[11])){
				player.ap.buyables[11]=target;
			}
		}
			
		}
})