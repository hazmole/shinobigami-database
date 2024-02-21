var DOC;
if(!DOC) DOC = [];

Array.prototype.push.apply(DOC, [
	{
		type: "section",
		title: "半忍",
		entries: [
			{ type: "note", text: "出自《流派ブック 私立御斎学園》" },
			"這個追加規則讓玩家能夠遊玩覺醒了忍者之血的一般人，扮演同時擁有一般人之力和忍者之力的角色。",
			"半忍是擁有忍者的素質、但尚不清楚該如何掌握控制這股力量的存在。他們也被稱為「蛹」，並存在於許多流派之中。特別是在私立御齋學園，會教導他們控制這股力量的方法，培養他們以適應這個社會。",
			{
				type: "section",
				title: "創建半忍角色",
				entries: [
					"如果有GM的許可或劇本推薦如此，玩家可以創建半忍的角色參與到劇本之中。",
					"此外，創建半忍角色時相比忍者角色有以下幾點變更。沒有特別記載的項目，則比照一般忍者角色處理。",
					{
						type: "section",
						title: "● 流派、階級、流儀",
						entries: [
							"半忍角色的流派會是私立御齋學園或是其下位流派。然而，如果修得了長所【半忍前】的背景，那麼也可以創建其它流派的半忍角色。",
							"階級會是中忍的忍者。請在階級欄位中填入「中忍／半忍」。",
							"流儀則要擲 1D6，從「一般人流儀表」中決定。也可以不隨機擲骰，而是自行從中挑選。半忍角色如果在劇本結束時達成了從「一般人流儀表」中決定的目標，視為滿足了「功績點獲得條件」中「達成流儀」的項目。							",
						]
					},
					{
						type: "section",
						title: "● 忍法與奧義",
						entries: [
							"按照正常規則作為中忍修得忍法和奧義，然而半忍將無法進行奧義開發。一開始修得的【接近戰攻擊】、四個忍法、以及奧義，被統稱為「基礎資料」。因為忍法或劇本效果而特例修得的忍法、或追加修得的奧義等並不會被算進基礎資料中。",
							"要注意的是，半忍角色在劇本開始時將無法使用其在創角時決定的忍法和奧義。這些處於無法使用狀態的基礎資料被稱為「未覺醒資料」，未覺醒資料中的忍法被稱為「未覺醒忍法」、奧義則為「未覺醒奧義」。相反的，可以使用的基礎資料則被稱為「已覺醒資料」，忍法跟奧義則為「已覺醒忍法」和「已覺醒奧義」。",
						]
					},
					{
						type: "section",
						title: "● 背景",
						entries: [
							"半忍可以如常修得背景。但是不能修得像【渡來人之血】這類會追加修得忍法（包含特例修得）的背景。"
						]
					},
					{
						type: "section",
						title: "● 人格假面",
						entries: [
							"半忍擁有被稱為「人格假面」的特殊 Handout，並可以自行設定其內容。",
							"在角色創建時，半忍角色將修得一個【真實】並得到一個對應的「人格假面」。詳情參照「人格假面」的規則。但是，不能修得像【元忍者】這類會特例修得其它忍法的真實。",
						]
					}
				]
			},
			{
				type: "section",
				title: "半忍的運用",
				entries: [
					"半忍與一般忍者不同，在劇本開始時能夠使用的忍法和奧義要少得多，在戰鬥中能夠選擇的謀位值也相對受限。本節將會說明關於半忍的相關規則。",
					"劇本中的半忍角色相比忍者角色有以下幾點變更。沒有特別記載的項目，則比照一般忍者角色處理。",
					{
						type: "section",
						title: "劇本的開始",
						entries: [
							"半忍角色無法使用大部分在角色創建時設定的忍法和奧義。在劇本開始時，半忍角色修得的所有基礎資料將全部變為未覺醒資料。",
							"之後，在導入階段結束時，半忍角色將選擇【接近戰攻擊】和另一個忍法變為已覺醒忍法。將角色卡上對應忍法名左邊的 □ 打勾。這些被打勾的資料將被視為「已覺醒資料」，尚未打勾的資料則視為「未覺醒資料」。",
						]
					},
					{
						type: "section",
						title: "覺醒確認",
						entries: [
							"如果想在劇本中使用未覺醒資料，就必須要先讓其覺醒。半忍可以在數個時機點滿足時使用「覺醒表」，嘗試把未覺醒資料變為已覺醒資料。這也被稱為「覺醒確認」。",
							"半忍可以進行覺醒確認的時機點請參照「覺醒時機表」，當對應時機發生且其處理全部結束後，就接著擲骰使用「覺醒表」。然而，半忍角色在同個場景能進行覺醒確認的次數有限，該場景若為戲劇場景的話則為一個場景一次；若為戰鬥場景的話則為一輪一次。此外，如果全部的基礎資料都已經變為已覺醒資料，則該角色也不能再進行覺醒確認。",
							{
								type: "table",
								caption: "● 覺醒時機表",
								colStyles: [ "width:50px;", "font-size:0.9em;" ],
								rows: [
									[ "" ],
									[ "感情", "半忍角色獲得【感情】時。" ],
									[ "負傷", "半忍角色的【生命力】減少了 1 點以上（不包含消耗）。如果是因為忍法的效果而導致【生命力】減少的話，則在該忍法的效果全數處理完畢後，再接著使用「覺醒表」。" ],
									[ "喪失", "半忍角色持有正向【感情】的角色從戰鬥中脫落時。" ],
									[ "回想", "在高潮階段使用了回想場景的效果時。若選擇了「達成值上升」，則在該判定的處理結束後使用；若選擇了「傷害上升」，則在該傷害的處理結束後使用。" ],
								],
							},
							{
								type: "table",
								caption: "● 覺醒表 1D6",
								colStyles: [ "", "font-size:0.9em;" ],
								rows: [
									[ "" ],
									[ "1", "突然對自己的力量感到恐懼。任意選擇一個已覺醒資料，將其變為未覺醒資料。" ],
									[ "2", "自己的力量暴走，對周遭造成了損害。該場景登場的全體角色（包含自己）受到 1 點射擊戰傷害。" ],
									[ "3", "伴隨著覺醒，身體外型產生了變化。從未覺醒忍法中隨機選擇一個，將其變為已覺醒忍法。" ],
									[ "4", "忍者之血甦醒，理解了力量的控制方法。任意選擇一個未覺醒忍法，將其變為已覺醒忍法。" ],
									[ "5", "只有自己能夠操縱的獨特力量甦醒了。任意選擇一個未覺醒奧義，將其變為已覺醒奧義。" ],
									[ "6", "有什麼直接在你的大腦中低語。受到 1 點集團戰傷害，並任意選擇一個未覺醒資料，將其變為已覺醒資料。" ],
								],
							},
							{
								type: "sidebar",
								entries: [
									"<b>1 點集團戰傷害</b>：在處理「覺醒表」的 6 號效果時，假如劇本的篇章是「退魔篇」，則這個受到 1 點集團戰傷害的效果可以改為妖魔化。這個妖魔化的效果不需要該角色事先修得【魔人】之類妖魔化所必須的忍法或背景。"
								]
							}
						]
					},
					{
						type: "section",
						title: "劇本中的特例修得和未修得",
						entries: [
							"半忍角色有可能因為【特別教室】或【真蛇】之類的效果，導致在劇本途中發生特例修得了新的忍法、或是已修得忍法變為未修得的情況。",
							"半忍角色在導入階段之後特例修得的忍法將可以如常使用。但跟原本的特例修得規則一樣，如果讓特例修得的效果發生的忍法變得無法使用，則特例修得的忍法也會因此無法使用。換句話說，倘若讓特例修得的效果發生的忍法變成了未覺醒忍法，那麼特例修得的忍法也將因此無法使用。",
							"此外，在導入階段之後，如果基礎資料中有任何忍法變為了未修得的情況，則該忍法在再修得之前都不再被視為基礎資料的一部份。如果再修得該忍法，則它將變回未覺醒的基礎資料。",
						]
					},
					{
						type: "section",
						title: "半忍的謀位",
						entries: [
							"半忍與其他忍者不同，只能進行有限度的高速機動。半忍角色在謀位時，最高只能選擇等同於自己的已覺醒資料總數的謀位值。如果在謀位時不慎誤選了比自己已覺醒資料總數還要大的謀位值，則他在該輪的謀位值將會變為 0 。"
						]
					},
				]
			},
			{
				type: "section",
				title: "半忍的成長",
				entries: [
					"在重置階段時，半忍角色與普通忍者一樣可以變更角色數據、修得新的背景等，此外，也可以將已經修得的【真實】變更為其他的內容。然而，半忍角色無法在此時選擇「提升階級」。",
					"相對的，半忍角色可以在重置階段選擇踏上「成為忍者之道」。",
					{
						type: "section",
						title: "成為忍者之道",
						entries: [
							"半忍角色可以在重置階段時選擇脫離半忍的身分，正式成為忍者角色。若要這麼做，則其在劇本結束時必須要已經覺醒奧義和三個以上的忍法。脫離半忍並成為忍者的角色將會獲得 2 點功績點，並失去「人格假面」和【真實】。從此以後，該角色將會被視為忍者角色。",
							"已經成為忍者的角色將無法再恢復半忍的身分。",
						]
					}
				]
			},
		],
	},
	{
		type: "section",
		title: "忍法授業",
		entries: [
			{ type: "note", text: "出自《流派ブック 私立御斎学園》" },
			"所謂忍法授業，是與私立御齋學園的忍者學生們會進行的特殊課程有關的追加規則。透過接受課程，學生們將可以在遊戲途中調整自己的角色數據。",
			{
				type: "section",
				title: "聽講條件",
				entries: [
					"只有屬於私立御齋學園或者其下位流派的角色、以及修得長所「外部聽講生」背景的角色能夠接受忍法授業"
				]
			},
			{
				type: "section",
				title: "授業場景的流程",
				entries: [
					"主役玩家可以進行特殊的戲劇場景，並接受忍法授業，這個場景也被稱為「授業場景」。",
					"授業場景將按照以下流程進行：",
					{
						type: "list",
						entries: [
							"選擇授業科目",
							"決定場景內容",
							"授業判定",
						],
					},
					{
						type: "section",
						title: "選擇授業科目",
						entries: [
							"主役玩家將從「攻擊系忍法授業場景表」、「防禦系忍法授業場景表」、「補助系忍法授業場景表」三個場景表中選擇一個，擲骰使用，並根據結果來決定該場景可以接受的忍法授業課程。"
						],
					},
					{
						type: "section",
						title: "決定場景內容",
						entries: [
							"在決定了可以接受的忍法授業課程後，主役玩家可以選擇是否要接受授業。",
							"如果選擇接受授業，則需要決定該場景的登場人物、時間、以及場所，無法接受忍法授業的角色將無法被選為該場景的登場人物。此外，如果場景設定在私立御齋學園內部的相關設施時，則授業判定將會獲得 +1 的修正，這個修正被稱為「教室修正」。在決定好後，接著進行授業判定。",
							"如果選擇不接受授業，則角色將從授業中逃課，返回並進行原本正常的戲劇場景。在這種情況，在該戲劇場景進行的主要行動的判定將因此承受 -1 的負修正，這個修正被稱為「逃課修正」。除此之外，該場景將比照一般的戲劇場景來處理。",
						],
					},
					{
						type: "section",
						title: "授業判定",
						entries: [
							"主役玩家的角色需要從該忍法授業所設定的指定特技中，選擇任意一個特技進行判定。這個判定被稱為「授業判定」，授業判定被視為一種主要行動。",
							"授業判定成功的角色，將可以從該忍法授業設定的可修得忍法中選擇一個忍法，並在該劇本間特例修得該忍法，在這之後，他必須將自己修得的一個忍法變為未修得。或者，該角色也可以不選擇特例修得忍法，而是改為從該忍法授業設定的修得可能特技中選擇一個，並在該劇本間修得選擇的特技。在這之後，他同樣必須將自己修得的一個特技變為未修得。",
							"授業判定失敗的角色，則會受到 1 點集團戰傷害。",
						],
					},
				]
			},
			{
				type: "section",
				title: "授業場景的演出",
				entries: [
					"和一般的戲劇場景相同，主役玩家可以於授業判定前後在該場景間自由進行扮演。"
				],
			},
			{
				type: "section",
				title: "授業場景表",
				entries: [],
			},
			{
				type: "table",
				caption: "● 攻擊系忍法授業場景表：1D6",
				colStyles: [ 
					"",
					"width:80px;font-weight:bold;",
					"width:75px;font-size:0.9em;text-align:center;",
					"width:105px;font-size:0.9em;text-align:center;",
					"width:85px;font-size:0.9em;text-align:center;",
					"font-size:0.8em;"
				],
				rows: [
					[ "", "忍法授業名", "指定特技", "修得可能忍法", "修得可能特技", "解說" ],
					[ "1", "接近戰鬥學", "《刀術》\n《野戰術》", "【竹貫】\n【天牛】\n【新理】", "任意體術", "御齋學園用地內的森林「御齋森」內授課。必須使用帶刃的近戰武器打倒資深教師。這需要利用有利地形戰鬥，並理解目標所使用的傳統技能。" ],
					[ "2", "射擊戰鬥學", "《砲術》\n《見敵術》", "【必中】\n【文曲】\n【魔弓】", "任意器術", "從十層樓高的建築到平房，在各種高度的建築並排的部屋棟周圍行動。使用弓、彈弓、手槍、步槍等各種射擊武器。在潛伏狀態發現標的並擊破。學習預測對手之後的移動、妨礙對手移動的方式。" ],
					[ "3", "集團戰鬥學", "《野戰術》\n《用兵術》", "【追擊】\n【伏兵】\n【武曲】", "任意戰術", "在御齋學園裡最高的地點之一，大鐘塔上進行。對在地面的下級生下達指示，妨害目標，將下級生作為部下運用發揮諸如偷襲、下毒、造謠等效果的知識授業。" ],
					[ "4", "高速戰鬥學", "《骨法術》\n《意氣》", "【連擊】\n【風饗】\n【噴足】", "任意忍術", "地下武鬥場的授業。一對一以徒手和擒拿技為中心，教導要如何讓攻擊打中，以及理解攻擊之後的效果。因為是長時間授課，也是比劃耐力的課程。" ],
					[ "5", "戰鬥物理學", "《藏兵術》\n《記憶術》", "【痛打】\n【飢渴】\n【早乙女】", "任意器術", "學習讓自己持有的攻擊方法更能確實擊中的手段，以講學為中心的授業。可以知道並把握如何讓武器威力更高，或者拖延時間讓標的感到焦慮等。" ],
					[ "6", "殺戮力學", "《野戰術》\n《言靈術》", "【蠻歌】\n【共鬥】\n【天槍】", "任意妖術", "分成複數個班並將別班當成敵對者的團體訓練。包含協力作戰、引出對方負面感情的話術、利用地形和妖術傷害對手的咒術等講義內容。" ],
				],
			},
			{
				type: "table",
				caption: "● 防禦系忍法授業場景表：1D6",
				colStyles: [ 
					"",
					"width:80px;font-weight:bold;",
					"width:75px;font-size:0.9em;text-align:center;",
					"width:105px;font-size:0.9em;text-align:center;",
					"width:85px;font-size:0.9em;text-align:center;",
					"font-size:0.8em;"
				],
				rows: [
					[ "", "忍法授業名", "指定特技", "修得可能忍法", "修得可能特技", "解說" ],
					[ "1", "人體護身學", "《衣裝術》\n《地利》", "【御齋魂】\n【衣換】\n【自警】", "任意體術", "在一般授課中，承受指導教師的攻擊。在不讓一般學生發覺的情況讓他們學習承受、招架的方法。不只身體能力，同時也重視地形和裝備的利用方法並加以評價。" ],																		
					[ "2", "警備防衛學", "《分身術》\n《暗號術》", "【保護】\n【護衛】\n【陽動】", "任意忍術", "使用整個廣大的御齋學園用地授業。必須盡速抵達指定目標的所在位置，並護衛直到授業結束。不只是自己的動作，還有學習對護衛對象下達指示，並不讓襲擊者看穿指示的方法。" ],																		
					[ "3", "特殊迴避學", "《手練》\n《地利》", "【矢止之術】\n【反擊技】\n【替身之術】", "任意器術", "在廣大的平地授業。在遮住眼睛的狀態承受從中遠距離射擊的手裏劍、苦無、弓、手槍、步槍。不只要閃過，還要學習讓攻擊失敗、反彈、對應攻擊者動作的方法。" ],																		
					[ "4", "忍者療法學", "《對人術》\n《兵糧術》", "【毒飼】\n【仙食】\n【說教】", "任意謀術", "使用學生寮的會談室、食堂，學習如何以溝通回復夥伴精神和動力。同時包括會話外的食物、金錢等報酬的利用方法的學習內容。" ],																		
					[ "5", "生存訓練學", "《生存術》\n《意氣》", "【頑建】\n【達人】\n【銳氣】", "任意體術", "在御齋樹海的實地授業。樹海內有佈置大量陷阱和釋放出的忍獸，學生將被隨機投放到各個地點，並要想辦法到達終點。" ],																		
					[ "6", "對抗忍法學", "《騎乘術》\n《暗號術》", "【騎馬】\n【破術】\n【作戰指揮】", "任意忍術", "使用學園內藏書量第一的御齋第五圖書館。以兩人為一組，在圖書館調查對方忍法的內容、對應方法後，離開圖書館進行實踐。如何避開對手有利的場地也是很重要的。" ],																		
				],
			},
			{
				type: "table",
				caption: "● 輔助系忍法授業場景表：1D6",
				colStyles: [ 
					"",
					"width:80px;font-weight:bold;",
					"width:75px;font-size:0.9em;text-align:center;",
					"width:105px;font-size:0.9em;text-align:center;",
					"width:85px;font-size:0.9em;text-align:center;",
					"font-size:0.8em;"
				],
				rows: [
					[ "", "忍法授業名", "指定特技", "修得可能忍法", "修得可能特技", "解說" ],
					[ "1", "情報戰略學", "《記憶術》\n《千里眼》", "【占術】\n【暗業】\n【分析】", "任意謀術", "將學生製作的繪畫裝飾在舊校舍美術館的實習授業。傳言繪畫是因為怪異的關係，從忍務中喪命的學生留下的各種訊息。學習如何發現、解讀、利用這些訊息，便是課堂的學習目標。" ],																		
					[ "2", "諜報心理學", "《對人術》\n《傳達術》", "【感情操作】\n【傳心】\n【柔氣】", "任意謀術", "在開演場會用的御齋紀念音樂廳。此實習會指定音樂鑑賞中的一般學生，讓那個人物抱持好感、傳達指示、讓渡物品。" ],																		
					[ "3", "高速機動學", "《盜聽術》\n《異形化》", "【無拍子】\n【覺悟】\n【逃水】", "任意戰術", "利用遠心力高負重的過重力環境室，適應高速機動的授業。經過反覆訓練，除了擴展自己的身體能力，還能讓腦適應高速機動中的光線折射、發散的稜鏡現象。" ],																		
					[ "4", "戰場構築學", "《騎乘術》\n《地利》", "【誘導】\n【戰場的極意】\n【安地】", "任意戰術", "學習尋找自己有利的地形並引導到該地的方法。先從利用汽車、腳踏車、機車、騎馬，再到使用學校的直升機、輸送用列車、秘密地下通道。" ],																		
					[ "5", "妨害環境學", "《地利》\n《封術》", "【霾天】\n【大火】\n【冰楔】", "任意妖術", "利用大桑拿室、大學堂附屬冷凍室、颳起強風的御齋沙丘，學習在高低溫、視野妨礙、惡劣場地的戰鬥方式。不只是地形與天氣，還會同時體驗學園所屬半妖發生妖力的狀況。" ],																		
					[ "6", "業子力學", "《鳥獸術》\n《咒術》", "【神通力】\n【數奇】\n【三星】", "任意妖術", "使用御齋學園專用網路的線上課程。以巫女、咒術師為講師，學習借助各種力量、使用咒術、介入命運將事態引導到自己想要的方向的理論。" ],																		
				],
			},
		],
	},
	{
		type: "section",
		title: "類忍戰力&國外流派",
		entries: [
			{ type: "note", text: "出自《流派ブック 私立御斎学園》" },
		],
	},
	{
		type: "section",
		title: "特殊敵人",
		entries: [
			{ type: "note", text: "出自《流派ブック 私立御斎学園》" },
			"這是和敵人的【生命力】有關的追加規則。若使用這個追加規則，則敵人的【生命力】將被視為與通常角色的處理方式相同。就像與玩家角色彼此戰鬥一樣，接近戰傷害和射擊戰傷害的差異也會更加明確化。適用了這個追加規則的敵人，將被稱為「特殊敵人」。特殊敵人這個追加規則較為推薦給已經熟悉了「忍神」戰鬥規則的 GM。",
			{
				type: "section",
				title: "特殊敵人的運用",
				entries: [
					"GM 可以把在劇本中登場的敵人作為特殊敵人來運用。然而，【生命力】不足 6 點的敵人，將不能被當作特殊敵人使用。請選擇劇本中重要的角色作為特殊敵人吧。被選擇作為特殊敵人的角色，在進行【生命力】的處理時，有以下幾點變更：",
					"首先，特殊敵人的【生命力】在減少、回復時，將與通常角色一樣，必須決定要減少、回復哪個對應的特技分野。當【生命力】流失時，直到回復之前，都將無法使用對應的特技。此外，特殊敵人視為擁有數量與其設定【生命力】減 6 之值相同的追加【生命力】和追加【生命力】格子。",
				]
			}
		],
	},

]);