var DOC;
if(!DOC) DOC = [];

Array.prototype.push.apply(DOC, [
	{
		type: "section",
		title: "忍具補充規則",
		entries: [
			{ type: "note", text: "出自《流派ブック 斜齒忍軍》" },
		]
	},
	{
		type: "section",
		title: "忍具作成",
		entries: [
			{ type: "note", text: "出自《流派ブック 斜齒忍軍》" },
		]
	},
	{
		type: "section",
		title: "異界律",
		entries: [
			{ type: "note", text: "出自《流派ブック 斜齒忍軍》" },
			"所謂異界律，是指在異界本身以及與異界相連結點會出現的奇特現象。在那裡，正常的物理法則將被歪曲，並誕生出各種不可思議的景色。",
			{
				type: "section",
				title: "異界律的運用",
				entries: [
					"GM在創作劇本時，可以為其中的特殊場景設定異界律。這類特殊場景通常會是某種異世界──渡來人居住的世界、出島那樣的街道、隱忍們的隱密村里、電腦空間、宇宙、夢境之中等等，當打算把這類特殊場所做為故事舞台時，就可以使用這個規則。",
					"本書收錄了共十二種的異界律。有些僅適用於戲劇場景、有些僅適用於戰鬥場景、也有些兩方都適用。通常建議在每個場景中只設定一條異界律即可。具體的場景設定方式可以參照以下說明：",
					{
						type: "section",
						title: "● GM場景",
						entries: [ "異界律可以設定在會發生特殊事件的GM場景，營造出像是在不可思議的舞台冒險、或是讓持有難以無效化的能力的敵人登場之類的演出。推薦設定在主要階段的GM場景、或是高潮階段的戰鬥場景等場合。" ]
					},
					{
						type: "section",
						title: "● 場景表",
						entries: [ "在自行製作場景表時，如果想要在骰到某些場景時發生某些特殊的效果的話，可以在場景表的對應項目中設定讓某個異界律發生。在這種情況下，請從「適用所有場景」和「適用戲劇場景」的異界律中選擇。" ]
					},
					{
						type: "section",
						title: "● 懲罰",
						entries: [ "在劇本中，做為玩家角色們引發展開的懲罰，可以讓異界律發生在從此之後的場景中。表現出因為威脅世界的危機逐漸逼近，導致現實世界的物理法則遭到了異界律的侵蝕等等。如果把異界律的發生當成懲罰，那麼包括避免其發生的手段、和讓其恢復原狀的方法等等，都一並在劇本中設定會比較好。" ]
					},
					{
						type: "section",
						title: "● 獎勵",
						entries: [ "雖然數量不多，但也存在著效果對玩家角色們有利的異界律。跟懲罰相反，這類異界律可以在玩家角色們引發某些展開時，做為獎勵在場景中發生。像【心之中】和【虛空之扉】這類異界律就適合被當成獎勵使用。" ]
					},
				]
			},
			{
				type: "section",
				title: "異界律一覽",
				entries: [
					{
						type: "table",
						caption: "",
						bodyStyle: "font-size:0.9rem",
						colStyles: [
							"width:80px;text-align:center;font-weight:bold;",
							"width:55px;text-align:center",
							"",
							"font-size:0.9em" ],
						rows: [
							[ "名稱", "適用場景", "效果", "概要" ],
							[ "浮游因子", "全", "於此場景登場期間，所有角色大失敗值+1。", "接觸到浮游因子的物體會微微發光，忽視重力向上漂浮。" ],
							[ "無限的寂靜", "全", "於此場景登場期間，所有角色大失敗值-1。", "看不到任何邊界的無限空間。眼中所見的建築物和人聲都被消去，僅剩下純白、漆黑、深紅之類單一的顏色。" ],
							[ "迷宮化", "戲劇", "於此場景登場的角色，必須於退場時進行《第六感》或《結界術》的判定（待到最後的角色則是於場景結束時）。失敗的角色受到「行蹤不明」變調，並失去一個劇本中獲得的【居所】。", "方向感失靈，漸漸遠離想去的目標場所。" ],
							[ "假面劇", "戲劇", "於此場景登場的角色，無法在場景中讓渡情報或道具。", "周圍的人們皆用白色無生命力的假面掩蓋自己，難以辨別特定個體。" ],
							[ "鬥技場", "戲劇", "由主役玩家選擇一名登場的角色為目標，與目標進入戰鬥場景。該戰鬥場景不能被戰鬥亂入（包括忍法、背景等效果）。戰鬥結束後，自己的主役場景亦結束。", "圓形鬥技場或奇妙的道場、被電流鐵網環繞的擂台等，不會被外人干預的一對一戰場。" ],
							[ "心之中", "戲劇", "於此場景間感情判定成功時，獲得【感情】的角色可以不擲「感情表」，自由決定感情種類（因背景等效果有限制時，須在限制的範圍內決定）。", "某人的夢中精神世界。這裡是能接觸平時被掩蓋的真心，進行靈魂交流的場所。" ],
							[ "虛空之扉", "戲劇", "由主役玩家從劇本登場人物中選擇任意一名角色為目標，該角色於此場景登場。", "於空中、道路正中央出現一道不與任何地方相連的門扉。打開後，會通往你最想見的那個人的所在地。" ],
							[ "境界之霧", "戰鬥", "由GM於每輪結束時擲D66，擲出11～16時，從「妖魔遭遇表」中令對應的妖魔登場。此效果登場的妖魔會隨機決定謀位，其行動GM可自由操縱或隨機決定。", "與異界聯繫的霧氣。異界的居民們，會從瘴氣的另一端顯現。" ],
							[ "鏡像空間", "戰鬥", "於此場景登場期間，每輪可使用的忍法總花費+1。", "無限接續的階梯、摺疊堆積的建築群、如萬花筒般不斷迴旋連接的車廂。" ],
							[ "墜落世界", "戰鬥", "由GM於每輪結束時擲1D6，在該謀位上的所有角色受到1點接近戰傷害。", "從空中掉落下太空船、建築物的一部分、巨獸的屍骸等其他世界不需要、遺忘的東西。" ],
							[ "酒池肉林", "戰鬥", "由GM於奇數輪開始時擲1D6，骰面1、4時為「兵糧丸」，2、5時為「神通丸」，3、6時為「遁甲符」，將對應的忍具放在該謀位上。該輪間，於指定謀位上的角色可以在自己回合時獲得該忍具。該謀位上有複數角色存在時，各自擲D66，由最高者得（最高者間擲到決定勝負為止）。", "生長出只存在幻想中的植物，枝條上有各種奇妙的果實。" ],
							[ "時之裂縫", "戰鬥", "由GM於偶數輪開始時擲「戰場表」，隨機變更戰場。", "時空間紊亂的場所，過去和未來在眼前錯綜閃爍。" ],
						],
					}
				]
			},
			{
				type: "section",
				title: "妖魔遭遇表",
				entries: [
					"在【境界之霧】這個異界律的效果中，會使用下面的「妖魔遭遇表」，隨機決定登場的低級妖魔。",
					{
						type: "table",
						caption: "● 妖魔遭遇表 D66",
						colStyles: [ "", "width:85px", "border-left:1px dotted black", "width:85px" ],
						rows: [
							[ "" ],
							[ "11", "動死體", "14", "幽靈" ],
							[ "12", "火蜥蜴", "15", "水怪" ],
							[ "13", "黑羽", "16", "魔像" ],
							[ "21 以後則不會有妖魔登場" ]
						],
					}
				]
			},
		]
	},
	{
		type: "section",
		title: "再修得",
		entries: [
			{ type: "note", text: "出自《流派ブック 斜齒忍軍》" },
			"這是關於在劇本途中修得忍法或背景時的補充規則。",
			"在『忍神』存在著某些效果會導致忍法或背景在劇本途中變為未修得的狀態。當處於這種狀態的忍法或背景，在同一個劇本期間再次被角色修得時，這個情況就被稱為「再修得」。當忍法或背景被再修得時，其內容必須要跟原本修得的忍法或背景完全一致。其指定特技以及其他修得時選擇的事物，都必須跟原本的設定相同，不能變更。",
			"舉例來說，某個忍者學生修得了指定特技為《刀術》的【接近戰攻擊】。這個角色受到了「詛咒」變調，導致該【接近戰攻擊】變為未修得的狀態；接著，當他從「詛咒」變調回復時，這個情況就被視為再修得。由於這個情況被視為再修得，因此這個【接近戰攻擊】的指定特技也就不能藉此變更。",
			"舉另一個例子，某個忍者學者的【霞身】讓他不會受到「詛咒」變調的影響。某天，他因為遭受某個古流劍客施放的【影斬】，導致這個【霞身】變成了未修得的狀態。當忍者學者用某種方法打倒了劍客，結束這場戰鬥後，由於【影斬】的效果結束，【霞身】將會被再修得，而【霞身】的「修得此忍法時，指定一個變調」的效果，將因此必須遵循原本的設定，不能選擇「詛咒」以外的其他變調。",
		]
	}
]);