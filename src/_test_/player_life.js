export function levelHealth(level) {

	if (level.health > 50) {
		return 'healthy';
	}
	if (level.health < 15) {
		return "critical";
	} else {
		return 'wounded';

	}
}
