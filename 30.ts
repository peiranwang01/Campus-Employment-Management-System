	function formatRegex(char: string) {
		switch (char) {
			case "*":
				return '[^:]*';
				
			case "**":
				return ".*";
				
			default:
				return `\\u{${char.charCodeAt(0).toString(16)}}`;
		}
	}

