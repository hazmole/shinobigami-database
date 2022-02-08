var BACKGROUND_LIST = [
{name:["獸心"],category:"benefit",exp:[1],restrict:[],effect:["每次於劇本中初次遭遇「忍獸」類別的敵人時，能用《鳥獸術》進行判定（若是對自己的從者，即使擁有複數忍獸，一個劇本也只能挑戰一次）。判定成功時，互相締結「情感」。「忍獸」類別的敵人一定會獲得正向「情感」。此外，持有正向「情感」的「忍獸」類別的敵人對自己的命中、迴避判定都有-1修正。"],desc:["被動物和昆蟲所愛。"]},
{name:["藏身所"],category:"benefit",exp:[1],restrict:[],effect:["回復判定成功時，生命力回復2點或解除2個變調。"],desc:["深陷危機時可用的隱匿場所。可在該處休息，應付各種異變。"]},
{name:["社交高手"],category:"benefit",exp:[1],restrict:[],effect:["此背景的持有者，在透過情報判定揭露「人格面具」的【真實】時，可以再進行一次情報判定，並有-2修正。"],desc:["能被他人所信賴親暱的外表。"]},
{name:["權貴"],category:"benefit",exp:[2],restrict:[],effect:["此背景的持有者，在透過情報判定揭露「謎團」的【戰力】時，可以再進行一次情報判定，並有-2修正。此外，在進行謎團的【戰力】的解除判定時，該判定有+1修正。"],desc:["持有對忍務有正面影響力的表之顏。"]},
{name:["情報屋"],category:"benefit",exp:[2],restrict:[],effect:["此背景的持有者的主役戲劇場景時，可以使持有「龍套屬性表」4號「情報屋」的效果的龍套登場。"],desc:["交情良好的情報商。"]},
{name:["影響力"],category:"benefit",exp:[2],restrict:[],effect:["忍具、特殊忍具的修得必要功績點減半（無條件進位）。"],desc:["一族的親人中，有著在流派中佔據重要地位的人。"]},
{name:["內通者"],category:"benefit",exp:[2],restrict:[],effect:["修得此背景時選擇任意1個流派。此背景的持有者，在獲得該流派角色的「秘密」或「居所」時，該情報判定有+1修正"],desc:["向特定的流派中送入間諜。"]},
{name:["末裔"],category:"benefit",exp:[2],restrict:["exclude-sengoku"],effect:["修得此背景時，選擇1種古流忍法。此背景持有者在角卡作成時，可以特例修得該忍法。"],desc:["某傳承古老的忍者家系的後代。繼承了早已失傳的忍法。"]},
{name:["部下訓練"],category:"benefit",exp:[3],restrict:[],effect:["此背景持有者獲得「從者」的時候，在劇本中任何時候選擇其中1個從者為目標，目標追加1個特技或1個生命格。此效果一次劇本只能使用一次。"],desc:["擁有誓死效忠的從者。"]},
{name:["絆"],category:"benefit",exp:[3],restrict:[],effect:["修得此背景時，指定任意角色，選擇1個「情感」。此背景的持有者，每次劇本開始時，獲得對該角色的指定「情感」。"],desc:["擁有一名情誼特殊的對象。"]},
{name:["異才"],category:"benefit",exp:[3],restrict:[],effect:["修得此背景時，選擇任兩條直行空白格，然後將自己擅長分野的兩側格子清空，填滿選擇的格子代替。此「長所」如果是斜齒忍軍和隱忍血統、或者是其下位流派修得時，必要功績點減半（無條件進位）。"],desc:["使用的技巧在流派中可稱為特異。"]},
{name:["免疫"],category:"benefit",exp:[3],restrict:[],effect:["巡迴結束時進行用於回復「變調」的判定時，該判定有+2修正。"],desc:["從小給身體注入威力微弱的毒或詛咒，提高對其的免疫力。"]},
{name:["宿星"],category:"benefit",exp:[3],restrict:[],effect:["順著自己的「信念」行動時，可以在失敗時重擲判定的骰。是否順著自己的「信念」由GM判斷，如果不符合則無法使用此效果。此效果一次劇本只能使用一次。"],desc:["擁有對應自己命運的星辰，並遵從它行動。宿星可能有各類名稱，但大抵都與信念中的六道對應。"]},
{name:["梟雄"],category:"benefit",exp:[3],restrict:[],effect:["造成集團戰傷害時，可以用「戰國變調表」取代「變調表」的效果。"],desc:["持有在現代被視為惹事危險的性格。"]},
{name:["隱蔽"],category:"benefit",exp:[4],restrict:[],effect:["劇本開始時，選擇此背景以外一個自己修得的背景。此背景持有者得到「人格面具」1個，將該【真實】填上選擇背景的名字（角色卡的背景欄仍寫入該背景，但該背景為非公開情報），【偽裝】自由設定。"],desc:["巧妙地隱藏自己的背景情報。"]},
{name:["家寶"],category:"benefit",exp:[4],restrict:[],effect:["修得此背景時，從「戰利品表」中選擇12號以外的一個效果。每個劇本開始時，可持有該效果的戰利品參加劇本（劇本結束時消失）。"],desc:["一族傳承的特殊道具。"]},
{name:["影彌勒的教誨"],category:"benefit",exp:[4],restrict:[],effect:["對忍者角色持有正向「情感」時，可隨時將其變更為負向「情感」。一次劇本只能使用2次。"],desc:["與想消滅所有忍者的「影彌勒」的思考深度同步。"]},
{name:["日常鍛鍊"],category:"benefit",exp:[5],restrict:[],effect:["追加1個生命力格子。"],desc:["每日不懈地鍛鍊肉體。"]},
{name:["上忍殺手"],category:"benefit",exp:[5],restrict:[],effect:["戰勝比自己階級還高的忍者或敵人時，追加功績點2點。"],desc:["非常強烈的鬥爭心，時常想挑戰比自己實力更高的人。戰勝之後，會以無比的貪欲吸收對手長處。"]},
{name:["他流派血統"],category:"benefit",exp:[6],restrict:[],effect:["修得此背景時，從自己所屬流派以外的其他流派中選擇一個流派（不包含古流流派），選擇該流派的流派忍法1個。此背景持有者在角卡作成和重置時，可以特例修得該忍法（此效果不可修得秘傳忍法，必須選擇下位流派才能修得其流派的忍法）。"],desc:["曾繼承了其他流派的技巧的一族。"]},
{name:["整備班"],category:"benefit",exp:[6],restrict:[],effect:["在自己主役的戲劇場景時使用，指定自己修得的一個需要判定的輔助忍法。該劇本中，使用該忍法時可以有一次自動成功。此效果一次劇本只能使用一次。此長所如果是斜齒忍軍或者是其下位流派修得時，必要功績點減半。"],desc:["能維護忍器與肉體的專門人員。"]},
{name:["演武"],category:"benefit",exp:[6],restrict:[],effect:["在自己主役的戲劇場景時使用，指定自己修得的一個需要判定的攻擊忍法。該劇本中，使用該忍法時可以有一次自動成功。此效果一次劇本只能使用一次。此效果一次劇本只能使用一次。此長所如果是鞍馬神流或者是其下位流派修得時，必要功績點減半。"],desc:["為使武藝提高，每日不斷激烈地練習。"]},
{name:["王牌"],category:"benefit",exp:[6],restrict:[],effect:["自己的「奧義」的「情報」被自己以外的任何角色獲得之後，在任何時候使用。將自己奧義的指定特技變更為一個自己修得的特技。此效果一次劇本只能使用一次。此長所如果是離群者或者是其下位流派修得時，必要功績點減半。"],desc:["研磨奧義，準備好應付最糟的事態，在奧義被看破時能有應付對策。"]},
{name:["後援者"],category:"benefit",exp:[6],restrict:[],effect:["在任何時候，獲得任意1個忍具，該劇本獲得的功績點-1。此效果一次劇本只能使用一次。此長所如果是比良坂機關或者是其下位流派修得時，必要功績點減半。"],desc:["龐大的後援組織，能在進行忍務時穩定提供資金。"]},
{name:["青春"],category:"benefit",exp:[6],restrict:[],effect:["修得此背景時，設定和自己要好的龍套。在該龍套登場的場景進行感情判定時有+2修正。此長所如果是私立御齋學園或者是其下位流派修得時，必要功績點減半。"],desc:["與作為忍者的人生不同，有著良好的友人與戀人，保留充實的人生。"]},
{name:["隱藏的異形"],category:"benefit",exp:[6],restrict:[],effect:["場景中一次，在任何時候進行《異形化》判定。判定成功時，指定對自己持有「情感」的一名角色，將該「情感」變為相反屬性。此效果一次劇本只能使用兩次。此長所如果是隱忍血統或者是其下位流派修得時，必要功績點減半。"],desc:["以自身意志，拓展出角、翅膀等不該存在人類身上的器官。"]},
{name:["時之旅人"],category:"benefit",exp:[6],restrict:[],effect:["修得此背景時，若劇本規章為「戰國篇」則從六大流派或其下位流派中選擇一個流派，為「現代篇」則從古流流派中選擇一個流派。然後，從該流派的流派忍法中選擇2個忍法。此背景的持有者在製作角卡和重置時，可以特例修得該忍法。"],desc:["從過去或未來漂流至現在的時間漂流者。"]},
{name:["預知夢"],category:"benefit",exp:[6],restrict:[],effect:["劇本開始時，選擇1個「人格面具」或「謎團」，看到其【真實】一次。選擇「人格面具」時，指定該角色為目標，看該角色持有的「人格面具」的【真實】，是隨機決定的。此效果看到的【真實】禁止記錄，不能成為公開情報，也不會觸發「人格面具」的公開效果或「謎團」的自動解除。此背景持有者不能再確認該情報，如果想再確認就要用通常規則的情報判定執行。"],desc:["偶爾會看見的預知夢。"]},
{name:["双子"],category:"benefit",exp:[7],restrict:[],effect:["每個劇本開始時，選擇任意3個自己可以修得的攻擊、輔助忍法。劇本中任何時候一次，將自己修得的3個忍法改為未修得，特例修得劇本開始時選擇的忍法。"],desc:["無論身心靈皆與自己相同的雙生子。"]},
{name:["殘忍"],category:"benefit",exp:[7],restrict:[],effect:["對死亡時的「最後一擊」進行迴避判定時，有+2修正。此外，此角色使用死亡時的「最後一擊」對目標進行攻擊時，目標迴避判定有-2修正。"],desc:["從十數年前忍世發生的「大戰」中倖存。該戰爭有無數的中忍至上忍參戰，但絕大多數已然死去。你從那場戰爭之中，學到了抱持死亡覺悟的忍者有多麼恐怖。"]},
{name:["無意的詛咒"],category:"benefit",exp:[8],restrict:[],effect:["劇本開始時，選擇任意1種「情感」，任何角色對自己獲得該「情感」時，受到1點集團戰傷害。"],desc:["會令對自己抱有思念的人物遭遇不幸的詛咒。"]},
{name:["渡來人之血"],category:"benefit",exp:[8],restrict:[],effect:["你修得【搖音】，該【搖音】不包括在階級、忍法修得數的限制上。任何人對你的「奧義」進行看破判定成功時，該「奧義」的「情報」不會發生情報共有，只有識破判定成功者能獲得該「奧義」的「情報」。但是，對此角色進行的識破判定會有+2修正。"],desc:["擁有異世界居民「渡來人」的血脈，可以使用與這個世界不同的法則。以該法則發動的奇妙奧義，對忍者來說理解十分困難。"]},
{name:["破幻之瞳"],category:"benefit",exp:[9],restrict:[],effect:["劇本開始時，選擇任意1個「奧義」種類。對持有該效果的「奧義」看破判定成功時，劇本結束前該「奧義」都不能使用（只有被看破的角色不能使用）。"],desc:["具有能無效化任何忍法的眼睛。"]},
{name:["宗家"],category:"benefit",exp:[9],restrict:[],effect:["從自己流派的秘傳忍法中修得忍法時，可以學比自己當下階級高1階級的忍法。此效果視為特例修得。"],desc:["出身於名門，繼承了過往傑物名號的菁英忍者。"]},
{name:["預言之子"],category:"benefit",exp:[10],restrict:[],effect:["戲劇場景時，可以在擲骰前宣告，使自己進行的判定自動成功。此效果一次劇本只能使用一次。"],desc:["被預言將成為「忍神」的人物。為了達成預言，被施以了許多英才教育。"]},
{name:["長命"],category:"benefit",exp:[10],restrict:[],effect:["獲得1個追加特技。此外，規章為「現代篇」時，可以使用「戰國篇」的角色。"],desc:["持有比人類還要長久的壽命，並將許多歲月奉獻給忍者修行。"]},
{name:["魔法才能"],category:"benefit",exp:["10","20","30"],restrict:[],effect:["修得1個以上「妖術」分野的特技才能修得、使用此背景。可以使用「魔法」。但是，此背景的「魔法」受到「奧義」的使用限制。在修得此背景時，必須選擇要使用的效果，且消耗的必要功績點會影響到可使用的效果數量，10點一種、20點二種、30點四種。"],desc:["受過魔法訓練的人物。"]},
{name:["師匠"],category:"benefit",exp:["10","20","40"],restrict:[],effect:["修得此背景時，選擇一個特定流派，製作該流派的NPC。該角色為你的師匠。消耗的必要功績點影響到師匠的階級，10點為上忍、20點為上忍頭、40點為頭領。劇本中，師匠能在主要階段出場一次，並在該場景將其當作從者使用（但是，師匠的忍具不能讓渡給任何人）。"],desc:["具有能稱為師傅的人。"]},
{name:["妖魔的爪痕"],category:"benefit",exp:[1],restrict:["taima"],effect:["一個劇本一次，在任何時機，對該劇本的妖魔獲得「殺意」的「情感」。如果已經有其他感情，改變成「殺意」。"],desc:["過去被妖魔殺掉了重要的人。"]},
{name:["神秘的"],category:"benefit",exp:[1],restrict:["taima"],effect:["對此背景的持有者進行情報判定時有-1修正。"],desc:["私生活完全被謎團所包覆。"]},
{name:["黑之書庫"],category:"benefit",exp:[1],restrict:["taima"],effect:["對妖魔進行情報判定時有+1修正。"],desc:["持有關於妖魔的許多知識。"]},
{name:["護符"],category:"benefit",exp:[2],restrict:["taima"],effect:["使用神通丸時，擲骰的結果有+1修正。"],desc:["具有製作特殊護符的技術。"]},
{name:["故買屋"],category:"benefit",exp:[2],restrict:["taima"],effect:["可以將打倒的妖魔屍體當作「戰利品」。如果此角色劇本結束時獲得妖魔屍體，消耗它，獲得1點功績點。"],desc:["有能交易妖魔肉體的管道。"]},
{name:["魔人"],category:"benefit",exp:[3],restrict:["taima"],effect:["可以嘗試妖魔化。此長所如果是隱忍血統修得時，必要功績點為0。"],desc:["流有妖魔之血，或以妖術將妖魔之力附加人身。"]},
{name:["食汙者"],category:"benefit",exp:[3],restrict:["taima"],effect:["為自己每個持有的妖魔武器得到一個「汙染」專用的追加生命力格子，該格子只能在受到「汙染」時使用。此外，如果失去格子對應的妖魔武器，必須將上面的「汙染」轉移到其他非追加的生命力格子。"],desc:["承受汙染時，可以改用妖魔武器將汙染吞噬的特殊能力者。"]},
{name:["武器屋"],category:"benefit",exp:[4],restrict:["taima"],effect:["可以將打倒的妖魔屍體當作「戰利品」。如果此角色劇本結束時獲得妖魔屍體，消耗它，獲得一個妖魔武器（參照妖魔武器表）。"],desc:["能以妖魔肉體為素材鍛造武器，或是持有劍匠的人脈。"]},
{name:["妖魔商人"],category:"benefit",exp:[8],restrict:["taima"],effect:["劇本中一次，選擇一個妖魔武器，消耗該妖魔武器的維持功績點+1的功績點，獲得該妖魔武器。此效果只能在自己主役的戲劇場景時使用。此長所如果是鞍馬神流、比良坂機關或者是離群者修得時，必要功績點減半。"],desc:["與特殊人物持有聯繫，可買賣妖魔武器。"]},
{name:["武器庫"],category:"benefit",exp:[8],restrict:["taima"],effect:["劇本結束時，選擇一個自己持有的妖魔武器。可以不支付維持功績點，而將該妖魔武器帶入下次劇本。只能使用此效果將一個妖魔武器帶到下個劇本，要將其他的妖魔武器帶到下個劇本，仍然要支付其功績點。此長所如果是斜齒忍軍、私立御齋學園或者是其下位流派修得時，必要功績點減半。"],desc:["擁有一間特殊倉庫與管理人，可收納妖魔武器。"]},
{name:["劍豪"],category:"benefit",exp:[2],restrict:["sengoku"],effect:["此背景的持有者，在角色作成或重置時，可以特例修得鞍馬神流（不包含下位）的流派忍法。"],desc:["接受過某劍術流派的指導，習得技巧。"]},
{name:["遷移"],category:"benefit",exp:[2],restrict:["sengoku"],effect:["此背景的持有者，在角色作成或重置時，可以特例修得離群者（不包含下位）的流派忍法。"],desc:["隨著委託不同，會轉換主君與所屬。"]},
{name:["婆娑羅"],category:"benefit",exp:[2],restrict:["sengoku"],effect:["劇本中，進行行為判定的時候，可以消耗1點功績點，使該判定的達成值+1。同一個判定只能使用此效果一次。此效果可以在擲骰後使用。"],desc:["輕視權威，會喜歡華美服裝與多餘舉動的審美意識。"]},
{name:["忍器妙手"],category:"benefit",exp:[3],restrict:["sengoku"],effect:["進行指定特技為器術分野的輔助忍法判定時，大失敗值-2。此長所如果是擅長分野為器術的戰國篇角色修得時，必要功績點為0。"],desc:["接觸忍器已是經年累月。"]},
{name:["妖異之血"],category:"benefit",exp:[3],restrict:["sengoku"],effect:["修得此長所時，選擇一個隱忍血統的下位流派。在角色作成或重置時，可以特例修得該流派可能修得的忍法（包含隱忍血統的流派忍法）。此長所如果是擅長分野為妖術的戰國篇角色修得時，必要功績點為0。"],desc:["戰國時代中，有無數身持妖魔血脈之人，你也是其中一員。"]},
{name:["纏手"],category:"benefit",exp:[3],restrict:["sengoku"],effect:["造成集團戰傷害時，可以用「變調表」取代「戰國變調表」的效果。"],desc:["擅長運用奇策矇騙他人。"]},
{name:["驍將"],category:"benefit",exp:[3],restrict:["sengoku"],effect:["此背景的持有者在戰鬥中勝利時，選擇一個在此劇本中登場的角色。該角色獲得對此背景持有者的「忠誠」感情。若該角色已持有對自己的其他種類感情，將其改變成「忠誠」。"],desc:["具有魅力非凡的勇武。"]},
{name:["有角者"],category:"benefit",exp:[3],restrict:["sengoku"],effect:["進行指定特技為妖術分野的輔助忍法判定時，大失敗值-2。"],desc:["此時代的隱忍中，額頭上有角的人不在少數。"]},
{name:["傳說"],category:"benefit",exp:[4],restrict:["sengoku"],effect:["此背景只能透過消耗已達成「使命」而在劇本中死亡的角色的「死者功績點」修得。使用此背景持有者的「死者功績點」的角色，在角色作成或重置時，能特例修得此背景持有者死亡時修得的忍法。此效果所修得的忍法，在該角色階級為中忍頭以上時變為未修得。"],desc:["死僅一刻，名聲永存。其心與其技術，將會有人繼承延續。"]},
{name:["強烈的念想"],category:"benefit",exp:[1],restrict:[],effect:["自己進行感情判定大成功時，自己獲得的「情感」的種類不擲1D6，而是從「情感表」中選擇任意一個「情感」。"],desc:["可以控制自己的感情。"]},
{name:["預判"],category:"benefit",exp:[1],restrict:[],effect:["戰鬥中，自己的回合使用。選擇任意一名角色為目標。將自己持有的任意一個忍具交給目標。"],desc:["預測事態，並將必要之物給予需要之人。"]},
{name:["昇華"],category:"benefit",exp:[2],restrict:[],effect:["此背景持有者使用「最後一擊」時，對該攻擊忍法的迴避判定受到-3修正。"],desc:["在自己人生的最終釋放出漂亮的一擊。"]},
{name:["人之心"],category:"benefit",exp:[2],restrict:["taima"],effect:["此「長所」只有隱忍血統的角色才能修得。成為自己以外的忍法的目標時，不再將自己視為「修得了隱忍血統的流派忍法」。"],desc:["或許自己並非人類，但依舊持有人心。"]},
{name:["影"],category:"benefit",exp:[4],restrict:[],effect:["此背景持有者在主要階段的戰鬥中敗北時，僅有一次可以使自己既不成為勝者也不成為敗者（不能在高潮階段的戰鬥中使用）。使用此背景的效果后，此背景變為未修得狀態。"],desc:["暗地跟隨自己的影武者。非常忠誠，會在必要時犧牲護主。"]},
{name:["得意領域"],category:"benefit",exp:[5],restrict:[],effect:["修得此背景時，選擇任意一個忍法。戰鬥中，此背景持有者使用該忍法時，在該戰鬥間，對來自此角色的攻擊的迴避判定受到-1修正。此背景的效果在一場戰鬥中最多使用一次，當變更戰場的效果發生時將被無效化。"],desc:["持有「領域」，可以將敵人引入其中。"]},
{name:["美味"],category:"benefit",exp:[2],restrict:[],effect:["此背景持有者，以妖魔角色為目標進行感情判定的擲骰前，消耗1點【生命力】，該感情判定自動成功。此時，由此背景持有者決定目標獲得的【感情】，且目標回復1點【生命力】。此效果在一場劇本中只能使用一次。"],desc:["你的血肉對妖魔來說十分美味，有著不可抗拒的魅力。"]},
{name:["詩才"],category:"benefit",exp:[2],restrict:[],effect:["此背景持有者可以在「平安篇」以外的規章中進行使用了「詠唱短歌」規則的感情判定。此外，修得此背景時，選擇1種平安忍法。此背景持有者「平安篇」以外的規章也能在創造角色或重置時修得該忍法。"],desc:["具有風雅詩才的人。能夠詠唱打入人心的歌謠，再如何木訥無感的人也會有所觸動。"]},
{name:["咒術兵器"],category:"benefit",exp:[3],restrict:[],effect:["修得此背景時選擇任意1個流派。此背景的持有者使用攻擊忍法，並以修得該流派忍法的角色為目標時，該迴避判定有-1修正（如果選擇六大流派時，修得下位流派的忍法的角色不會受到修正）。"],desc:["為了消滅某個流派，將肉體乃至精神都奉獻給此命運。"]},
{name:["苦勞忍"],category:"benefit",exp:[3],restrict:[],effect:["此背景持有者，在主要階段進行主要判定失敗時，紀錄該次數，在高潮階段時自己可以重擲同次數的骰（最多3次）。"],desc:["在中忍試驗和忍務上失敗過無數次。然而每次你都能成功倖存，必可將經驗活用於下一次。"]},
{name:["忍者鬥士"],category:"benefit",exp:[3],restrict:[],effect:["此背景持有者在「GP篇」以外的規章裡，主要階段時在自己的場景進入戰鬥場景時可套用「忍者格鬥」規則進行戰鬥。此效果在一場劇本中只能使用一次。此外，修得此背景時，選擇1種GP忍法。此背景持有者「GP篇」以外的規章也能在創造角色或重置時修得該忍法。但該忍法只有在使用「忍者格鬥」規則的場景才視為修得，只有該場景中才能使用。"],desc:["你是一名戰鬥娛樂家，忍者鬥士。"]},
{name:["元八武眾"],category:"benefit",exp:[4],restrict:[],effect:["修得此背景時，指定自己修得的一個特技，該特技在因為生命力減少讓該分野無法使用時，依然可以使用該特技。"],desc:["該時代偉人們所集結的最強血盟「八武眾」的一員。如今你已從該血盟脫離，往日威勢不再，但你身為某領域達人的事實依然不曾改變。"]},
{name:["秘匿部署"],category:"benefit",exp:[2],restrict:["比良坂系列"],effect:["此背景持有者判定大失敗時，無效化「大失敗表」的結果。此效果一次劇本只能使用一次。"],desc:[""]},
{name:["預言"],category:"benefit",exp:[2],restrict:["比良坂系列","咎眼流","黑脛巾組"],effect:["此背景持有者，每一巡迴開始時擲1D6。骰面出現1或4時，GM選擇該巡迴1個預定發生的GM場景，並告訴角色該GM場景的發生方式和時機。當GM宣告該GM場景給角色後，此背景到劇本結束前都無法使用。"],desc:[""]},
{name:["公務員"],category:"benefit",exp:[3],restrict:["比良坂系列"],effect:["此背景的持有者，劇本開始時，獲得1個特殊忍具「錢」。此忍具可在自己進行判定後使用，該判定的達成值+1（一次判定中最多可以使用2個。若有修得《經濟力》特技，則一次判定中最多可以使用4個）。「錢」在使用之後將會消耗掉。此特殊忍具與一般忍具相同，在戲劇場景中可轉讓給其他角色，在劇本結束後將會全部失去。"],desc:[""]},
{name:["特別措置"],category:"benefit",exp:[3],restrict:["比良坂系列"],effect:["此背景的持有者，在為了守護國家利益行動時，可以重擲一次失敗的判定。由GM判斷是否符合守護國家利益的流儀，如果不符合則不能使用此背景。此效果一次劇本只能使用一次。"],desc:[""]},
{name:["咒術界"],category:"benefit",exp:[3],restrict:["常夜","醜女眾"],effect:["此背景的持有者，可以特例修得真言立川流與土御門家的流派忍法。"],desc:[""]},
{name:["出向"],category:"benefit",exp:[3],restrict:["公安隱密局","外事N課"],effect:["若為公安隱密局的角色則選擇外事N課，若為外事N課則選擇公安隱密局，特例修得該流派的一種忍法。"],desc:[""]},
{name:["加持祈禱"],category:"benefit",exp:[4],restrict:["非比良坂系列"],effect:["此背景的持有者，不是比良坂機關的角色也可以修得、使用[惟神]。"],desc:[""]},
{name:["純血"],category:"benefit",exp:[4],restrict:[],effect:["有特例修得忍法的角色對此背景的持有者的攻擊進行迴避判定時，每有一個特例修得忍法便有-1修正（最大-3）。此長所如果是比良坂機關或者是其下位流派修得時，必要功績點減半。"],desc:[""]},
{name:["入院"],category:"benefit",exp:[4],restrict:["比良坂系列"],effect:["此背景的持有者的主役戲劇場景時，可以宣告入院。入院時，該場景間的回復判定自動成功。此外，持有自己的「居所」的角色全員必須進行《調查術》判定。失敗時失去該「居所」。此效果一次劇本只能使用一次。此長所如果是麝香會綜合醫院的角色修得時，必要功績點減半。"],desc:[""]},
{name:["日本國現報理非怪異記"],category:"benefit",exp:[4],restrict:["比良坂系列"],effect:["此背景的持有者，該劇本間在遭遇妖魔時可以進行《暗號術》的補助判定。指定特技判定成功時，GM將說出該妖魔所有修得的忍法。"],desc:[""]},
{name:["氏神"],category:"benefit",exp:[5],restrict:["可修得惟神者"],effect:["修得此背景時，選擇一種自己未修得的惟神效果，並從中選擇一個特技（該效果指定的特技或《憑依術》）。此背景的持有者修得惟神時，可以進行《憑依術》的補助判定。指定特技判定成功時，該劇本間，將自己惟神的效果和指定特技變更為選擇的效果和指定特技。"],desc:[""]},
{name:["協力者"],category:"benefit",exp:[6],restrict:[],effect:["此背景的持有者的主役戲劇場景時，可以不占主要行動，對劇本中登場的NPC或組織的「秘密」進行一次情報判定。此效果一場劇本只能使用一次。此長所如果是比良坂機關或者是其下位流派修得時，必要功績點-2。"],desc:[""]},
{name:["感情缺乏"],category:"flaw",exp:[1],restrict:[],effect:["修得此背景時，選擇任意1種感情。此背景的持有者，無法用感情判定獲得該「情感」。如果「感情表」擲出對應的骰值，必須選擇反面的「情感」。"],desc:["缺失了一部分感情。"]},
{name:["士道"],category:"flaw",exp:[1],restrict:[],effect:["主要階段戰鬥時，如果該戰鬥的參加者希望一對一，則自己無法戰鬥亂入。但是如果結果成為一對二以上的戰鬥，就可以進行戰鬥亂入。"],desc:["在戰鬥中追求某種浪漫。雖然身為忍者來說很不好，但就是不喜歡以眾欺寡的戰鬥。"]},
{name:["有名"],category:"flaw",exp:[2],restrict:[],effect:["任何人對此背景的持有者進行獲得「秘密」、「居所」的情報判定失敗時，進行情報判定的玩家可以重擲一次骰子。"],desc:["在忍者的世界中為眾所知。"]},
{name:["叛忍"],category:"flaw",exp:[2],restrict:[],effect:["修得此背景時，指定一個自己現在以外的流派。該流派的角色獲得自己的「居所」時，自己受到1點射擊戰傷害。"],desc:["從原本的流派叛離至當前流派。"]},
{name:["邪戀"],category:"flaw",exp:[2],restrict:[],effect:["修得此背景時，指定任意1名角色。如果對該角色以外的的角色獲得「愛情」、「狂信」的「情感」時，此背景的持有者受到1點射擊戰傷害。"],desc:["被可怕的人愛上了。該人物嫉妒心強烈，不允許任何人對你投注關愛。"]},
{name:["異端"],category:"flaw",exp:[2],restrict:[],effect:["自己進行感情判定時有-2修正。此「弱點」如果是斜齒忍軍或者是其下位流派修得時，額外獲得1點功績點。"],desc:["將人生投注在忍法研究與開發。對於交朋友、憎恨某人這種事，都認為是既不合理又缺乏效率的舉動。"]},
{name:["武人"],category:"flaw",exp:[2],restrict:[],effect:["此背景的持有者在進行《遁走術》的特殊迴避判定或是輪結束時，不能依照自己的意志從戰場脫落，必須對戰鬥中的角色持有正向「情感」時，才可以選擇脫落。此「弱點」如果是鞍馬神流或者是其下位流派修得時，額外獲得1點功績點。"],desc:["在成為忍者前是名武人。不喜歡輕易分出勝負。"]},
{name:["反覆無常"],category:"flaw",exp:[2],restrict:[],effect:["此背景的持有者在對任何人進行感情判定，獲得感情時，該「情感」的的正負向是隨機決定的。此「弱點」如果是離群者或者是其下位流派修得時，額外獲得1點功績點。"],desc:["心意翻轉不定，很難摸透真心，連自己也不清楚自己在想什麼。"]},
{name:["諦觀"],category:"flaw",exp:[2],restrict:[],effect:["此背景的持有者，即使在高潮戰進入回想場景，也不能選擇判定+3或增加傷害的效果。此「弱點」如果是比良坂機關或者是其下位流派修得時，額外獲得1點功績點。"],desc:["由於見過太多死亡與災厄，心頭已不會再因此晃動。過往的記憶與經驗，對你來說只是一種情報。"]},
{name:["純心"],category:"flaw",exp:[2],restrict:[],effect:["此背景的持有者，如果沒有減少自己1點生命力，就無法進行負向「情感」修正。此「弱點」如果是私立御齋學園或者是其下位流派修得時，額外獲得1點功績點。"],desc:["作為忍者，性格實在太過天真。非常相信人心，不想去向別人施放惡意。"]},
{name:["舊怨"],category:"flaw",exp:[2],restrict:[],effect:["此背景的持有者，無法透過「情報共有」獲得自己流派或者是其下位流派以外角色的「情報」。但是如果在發生「情報共有」的時間點時，獲得情報的角色進行《傳達術》判定成功，便可發生「情報共有」。此「弱點」如果是隱忍血統或者是其下位流派修得時，額外獲得1點功績點。"],desc:["過往的歷史有許多苦痛，無法忘卻。不論怎樣都無法對他流派的人敞開心扉。"]},
{name:["死者之聲"],category:"flaw",exp:[2],restrict:[],effect:["此背景的持有者，在戲劇場景中除了自己以外，沒有任何玩家角色出現時，該場景所有判定有-1修正。"],desc:["可以聽見對生者吶喊詛咒的死者之聲。"]},
{name:["戰鬥狂"],category:"flaw",exp:[2],restrict:[],effect:["此背景的持有者，在自己主役進行戰鬥時，一定要使用「戰場表」隨機決定戰場。"],desc:["渴求戰鬥，常不管時間地點就發起戰鬥。"]},
{name:["冷酷心"],category:"flaw",exp:[3],restrict:[],effect:["此背景的持有者，無法得到正向「情感」修正。"],desc:["曾經背叛過許多人，或被背叛許多次。你不再相信他人的善意。"]},
{name:["政治的對立"],category:"flaw",exp:[3],restrict:[],effect:["此背景的持有者，如果沒有完成「使命」。此劇本獲得的功績點-2。"],desc:["在流派內有思想或價值觀對立的對手。他期望捉住你的痛處，決不放過任何一次失敗。"]},
{name:["一族之恥"],category:"flaw",exp:[3],restrict:[],effect:["此背景的持有者，每次劇本開始時少得到1個忍具。"],desc:["過去曾在重要的忍務失敗過，被流派中人所嫌棄，輕忽對待。"]},
{name:["侵蝕"],category:"flaw",exp:[3],restrict:[],effect:["此背景的持有者，生命力歸零時直接死亡。但如果使其歸零的為其他玩家，對方可以選擇將死亡改為行動不能。"],desc:["肉體因過於嚴酷的修行或持續的艱難忍務，已經迫近極限。"]},
{name:["目擊者"],category:"flaw",exp:[3],restrict:[],effect:["此背景的持有者，無法締結超過兩人的「情感」。如果有第三個人締結「情感」，隨機失去和其中一人的感情，將數量維持在兩人。"],desc:["曾經遭遇過被稱為「忍神」的超常存在，被奪走了自己重要的東西，無法如常生活。"]},
{name:["怠惰者"],category:"flaw",exp:[3],restrict:[],effect:["此背景的持有者修得的每個奧義，額外再追加1個「弱化」，在修得奧義時設定。"],desc:["欠缺忍者該有的緊張感，對於應該視如生命的奧義疏忽鍛鍊。"]},
{name:["不忍"],category:"flaw",exp:[3],restrict:[],effect:["和此背景的持有者在同一場景的角色，該場景結束時，獲得自己的「居所」。"],desc:["毫無該如影子般生存的自覺，不擅長隱匿與清除蹤跡。"]},
{name:["人質"],category:"flaw",exp:[4],restrict:[],effect:["此背景的持有者，劇本中一次，在主要階段中必須按照GM的指示行動（指示的內容必須為遊戲中可能的行動）。"],desc:["對自己來說很重要的人被流派當作人質。為了他，你沒有辦法自由地生存。"]},
{name:["病魔"],category:"flaw",exp:[5],restrict:[],effect:["此背景的持有者使用奧義時，必須減少1點生命力。"],desc:["病痛纏身。因使用奧義而產生強烈肉體或精神疲勞時，等同是在削減壽命。"]},
{name:["靈的不感症"],category:"flaw",exp:[1],restrict:[],effect:["妖魔對此背景的持有者使用攻擊忍法時，間隔視為-1（不會低於0）。此外，對妖魔攻擊的迴避判定有-2修正。"],desc:["對妖魔的感知力低下。"]},
{name:["劣性因子"],category:"flaw",exp:[3],restrict:[],effect:["此背景的持有者，劇本結束時不管有沒有進行妖魔化，都要進行制御判定。"],desc:["體內沉睡著無法發揮功用的妖魔因子。"]},
{name:["首代"],category:"flaw",exp:[1],restrict:["sengoku"],effect:["此背景的持有者，在戲劇場景遭遇大失敗時，除了通常的效果之外，額外受到1點集團戰傷害。"],desc:["頭顱被懸掛著賞金。"]},
{name:["過信"],category:"flaw",exp:[2],restrict:["sengoku"],effect:["此背景的持有者，在戲劇場景的所有判定大失敗值+1。"],desc:["沉溺於自己的強大，懶於編排陰謀或收集情報。"]},
{name:["滅日"],category:"flaw",exp:[3],restrict:["sengoku"],effect:["在主要階段每次巡迴結束時，擲1d6，若骰值在已經過的巡迴數以下，受到1點射擊戰傷害。"],desc:["被想消滅忍者的傢伙盯上了。是影彌勒嗎？"]},
{name:["純潔"],category:"flaw",exp:[1],restrict:[],effect:["此背景的持有者，在成為異性角色進行的感情判定的目標時，自己獲得的「感情」種類將不是骰1D6決定，而是由進行感情判定的該角色從「感情表」中決定。"],desc:["無法應對異性，很容易隨對方起舞。"]},
{name:["恐懼的"],category:"flaw",exp:[1],restrict:["taima"],effect:["此背景持有者受到來自隱忍血統的流派忍法或妖魔忍法的傷害時，追加受到1點射擊戰傷害。"],desc:["害怕著非人存在。"]},
{name:["遮斷"],category:"flaw",exp:[2],restrict:[],effect:["此背景持有者進行情報判定時受到-2修正。"],desc:["視覺、聽覺等一部分的感官無法正常作用。"]},
{name:["不健康"],category:"flaw",exp:[2],restrict:[],effect:["此背景持有者不能通過任何效果獲得追加的「生命力」。"],desc:["極端的肥胖或纖瘦。"]},
{name:["闇之種族"],category:"flaw",exp:[3],restrict:[],effect:["此背景持有者在白天的場景中登場時，所有判定受到-1修正。場景是否為白天由主役玩家決定（GM場景時由GM決定）。"],desc:["畏懼太陽光，在白天活動受限。"]},
{name:["惡魔附身"],category:"flaw",exp:[4],restrict:[],effect:["劇本結束時，如果自己擁有正面「情感」的角色達成了使命的話，此背景持有者的「使命」（若存在則為「真正的使命」）視為未達成。但若此時自己擁有正面「情感」的角色的生命力為0點的話，此背景的效果將被無效化。"],desc:["具有必須傷害喜歡自己之人的宿命。"]},
{name:["獨自設定"],category:"flaw",exp:[2],restrict:[],effect:["此背景持有者，在劇本開始時準備自己專用的Handout，並在背面寫下【機密】。此背景持有者被獲得自己【機密】的角色作為攻擊忍法的目標時，該迴避判定將帶有-1修正。基本上【機密】的處理方式與【秘密】相同。某人發生獲得此背景持有者【秘密】的效果時，可改為獲得【機密】。"],desc:["你持有連GM都不知曉的秘密設定。"]},
{name:["鼬的血族"],category:"flaw",exp:[2],restrict:[],effect:["此背景持有者，無法在第一巡進行感情判定。此外，在該劇本中，若自己獲得【秘密】時一次也沒有說過「什麼……」「原來如此，是這麼一回事啊」「果然啊」，則在「獲得功績點」時將不視為滿足「角色扮演」的條件。"],desc:["繼承了生存已久的鼬型妖怪的血脈。受其影響，性格變得容易對情報產生訝異。"]},
{name:["研究對象"],category:"flaw",exp:[2],restrict:["exclude-sengoku"],effect:["修得此背景時，從六大流派中選擇一種。該流派及其下位流派的角色在此背景持有者使用奧義時，進行的識破判定及看破判定將獲得+1修正。"],desc:["被忍世之中的某位有力者看上，一舉一動都被監視著。"]},
{name:["偽物"],category:"flaw",exp:[2],restrict:[],effect:["沒有獲得此背景持有者【秘密】的角色，在高潮階段開始時可獲得對於此背景持有者任意屬性的負面【感情】。"],desc:["出現了跟你很相像的假冒者，他所做的壞事被記在你的頭上。"]},
{name:["大恩"],category:"flaw",exp:[3],restrict:[],effect:["修得此背景時，選擇任意一名角色。此背景持有者不能對該角色以外的人使用感情修正的正修正。"],desc:["你因過去的某起事件丟了小命。最近，你終於復甦過來，並對使你得救的人物有強烈的報恩念頭。"]},
{name:["時代落後"],category:"flaw",exp:[3],restrict:["修得古流忍法者"],effect:["此背景持有者成為六大流派及其下位流派所屬的攻擊忍法目標時，該迴避判定將帶有-1修正。"],desc:["因為生活於情報封閉的環境，或是從過去穿越而來，你對現代的忍法所知不多。"]},
{name:["垂直劃分"],category:"flaw",exp:[1],restrict:[],effect:["此背景的持有者，在此劇本間違逆比自己階級高的同流派角色的命令時，功績點減少1點（下位流派違逆上位流派時也算入）。此效果不能累積。此弱點如果是比良坂機關或者是其下位流派修得時，額外獲得1點功績點。"],desc:[""]},
{name:["副業禁止"],category:"flaw",exp:[2],restrict:["比良坂系列"],effect:["此背景的持有者，不能使用忍法或背景的效果，而變得可以使用、特例修得比良坂機關或者是其下位流派以外的忍法（若在已修得其他忍法、背景時修得此背景，該忍法、背景變成未修得）。"],desc:[""]},
{name:["文書工作"],category:"flaw",exp:[2],restrict:["比良坂系列"],effect:["此背景的持有者，在一個戲劇場景中進行超過3次以上的判定時，第3次以後的判定大失敗值+1。"],desc:[""]},
{name:["苦情"],category:"flaw",exp:[2],restrict:["比良坂系列"],effect:["此背景的持有者的主役戲劇場景時，如果判定大失敗則功績點減少1點。此效果不能累積。"],desc:[""]},
{name:["死亡之兆"],category:"flaw",exp:[3],restrict:["常夜"],effect:["此背景的持有者，劇本開始時生命力減少1點。"],desc:[""]},
{name:["無臉女"],category:"flaw",exp:[3],restrict:["醜女眾"],effect:["此背景的持有者，進行感情判定有-2修正。可以無視-2修正進行感情判定，但此時將追加「此劇本間讓該感情判定的目標【生命力】歸0至少一次」的使命。"],desc:[""]},
{name:["疑心暗鬼"],category:"flaw",exp:[3],restrict:["公安隱密局"],effect:["此背景的持有者，進行感情判定時不能選擇自己未獲得【秘密】的角色為目標。"],desc:[""]},
{name:["毒之吐息"],category:"flaw",exp:[3],restrict:["麝香會綜合病院"],effect:["對此背景的持有者進行感情判定，且獲得正向【感情】時，受到1點集團戰傷害。"],desc:[""]},
{name:["內務調查"],category:"flaw",exp:[3],restrict:["外事N課"],effect:["此背景的持有者，在收受比良坂機關或者是其下位流派以外的角色的忍具時，隨機選擇自己修得的一個忍法，如果是外事N課的流派忍法，劇本間該忍法變為不可使用（此效果不會讓二個以上的忍法無法使用）。"],desc:[""]},
{name:["家族"],category:"flaw",exp:[3],restrict:[],effect:["在主要階段時，對此背景的持有者進行戰鬥並成為勝者時，可以選擇「將其親人作為人質」作為戰果。該劇本間，此背景變為【人質】。此弱點如果是比良坂機關或者是其下位流派修得時，額外獲得1點功績點。"],desc:[""]},
{name:["派閥"],category:"flaw",exp:[4],restrict:[],effect:["此背景的持有者，在自己主役戲劇場景進行情報判定時，該場景結束時從自己得意分野隨機選擇一個特技。進行指定特技判定，失敗則受到1點集團戰傷害。此弱點如果是比良坂機關或者是其下位流派修得時，額外獲得1點功績點。"],desc:[""]},
{name:["國家的犧牲者"],category:"flaw",exp:[4],restrict:["比良坂系列"],effect:["此背景的持有者判定成功時，GM可以令該判定重擲一次。此效果在一場劇本中只能使用一次。"],desc:[""]},
];
