var MILESTONES=[
		{
			requirementDescription: "1st Milestone",
            unlocked() {return player[this.layer].best.gte(0)},
            done() {return player[this.layer].points.gte(1)}, // Used to determine when to give the milestone
            effectDescription: function(){
				let ret="Gain "+format(new Decimal(1).max(getPointGen()))+" points per second"
				if(player.um.points.gte(1))ret+=" and this milestone's effect softcap starts later.";
				else ret+=".";
				return ret;
			},
        },
		{
			requirementDescription: "2nd Milestone",
            unlocked() {return player[this.layer].best.gte(1)},
            done() {return player[this.layer].points.gte(2)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.um.points.gte(2))return "3x, ^1.01 First Milestone's effect. (Upgraded)";
				return "Triple the first Milestone's effect.";
			},
        },
		{
			requirementDescription: "3rd Milestone",
            unlocked() {return player[this.layer].best.gte(2)},
            done() {return player[this.layer].points.gte(3)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				let ret="First Milestone's effect is boosted by your points. Currently: "+format(tmp.m.milestone3Effect)+"x";
				if(player.um.points.gte(3))return ret+" (Upgraded)";return ret;
			},
        },
		{
			requirementDescription: "4th Milestone",
            unlocked() {return player[this.layer].best.gte(3)},
            done() {return player[this.layer].points.gte(4)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				let ret="Third Milestone's effect is better based on your milestones. Currently: 3rd Milestone's base effect base +"+format(tmp.m.milestone4Effect);
				if(player.um.points.gte(4))return ret+" (Upgraded)";return ret;
			},
        },
		{
			requirementDescription: "5th Milestone",
            unlocked() {return player[this.layer].best.gte(4)},
            done() {return player[this.layer].points.gte(5)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.um.points.gte(5))return "Unlock Prestige, and Prestige Point gain ^1.01. (Upgraded)";
				return "Unlock the next layer. Milestones don't reset on all resets.";
			},
        },
		{
			requirementDescription: "6th Milestone",
            unlocked() {return player[this.layer].best.gte(5)},
            done() {return player[this.layer].points.gte(6)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				let ret="Prestige Point gain is boosted by your milestones. Currently: "+format(tmp.m.milestone6Effect)+"x";
				if(player.um.points.gte(6))return ret+" (Upgraded)";return ret;
			},
        },
		{
			requirementDescription: "7th Milestone",
            unlocked() {return player[this.layer].best.gte(6)},
            done() {return player[this.layer].points.gte(7)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.um.points.gte(7))return "6th Milestone's effect is squared. (Upgraded)";
				return "6th Milestone's effect is powered by 1.5";
			},
        },
		{
			requirementDescription: "8th Milestone",
            unlocked() {return player[this.layer].best.gte(7)},
            done() {return player[this.layer].points.gte(8)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.um.points.gte(8))return "6th Milestone's effect is squared. (Upgraded)";
				return "6th Milestone's effect is powered by 1.2";
			},
        },
		{
			requirementDescription: "9th Milestone",
            unlocked() {return player[this.layer].best.gte(8)},
            done() {return player[this.layer].points.gte(9)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.um.points.gte(9))return "6th Milestone's effect is squared. (Upgraded)";
				return "6th Milestone's effect is powered by 1.1";
			},
        },
		{
			requirementDescription: "10th Milestone",
            unlocked() {return player[this.layer].best.gte(9)},
            done() {return player[this.layer].points.gte(10)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.um.points.gte(10))return "Unlock 2 new Prestige Upgrades, and Prestige upgrades 11 & 12 are better. (Upgraded)";
				return "Unlock 2 new Prestige Upgrades.";
			},
        },
		{
			requirementDescription: "11th Milestone",
            unlocked() {return player[this.layer].best.gte(10)},
            done() {return player[this.layer].points.gte(11)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				let ret="Prestige Upgrade 11's effect is better.";
				if(player.um.points.gte(11))return ret+" (Upgraded)";return ret;
			},
        },
		{
			requirementDescription: "12th Milestone",
            unlocked() {return player[this.layer].best.gte(11)},
            done() {return player[this.layer].points.gte(12)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				let ret="Prestige Upgrade 12's effect is better.";
				if(player.um.points.gte(12))return ret+" (Upgraded)";return ret;
			},
        },
		{
			requirementDescription: "13th Milestone",
            unlocked() {return player[this.layer].best.gte(12)},
            done() {return player[this.layer].points.gte(13)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				let ret="Prestige Upgrade 13's effect is better.";
				if(player.um.points.gte(13))return ret+" (Upgraded)";return ret;
			},
        },
		{
			requirementDescription: "14th Milestone",
            unlocked() {return player[this.layer].best.gte(13)},
            done() {return player[this.layer].points.gte(14)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				let ret="Prestige Upgrade 14's effect is better.";
				if(player.um.points.gte(14))return ret+" (Upgraded)";return ret;
			},
        },
		{
			requirementDescription: "15th Milestone",
            unlocked() {return player[this.layer].best.gte(14)},
            done() {return player[this.layer].points.gte(15)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.um.points.gte(15))return "Unlock 2 new Prestige Upgrades, and Prestige upgrades 13 & 14 are better. (Upgraded)";
				return "Unlock 2 new Prestige Upgrades.";
			},
        },
		{
			requirementDescription: "16th Milestone",
            unlocked() {return player[this.layer].best.gte(15)},
            done() {return player[this.layer].points.gte(16)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.um.points.gte(16))return "3rd Milestone's effect ^1.05 (Upgraded)";
				return "3rd Milestone's effect ^1.016";
			},
        },
		{
			requirementDescription: "17th Milestone",
            unlocked() {return player[this.layer].best.gte(16)},
            done() {return player[this.layer].points.gte(17)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.um.points.gte(17))return "3rd Milestone's effect ^1.05 (Upgraded)";
				return "3rd Milestone's effect ^1.017";
			},
        },
		{
			requirementDescription: "18th Milestone",
            unlocked() {return player[this.layer].best.gte(17)},
            done() {return player[this.layer].points.gte(18)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.um.points.gte(18))return "3rd Milestone's effect ^1.05 (Upgraded)";
				return "3rd Milestone's effect ^1.018";
			},
        },
		{
			requirementDescription: "19th Milestone",
            unlocked() {return player[this.layer].best.gte(18)},
            done() {return player[this.layer].points.gte(19)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.um.points.gte(19))return "3rd Milestone's effect ^1.05 (Upgraded)";
				return "3rd Milestone's effect ^1.019";
			},
        },
		{
			requirementDescription: "20th Milestone",
            unlocked() {return player[this.layer].best.gte(19)},
            done() {return player[this.layer].points.gte(20)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.um.points.gte(20))return "Gain 1e22% of Prestige Point gain per second. (Upgraded)";
				if(player[this.layer].best.gte(135))return "Gain 1e12% of Prestige Point gain per second.";
				return "Gain 10000% of Prestige Point gain per second.";
			},
        },
		{
			requirementDescription: "21st Milestone",
            unlocked() {return player[this.layer].best.gte(20)},
            done() {return player[this.layer].points.gte(21)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.um.points.gte(21))return "Unlock 2 new Prestige Upgrades, and Prestige upgrades 21 & 22 are better. (Upgraded)";
				return "Unlock 2 new Prestige Upgrades.";
			},
        },
		{
			requirementDescription: "22nd Milestone",
            unlocked() {return player[this.layer].best.gte(21)},
            done() {return player[this.layer].points.gte(22)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.um.points.gte(22))return "100x, ^1.01 Prestige Point Gain (Upgraded)";
				return "Prestige Point Gain is multiplied by 22";
			},
        },
		{
			requirementDescription: "23rd Milestone",
            unlocked() {return player[this.layer].best.gte(22)},
            done() {return player[this.layer].points.gte(23)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				let ret="Prestige Upgrade 23's effect is better.";
				if(player.um.points.gte(23))return ret+" (Upgraded)";return ret;
			},
        },
		{
			requirementDescription: "24th Milestone",
            unlocked() {return player[this.layer].best.gte(23)},
            done() {return player[this.layer].points.gte(24)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				let ret="Prestige Upgrade 24's effect is better.";
				if(player.um.points.gte(24))return ret+" (Upgraded)";return ret;
			},
        },
		{
			requirementDescription: "25th Milestone",
            unlocked() {return player[this.layer].best.gte(24)},
            done() {return player[this.layer].points.gte(25)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.um.points.gte(25))return "Unlock Super-Prestige, and Super-Prestige Point gain ^1.01. (Upgraded)";
				return "Unlock a new layer.";
			},
        },
		{
			requirementDescription: "26th Milestone",
            unlocked() {return player[this.layer].best.gte(25)},
            done() {return player[this.layer].points.gte(26)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.um.points.gte(26))return "Keep Prestige upgrades and buyables on Super-Prestige. (Upgraded)";
				return "Keep Prestige upgrades on Super-Prestige.";
			},
        },
		{
			requirementDescription: "27th Milestone",
            unlocked() {return player[this.layer].best.gte(26)},
            done() {return player[this.layer].points.gte(27)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				let ret="Super-Prestige Point gain is boosted by your milestones. Currently: "+format(tmp.m.milestone27Effect)+"x";
				if(player.um.points.gte(27))return ret+" (Upgraded)";return ret;
			},
        },
		{
			requirementDescription: "28th Milestone",
            unlocked() {return player[this.layer].best.gte(27)},
            done() {return player[this.layer].points.gte(28)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.um.points.gte(28))return "27th Milestone's effect is squared. (Upgraded)";
				return "27th Milestone's effect is powered by 1.5";
			},
        },
		{
			requirementDescription: "29th Milestone",
            unlocked() {return player[this.layer].best.gte(28)},
            done() {return player[this.layer].points.gte(29)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.um.points.gte(29))return "27th Milestone's effect is squared. (Upgraded)";
				return "27th Milestone's effect is powered by 1.2";
			},
        },
		{
			requirementDescription: "30th Milestone",
            unlocked() {return player[this.layer].best.gte(29)},
            done() {return player[this.layer].points.gte(30)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.um.points.gte(30))return "Unlock 2 new Super-Prestige Upgrades, and Super-Prestige upgrades 11 & 12 are better. (Upgraded)";
				return "Unlock 2 new Super-Prestige Upgrades.";
			},
        },
		{
			requirementDescription: "31st Milestone",
            unlocked() {return player[this.layer].best.gte(30)},
            done() {return player[this.layer].points.gte(31)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				let ret="Prestige and Super-Prestige Upgrade 11's effect is better.";
				if(player.um.points.gte(31))return ret+" (Upgraded)";return ret;
			},
        },
		{
			requirementDescription: "32nd Milestone",
            unlocked() {return player[this.layer].best.gte(31)},
            done() {return player[this.layer].points.gte(32)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				let ret="Prestige and Super-Prestige Upgrade 12's effect is better.";
				if(player.um.points.gte(32))return ret+" (Upgraded)";return ret;
			},
        },
		{
			requirementDescription: "33rd Milestone",
            unlocked() {return player[this.layer].best.gte(32)},
            done() {return player[this.layer].points.gte(33)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				let ret="Prestige and Super-Prestige Upgrade 13's effect is better.";
				if(player.um.points.gte(33))return ret+" (Upgraded)";return ret;
			},
        },
		{
			requirementDescription: "34th Milestone",
            unlocked() {return player[this.layer].best.gte(33)},
            done() {return player[this.layer].points.gte(34)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				let ret="Prestige and Super-Prestige Upgrade 14's effect is better.";
				if(player.um.points.gte(34))return ret+" (Upgraded)";return ret;
			},
        },
		{
			requirementDescription: "35th Milestone",
            unlocked() {return player[this.layer].best.gte(34)},
            done() {return player[this.layer].points.gte(35)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.um.points.gte(35))return "Unlock 2 new Super-Prestige Upgrades, 6th Milestone's effect ^5 (Upgraded)";
				return "Unlock 2 new Super-Prestige Upgrades, 6th Milestone's effect ^3.5.";
			},
        },
		{
			requirementDescription: "36th Milestone",
            unlocked() {return player[this.layer].best.gte(35)},
            done() {return player[this.layer].points.gte(36)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.um.points.gte(36))return "3rd Milestone's effect ^1.05 (Upgraded)";
				return "3rd Milestone's effect ^1.036";
			},
        },
		{
			requirementDescription: "37th Milestone",
            unlocked() {return player[this.layer].best.gte(36)},
            done() {return player[this.layer].points.gte(37)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.um.points.gte(37))return "3rd Milestone's effect ^1.05 (Upgraded)";
				return "3rd Milestone's effect ^1.037";
			},
        },
		{
			requirementDescription: "38th Milestone",
            unlocked() {return player[this.layer].best.gte(37)},
            done() {return player[this.layer].points.gte(38)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.um.points.gte(38))return "3rd Milestone's effect ^1.05 (Upgraded)";
				return "3rd Milestone's effect ^1.038";
			},
        },
		{
			requirementDescription: "39th Milestone",
            unlocked() {return player[this.layer].best.gte(38)},
            done() {return player[this.layer].points.gte(39)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.um.points.gte(39))return "3rd Milestone's effect ^1.05 (Upgraded)";
				return "3rd Milestone's effect ^1.039";
			},
        },
		{
			requirementDescription: "40th Milestone",
            unlocked() {return player[this.layer].best.gte(39)},
            done() {return player[this.layer].points.gte(40)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.um.points.gte(40))return "Unlock Meta-Milestones and you can upgrade them. Unlock 2 new Super-Prestige Upgrades. (Upgraded)";
				return "Unlock a new layer. Unlock 2 new Super-Prestige Upgrades.";
			},
        },
		{
			requirementDescription: "41st Milestone",
            unlocked() {return player[this.layer].best.gte(40)},
            done() {return player[this.layer].points.gte(41)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.um.points.gte(41))return "3rd Milestone's base effect exponent ^1.005 (Upgraded)";
				return "3rd Milestone's base effect exponent ^1.003";
			},
        },
		{
			requirementDescription: "42nd Milestone",
            unlocked() {return player[this.layer].best.gte(41)},
            done() {return player[this.layer].points.gte(42)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.um.points.gte(42))return "6th Milestone's effect ^((meta-milestones)+(upgraded milestones)) (Upgraded)";
				return "6th Milestone's effect ^(1+(meta-milestones)).";
			},
        },
		{
			requirementDescription: "43rd Milestone",
            unlocked() {return player[this.layer].best.gte(42)},
            done() {return player[this.layer].points.gte(43)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				let ret="4th Milestone is boosted.";
				if(player.um.points.gte(43))return ret+" (Upgraded)";return ret;
			},
        },
		{
			requirementDescription: "44th Milestone",
            unlocked() {return player[this.layer].best.gte(43)},
            done() {return player[this.layer].points.gte(44)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				let ret="First row of Prestige Upgrades is boosted.";
				if(player.um.points.gte(44))return ret+" (Upgraded)";return ret;
			},
        },
		{
			requirementDescription: "45th Milestone",
            unlocked() {return player[this.layer].best.gte(44)},
            done() {return player[this.layer].points.gte(45)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.um.points.gte(45))return "Unlock a new row of Prestige Upgrades, and this row is better. (Upgraded)";
				return "Unlock a new row of Prestige Upgrades.";
			},
        },
		{
			requirementDescription: "46th Milestone",
            unlocked() {return player[this.layer].best.gte(45)},
            done() {return player[this.layer].points.gte(46)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.um.points.gte(46))return "3rd Milestone's base effect exponent ^1.005 (Upgraded)";
				return "3rd Milestone's base effect exponent ^1.001";
			},
        },
		{
			requirementDescription: "47th Milestone",
            unlocked() {return player[this.layer].best.gte(46)},
            done() {return player[this.layer].points.gte(47)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.um.points.gte(47))return "27th Milestone's effect ^(meta-milestones^0.5) (Upgraded)";
				return "27th Milestone's effect ^(1+(meta-milestones^0.25)).";
			},
        },
		{
			requirementDescription: "48th Milestone",
            unlocked() {return player[this.layer].best.gte(47)},
            done() {return player[this.layer].points.gte(48)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				let ret="4th Milestone is boosted.";
				if(player.um.points.gte(48))return ret+" (Upgraded)";return ret;
			},
        },
		{
			requirementDescription: "49th Milestone",
            unlocked() {return player[this.layer].best.gte(48)},
            done() {return player[this.layer].points.gte(49)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				let ret="First row of Super-Prestige Upgrades is boosted.";
				if(player.um.points.gte(49))return ret+" (Upgraded)";return ret;
			},
        },
		{
			requirementDescription: "50th Milestone",
            unlocked() {return player[this.layer].best.gte(49)},
            done() {return player[this.layer].points.gte(50)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.um.points.gte(50))return "Unlock Prestige Boost. This milestone's upgraded effect is disabled until first 7th row reset. (Upgraded)";
				return "Unlock a new layer.";
			},
        },
		{
			requirementDescription: "51st Milestone",
            unlocked() {return player[this.layer].best.gte(50)},
            done() {return player[this.layer].points.gte(51)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "3rd Milestone's base effect exponent ^1.00175";
			},
        },
		{
			requirementDescription: "52nd Milestone",
            unlocked() {return player[this.layer].best.gte(51)},
            done() {return player[this.layer].points.gte(52)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "6th Milestone's effect ^(1+(meta-milestones^0.1)).";
			},
        },
		{
			requirementDescription: "53rd Milestone",
            unlocked() {return player[this.layer].best.gte(52)},
            done() {return player[this.layer].points.gte(53)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "4th Milestone is boosted.";
			},
        },
		{
			requirementDescription: "54th Milestone",
            unlocked() {return player[this.layer].best.gte(53)},
            done() {return player[this.layer].points.gte(54)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "First row of Prestige Upgrades is boosted.";
			},
        },
		{
			requirementDescription: "55th Milestone",
            unlocked() {return player[this.layer].best.gte(54)},
            done() {return player[this.layer].points.gte(55)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Unlock a new row of Super-Prestige Upgrades.";
			},
        },
		{
			requirementDescription: "56th Milestone",
            unlocked() {return player[this.layer].best.gte(55)},
            done() {return player[this.layer].points.gte(56)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "3rd Milestone's base effect exponent ^1.00078";
			},
        },
		{
			requirementDescription: "57th Milestone",
            unlocked() {return player[this.layer].best.gte(56)},
            done() {return player[this.layer].points.gte(57)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player[this.layer].best.gte(135))return "Gain 1e12% of Super-Prestige Point gain per second.";
				return "Gain 100% of Super-Prestige Point gain per second.";
			},
        },
		{
			requirementDescription: "58th Milestone",
            unlocked() {return player[this.layer].best.gte(57)},
            done() {return player[this.layer].points.gte(58)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "4th Milestone is boosted.";
			},
        },
		{
			requirementDescription: "59th Milestone",
            unlocked() {return player[this.layer].best.gte(58)},
            done() {return player[this.layer].points.gte(59)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "First row of Super-Prestige Upgrades is boosted.";
			},
        },
		{
			requirementDescription: "60th Milestone",
            unlocked() {return player[this.layer].best.gte(59)},
            done() {return player[this.layer].points.gte(60)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Unlock a new layer. Keep Prestige upgrades on Prestige Boost.";
			},
        },
		{
			requirementDescription: "61st Milestone",
            unlocked() {return player[this.layer].best.gte(60)},
            done() {return player[this.layer].points.gte(61)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "3rd Milestone's base effect exponent ^1.0005";
			},
        },
		{
			requirementDescription: "62nd Milestone",
            unlocked() {return player[this.layer].best.gte(61)},
            done() {return player[this.layer].points.gte(62)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "6th Milestone's effect ^(meta-milestones^0.129).";
			},
        },
		{
			requirementDescription: "63rd Milestone",
            unlocked() {return player[this.layer].best.gte(62)},
            done() {return player[this.layer].points.gte(63)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "4th Milestone is boosted.";
			},
        },
		{
			requirementDescription: "64th Milestone",
            unlocked() {return player[this.layer].best.gte(63)},
            done() {return player[this.layer].points.gte(64)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "First row of Prestige Upgrades is boosted.";
			},
        },
		{
			requirementDescription: "65th Milestone",
            unlocked() {return player[this.layer].best.gte(64)},
            done() {return player[this.layer].points.gte(65)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Prestige Boost doesn't reset anything. Keep Prestige and Super-Prestige upgrades on Hyper-Prestige. Unlock 2 new Hyper-Prestige Upgrades.";
			},
        },
		{
			requirementDescription: "66th Milestone",
            unlocked() {return player[this.layer].best.gte(65)},
            done() {return player[this.layer].points.gte(66)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "3rd Milestone's base effect exponent ^1.0005";
			},
        },
		{
			requirementDescription: "67th Milestone",
            unlocked() {return player[this.layer].best.gte(66)},
            done() {return player[this.layer].points.gte(67)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "27th Milestone's effect ^(meta-milestones^0.147).";
			},
        },
		{
			requirementDescription: "68th Milestone",
            unlocked() {return player[this.layer].best.gte(67)},
            done() {return player[this.layer].points.gte(68)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "4th Milestone is boosted.";
			},
        },
		{
			requirementDescription: "69th Milestone lol",
            unlocked() {return player[this.layer].best.gte(68)},
            done() {return player[this.layer].points.gte(69)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "First row of Super-Prestige and Hyper-Prestige Upgrades is boosted.";
			},
        },
		{
			requirementDescription: "70th Milestone",
            unlocked() {return player[this.layer].best.gte(69)},
            done() {return player[this.layer].points.gte(70)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Keep Prestige Boost upgrades on Hyper-Prestige. Unlock a new row of Hyper-Prestige Upgrades.";
			},
        },
		{
			requirementDescription: "71st Milestone",
            unlocked() {return player[this.layer].best.gte(70)},
            done() {return player[this.layer].points.gte(71)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "3rd Milestone's base effect exponent ^1.001236";
			},
        },
		{
			requirementDescription: "72nd Milestone",
            unlocked() {return player[this.layer].best.gte(71)},
            done() {return player[this.layer].points.gte(72)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "6th Milestone's effect ^(meta-milestones^0.1).";
			},
        },
		{
			requirementDescription: "73rd Milestone",
            unlocked() {return player[this.layer].best.gte(72)},
            done() {return player[this.layer].points.gte(73)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "4th Milestone is boosted.";
			},
        },
		{
			requirementDescription: "74th Milestone",
            unlocked() {return player[this.layer].best.gte(73)},
            done() {return player[this.layer].points.gte(74)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "First row of Prestige Upgrades is boosted.";
			},
        },
		{
			requirementDescription: "75th Milestone",
            unlocked() {return player[this.layer].best.gte(74)},
            done() {return player[this.layer].points.gte(75)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player[this.layer].best.gte(135))return "Gain 1e12% of Hyper-Prestige Point gain per second.";
				return "Gain 10000% of Hyper-Prestige Point gain per second.";
			},
        },
		{
			requirementDescription: "76th Milestone",
            unlocked() {return player[this.layer].best.gte(75)},
            done() {return player[this.layer].points.gte(76)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "3rd Milestone's base effect exponent ^1.00157";
			},
        },
		{
			requirementDescription: "77th Milestone",
            unlocked() {return player[this.layer].best.gte(76)},
            done() {return player[this.layer].points.gte(77)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Unlock a Super-Prestige buyable.";
			},
        },
		{
			requirementDescription: "78th Milestone",
            unlocked() {return player[this.layer].best.gte(77)},
            done() {return player[this.layer].points.gte(78)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "4th Milestone is boosted.";
			},
        },
		{
			requirementDescription: "79th Milestone",
            unlocked() {return player[this.layer].best.gte(78)},
            done() {return player[this.layer].points.gte(79)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "First row of Super-Prestige and Hyper-Prestige Upgrades is boosted.";
			},
        },
		{
			requirementDescription: "80th Milestone",
            unlocked() {return player[this.layer].best.gte(79)},
            done() {return player[this.layer].points.gte(80)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Unlock a new layer. Autoget Prestige Boosts.";
			},
        },
		{
			requirementDescription: "81st Milestone",
            unlocked() {return player[this.layer].best.gte(80)},
            done() {return player[this.layer].points.gte(81)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "3rd Milestone's base effect exponent ^1.0005. You keep Prestige, Super-Prestige and Prestige Boost Upgrades on Atomic-Prestige.";
			},
        },
		{
			requirementDescription: "82nd Milestone",
            unlocked() {return player[this.layer].best.gte(81)},
            done() {return player[this.layer].points.gte(82)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "6th Milestone's effect ^(meta-milestones^0.2). You keep Hyper-Prestige Upgrades on Atomic-Prestige.";
			},
        },
		{
			requirementDescription: "83rd Milestone",
            unlocked() {return player[this.layer].best.gte(82)},
            done() {return player[this.layer].points.gte(83)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "4th Milestone is boosted. Autobuy the first Super-Prestige buyable.";
			},
        },
		{
			requirementDescription: "84th Milestone",
            unlocked() {return player[this.layer].best.gte(83)},
            done() {return player[this.layer].points.gte(84)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "First row of Prestige and Atomic-Prestige Upgrades is boosted.";
			},
        },
		{
			requirementDescription: "85th Milestone",
            unlocked() {return player[this.layer].best.gte(84)},
            done() {return player[this.layer].points.gte(85)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Unlock a Hyper-Prestige buyable. Unlock a new row of Hyper-Prestige upgrades.";
			},
        },
		{
			requirementDescription: "86th Milestone",
            unlocked() {return player[this.layer].best.gte(85)},
            done() {return player[this.layer].points.gte(86)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "3rd Milestone's base effect exponent ^1.0005.";
			},
        },
		{
			requirementDescription: "87th Milestone",
            unlocked() {return player[this.layer].best.gte(86)},
            done() {return player[this.layer].points.gte(87)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "27th Milestone's effect ^(meta-milestones^0.3).";
			},
        },
		{
			requirementDescription: "88th Milestone",
            unlocked() {return player[this.layer].best.gte(87)},
            done() {return player[this.layer].points.gte(88)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "4th Milestone is boosted.";
			},
        },
		{
			requirementDescription: "89th Milestone",
            unlocked() {return player[this.layer].best.gte(88)},
            done() {return player[this.layer].points.gte(89)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "First row of Super-Prestige and Hyper-Prestige Upgrades is boosted.";
			},
        },
		{
			requirementDescription: "90th Milestone",
            unlocked() {return player[this.layer].best.gte(89)},
            done() {return player[this.layer].points.gte(90)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player[this.layer].best.gte(135))return "Gain 1e12% of Atomic-Prestige Point gain per second.";
				return "Gain 500% of Atomic-Prestige Point gain per second.";
			},
        },
		{
			requirementDescription: "91st Milestone",
            unlocked() {return player[this.layer].best.gte(90)},
            done() {return player[this.layer].points.gte(91)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "3rd Milestone's base effect exponent ^1.0005.";
			},
        },
		{
			requirementDescription: "92nd Milestone",
            unlocked() {return player[this.layer].best.gte(91)},
            done() {return player[this.layer].points.gte(92)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "6th Milestone's effect ^(meta-milestones^0.3).";
			},
        },
		{
			requirementDescription: "93rd Milestone",
            unlocked() {return player[this.layer].best.gte(92)},
            done() {return player[this.layer].points.gte(93)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "4th Milestone is boosted.";
			},
        },
		{
			requirementDescription: "94th Milestone",
            unlocked() {return player[this.layer].best.gte(93)},
            done() {return player[this.layer].points.gte(94)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "First row of Prestige and Atomic-Prestige Upgrades is boosted.";
			},
        },
		{
			requirementDescription: "95th Milestone",
            unlocked() {return player[this.layer].best.gte(94)},
            done() {return player[this.layer].points.gte(95)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Unlock an Atomic-Prestige Challenge. Autobuy the first Hyper-Prestige buyable.";
			},
        },
		{
			requirementDescription: "96th Milestone",
            unlocked() {return player[this.layer].best.gte(95)},
            done() {return player[this.layer].points.gte(96)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "3rd Milestone's base effect exponent ^1.0005.";
			},
        },
		{
			requirementDescription: "97th Milestone",
            unlocked() {return player[this.layer].best.gte(96)},
            done() {return player[this.layer].points.gte(97)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "27th Milestone's effect ^(meta-milestones^0.4).";
			},
        },
		{
			requirementDescription: "98th Milestone",
            unlocked() {return player[this.layer].best.gte(97)},
            done() {return player[this.layer].points.gte(98)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "4th Milestone is boosted.";
			},
        },
		{
			requirementDescription: "99th Milestone",
            unlocked() {return player[this.layer].best.gte(98)},
            done() {return player[this.layer].points.gte(99)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Unlock a new layer.";
			},
        },
		{
			requirementDescription: "100th Milestone",
            unlocked() {return player[this.layer].best.gte(99)},
            done() {return player[this.layer].points.gte(100)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Keep Prestige and Super-Prestige upgrades on Transcend";
			},
        },
		{
			requirementDescription: "101st Milestone",
            unlocked() {return player[this.layer].best.gte(100)},
            done() {return player[this.layer].points.gte(101)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Keep Hyper-Prestige and Prestige Boost upgrades on Transcend";
			},
        },
		{
			requirementDescription: "102nd Milestone",
            unlocked() {return player[this.layer].best.gte(101)},
            done() {return player[this.layer].points.gte(102)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Keep Atomic-Prestige upgrades on Transcend";
			},
        },
		{
			requirementDescription: "103rd Milestone",
            unlocked() {return player[this.layer].best.gte(102)},
            done() {return player[this.layer].points.gte(103)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Autocomplete AP challenge 1-5 3 times on Transcend. This milestone is disabled when you're in a Transcend challenge.";
			},
        },
		{
			requirementDescription: "104th Milestone",
            unlocked() {return player[this.layer].best.gte(103)},
            done() {return player[this.layer].points.gte(104)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "4th Milestone is boosted. Unlock a new layer. Unlock 4 new Transcend upgrades. Unlock a Hyper-Prestige buyable. Unlock a Transcend challenge.";
			},
        },
		{
			requirementDescription: "105th Milestone",
            unlocked() {return player[this.layer].best.gte(104)},
            done() {return player[this.layer].points.gte(105)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "1st milestone's softcap starts later based on your milestones. Currently: "+format(tmp.m.milestone105Effect)+"x later";
			},
        },
		{
			requirementDescription: "106th Milestone",
            unlocked() {return player[this.layer].best.gte(105)},
            done() {return player[this.layer].points.gte(106)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "6th and 27th milestone's effect ^(meta-milestones^0.5).";
			},
        },
		{
			requirementDescription: "107th Milestone",
            unlocked() {return player[this.layer].best.gte(106)},
            done() {return player[this.layer].points.gte(107)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "3rd Milestone's base effect exponent ^1.002. Autobuy the second Hyper-Prestige buyable.";
			},
        },
		{
			requirementDescription: "108th Milestone",
            unlocked() {return player[this.layer].best.gte(107)},
            done() {return player[this.layer].points.gte(108)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Autocomplete AP challenge 1-5 6 times on Transcend. This milestone is disabled when you're in a Transcend challenge.";
			},
        },
		{
			requirementDescription: "109th Milestone",
            unlocked() {return player[this.layer].best.gte(108)},
            done() {return player[this.layer].points.gte(109)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "4th Milestone is boosted. Unlock a Transcend challenge.";
			},
        },
		{
			requirementDescription: "110th Milestone",
            unlocked() {return player[this.layer].best.gte(109)},
            done() {return player[this.layer].points.gte(110)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.m.effective.gte(183))return "Transcend challenge 1's base goal is decreased to x^2. You can complete an AP challenge without exiting it.";
				return "Gain 0.2% of Transcend Point gain per second. Transcend challenge 1's base goal is decreased to x^2. You can complete an AP challenge without exiting it.";
			},
        },
		{
			requirementDescription: "111th Milestone",
            unlocked() {return player[this.layer].best.gte(110)},
            done() {return player[this.layer].points.gte(111)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Hyper Boost doesn't reset anything. Prestige boost is cheaper, and Unlock a new row of Prestige Boost upgrades. Unlock a new row of Transcend upgrades.";
			},
        },
		{
			requirementDescription: "112th Milestone",
            unlocked() {return player[this.layer].best.gte(111)},
            done() {return player[this.layer].points.gte(112)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Transcend Challenge 2's reward is enabled while you're in Transcend Challenge 2.";
			},
        },
		{
			requirementDescription: "113th Milestone",
            unlocked() {return player[this.layer].best.gte(112)},
            done() {return player[this.layer].points.gte(113)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.m.effective.gte(183))return "6th and 27th milestone's effect ^(meta-milestones^0.3).";
				return "Gain additional 0.3% of Transcend Point gain per second (total 0.5%). 6th and 27th milestone's effect ^(meta-milestones^0.3).";
			},
        },
		{
			requirementDescription: "114th Milestone",
            unlocked() {return player[this.layer].best.gte(113)},
            done() {return player[this.layer].points.gte(114)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Autocomplete AP challenge 1-5 9 times on Transcend. This milestone is disabled when you're in a Transcend challenge.";
			},
        },
		{
			requirementDescription: "115th Milestone",
            unlocked() {return player[this.layer].best.gte(114)},
            done() {return player[this.layer].points.gte(115)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.m.effective.gte(183))return "Unlock a Transcend challenge.";
				return "Gain additional 0.5% of Transcend Point gain per second (total 1%). Unlock a Transcend challenge.";
			},
        },
		{
			requirementDescription: "116th Milestone",
            unlocked() {return player[this.layer].best.gte(115)},
            done() {return player[this.layer].points.gte(116)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.m.effective.gte(183))return "Autoget Hyper Boosts.";
				return "Gain additional 1% of Transcend Point gain per second (total 2%). Autoget Hyper Boosts.";
			},
        },
		{
			requirementDescription: "117th Milestone",
            unlocked() {return player[this.layer].best.gte(116)},
            done() {return player[this.layer].points.gte(117)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.m.effective.gte(183))return "Prestige boost is cheaper.";
				return "Gain additional 3% of Transcend Point gain per second (total 5%). Prestige boost is cheaper.";
			},
        },
		{
			requirementDescription: "118th Milestone",
            unlocked() {return player[this.layer].best.gte(117)},
            done() {return player[this.layer].points.gte(118)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.m.effective.gte(183))return "4th Milestone is boosted.";
				return "Gain additional 5% of Transcend Point gain per second (total 10%). 4th Milestone is boosted.";
			},
        },
		{
			requirementDescription: "119th Milestone",
            unlocked() {return player[this.layer].best.gte(118)},
            done() {return player[this.layer].points.gte(119)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.m.effective.gte(183))return "Hyper boost is cheaper.";
				return "Gain additional 10% of Transcend Point gain per second (total 20%). Hyper boost is cheaper.";
			},
        },
		{
			requirementDescription: "120th Milestone",
            unlocked() {return player[this.layer].best.gte(119)},
            done() {return player[this.layer].points.gte(120)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.m.effective.gte(183))return "AP challenge 1-5 goals are reduced, and you can complete an AP challenge a non-integer number of times.";
				return "Gain additional 10% of Transcend Point gain per second (total 30%). AP challenge 1-5 goals are reduced, and you can complete an AP challenge a non-integer number of times.";
			},
        },
		{
			requirementDescription: "121st Milestone",
            unlocked() {return player[this.layer].best.gte(120)},
            done() {return player[this.layer].points.gte(121)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Autocomplete AP challenge 1-5 12 times on Transcend. This milestone is disabled when you're in a Transcend challenge.";
			},
        },
		{
			requirementDescription: "122nd Milestone",
            unlocked() {return player[this.layer].best.gte(121)},
            done() {return player[this.layer].points.gte(122)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "AP challenge 4 (Reduced Points)'s formula is changed. AP challenge 2 (No Super-Prestige) completions past-5 add the reward by 0.015 each instead of 0.01.";
			},
        },
		{
			requirementDescription: "123rd Milestone",
            unlocked() {return player[this.layer].best.gte(122)},
            done() {return player[this.layer].points.gte(123)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.m.effective.gte(183))return "Unlock a Prestige buyable.";
				return "Gain additional 15% of Transcend Point gain per second (total 45%). Unlock a Prestige buyable.";
			},
        },
		{
			requirementDescription: "124th Milestone",
            unlocked() {return player[this.layer].best.gte(123)},
            done() {return player[this.layer].points.gte(124)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Unlock a new row of Prestige upgrades. Autobuy the first Prestige buyable.";
			},
        },
		{
			requirementDescription: "125th Milestone",
            unlocked() {return player[this.layer].best.gte(124)},
            done() {return player[this.layer].points.gte(125)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Unlock a new layer. Reset on this layer doesn't reset anything. This layer doesn't reset on all resets except 7th row reset. Unlock a Transcend Challenge. Unlock a new row of Transcend upgrades.";
			},
        },
		{
			requirementDescription: "126th Milestone",
            unlocked() {return player[this.layer].best.gte(125)},
            done() {return player[this.layer].points.gte(126)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Auto-collect Prestige Energy.";
			},
        },
		{
			requirementDescription: "127th Milestone",
            unlocked() {return player[this.layer].best.gte(126)},
            done() {return player[this.layer].points.gte(127)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.m.effective.gte(183))return "Unlock a new row of Super-Prestige upgrades.";
				return "Gain additional 15% of Transcend Point gain per second (total 60%). Unlock a new row of Super-Prestige upgrades.";
			},
        },
		{
			requirementDescription: "128th Milestone",
            unlocked() {return player[this.layer].best.gte(127)},
            done() {return player[this.layer].points.gte(128)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Transcend Upgrade 54 is boosted. Unlock an AP challenge.";
			},
        },
		{
			requirementDescription: "129th Milestone",
            unlocked() {return player[this.layer].best.gte(128)},
            done() {return player[this.layer].points.gte(129)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Unlock a Super-Prestige buyable.";
			},
        },
		{
			requirementDescription: "130th Milestone",
            unlocked() {return player[this.layer].best.gte(129)},
            done() {return player[this.layer].points.gte(130)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.m.effective.gte(183))return "Autobuy the second Super-Prestige buyable. AP challenge 1-3 and 6 goals are reduced. Unlock a new tab in Transcend.";
				return "Gain additional 20% of Transcend Point gain per second (total 80%). Autobuy the second Super-Prestige buyable. AP challenge 1-3 and 6 goals are reduced. Unlock a new tab in Transcend.";
			},
        },
		{
			requirementDescription: "131st Milestone",
            unlocked() {return player[this.layer].best.gte(130)},
            done() {return player[this.layer].points.gte(131)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Autocomplete AP challenge 1-5 15 times on Transcend. This milestone is disabled when you're in a Transcend challenge.";
			},
        },
		{
			requirementDescription: "132nd Milestone",
            unlocked() {return player[this.layer].best.gte(131)},
            done() {return player[this.layer].points.gte(132)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "The second Super-Prestige buyable's effect is better. Unlock a new row of Prestige Boost upgrades.";
			},
        },
		{
			requirementDescription: "133rd Milestone",
            unlocked() {return player[this.layer].best.gte(132)},
            done() {return player[this.layer].points.gte(133)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				if(player.m.effective.gte(183))return "The 105th milestone's effect ^1.2";
				return "Gain additional 20% of Transcend Point gain per second (total 100%). The 105th milestone's effect ^1.2";
			},
        },
		{
			requirementDescription: "134th Milestone",
            unlocked() {return player[this.layer].best.gte(133)},
            done() {return player[this.layer].points.gte(134)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Keep Hyper Boost upgrades on Transcend.";
			},
        },
		{
			requirementDescription: "135th Milestone",
            unlocked() {return player[this.layer].best.gte(134)},
            done() {return player[this.layer].points.gte(135)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "20th Milestone, 57th Milestone, 75th Milestone and 90th Milestone's effects are 1e12%.";
			},
        },
		{
			requirementDescription: "136th Milestone",
            unlocked() {return player[this.layer].best.gte(135)},
            done() {return player[this.layer].points.gte(136)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Unlock a new row of Transcend Upgrades. AP challenge 5's goal is reduced.";
			},
        },
		{
			requirementDescription: "137th Milestone",
            unlocked() {return player[this.layer].best.gte(136)},
            done() {return player[this.layer].points.gte(137)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Unlock a Transcend Challenge. Transcend's requirement is 1e640 instead of 1e850 (doesn't affect Transcend Point gain).";
			},
        },
		{
			requirementDescription: "138th Milestone",
            unlocked() {return player[this.layer].best.gte(137)},
            done() {return player[this.layer].points.gte(138)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "AP challenge 2 (No Super-Prestige) completions past-5 add the reward by 0.02 each instead of 0.015.";
			},
        },
		{
			requirementDescription: "139th Milestone",
            unlocked() {return player[this.layer].best.gte(138)},
            done() {return player[this.layer].points.gte(139)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Base effect formulas of 4th, 6th and 27th milestones are better (linear -> exponential).";
			},
        },
		{
			requirementDescription: "140th Milestone",
            unlocked() {return player[this.layer].best.gte(139)},
            done() {return player[this.layer].points.gte(140)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Keep AP challenge completions on Transcend (per T challenge, AP challenge completions will reset on 7th row reset). You can complete a T challenge without exiting it. Unlock a new layer.";
			},
        },
		{
			requirementDescription: "141st Milestone",
            unlocked() {return player[this.layer].best.gte(140)},
            done() {return player[this.layer].points.gte(141)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "AP challenge 6's goal is reduced.";
			},
        },
		{
			requirementDescription: "142nd Milestone",
            unlocked() {return player[this.layer].best.gte(141)},
            done() {return player[this.layer].points.gte(142)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Unlock a new row of Hyper-Prestige Upgrades.";
			},
        },
		{
			requirementDescription: "143rd Milestone",
            unlocked() {return player[this.layer].best.gte(142)},
            done() {return player[this.layer].points.gte(143)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "The 105th milestone's effect ^1.1";
			},
        },
		{
			requirementDescription: "144th Milestone",
            unlocked() {return player[this.layer].best.gte(143)},
            done() {return player[this.layer].points.gte(144)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "AP challenge 2 (No Super-Prestige) completions past-5 add the reward by 0.025 each instead of 0.02.";
			},
        },
		{
			requirementDescription: "145th Milestone",
            unlocked() {return player[this.layer].best.gte(144)},
            done() {return player[this.layer].points.gte(145)}, // Used to determine when to give the milestone
            effectDescription: "Autogain AP challenge 1 completions."
        },
		{
			requirementDescription: "146th Milestone",
            unlocked() {return player[this.layer].best.gte(145)},
            done() {return player[this.layer].points.gte(146)}, // Used to determine when to give the milestone
            effectDescription: "Autogain AP challenge 2 completions."
        },
		{
			requirementDescription: "147th Milestone",
            unlocked() {return player[this.layer].best.gte(146)},
            done() {return player[this.layer].points.gte(147)}, // Used to determine when to give the milestone
            effectDescription: "Autogain AP challenge 3 completions."
        },
		{
			requirementDescription: "148th Milestone",
            unlocked() {return player[this.layer].best.gte(147)},
            done() {return player[this.layer].points.gte(148)}, // Used to determine when to give the milestone
            effectDescription: "Autogain AP challenge 5 completions."
        },
		{
			requirementDescription: "149th Milestone",
            unlocked() {return player[this.layer].best.gte(148)},
            done() {return player[this.layer].points.gte(149)}, // Used to determine when to give the milestone
            effectDescription: "Autogain AP challenge 6 completions."
        },
		{
			requirementDescription: "150th Milestone",
            unlocked() {return player[this.layer].best.gte(149)},
            done() {return player[this.layer].points.gte(150)}, // Used to determine when to give the milestone
            effectDescription: "Unlock a new layer."
        },
		{
			requirementDescription: "151st Milestone",
            unlocked() {return player[this.layer].best.gte(150)},
            done() {return player[this.layer].points.gte(151)}, // Used to determine when to give the milestone
            effectDescription: function(){
				if(player.m.effective.gte(183))return "Gain 100% of Transcend Point gain per second.";
				return "Gain additional 100% of Transcend Point gain per second (total 200%).";
			},
        },
		{
			requirementDescription: "152nd Milestone",
            unlocked() {return player[this.layer].best.gte(151)},
            done() {return player[this.layer].points.gte(152)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "AP challenge 2,3,5,6 goals are reduced."
			},
        },
		{
			requirementDescription: "153rd Milestone",
            unlocked() {return player[this.layer].best.gte(152)},
            done() {return player[this.layer].points.gte(153)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Unlock a new row of Transcend Upgrades.";
			},
        },
		{
			requirementDescription: "154th Milestone",
            unlocked() {return player[this.layer].best.gte(153)},
            done() {return player[this.layer].points.gte(154)}, // Used to determine when to give the milestone
            effectDescription: function(){
				if(player.m.effective.gte(183))return "Gain additional 100% of Transcend Point gain per second (total 200%).";
				return "Gain additional 100% of Transcend Point gain per second (total 300%).";
			},
        },
		{
			requirementDescription: "155th Milestone",
            unlocked() {return player[this.layer].best.gte(154)},
            done() {return player[this.layer].points.gte(155)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "The 105th milestone's effect ^1.03";
			},
        },
		{
			requirementDescription: "156th Milestone",
            unlocked() {return player[this.layer].best.gte(155)},
            done() {return player[this.layer].points.gte(156)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "Unlock a new prestige buyable."
			},
        },
		{
			requirementDescription: "157th Milestone",
            unlocked() {return player[this.layer].best.gte(156)},
            done() {return player[this.layer].points.gte(157)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "Autogain AP challenge 4 completions based on your points and milestones."
			},
        },
		{
			requirementDescription: "158th Milestone",
            unlocked() {return player[this.layer].best.gte(157)},
            done() {return player[this.layer].points.gte(158)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "Unlock a Transcend challenge."
			},
        },
		{
			requirementDescription: "159th Milestone",
            unlocked() {return player[this.layer].best.gte(158)},
            done() {return player[this.layer].points.gte(159)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "The 105th milestone's effect ^1.103";
			},
        },
		{
			requirementDescription: "160th Milestone",
            unlocked() {return player[this.layer].best.gte(159)},
            done() {return player[this.layer].points.gte(160)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "Unlock a new layer."
			},
        },
		{
			requirementDescription: "161st Milestone",
            unlocked() {return player[this.layer].best.gte(160)},
            done() {return player[this.layer].points.gte(161)}, // Used to determine when to give the milestone
            effectDescription: function(){
				if(player.m.effective.gte(183))return "Gain additional 200% of Transcend Point gain per second (total 400%).";
				return "Gain additional 200% of Transcend Point gain per second (total 500%)."
			},
        },
		{
			requirementDescription: "162nd Milestone",
            unlocked() {return player[this.layer].best.gte(161)},
            done() {return player[this.layer].points.gte(162)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "First Prestige buyable is better."
			},
        },
		{
			requirementDescription: "163rd Milestone",
            unlocked() {return player[this.layer].best.gte(162)},
            done() {return player[this.layer].points.gte(163)}, // Used to determine when to give the milestone
            effectDescription:  function(){
				return "Transcend's requirement is 1e510 instead of 1e640 (slightly increase Transcend Point gain).";
			},
        },
		{
			requirementDescription: "164th Milestone",
            unlocked() {return player[this.layer].best.gte(163)},
            done() {return player[this.layer].points.gte(164)}, // Used to determine when to give the milestone
            effectDescription: function(){
				if(player.m.effective.gte(183))return "Gain additional 200% of Transcend Point gain per second (total 600%).";
				return "Gain additional 200% of Transcend Point gain per second (total 700%)."
			},
        },
		{
			requirementDescription: "165th Milestone",
            unlocked() {return player[this.layer].best.gte(164)},
            done() {return player[this.layer].points.gte(165)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "1st Milestone's upgraded effect is better, based on your upgraded milestones."
			},
        },
		{
			requirementDescription: "166th Milestone",
            unlocked() {return player[this.layer].best.gte(165)},
            done() {return player[this.layer].points.gte(166)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "Reduce AP challenge 1 goal."
			},
        },
		{
			requirementDescription: "167th Milestone",
            unlocked() {return player[this.layer].best.gte(166)},
            done() {return player[this.layer].points.gte(167)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "Reduce AP challenge 2 goal."
			},
        },
		{
			requirementDescription: "168th Milestone",
            unlocked() {return player[this.layer].best.gte(167)},
            done() {return player[this.layer].points.gte(168)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "Reduce AP challenge 3 goal."
			},
        },
		{
			requirementDescription: "169th Milestone",
            unlocked() {return player[this.layer].best.gte(168)},
            done() {return player[this.layer].points.gte(169)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "Reduce AP challenge 6 goal."
			},
        },
		{
			requirementDescription: "170th Milestone",
            unlocked() {return player[this.layer].best.gte(169)},
            done() {return player[this.layer].points.gte(170)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "Unlock a Transcend Challenge."
			},
        },
		{
			requirementDescription: "171st Milestone",
            unlocked() {return player[this.layer].best.gte(170)},
            done() {return player[this.layer].points.gte(171)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "Transcend Challenge 8's effect is better."
			},
        },
		{
			requirementDescription: "172nd Milestone",
            unlocked() {return player[this.layer].best.gte(171)},
            done() {return player[this.layer].points.gte(172)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "Transcend Challenge 8's effect is better."
			},
        },
		{
			requirementDescription: "173rd Milestone",
            unlocked() {return player[this.layer].best.gte(172)},
            done() {return player[this.layer].points.gte(173)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "Transcend Challenge 8's effect is better."
			},
        },
		{
			requirementDescription: "174th Milestone",
            unlocked() {return player[this.layer].best.gte(173)},
            done() {return player[this.layer].points.gte(174)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "Transcend Challenge 8's effect is better."
			},
        },
		{
			requirementDescription: "175th Milestone",
            unlocked() {return player[this.layer].best.gte(174)},
            done() {return player[this.layer].points.gte(175)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "Unlock a new layer."
			},
        },
		{
			requirementDescription: "176th Milestone",
            unlocked() {return player[this.layer].best.gte(175)},
            done() {return player[this.layer].points.gte(176)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "Autogain T challenge 1 completions and Dilated Transcend Points."
			},
        },
		{
			requirementDescription: "177th Milestone",
            unlocked() {return player[this.layer].best.gte(176)},
            done() {return player[this.layer].points.gte(177)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "Autogain T challenge 2 completions and Softcapped Transcend Points."
			},
        },
		{
			requirementDescription: "178th Milestone",
            unlocked() {return player[this.layer].best.gte(177)},
            done() {return player[this.layer].points.gte(178)}, // Used to determine when to give the milestone
            effectDescription: function(){
				if(player.m.effective.gte(183))return "Gain additional 300% of Transcend Point gain per second (total 900%).";
				return "Gain additional 300% of Transcend Point gain per second (total 1000%)."
			},
        },
		{
			requirementDescription: "179th Milestone",
            unlocked() {return player[this.layer].best.gte(178)},
            done() {return player[this.layer].points.gte(179)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "Unlock Atom Upgrades."
			},
        },
		{
			requirementDescription: "180th Milestone",
            unlocked() {return player[this.layer].best.gte(179)},
            done() {return player[this.layer].points.gte(180)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "Prestige Boost Upgrade 31 is better based on your milestones."
			},
        },
		{
			requirementDescription: "181st Milestone",
            unlocked() {return player[this.layer].best.gte(180)},
            done() {return player[this.layer].points.gte(181)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "The 165th Milestone is better."
			},
        },
		{
			requirementDescription: "182nd Milestone",
            unlocked() {return player[this.layer].best.gte(181)},
            done() {return player[this.layer].points.gte(182)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "Hyper-Prestige Upgrade 22 is better."
			},
        },
		{
			requirementDescription: "183rd Milestone",
            unlocked() {return player[this.layer].best.gte(182)},
            done() {return player[this.layer].points.gte(183)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "Gain additional 1000% of Transcend Point gain per second (total 1900%) but Nullify Transcend Point gain effects in milestones before 150th Milestone."
			},
        },
		{
			requirementDescription: "184th Milestone",
            unlocked() {return player[this.layer].best.gte(183)},
            done() {return player[this.layer].points.gte(184)}, // Used to determine when to give the milestone
            effectDescription: function(){
				if(player[this.layer].best.gte(184)){
					return "The tree is becoming unstable...";
				}
				return "Seems like this milestone is unstable..."
			},
        },
		{
			requirementDescription: "185th Milestone",
            unlocked() {return player[this.layer].best.gte(184)},
            done() {return player[this.layer].points.gte(185)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "Unlock more Atom Upgrades."
			},
        },
		{
			requirementDescription: "186th Milestone",
            unlocked() {return player[this.layer].best.gte(185)},
            done() {return player[this.layer].points.gte(186)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "The tree is becoming more unstable..."
			},
        },
		{
			requirementDescription: "187th Milestone",
            unlocked() {return player[this.layer].best.gte(186)},
            done() {return player[this.layer].points.gte(187)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "How to solve this unstable problem?"
			},
        },
		{
			requirementDescription: "188th Milestone",
            unlocked() {return player[this.layer].best.gte(187)},
            done() {return player[this.layer].points.gte(188)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "Autogain T challenge 3 completions and Prestige-Dilated Transcend Points."
			},
        },
		{
			requirementDescription: "189th Milestone",
            unlocked() {return player[this.layer].best.gte(188)},
            done() {return player[this.layer].points.gte(189)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "The tree is becoming even more unstable..."
			},
        },
		{
			requirementDescription: "190th Milestone",
            unlocked() {return player[this.layer].best.gte(189)},
            done() {return player[this.layer].points.gte(190)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "Seems like adding a new layer will solve the problem..."
			},
        },
		{
			requirementDescription: "191st Milestone",
            unlocked() {return player[this.layer].best.gte(190)},
            done() {return player[this.layer].points.gte(191)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "The 105th Milestone is better."
			},
        },
		{
			requirementDescription: "192nd Milestone",
            unlocked() {return player[this.layer].best.gte(191)},
            done() {return player[this.layer].points.gte(192)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "This tree is becoming more and more unstable..."
			},
        },
		{
			requirementDescription: "193rd Milestone",
            unlocked() {return player[this.layer].best.gte(192)},
            done() {return player[this.layer].points.gte(193)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "Adding a new reset layer will solve the problem..."
			},
        },
		{
			requirementDescription: "194th Milestone",
            unlocked() {return player[this.layer].best.gte(193)},
            done() {return player[this.layer].points.gte(194)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "The 105th milestone's effect ^1.067";
			},
        },
		{
			requirementDescription: "195th Milestone",
            unlocked() {return player[this.layer].best.gte(194)},
            done() {return player[this.layer].points.gte(195)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "Reduce AP challenge 6 goal."
			},
        },
		{
			requirementDescription: "196th Milestone",
            unlocked() {return player[this.layer].best.gte(195)},
            done() {return player[this.layer].points.gte(196)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "To fix this problem, we will completely reset The Tree..."
			},
        },
		{
			requirementDescription: "197th Milestone",
            unlocked() {return player[this.layer].best.gte(196)},
            done() {return player[this.layer].points.gte(197)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "But add a new row 7 layer..."
			},
        },
		{
			requirementDescription: "198th Milestone",
            unlocked() {return player[this.layer].best.gte(197)},
            done() {return player[this.layer].points.gte(198)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "The Tree is completely unstable now, so we will reset this tree..."
			},
        },
		{
			requirementDescription: "199th Milestone",
            unlocked() {return player[this.layer].best.gte(198)},
            done() {return player[this.layer].points.gte(199)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "Unlock a new layer."
			},
        },
		{
			requirementDescription: "200th Milestone",
            unlocked() {return player[this.layer].best.gte(199)},
            done() {return player[this.layer].points.gte(200)}, // Used to determine when to give the milestone
            effectDescription: function(){
				return "Current Endgame"
			},
        },
	];

var st=function(){
	if(player.m.effective.lte(this.id)){
		return {backgroundColor: "#bf8f8f"};
	}
	if(player.um.points.gt(this.id)){
		return {backgroundColor: "#cccc00"};
	}
	return {};
}
for(var milestoneId in MILESTONES){
	MILESTONES[milestoneId].style=st;
}

addLayer("m", {
    name: "milestone", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "M", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
		effective: new Decimal(0),
    }},
    color: "#793784",
    requires(){
		if(player.m.points.gte(200))return new Decimal(10);
		if(player.m.points.gte(199))return new Decimal(Infinity);
		return new Decimal(10);
	},
    resource: "milestones", // Name of prestige currency
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
    row: 0, // Row the layer is in on the tree (0 is the first row)
	base(){
		if(player.r.stage==1)return new Decimal(10);
		if(player.m.points.gte(195))return player.m.points.sub(192);
		if(player.m.points.gte(190))return player.m.points.div(5).sub(36);
		return new Decimal(1.5);
	},
	exponent: function(){
		var base=new Decimal(1.7);
		if(player.m.points.gte(195) || player.r.stage==1){
			base=new Decimal(2);
		}
			
		var firstScaling=player.m.points.sub(tmp.m.getScalingStart).max(0);
		if(tmp.m.getScalingStart.lte(25)){
			if(firstScaling.gte(Decimal.sub(25,tmp.m.getScalingStart))){
				firstScaling=Decimal.pow(1.03,firstScaling.sub(Decimal.sub(25,tmp.m.getScalingStart))).sub(1).mul(100).add(Decimal.sub(25,tmp.m.getScalingStart));
			}
			firstScaling=firstScaling.div(100);
		}else{
			firstScaling=Decimal.pow(1.03,firstScaling).sub(1);
		}
		if(hasUpgrade("p",31))firstScaling=firstScaling.div(upgradeEffect("p",31));
		if(hasUpgrade("sp",31))firstScaling=firstScaling.div(upgradeEffect("sp",31));
		if(hasUpgrade("hp",23))firstScaling=firstScaling.div(upgradeEffect("hp",23));
		if(hasUpgrade("ap",23))firstScaling=firstScaling.div(upgradeEffect("ap",23));
		if(hasUpgrade("pe",12))firstScaling=firstScaling.div(upgradeEffect("pe",12));
		if(hasUpgrade("se",12))firstScaling=firstScaling.div(upgradeEffect("se",12));
		if(hasUpgrade("he",12))firstScaling=firstScaling.div(upgradeEffect("he",12));
		
		var secondScaling=player.m.points.sub(tmp.m.getScalingStart2).max(0);
		if(player.r.stage==1){
			secondScaling=secondScaling.pow(2).div(20);
		}else if(player.m.points.gte(180)){
			secondScaling=secondScaling.div(20);
		}else if(player.m.points.gte(150)){
			secondScaling=new Decimal(0.25);
		}else if(player.m.points.gte(5)){
			secondScaling=new Decimal(0.3);
		}
		return base.add(firstScaling).add(secondScaling);
	},
    getScalingStart(){
        let start=new Decimal(14);
		if(player.r.stage==1)start = new Decimal(25);
		if(hasUpgrade("t",52))start=start.add(upgradeEffect("t",52));
		return start;
    },
    getScalingStart2(){
        let start=new Decimal(175);
		return start;
    },
    hotkeys: [
        {key: "m", description: "M: Get Milestone", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
	resetsNothing(){return true},
	autoPrestige(){return player.mm.points.gte(1)},
	milestones: MILESTONES,
	milestone4EffectExponent(){
		if(player.um.points.gte(48))return 1.2;
		if(player.um.points.gte(43))return 1.1;
		if(player.um.points.gte(4))return 1;
		if(player.m.effective.gte(118))return 0.8;
		if(player.m.effective.gte(109))return 0.76;
		if(player.m.effective.gte(104))return 0.75;
		if(player.m.effective.gte(98))return 0.72;
		if(player.m.effective.gte(93))return 0.7;
		if(player.m.effective.gte(88))return 0.67;
		if(player.m.effective.gte(83))return 0.66;
		if(player.m.effective.gte(78))return 0.6426;
		if(player.m.effective.gte(73))return 0.62;
		if(player.m.effective.gte(68))return 0.61;
		if(player.m.effective.gte(63))return 0.5875;
		if(player.m.effective.gte(58))return 0.57;
		if(player.m.effective.gte(53))return 0.5687;
		if(player.m.effective.gte(48))return 0.55;
		if(player.m.effective.gte(43))return 0.533;
		return 0.5;
	},
	milestone4Effect(){
		if(player.m.effective.gte(139)){
			return Decimal.pow(1.05,player.m.points).pow(layers.m.milestone4EffectExponent());
		}
		return player.m.points.sub(2).pow(layers.m.milestone4EffectExponent());
	},
	milestone3Effect(){
		if(player.ap.activeChallenge==21)return new Decimal(1);
		var m=Decimal.log10(player.points.add(20)).pow(0.9);
		if(player.m.effective.gte(41))m=m.pow(player.um.points.gte(41)?1.005:1.003);
		if(player.m.effective.gte(46))m=m.pow(player.um.points.gte(46)?1.005:1.001);
		if(player.m.effective.gte(51))m=m.pow(1.00175);
		if(player.m.effective.gte(56))m=m.pow(1.00078);
		if(player.m.effective.gte(61))m=m.pow(1.0005);
		if(player.m.effective.gte(66))m=m.pow(1.0005);
		if(player.m.effective.gte(71))m=m.pow(1.001236);
		if(player.m.effective.gte(76))m=m.pow(1.00157);
		if(player.m.effective.gte(81))m=m.pow(1.0005);
		if(player.m.effective.gte(86))m=m.pow(1.0005);
		if(player.m.effective.gte(91))m=m.pow(1.0005);
		if(player.m.effective.gte(96))m=m.pow(1.0005);
		if(player.m.effective.gte(107))m=m.pow(1.002);
		if(player.um.points.gte(3))m=m.pow(1.001);//0.9193793030048590903868028321863
		var b=new Decimal(2);
		if(player.m.effective.gte(4)){
			b=b.add(layers.m.milestone4Effect());
		}
		if(player.m.effective.gte(16))m=m.mul(player.um.points.gte(16)?1.05:1.016);
		if(player.m.effective.gte(17))m=m.mul(player.um.points.gte(17)?1.05:1.017);
		if(player.m.effective.gte(18))m=m.mul(player.um.points.gte(18)?1.05:1.018);
		if(player.m.effective.gte(19))m=m.mul(player.um.points.gte(19)?1.05:1.019);
		if(player.m.effective.gte(36))m=m.mul(player.um.points.gte(36)?1.05:1.036);
		if(player.m.effective.gte(37))m=m.mul(player.um.points.gte(37)?1.05:1.037);
		if(player.m.effective.gte(38))m=m.mul(player.um.points.gte(38)?1.05:1.038);
		if(player.m.effective.gte(39))m=m.mul(player.um.points.gte(39)?1.05:1.039);
		if(hasUpgrade("t",11))m=m.mul(1.005);
		if(hasUpgrade("t",23))m=m.mul(1.005);
		if(hasUpgrade("t",31))m=m.mul(1.005);
		m=m.mul(layers.t.getSpecialEffect(11));
		if(hasUpgrade("pb",42))m=m.mul(upgradeEffect("pb",42));
		if(hasUpgrade("p",23)){
			b=b.mul(player.p.points.add(1e20).log10().log10().div(player.um.points.gte(23)?15:player.m.effective.gte(23)?28:30).add(1));
		}
		if(hasUpgrade("p",24)){
			b=b.mul(player.p.points.add(1e20).log10().log10().div(player.um.points.gte(24)?15:player.m.effective.gte(24)?20:30).add(1));
		}
		if(hasUpgrade("sp",24)){
			b=b.mul(player.sp.points.add(1e20).log10().log10().div(30).add(1));
		}
		if(player.mm.points.gte(5)){
			b=b.mul(player.mm.points.sub(2).max(1).pow(0.5).div(75).add(1));
		}
		if(player.mm.points.gte(10)){
			b=b.mul(player.mm.points.sub(2).max(1).pow(0.5).div(100).add(1));
		}
		if(player.mm.points.gte(15)){
			b=b.mul(player.mm.points.sub(2).max(1).pow(0.5).div(125).add(1));
		}
		if(player.mm.points.gte(20)){
			b=b.mul(player.mm.points.sub(2).max(1).pow(0.5).div(150).add(1));
		}
	b=b.mul(Decimal.pow(1.05,player.ap.challenges[21]+player.ap.challenges[22]+player.t.challenges[11]+player.t.challenges[21]+player.t.challenges[31]+player.t.challenges[41]));
		if(player.ap.challenges[21]>=1)b=b.mul(1.1/1.05);
		if(player.ap.challenges[22]>=1)b=b.mul(1.06/1.05);
		if(player.ap.challenges[21]>=5)b=b.mul(1.1/1.05);
		if(player.t.challenges[11]>=3)b=b.mul(1.05);
		if(player.ap.challenges[21]>=10)b=b.mul(1.1);
		if(player.ap.challenges[22]>=9)b=b.mul(1.1);
		if(hasUpgrade("p",41)){
			b=b.mul(player.p.points.add(1e20).log10().log10().div(30).add(1));
		}
		if(hasUpgrade("p",42)){
			b=b.mul(player.p.points.add(1e20).log10().log10().div(30).add(1));
		}
		if(hasUpgrade("sp",41)){
			b=b.mul(player.sp.points.add(1e20).log10().log10().div(30).add(1));
		}
		if(hasUpgrade("sp",42)){
			b=b.mul(player.sp.points.add(1e20).log10().log10().div(30).add(1));
		}
		if(player.em.points.gte(2)){
			b=b.mul(player.em.points.max(1).add(1));
		}
		return Decimal.pow(b,m);
	},
	milestone6Effect(){
		var p=player.m.points;
		if(player.m.effective.gte(139)){
			p=Decimal.pow(1.05,p);
		}
		if(player.m.effective.gte(7))p=p.pow(player.um.points.gte(7)?2:1.5);
		if(player.m.effective.gte(8))p=p.pow(player.um.points.gte(8)?2:1.2);
		if(player.m.effective.gte(9))p=p.pow(player.um.points.gte(9)?2:1.1);
		if(hasUpgrade("p",21))p=p.pow(player.um.points.gte(21)?2:1.5);
		if(hasUpgrade("p",22))p=p.pow(player.um.points.gte(21)?2:1.5);
		if(player.m.effective.gte(35))p=p.pow(player.um.points.gte(35)?5:3.5);
		if(hasUpgrade("sp",23))p=p.pow(player.mm.points.add(2));
		if(player.m.effective.gte(42))p=p.pow(player.mm.points.add(player.um.points.gte(42)?player.um.points:1));
		if(player.m.effective.gte(52))p=p.pow(player.mm.points.pow(0.1).add(1));
		if(player.mm.points.gte(9))p=p.pow(1.5);
		if(player.m.effective.gte(62))p=p.pow(player.mm.points.pow(0.129));
		if(player.mm.points.gte(13))p=p.pow(1.2);
		if(player.m.effective.gte(72))p=p.pow(player.mm.points.pow(0.1));
		if(player.mm.points.gte(14))p=p.pow(1.2);
		if(player.m.effective.gte(82))p=p.pow(player.mm.points.pow(0.2));
		if(player.mm.points.gte(17))p=p.pow(1.7);
		if(player.m.effective.gte(92))p=p.pow(player.mm.points.pow(0.3));
		if(player.m.effective.gte(106))p=p.pow(player.mm.points.pow(0.5));
		if(player.m.effective.gte(113))p=p.pow(player.mm.points.pow(0.3));
		if(player.um.points.gte(6))p=p.pow(player.um.points);
		if(player.mm.points.gte(2))p=p.pow(player.um.meta.gte(2)?2:1);
		if(player.mm.points.gte(3))p=p.pow(player.um.meta.gte(2)?2:1);
		if(player.mm.points.gte(4))p=p.pow(player.um.meta.gte(2)?2:1);
		return p;
	},
	milestone27Effect(){
		var p=player.m.points;
		if(player.m.effective.gte(139)){
			p=Decimal.pow(1.05,p);
		}
		if(player.m.effective.gte(28))p=p.pow(player.um.points.gte(28)?2:1.5);
		if(player.m.effective.gte(29))p=p.pow(player.um.points.gte(29)?2:1.2);
		if(hasUpgrade("sp",23))p=p.pow(player.mm.points.add(2));
		if(player.mm.points.gte(2))p=p.pow(2);
		if(player.mm.points.gte(3))p=p.pow(2);
		if(player.mm.points.gte(4))p=p.pow(2);
		if(player.m.effective.gte(47))p=p.pow(player.um.points.gte(47)?(player.mm.points.pow(0.5)):(player.mm.points.pow(0.25).add(1)));
		if(player.mm.points.gte(6))p=p.pow(1.5);
		if(player.mm.points.gte(7))p=p.pow(1.5);
		if(player.mm.points.gte(8))p=p.pow(1.5);
		if(player.mm.points.gte(11))p=p.pow(1.2);
		if(player.mm.points.gte(12))p=p.pow(1.2);
		if(player.m.effective.gte(67))p=p.pow(player.mm.points.pow(0.147));
		if(player.mm.points.gte(16))p=p.pow(1.2);
		if(player.m.effective.gte(87))p=p.pow(player.mm.points.pow(0.3));
		if(player.mm.points.gte(18))p=p.pow(1.8);
		if(player.mm.points.gte(19))p=p.pow(1.9);
		if(player.m.effective.gte(97))p=p.pow(player.mm.points.pow(0.4));
		if(player.m.effective.gte(106))p=p.pow(player.mm.points.pow(0.5));
		if(player.m.effective.gte(113))p=p.pow(player.mm.points.pow(0.3));
		if(player.um.points.gte(27))p=p.pow(player.um.points.pow(0.5));
		return p;
	},
	milestone105Effect(){
		var p=player.m.points.div(100);
		if(player.m.effective.gte(191)){
			p=Decimal.pow(1.004,player.m.points);
		}
		if(player.m.effective.gte(133))p=p.pow(1.2);
		if(player.m.effective.gte(143))p=p.pow(1.1);
		if(player.m.effective.gte(155))p=p.pow(1.03);
		if(player.m.effective.gte(159))p=p.pow(1.103);
		if(player.m.effective.gte(194))p=p.pow(1.067);
		return p;
	},
    resetDescription: "Get ",
	doReset(){},
	tabFormat: ["main-display","prestige-button","resource-display",
				["display-text",function(){return "Milestone cost scaling starts at "+format(tmp.m.getScalingStart,4)}],
				["display-text",function(){if(player.m.points.gte(180)){return "Second milestone cost scaling starts at "+format(tmp.m.getScalingStart2,4)}return "";}],
				["display-text",function(){return "Milestone cost exponent is "+format(tmp.m.exponent,4)}],
				"milestones"
				],
				update(){
					if(player.r.stage==0)player.m.effective=player.m.points;
				},
})