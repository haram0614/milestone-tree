
addLayer("r", {
    name: "reincarnate", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "R", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
	    points: new Decimal(0),
	    stage: 0,
    }},
    color: "#00FFFF",
    requires1(){
		return new Decimal(1e35);
	},
    requires(){
		if(player.r.activeChallenge)return new Decimal(Infinity);
		return tmp.r.requires1;
	},
    resource: "reincarnation points", // Name of prestige currency
    baseResource: "transcend points", // Name of resource prestige is based on
    baseAmount() {return player.t.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    row: 6, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "r", description: "R: Reset for reincarnation points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return player.m.effective.gte(199) || player.r.unlocked},
	branches: ["t","a"],
	softcap:new Decimal(Infinity),
	softcapPower:new Decimal(1),
	gainMult(){
		let mult=new Decimal(1);
		return mult;
	},
	getResetGain() {
		if(player.t.points.lt(tmp.r.requires1))return new Decimal(0);
		let amt=Decimal.log10(player.t.points.add(10)).pow(2).div(1000).mul(tmp.r.gainMult);
		amt=amt.floor();
		return amt;
	},
	getNextAt() {
		if(player.t.points.lt(tmp.r.requires1))return new Decimal(tmp.r.requires1);
		let amt=Decimal.log10(player.t.points.add(10)).pow(2).div(1000).mul(tmp.r.gainMult);
		amt=amt.floor().plus(1).div(tmp.r.gainMult);
		amt=Decimal.pow(10,amt.mul(1000).pow(1/2));
		return amt;
	},
	hardcap:new Decimal(1e35),
	passiveGeneration(){
		return 0;
	},
	tabFormat: {
		"Main":{
			content:[
				"main-display","prestige-button","resource-display",
				//["display-text",function(){return "Reincarnation point is hardcapped at "+format(layers.r.hardcap)}],
				["display-text",function(){if(player.r.unlocked)return "Welcome to The Milestone Tree NG-"+player.r.stage+"!";return "";}],
				//"upgrades",
				//["display-text",function(){return "AP challenge is applied after T challenge, softcap is applied after AP challenge"}],
				//["display-text",function(){
				//	let c=0;
				//	for(var i in player.ap.challenges)c+=player.ap.challenges[i];
				//	return "AP challenge completions: "+format(c,4)
				//}],
				//"challenges"
			]
		},/*"Special Transcend Points":{
			content:[
				"main-display",
				["display-text",function(){return "Reach "+format(tmp.t.requires1)+" atomic-prestige points in a Transcend Challenge to gain Special Transcend Points!"}],
				function(){if(!player.t.activeChallenge)return ["display-text",""];return "resource-display"},
				["display-text",function(){if(!player.t.activeChallenge || player.t.specialPoints[player.t.activeChallenge].gte(1e6))return "";return "Next "+layers.t.getSpecialTPName(player.t.activeChallenge)+" at "+format(tmp.t.getNextSPAt)+" atomic-prestige points"}],
				["display-text",function(){return "You have "+format(player.t.specialPoints[11])+" Dilated Transcend Points, 3rd Milestone's effect ^"+format(layers.t.getSpecialEffect(11),4)}],
				["display-text",function(){return "You have "+format(player.t.specialPoints[12])+" Softcapped Transcend Points, 1st Milestone's softcap starts "+format(layers.t.getSpecialEffect(12),4)+"x later"}],
				["display-text",function(){return "You have "+format(player.t.specialPoints[21])+" Prestige-Dilated Transcend Points, Prestige Point gain ^"+format(layers.t.getSpecialEffect(21),4)}],
				["display-text",function(){return "You have "+format(player.t.specialPoints[22])+" Hardcapped Transcend Points, 1st Milestone's softcap starts "+format(layers.t.getSpecialEffect(22),4)+"x later"}],
				["display-text",function(){return "You have "+format(player.t.specialPoints[31])+" Super-Dilated Transcend Points, Super-Prestige Point gain ^"+format(layers.t.getSpecialEffect(31),4)}],
				["display-text",function(){return "You have "+format(player.t.specialPoints[32])+" Prestige-Hardcapped Transcend Points, 1st Milestone's softcap starts "+format(layers.t.getSpecialEffect(32),4)+"x later"}],
				["display-text",function(){return "You have "+format(player.t.specialPoints[41])+" Hyper-Dilated Transcend Points, Hyper-Prestige Point gain ^"+format(layers.t.getSpecialEffect(41),4)}],
				["display-text",function(){return "You have "+format(player.t.specialPoints[42])+" Super-Hardcapped Transcend Points, 1st Milestone's softcap starts "+format(layers.t.getSpecialEffect(42),4)+"x later"}],
			],
			unlocked(){return player.m.effective.gte(130);}
		},*/
	},
	update(){
		if(player.r.points.gte(layers.r.hardcap))player.r.points=new Decimal(layers.r.hardcap);
	},
		doReset(l){
			if(l=="r"){
				player.r.stage=Math.max(player.r.stage,1);
				layerDataReset("t",[]);
				layerDataReset("a",[]);
				layerDataReset("ap",[]);
				layerDataReset("he",[]);
				layerDataReset("hb",[]);
				layerDataReset("hp",[]);
				layerDataReset("se",[]);
				layerDataReset("em",[]);
				layerDataReset("um",[]);
				layerDataReset("sp",[]);
				layerDataReset("pe",[]);
				layerDataReset("pb",[]);
				layerDataReset("p",[]);
				layerDataReset("mm",[]);
				layerDataReset("m",[]);
				player.m.points=player.m.best=new Decimal(200);
				player.m.effective=new Decimal(0);
				updateTemp();
				updateTemp();
				updateTemp();
				updateTemp();
				updateTemp();
			}
		},
})