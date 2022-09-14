exports.buildList = function (selection, source) {
	var items = [];
	if (selection)
		selection.forEach(function (item) {
			const found = source.find((x) => x.id == item);
			if (found != null) items.push(found);
		});
	return items;
}

exports.mapProject = function (item) {
	return {
		id: item.data.id,
		title: item.data.title,
		position: item.data.position,
		url: item.data.url,
		image: {
			webp:
				"https://cloud.squidex.io/api/assets/garpunkaldev/" +
				item.data.image[0] +
				"?cache=5184000&format=WEBP",
			url:
				"https://cloud.squidex.io/api/assets/garpunkaldev/" +
				item.data.image[0] +
				"?cache=5184000",
			alt: item.data.title,
		},
		sortOrder: item.data.SortOrder ?? 0,
		isHighlight: getBool(item.data.IsHighlight),
		isWinner: getBool(item.data.IsWinner),
	};
}

exports.mapExperience = function (item, company, projects, contribs) {
	return {
		id: item.data.id,
		title: company.data.title,
		job: item.data.job,
		location: item.data.location,
		logo: {
			webp:
				"https://cloud.squidex.io/api/assets/garpunkaldev/" +
				company.data.logo[0] +
				"?cache=5184000&format=WEBP",
			url:
				"https://cloud.squidex.io/api/assets/garpunkaldev/" +
				company.data.logo[0] +
				"?cache=5184000",
			background: company.data.logoBackgroundColour,
			alt: company.data.title,
		},
		url: company.data.url,
		shortUrl: company.data.shortUrl,
		from: getDate(item.data.from),
		to: getDate(item.data.to),
		isCurrent: getBool(item.data.isCurrent),
		description: item.data.description,
		hideDescription: getBool(item.data.hideDescription),
		projects: {
			title: item.data.projectsLabel,
			items: projects.map((p) => ({ name: p.data.title, url: p.data.url })),
		},
		contributions: {
			title: item.data.contributionsLabel,
			items: contribs.map((p) => ({ name: p.data.title, url: p.data.url })),
		},
		orderDate: item.data.from,
	};
}

exports.dynamicSortMultiple = function () {
  
    var props = arguments;
    return function (obj1, obj2) {
        var i = 0, result = 0, numberOfProperties = props.length;        
        while (result === 0 && i < numberOfProperties) {
            result = dynamicSort(props[i])(obj1, obj2);
            i++;
        }
        return result;
    }
}

function getDate (date) {
	if (date === null || date === undefined) {
		return null;
	} else {
		return new Date(date);
	}
}

function getBool (value) {
	return value === null || value === undefined ? false : value;
}

function dynamicSort  (property) {
    var sortOrder = 1;
    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a, b) {     
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}
