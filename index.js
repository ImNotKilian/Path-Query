// Get all data
exports.getQuery = (path) => {

	// get protocol
	var protocol = path.split("://");
	if (protocol.length <= 1) protocol = null;
	else protocol = protocol[0];
	path = path.replace(protocol + "://", "")

	// get subdomain
	var subdomain = path.split("/")[0];
	subdomain = subdomain.split(":")[0];
	subdomain = subdomain.split(".")[subdomain.split(".").length - 2]
	subdomain = path.split("." + subdomain)[0];
	if (subdomain == path) subdomain = null;
	if (subdomain != null) path = path.replace(subdomain + ".", "");

	// get domain
	var domain = path.split("/")[0];
	domain = domain.split(":")[0];
	path = path.replace(domain, "");

	//  get port
	var port = path.split("/");
	port = port[0].split(":");
	port = port[1];
	if (port == null) port = "80";
	path = path.replace(":" + port, "");

	// get paths
	if (path.startsWith("/")) path = path.substring(1);
	var paths = path.split("?")[0];
	if (paths.slice(-1) == "/") paths = paths.substring(0, paths.length - 1);
	paths = paths.split("/");

	// get variables
	var variables = path.split("?")[1];
	if (variables != null) variables = variables.split("&");
	
	// get resource
	var resource = paths[paths.length - 1];

	// extension
	var extension = resource.split(".")[1];

	// is forbidden resource?
	var forbidden = resource.startsWith(".");

	var query = {
		"protocol" : protocol,
		"subdomain" : subdomain,
		"domain" : domain,
		"port" : port,
		"paths" : paths,
		"resource" : resource,
		"extension" : extension,
		"forbidden" : forbidden,
		"variables" : variables
	}

	return query;
}

exports.getProtocol = (path) => {
	return getQuery(path).protocol;
}

exports.getSubdomain = (path) => {
	return getQuery(path).subdomain;
}

exports.getDomain = (path) => {
	return getQuery(path).domain;
}

exports.getPort = (path) => {
	return getQuery(path).port;
}

exports.getPaths = (path) => {
	return getQuery(path).paths;
}

exports.getResource = (path) => {
	return getQuery(path).resource;
}

exports.getExtension = (path) => {
	return getQuery(path).extension;
}

exports.getForbidden = (path) => {
	return getQuery(path).forbidden;
}

exports.getVariables = (path) => {
	return getQuery(path).variables;
}