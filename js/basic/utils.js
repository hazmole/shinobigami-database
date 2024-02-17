var Utils = {};

Utils.getMotivationObj = function(text){
	for(var obj of Utils.MotivationList){
		if(obj.text === text) return obj;
	}
	return null;
}
Utils.MotivationList = [
	{ text: "凶", info: "為了破壞社會或自身而爭鬥，將崩壞捲入其中。" },
	{ text: "律", info: "無法忍受矛盾與弱勢，為了導正此現象而戰。" },
	{ text: "我", info: "為了得到金錢、名譽、自己的理想、安全而戰。" },
	{ text: "情", info: "為了守護自己身旁所愛之人而戰。" },
	{ text: "忠", info: "和自己的流派理念或人物共感，為其理念而戰。" },
	{ text: "和", info: "為了大多數人幸福的未來，尋找互相契合的道路。" },
];

Utils.SkillTable = [
	{
		text: "器術",
		list: [
			{ text: "絡繰術" },
			{ text: "火術" },
			{ text: "水術" },
			{ text: "針術" },
			{ text: "藏兵術" },
			{ text: "衣裝術" },
			{ text: "繩術" },
			{ text: "登術" },
			{ text: "拷問術" },
			{ text: "壞器術" },
			{ text: "掘削術" },
		],
	},
	{
		text: "體術",
		list: [
			{ text: "騎乘術" },
			{ text: "砲術" },
			{ text: "手裏劍術" },
			{ text: "手練" },
			{ text: "身體操術" },
			{ text: "步法" },
			{ text: "走法" },
			{ text: "飛術" },
			{ text: "骨法術" },
			{ text: "刀術" },
			{ text: "怪力" },
		],
	},
	{
		text: "忍術",
		list: [
			{ text: "生存術" },
			{ text: "潛伏術" },
			{ text: "遁走術" },
			{ text: "盜聽術" },
			{ text: "腹語術" },
			{ text: "隱形術" },
			{ text: "變裝術" },
			{ text: "香術" },
			{ text: "分身術" },
			{ text: "隱蔽術" },
			{ text: "第六感" },
		],
	},
	{
		text: "謀術",
		list: [
			{ text: "醫術" },
			{ text: "毒術" },
			{ text: "陷阱術" },
			{ text: "調查術" },
			{ text: "詐術" },
			{ text: "對人術" },
			{ text: "遊藝" },
			{ text: "色誘術" },
			{ text: "傀儡術" },
			{ text: "流言術" },
			{ text: "經濟力" },
		],
	},
	{
		text: "戰術",
		list: [
			{ text: "兵糧術" },
			{ text: "鳥獸術" },
			{ text: "野戰術" },
			{ text: "地利" },
			{ text: "意氣" },
			{ text: "用兵術" },
			{ text: "記憶術" },
			{ text: "見敵術" },
			{ text: "暗號術" },
			{ text: "傳達術" },
			{ text: "人脈" },
		],
	},
	{
		text: "妖術",
		list: [
			{ text: "異形化" },
			{ text: "召喚術" },
			{ text: "死靈術" },
			{ text: "結界術" },
			{ text: "封術" },
			{ text: "言靈術" },
			{ text: "幻術" },
			{ text: "瞳術" },
			{ text: "千里眼" },
			{ text: "憑依術" },
			{ text: "咒術" },
		],
	},
];

Utils.getClanObj = function(clanText){
	for(var clanObj of Utils.ClanList){
		if(clanObj.text === clanText) return clanObj;

		for(var subclanObj of clanObj.subclan){
			if(subclanObj.text === clanText) return subclanObj;
		}
	}
	return null;
}
Utils.ClanList = [
	{
		key: "clan-斜齒忍軍",
		text: "斜齒忍軍", shorten: "斜齒",
		style: "hasuba",
		restrict: "",
		guidance: "收集其他流派的奧義。／開發新的忍法並解開妖魔的謎團（退魔篇）。",
		subclan: [
			{ 
				text: "鍔鑋組",
				restrict: "修得忍法【機忍】",
				guidance: "不受感情左右進行任務。",
			},
			{ 
				text: "大槌群",
				restrict: "修得特技《經濟力》",
				guidance: "有效使用忍具。",
			},
			{ 
				text: "指矩班",
				restrict: "修得特技《調查術》",
				guidance: "收集其他流派的奧義。",
			},
			{ 
				text: "御釘眾",
				restrict: "修得特技《千里眼》或《咒術》",
				guidance: "不干涉歷史流動。",
			}
		],
	},
	{
		key: "clan-鞍馬神流",
		text: "鞍馬神流", shorten: "鞍馬",
		style: "kurama",
		restrict: "",
		guidance: "阻止忍神復活。／從妖魔的手中守護表世界（退魔篇）。",
		subclan: [
			{ 
				text: "迴鴉",
				restrict: "修得忍法【陽炎】",
				guidance: "打倒「忍者之世」的搗亂者。",
			},
			{ 
				text: "銃劍",
				restrict: "修得特技《砲術》",
				guidance: "一人戰勝多數敵人。",
			},
			{ 
				text: "魔王流",
				restrict: "修得任意妖術分野特技",
				guidance: "殺掉魔物。",
			},
			{ 
				text: "蓮華王拳",
				restrict: "修得特技《繩術》或《骨法術》",
				guidance: "討伐妖魔，守護弱者。",
			},
			{ 
				text: "密藏番",
				restrict: "修得特技《生存術》或《陷阱術》或《封術》",
				guidance: "不讓異界遺物交由他流派或世俗的權力者掌控。",
			},
		],
	},
	{
		key: "clan-離群者",
		text: "離群者", shorten: "離群",
		style: "lostone",
		restrict: "",
		guidance: "不受任何人束縛，為自己的意志而戰。",
		subclan: [
			{ 
				text: "夜顏",
				restrict: "修得特技《隱形術》",
				guidance: "殺掉委託目標。",
			},
			{ 
				text: "NO.9",
				restrict: "隨劇本發展而脫離自己流派的角色",
				guidance: "探索與【忍世】關聯的動向。",
			},
			{ 
				text: "世界忍者聯合",
				restrict: "",
				guidance: "將自己的實力在【忍世】中宣揚出去。",
			},
			{ 
				text: "影繪座",
				restrict: "修得特技《傀儡術》或《幻術》",
				guidance: "不受任何人拘束，為自己的意志而戰。",
			},
			{ 
				text: "不知火",
				restrict: "修得特技《火術》或《死靈術》",
				guidance: "不受任何人拘束，為自己的意志而戰。",
			},
			{ 
				text: "咎眼流",
				restrict: "修得特技《瞳術》",
				guidance: "不受任何人拘束，為自己的意志而戰。",
			},
			{ 
				text: "不來梅",
				restrict: "要是忍獸。修得任意體術分野特技",
				guidance: "找到配得上自己的人。",
			},
		],
	},
	{
		key: "clan-比良坂機關",
		text: "比良坂機關", shorten: "比良坂",
		style: "hirasaka",
		restrict: "",
		guidance: "守護日本的國家利益。",
		subclan: [
			{ 
				text: "常夜",
				restrict: "修得特技《死靈術》、性別為女性",
				guidance: "保護死者們的安眠。",
			},
			{ 
				text: "醜女眾",
				restrict: "性別為女性",
				guidance: "不能輸給男性。",
			},
			{ 
				text: "公安隱密局",
				restrict: "修得忍法【沉默】",
				guidance: "守護日本的國家利益。",
			},
			{ 
				text: "麝香會綜合醫院",
				restrict: "修得特技《毒術》或《色誘術》",
				guidance: "平等地賦予愛與死。",
			},
			{ 
				text: "外事N課",
				restrict: "修得體術、忍術分野中的各一個特技",
				guidance: "阻絕他國干預日本。",
			},
		],
	},
	{
		key: "clan-私立御齋學園",
		text: "私立御齋學園", shorten: "御齋",
		style: "otogi",
		restrict: "",
		guidance: "探察別人的秘密。／幫助受到妖魔之力所苦的人（退魔篇）。",
		subclan: [
			{ 
				text: "特命臨時教職員派遣委員會",
				restrict: "修得特技《傳達術》",
				guidance: "將某人引導到正確的方向。",
			},
			{ 
				text: "御齋學園學生會",
				restrict: "",
				guidance: "依照御齋學園學生們的需要行動。",
			},
			{ 
				text: "私立多羅尾女學院",
				restrict: "修得特技《色誘術》",
				guidance: "將男性玩弄在股掌間。",
			},
			{ 
				text: "舊校舍管理委員會",
				restrict: "修得特技《結界術》或《封術》",
				guidance: "守護舊校舍。",
			},
		],
	},
	{
		key: "clan-隱忍血統",
		text: "隱忍血統", shorten: "隱忍",
		style: "oniblood",
		restrict: "",
		guidance: "得到復活忍神的相關情報。／用妖魔之力變革世界（退魔篇）。",
		subclan: [
			{ 
				text: "土蜘蛛",
				restrict: "修得特技《鳥獸術》",
				guidance: "痛擊現今政府。",
			},
			{ 
				text: "血社",
				restrict: "修得特技《死靈術》或《異形化》或《水術》",
				guidance: "尋找有才能的人當夥伴。",
			},
			{ 
				text: "凶尾",
				restrict: "修得特技《異形化》",
				guidance: "有尊嚴的活著。",
			},
			{ 
				text: "長耳",
				restrict: "修得特技《遊藝》或《言靈術》",
				guidance: "回到異界的故鄉。",
			},
		],
	}
]

/*  */
function CopyToClipboard(evt, text){
	navigator.clipboard.writeText(text);

	var x = (evt.clientX + 15);
	var y = (evt.clientY - 5);

	$('<div id="CopyMsg"></div>')
		.appendTo("body")
		.css("top",  y+"px")
		.css("left", x+"px")
		.fadeIn(200)
		.fadeOut(200, function() {
      		$(this).remove(); 
    	});
}

/* Expand Method */
Array.prototype.last = function(){
    return this[this.length - 1];
};
String.prototype.fmt = function(){
	return this.replace(/[\t]/g, '')
}
Function.prototype.bindAppend = function(context) {
    var func = this;
    var args = [].slice.call(arguments).slice(1);
    return function() {
        return func.apply(context, [].slice.call(arguments).concat(args));
    }
}