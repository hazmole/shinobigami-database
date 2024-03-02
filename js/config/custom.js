var Config = {};

// Authenticator
Config.auth_status_key = "shinobi-auth-status";
Config.auth_password = "shinobi";

Config.navbar = [
	{ type:"link", text: "首頁", url: "index.html", style: "background:var(--color-TitleBar-bg);" },
	{ type:"folder", text: "▼ 規則速查", folderKey: "rule-ref", list: [
			{ type:"link", text: "斜齒書擴充", url: "rule-expansion-hasuba-pack.html" },
			{ type:"link", text: "御齋書擴充", url: "rule-expansion-otogi-pack.html" },
			{ type:"link", text: "隱忍書擴充", url: "rule-expansion-oni-pack.html" },

		]
	},
	{ type:"folder", text: "▼ 資料一覽", folderKey: "player-data", list: [
			{ type:"link", text: "忍法", url: "datalist-ninpo.html" },
			{ type:"link", text: "背景", url: "datalist-trait.html" },
			{ type:"link", text: "敵人", url: "datalist-enemy.html" },
		]
	},
	//{ text: "創角模擬器", url: "character-generator.html", style:"bright" },
]; 