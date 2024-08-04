function cameraName( label: string ) {
	let clean = label.replace( /\s*\([0-9a-f]+(:[0-9a-f]+)?\)\s*$/, '' );
	return clean || label || null;
}
