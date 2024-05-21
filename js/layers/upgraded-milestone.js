addLayer("um", {
    name: "upgraded milestone", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "UM", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#ccbb00",
    requires(){
		if(player.em.points.gte(5))return new Decimal("e6e12");
		return new Decimal("e11111111111111");
	},
    resource: "upgraded milestones", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    base(){
		if(player.um.points.gte(15))return new Decimal("e96e10");
		if(player.um.points.gte(8))return new Decimal("e85e10");
		return new Decimal("ee12");
	},
	exponent: function(){
		var base=new Decimal(2);
		return base;
	},
    hotkeys: [
        {key: "u", description: "U: Get Upgraded Milestone", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return player.m.points.gte(160)},
	resetsNothing(){return true},
	autoPrestige(){return false},
    resetDescription: "Get ",
	doReset(){},
	tabFormat: ["main-display","prestige-button","resource-display"],
	branches: ["m"],
})