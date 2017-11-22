function icons() {
	
}

icons.prototype.init = function() {
	this.icons = {
		'heros': {
			'hero1': {
				'down': {'loc': {'iconLoc': 0, 'stop': 0, 'leftFoot': 1, 'rightFoot': 2}, 'size': 32},
				'left': {'loc': {'iconLoc': 1, 'stop': 0, 'leftFoot': 1, 'rightFoot': 2}, 'size': 32},
				'right': {'loc': {'iconLoc': 2, 'stop': 0, 'leftFoot': 1, 'rightFoot': 2}, 'size': 32},
				'up': {'loc': {'iconLoc': 3, 'stop': 0, 'leftFoot': 1, 'rightFoot': 2}, 'size': 32}
			}
		},
		'empty': {
			'empty': {'size': 32}
		},
		'terrains': {
			'blackFloor': {'loc': 0, 'size': 32},
			'yellowWall': {'loc': 1, 'size': 32},
			'whiteWall': {'loc': 2, 'size': 32},
			'blueWall': {'loc': 3, 'size': 32},
			'starWall': {'loc': 4, 'size': 32},
			'lavaWall': {'loc': 5, 'size': 32},
			'downFloor': {'loc': 6, 'size': 32},
			'upFloor': {'loc': 7, 'size': 32},
			'cavity': {'loc': 8, 'size': 32},
			'shop1-left': {'loc': 9, 'size': 32},
			'shop1-right': {'loc': 10, 'size': 32},
			'yellowDoor': {'loc': 11, 'size': 32},
			'blueDoor': {'loc': 12, 'size': 32},
			'redDoor': {'loc': 13, 'size': 32},
			'specialDoor': {'loc': 14, 'size': 32}
		},
		'animates': {
			'star': {'loc': 0, 'size': 32},
			'lava': {'loc': 1, 'size': 32},
			'water': {'loc': 2, 'size': 32},
			'yellowDoor': {'loc': 3, 'size': 32},
			'blueDoor': {'loc': 4, 'size': 32},
			'redDoor': {'loc': 5, 'size': 32},
			'greenDoor': {'loc': 6, 'size': 32},
			'specialDoor': {'loc': 7, 'size': 32},
			'blueWallDoor': {'loc': 8, 'size': 32},
			'yellowWallDoor': {'loc': 9, 'size': 32},
			'whiteWallDoor': {'loc': 10, 'size': 32},
			'ironDoor': {'loc': 11, 'size': 32},
			'lavaDoor': {'loc': 12, 'size': 32},
			'grayLavaDoor': {'loc': 13, 'size': 32},
			'starDoor': {'loc': 14, 'size': 32},
			'mockBlueWallDoor': {'loc': 15, 'size': 32},
			'mockYellowWallDoor': {'loc': 16, 'size': 32},
			'mockWhiteWallDoor': {'loc': 17, 'size': 32},
			'iceYellowWallDoor': {'loc': 18, 'size': 32}
		},
		'npcs': {
			'man': {'loc': 0, 'size': 32},
			'woman': {'loc': 1, 'size': 32},
			'thief': {'loc': 2, 'size': 32},
			'fairy': {'loc': 3, 'size': 32},
			'magician': {'loc': 4, 'size': 32},
            'wood': {'loc': 8, 'size': 32},
			'shop1': {'loc': 10, 'size': 32},
			'shop2': {'loc': 9, 'size': 32},
            'princess': {'loc': 11, 'size': 32}
		},
        'enemys': {
            'greenSlime': {'loc': 0, 'size': 32},
            'redSlime': {'loc': 1, 'size': 32},
            'blackSlime': {'loc': 2, 'size': 32},
            'slimelord': {'loc': 3, 'size': 32},
            'bat': {'loc': 4, 'size': 32},
            'bigBat': {'loc': 5, 'size': 32},
            'redBat': {'loc': 6, 'size': 32},
            'vampire': {'loc': 7, 'size': 32},
            'skeleton': {'loc': 8, 'size': 32},
            'skeletonSoilder': {'loc': 9, 'size': 32},
            'skeletonCaptain': {'loc': 10, 'size': 32},
            'ghostSkeleton': {'loc': 11, 'size': 32},
            'zombie': {'loc': 12, 'size': 32},
            'zombieKnight': {'loc': 13, 'size': 32},
            'rock': {'loc': 14, 'size': 32},
            'slimeMan': {'loc': 15, 'size': 32},
            'bluePriest': {'loc': 16, 'size': 32},
            'redPriest': {'loc': 17, 'size': 32},
            'brownWizard': {'loc': 18, 'size': 32},
            'redWizard': {'loc': 19, 'size': 32},
            'yellowGuard': {'loc': 20, 'size': 32},
            'blueGuard': {'loc': 21, 'size': 32},
            'redGuard': {'loc': 22, 'size': 32},
            'swordsman': {'loc': 23, 'size': 32},
            'soldier': {'loc': 24, 'size': 32},
            'yellowKnight': {'loc': 25, 'size': 32},
            'redKnight': {'loc': 26, 'size': 32},
            'darkKnight': {'loc': 27, 'size': 32},
            'blackKing': {'loc': 28, 'size': 32},
            'yellowKing': {'loc': 29, 'size': 32},
            'greenKing': {'loc': 30, 'size': 32},
            'blueKnight': {'loc': 31, 'size': 32},
            'goldSlime': {'loc': 32, 'size': 32},
            'poisonSkeleton': {'loc': 33, 'size': 32},
            'poisonBat': {'loc': 34, 'size': 32},
            'steelRock': {'loc': 35, 'size': 32},
            'skeletonPriest': {'loc': 36, 'size': 32},
            'skeletonKing': {'loc': 37, 'size': 32},
            'skeletonWizard': {'loc': 38, 'size': 32},
            'redSkeletonCaption': {'loc': 39, 'size': 32},
            'badHero': {'loc': 40, 'size': 32},
            'demon': {'loc': 41, 'size': 32},
            'demonPriest': {'loc': 42, 'size': 32},
            'goldHornSlime': {'loc': 43, 'size': 32},
            'redKing': {'loc': 44, 'size': 32},
            'whiteKing': {'loc': 45, 'size': 32},
            'blackMagician': {'loc': 46, 'size': 32},
            'silverSlime': {'loc': 47, 'size': 32},
            'swordEmperor': {'loc': 48, 'size': 32},
            'whiteHornSlime': {'loc': 49, 'size': 32},
            'badPrincess': {'loc': 50, 'size': 32},
            'badFairy': {'loc': 51, 'size': 32},
            'grayPriest': {'loc': 52, 'size': 32},
            'redSwordsman': {'loc': 53, 'size': 32},
            'whiteGhost': {'loc': 54, 'size': 32},
            'poisonZombie': {'loc': 55, 'size': 32}
        },
		'items': {
			'yellowKey': {'loc': 0, 'size': 32},
			'blueKey': {'loc': 1, 'size': 32},
			'redKey': {'loc': 2, 'size': 32},
			'greenKey': {'loc': 3, 'size': 32},
			'redJewel': {'loc': 16, 'size': 32},
            'blueJewel': {'loc': 17, 'size': 32},
            'greenJewel': {'loc': 18, 'size': 32},
            'yellowJewel': {'loc': 19, 'size': 32},
            'redPotion': {'loc': 20, 'size': 32},
            'bluePotion': {'loc': 21, 'size': 32},
            'greenPotion': {'loc': 22, 'size': 32},
            'yellowPotion': {'loc': 23, 'size': 32},
			'book': {'loc': 9, 'size': 32},
			'fly': {'loc': 12, 'size': 32},
			'sword1': {'loc': 50, 'size': 32},
            'sword2': {'loc': 51, 'size': 32},
            'sword3': {'loc': 52, 'size': 32},
            'sword4': {'loc': 53, 'size': 32},
            'sword5': {'loc': 54, 'size': 32},
            'shield1': {'loc': 55, 'size': 32},
            'shield2': {'loc': 56, 'size': 32},
            'shield3': {'loc': 57, 'size': 32},
            'shield4': {'loc': 58, 'size': 32},
            'shield5': {'loc': 59, 'size': 32},
		}
	}
}

icons.prototype.getIcons = function(iconName) {
	if(iconName == undefined) {
		return this.icons;
	}
	return this.icons[iconName];
}

main.instance.icons = new icons();