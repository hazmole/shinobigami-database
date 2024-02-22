class ArticleParser {
	static Build(elemQuery, doc) {
		Utils.BlockUI();
		setTimeout(function() {
			const rootElem = $(elemQuery);
			rootElem.append(`<div class="Articles"></div>`);
			rootElem.append(`<div><div class="QuickNav"></div></div>`);

			rootElem.find(".Articles").append(ArticleParser.Parse(doc).join(""));
			rootElem.find(".QuickNav").append(parseQuickNav(doc).join(""));
			Utils.UnblockUI();
		}, 0);
	}

	static Parse(doc) {
		var outputArr = [];
		var depth = 1;

		(doc).forEach( entry => {
			outputArr.push( this.handleEntry(entry, depth) );
		});

		return outputArr;
	}

	static handleEntry(entry, depth) {
		switch(typeof entry){
			case "string": return this.handleString(entry);
			case "object":
				switch(entry.type){
					case "flex":    return this.handleFlex(entry, depth);
					case "section": return this.handleSection(entry, depth);
					case "list":    return this.handleList(entry, depth);
					case "table":   return this.handleTable(entry, depth);
					case "image":   return this.handleImage(entry);
					case "sidebar": return this.handleSidebar(entry, depth);
					case "note":    return this.handleNote(entry);
					default:
						console.error("Unknown entry type!", entry.type);
						return "";
				}
			default:
				console.error("Unknown entry!", entry);
				return "";
		}
	}

	//====================
	static handleString(item) {
		return `<p>${item.replace(/\n/g, '<br/>')}</p>`;
	}
	static handleImage(item) {
		// ReqField: url, (style)
		return `<img src=${item.url} style="${item.style}"/>`;
	}
	static handleNote(item) {
		// ReqField: text
		return `<p class="note">${item.text}</p>`;
	}
	static handleSidebar(item, depth) {
		// ReqField: entries
		var ret = [];
		for(var entry of item.entries){
			ret.push( this.handleEntry(entry, depth+1) );
		}
		return `<div class="sidebar">${ret.join('')}</div>`
	}
	static handleFlex(item, depth) {
		// ReqField: entries
		var ret = [];
		for(var entry of item.entries){
			ret.push( this.handleEntry(entry, depth+1) );
		}
		return `<div class="flexRow">${ret.join('')}</div>`;
	}
	static handleList(item, depth) {
		// ReqField: entries
		var ret = [];
		for(var entry of item.entries){
			ret.push(`<li>${this.handleEntry(entry, depth+1)}</li>`);
		}
		return `<ul>${ret.join('')}</ul>`;
	}
	static handleTable(item, depth) {
		// ReqField: (caption), rows, colStyles, (bodyStyle), (bodyStyle)
		var rowArr = [];
		var columeCount = item.colStyles.length;
		var rowCount = item.rows.length;

		if(item.caption){
			rowArr.push(`<tr><th class="caption" colspan="${columeCount}">${item.caption}</th></tr>`);
		}
		item.rows.forEach( (row, rIdx) => {
			if(rIdx==0 && row.length==1 && row[0]=="") return ;

			const tag = (rIdx == 0)? "th": "td";

			var cellArr = [];
			row.forEach( (cell, cIdx) => {
				var cStyle = item.colStyles[cIdx];
				cellArr.push(`<${tag} style="${cStyle}">${this.handleEntry(cell, depth+1)}</${tag}>`);
			});

			rowArr.push(`<tr>${cellArr.join('')}</tr>`);
		});

		return `<div class="dicTableOuter ${item.bodyClass}">
							<table class="docTable" style="${item.bodyStyle}">${rowArr.join('')}</table>
						</div>`;
	}
	static handleSection(item, depth) {
		// ReqField: (title), (entries)
		var ret = [];
		if(item.title != null){
			ret.push(this.getTitleElem(item.title, depth));
		}
		for(var entry of item.entries){
			ret.push(this.handleEntry(entry, depth+1));
		}
		
		var section = ret.join('');
		if(depth==1) return `<div class="section">${section}</div>`;
		else 				 return section;
	}


	//====================
	static getTitleElem(txt, depth){
		switch(depth){
		case 1: return `<h2 id="tag_${txt}">${txt}</h2>`;
		case 2: return `<h3>${txt}</h3>`;
		case 3: return `<h4>${txt}</h4>`;
		default:
			return `<h5>${txt}</h5>`;
		}
	}
}



function parseQuickNav(doc){
	var arr = doc.map( obj => obj.title ).filter( txt => txt!=null );
	return arr.map(txt=>`<div style="margin-bottom:5px;handleEntry"><a href="#tag_${txt}">${txt}</div>`);
}