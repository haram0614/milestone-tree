
addLayer("he", {
    name: "hyper energy", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "HE", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#FF3300",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "hyper energy", // Name of prestige currency
    baseResource: "hyper-prestige points", // Name of resource prestige is based on
    baseAmount() {return player.hp.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1);
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 4, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "ctrl+e", description: "Ctrl+E: Collect Hyper Energy", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return player.m.best.gte(150)},
	branches: ["hp","se"],
	base: function(){
		let b=new Decimal("10");
		return b;
	},
	exponent: function(){
		return new Decimal(1);
	},
	resetsNothing:true,
	doReset(l){},
	canBuyMax:true,
	autoPrestige(){return player.m.points.gte(150)},
	upgrades: {
        rows: 2,
        cols: 4,
		11: {
			title: "Hyper Energy Upgrade 11",
            description: "1st Milestone's softcap starts later based on your hyper energy.",
            cost: new Decimal(1.4e10),
            unlocked() { return true}, // The upgrade is only visible when this is true
			effect() {
				let b=player.he.points.add(1).log10().div(90);
				if(hasUpgrade("he",13))b=b.mul(2);
				return b.add(1);
            },
            effectDisplay() { return format(this.effect(),4)+"x later" }, // Add formatting to the effect
        },
		12: {
			title: "Hyper Energy Upgrade 12",
            description: "Milestone Cost Scaling is weaker based on your hyper energy.",
            cost: new Decimal(2.49e10),
            unlocked() { return true}, // The upgrade is only visible when this is true
			effect() {
				let b=player.he.points.add(1).log10().div(500);
				if(hasUpgrade("he",14))b=b.mul(2);
				return b.add(1);
            },
            effectDisplay() { return format(this.effect(),4)+"x" }, // Add formatting to the effect
        },
		13: {
			title: "Hyper Energy Upgrade 13",
            description: "Hyper Energy Upgrade 11 is boosted.",
            cost: new Decimal(4.42e10),
            unlocked() { return true}, // The upgrade is only visible when this is true
        },
		14: {
			title: "Hyper Energy Upgrade 14",
            description: "Hyper Energy Upgrade 12 is boosted.",
            cost: new Decimal(7.66e10),
            unlocked() { return true}, // The upgrade is only visible when this is true
        },
	},
	
    resetDescription: "Collect ",
	tabFormat: [
		"main-display",
		"prestige-button",
		["display-text",function(){
			let peroom=new Decimal(10).log(tmp.he.base);
			let power=new Decimal(1).div(tmp.he.exponent);
			return "("+format(peroom)+" per OoM of hyper-prestige points, then raised to a power of "+format(power)+")";
		}],
		"upgrades"
	],
})

