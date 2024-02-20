var DOC;
if(!DOC) DOC = [];

Array.prototype.push.apply(DOC, [
	{
		type: "section",
		title: "妖魔擴充規則",
		entries: [
			{ type: "note", text: "出自《流派ブック 隠忍の血統》" },
			"這個追加規則是與妖魔相關的擴充。",
			{
				type: "section",
				title: "異形表",
				entries: [
					"若使用了本書記載的妖魔擴充規則，則當角色進行「妖魔化」時，將改為擲骰 1D6 使用「新異形表」來決定會發現什麼樣的效果。透過這個方式被發現的效果被稱為「異形」。異形共有六種型態，分別是：異靈態、凶身態、神化態、攻激態、業魔態、不視態。",
					"當進行了妖魔化，角色必須把其發現的異形名稱紀錄在角色卡的背景欄上。若因為該異形的效果而修得了任何妖魔忍法，則把該忍法的名稱一併紀錄在異形種類後。即使種類相同，但若因此修得的妖魔忍法不同，就會被視為不同的異形。",
					"在進行妖魔化時，除了使用「新異形表」決定會新發現什麼異形之外，還會一併發現過去妖魔化時曾經發現過的所有異形。倘若這時新發現的異形與過去異形重複，則重新擲骰使用「新異形表」，直到發現不同的異形為止。",
					{
						type: "table",
						caption: "● 新異形表 1D6",
						colStyles: [ "", "" ],
						rows: [
							[ "" ],
							[ "1", "異靈態。使用「妖魔忍法表‧異靈」。在妖魔化期間，修得該妖魔忍法。" ],
							[ "2", "凶身態。使用「妖魔忍法表‧凶身」。在妖魔化期間，修得該妖魔忍法。" ],
							[ "3", "神化態。使用「妖魔忍法表‧神化」。在妖魔化期間，修得該妖魔忍法。" ],
							[ "4", "攻激態。使用「妖魔忍法表‧攻激」。在妖魔化期間，修得該妖魔忍法。" ],
							[ "5", "業魔態。在妖魔化期間，在戰鬥中，每輪可以使用的忍法總花費為自己的謀位+3，\n並修得裝備忍法【搖音】。" ],
							[ "6", "不視態。在妖魔化期間，對此角色攻擊的迴避判定、以及對此角色奧義的看破判定，都有-1修正。" ],
						],
					}
				]
			},
			{
				type: "section",
				title: "妖魔忍法表",
				entries: [
					"若使用了本書記載的妖魔擴充規則，則當角色因為妖魔化而要隨機修得妖魔忍法時，將改為擲骰1D6使用新的「妖魔忍法表」來決定會修得什麼妖魔忍法。",
					"「妖魔忍法表」上的每個擲骰結果都有各自對應的二種妖魔忍法，使用者將需要從這兩種妖魔忍法中任意選擇一個並修得。然而，同名的忍法一樣不能重複修得。如果角色已經修得了這兩種妖魔忍法的其中一個，則他將只能選擇並修得另一個。倘若兩種妖魔忍法都已經修得，則重新骰「新異形表」來決定新的異形。",
					{
						type: "flex",
						entries: [
							{
								type: "table",
								caption: "● 妖魔忍法表．異靈",
								colStyles: [ "", "width:100px", "width:120px" ],
								rows: [
									[ "" ],
									[ "1", "【逢魔時】", "【虛舟】" ],
									[ "2", "【神隱】", "【食夢】" ],
									[ "3", "【狂骨】", "【金毛】" ],
									[ "4", "【木魂】", "【朽繩】" ],
									[ "5", "【付喪神】", "【香魂】" ],
									[ "6", "【生剝】", "【三屍】" ],
								],
							},
							{
								type: "table",
								caption: "● 妖魔忍法表．神化",
								colStyles: [ "", "width:100px", "width:120px" ],
								rows: [
									[ "" ],
									[ "1", "【鵺】", "【朱盤】" ],
									[ "2", "【野衾】", "【長壁】" ],
									[ "3", "【震震】", "【物氣】" ],
									[ "4", "【見越】", "【紙舞】" ],
									[ "5", "【夜雀】", "【目競】" ],
									[ "6", "【獵犬】", "【置行】" ],
								],
							},
							{
								type: "table",
								caption: "● 妖魔忍法表．凶身",
								colStyles: [ "", "width:100px", "width:120px" ],
								rows: [
									[ "" ],
									[ "1", "【荒吐】", "【赤舌】" ],
									[ "2", "【鬼火】", "【大太郎】" ],
									[ "3", "【怨靈】", "【白面】" ],
									[ "4", "【吞口】", "【邪魅】" ],
									[ "5", "【百眼】", "【鬼胎】" ],
									[ "6", "【蛭子】", "【岩肌】" ],
								],
							},
							{
								type: "table",
								caption: "● 妖魔忍法表．攻激",
								colStyles: [ "", "width:100px", "width:120px" ],
								rows: [
									[ "" ],
									[ "1", "【黑手】", "【強威】" ],
									[ "2", "【業弓】", "【強威】" ],
									[ "3", "【怪病】", "【強威】" ],
									[ "4", "【鏖殺】", "【強威】" ],
									[ "5", "【精靈風】", "【強威】" ],
									[ "6", "【雷獸】", "【強威】" ],
								],
							}
						]
					},
				]
			},
		],
	},
	{
		type: "section",
		title: "妖術戰傷害",
		entries: [
			{ type: "note", text: "出自《流派ブック 隠忍の血統》" },
			"這是使用了本書收錄的追加資料時才會造成的新傷害種類。當藉由隱忍的秘術、妖力、異界法則使用了會給對手帶來痛苦的忍法時，就會造成這種類型的傷害。",
			"每受到 1 點妖術戰傷害，角色就需要隨機選擇一個特技分野，並流失該特技分野對應的【生命力】。如果該【生命力】已經流失，則改為獲得對應的變調。這種因為妖術戰傷害而造成的變調又被稱為「妖術變調」。",
			{
				type: "section",
				title: "妖術變調對應表",
				entries: [
					"妖術變調的種類會根據對應的特技分野來決定。各特技分野對應的變調如下所示。",
					{
						type: "table",
						caption: "現代篇．退魔篇 的 妖術變調對應表",
						colStyles: [
							"width:80px; text-align:center",
							"width:100px;text-align:center",
							"width:80px;text-align:center",
							"width:120px;text-align:center" ],
						rows: [
							[ "特技分野", "變調", "特技分野", "變調" ],
							[ "器術", "故障", "謀術", "行蹤不明" ],
							[ "體術", "麻痺", "戰術", "忘卻" ],
							[ "忍術", "重傷", "妖術", "詛咒" ],
						],
					},
					{
						type: "table",
						caption: "戰國篇 的 妖術變調對應表",
						colStyles: [
							"width:80px; text-align:center",
							"width:100px;text-align:center",
							"width:80px;text-align:center",
							"width:120px;text-align:center" ],
						rows: [
							[ "特技分野", "變調", "特技分野", "變調" ],
							[ "器術", "催眠", "謀術", "飢餓" ],
							[ "體術", "火達磨", "戰術", "殘刃" ],
							[ "忍術", "猛毒", "妖術", "野望" ],
						],
					},
					"與通常變調相同，修得了【梟雄】背景的角色在造成妖術戰傷害時，即使身在現代篇等篇章時，也同樣能夠使用「戰國篇的妖術變調對應表」。",
				],
			},
			{
				type: "section",
				title: "命中判定大成功",
				entries: [
					"妖術戰的攻擊忍法在命中判定大成功時，除了【生命力】的回復效果之外，還需要再擲 1D6。如果擲骰結果比原本的傷害還要高，則改為造成與該骰面相同的妖術戰傷害。"
				]
			},
		],
	},
	{
		type: "section",
		title: "鬼力",
		entries: [
			{ type: "note", text: "出自《流派ブック 隠忍の血統》" },
			"所謂【鬼力】，是隱忍和妖魔所能操縱的特殊之力。透過使用本書收錄的追加資料，將能夠獲得並使用【鬼力】，在短時間內讓身體和精神獲得強化。",
			{
				type: "section",
				title: "鬼力的使用",
				entries: [
					"持有一點以上【鬼力】的角色，可以在判定擲骰之前消耗【鬼力】。每消耗一點【鬼力】，就可以在該判定擲骰時額外追加一顆骰子，並選擇其中任意二顆作為擲骰結果。在決定選擇這二顆骰子後，才會接著判定是否發生大成功或大失敗。",
					"此外，如果使用了【鬼力】的判定發生需要重新擲骰的情況，則包括【鬼力】追加骰在內的所有骰子，都會一併被重新擲骰。"
				]
			},
			{
				type: "section",
				title: "鬼力的持有限制",
				entries: [
					"每個忍者所能持有【鬼力】最大值與其【統率力】相同。一般人角色最大值為２點；敵人則為其【威脅度】的一半（小數點捨去）。",
					"每個角色獲得的【鬼力】都將在戰鬥場景結束時歸零。"
				]
			},
			{
				type: "section",
				title: "對從者使用",
				entries: [
					"當持有【鬼力】的角色和自己的從者在同個場景登場時，該角色也可以在其從者進行判定的擲骰之前，消耗自己的【鬼力】來增加從者判定的骰子。"
				]
			},
		],
	},
	{
		type: "section",
		title: "出島",
		entries: [
			{ type: "note", text: "出自《流派ブック 隠忍の血統》" },
			"(待補充)"
		],
	},
]);