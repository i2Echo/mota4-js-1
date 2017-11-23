function maps() {

}

maps.prototype.init = function () {

    var map_txt = [
        [
            [4, 4, 4, 4, 4, 1, 87, 1, 4, 4, 4, 4, 4],
            [4, 4, 4, 4, 4, 1, 0, 1, 4, 4, 4, 4, 4],
            [4, 4, 4, 4, 4, 1, 0, 1, 4, 4, 4, 4, 4],
            [4, 4, 4, 4, 4, 1, 0, 1, 4, 4, 4, 4, 4],
            [4, 4, 4, 4, 4, 1, 0, 1, 4, 4, 4, 4, 4],
            [4, 4, 4, 4, 1, 1, 0, 1, 1, 4, 4, 4, 4],
            [4, 4, 4, 4, 1, 32, 0, 51, 1, 4, 4, 4, 4],
            [4, 4, 4, 4, 1, 1, 0, 1, 1, 4, 4, 4, 4],
            [4, 4, 4, 4, 4, 1, 0, 1, 4, 4, 4, 4, 4],
            [4, 4, 4, 4, 4, 1, 0, 1, 4, 4, 4, 4, 4],
            [4, 4, 4, 4, 4, 1, 0, 1, 4, 4, 4, 4, 4],
            [4, 4, 4, 4, 4, 1, 0, 1, 4, 4, 4, 4, 4],
            [4, 4, 4, 4, 4, 1, 0, 1, 4, 4, 4, 4, 4],
        ],
        [
            [1, 16, 1, 16, 15, 1, 88, 1, 0, 11, 12, 13, 1],
            [1, 0, 1, 15, 0, 102, 0, 1, 105, 0, 19, 101, 1],
            [1, 101, 1, 1, 1, 1, 0, 1, 81, 1, 1, 82, 1],
            [1, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 1, 81, 1, 1, 1, 1, 1],
            [1, 101, 1, 19, 11, 0, 1, 18, 1, 0, 18, 13, 1],
            [1, 0, 1, 15, 0, 102, 1, 11, 103, 0, 15, 12, 1],
            [1, 0, 1, 1, 1, 81, 1, 102, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 105, 0, 0, 1],
            [1, 1, 1, 81, 1, 1, 81, 1, 1, 81, 1, 1, 1],
            [1, 11, 101, 109, 1, 0, 103, 0, 1, 114, 11, 19, 1],
            [1, 87, 18, 101, 82, 12, 13, 15, 1, 0, 12, 33, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ],
        [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 15, 0, 15, 1, 16, 1, 87, 0, 1, 19, 13, 1],
            [1, 0, 22, 0, 1, 109, 1, 1, 0, 1, 0, 15, 1],
            [1, 0, 0, 113, 1, 0, 0, 0, 0, 81, 109, 0, 1],
            [1, 82, 1, 81, 1, 105, 1, 1, 1, 1, 1, 1, 1],
            [1, 11, 18, 15, 1, 0, 81, 102, 1, 0, 13, 19, 1],
            [1, 1, 103, 1, 1, 0, 1, 103, 113, 0, 11, 12, 1],
            [1, 1, 81, 1, 1, 102, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 101, 0, 15, 0, 0, 105, 0, 81, 114, 0, 1],
            [1, 0, 1, 1, 81, 1, 1, 81, 1, 1, 0, 15, 1],
            [1, 0, 1, 0, 113, 0, 1, 109, 13, 1, 16, 18, 1],
            [1, 88, 1, 15, 19, 12, 1, 15, 18, 1, 11, 12, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
        [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 15, 0, 1, 13, 0, 1, 88, 1, 85, 71, 86, 1],
            [1, 16, 113, 81, 18, 109, 81, 0, 1, 19, 0, 19, 1],
            [1, 15, 0, 1, 15, 0, 1, 103, 1, 1, 84, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 0, 1, 113, 0, 113, 1],
            [1, 19, 15, 15, 0, 103, 105, 0, 82, 0, 105, 44, 1],
            [1, 1, 1, 81, 1, 81, 1, 1, 1, 1, 1, 1, 1],
            [1, 18, 0, 109, 1, 109, 1, 13, 1, 19, 23, 19, 1],
            [1, 15, 11, 0, 1, 0, 1, 12, 1, 1, 84, 1, 1],
            [1, 1, 1, 81, 1, 0, 1, 11, 1, 114, 0, 114, 1],
            [1, 13, 19, 114, 1, 113, 1, 81, 1, 1, 82, 1, 1],
            [1, 12, 11, 0, 1, 0, 0, 0, 109, 0, 18, 87, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
        [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 1, 12, 0, 18, 1, 0, 13, 16, 1],
            [1, 0, 17, 0, 1, 0, 105, 0, 81, 109, 0, 18, 1],
            [1, 0, 0, 0, 1, 1, 81, 1, 1, 1, 1, 1, 1],
            [1, 1, 121, 1, 1, 15, 0, 1, 0, 15, 11, 19, 1],
            [1, 0, 0, 0, 113, 0, 15, 1, 105, 0, 0, 0, 1],
            [1, 114, 1, 1, 1, 1, 1, 1, 81, 1, 1, 81, 1],
            [1, 0, 0, 113, 0, 0, 0, 0, 114, 1, 0, 109, 1],
            [1, 1, 81, 1, 1, 1, 1, 1, 0, 1, 18, 0, 1],
            [1, 0, 0, 114, 0, 11, 18, 1, 109, 1, 13, 15, 1],
            [1, 81, 1, 1, 1, 1, 1, 1, 82, 1, 1, 1, 1],
            [1, 114, 0, 12, 19, 1, 87, 0, 18, 0, 0, 88, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ],
        [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 11, 11, 11, 0, 1, 87, 1, 0, 12, 12, 12, 1],
            [1, 18, 18, 18, 0, 81, 0, 81, 0, 19, 19, 19, 1],
            [1, 1, 1, 1, 1, 1, 84, 1, 1, 1, 1, 1, 1],
            [1, 11, 18, 109, 1, 114, 115, 114, 1, 109, 19, 12, 1],
            [1, 1, 1, 81, 1, 18, 114, 19, 1, 81, 1, 1, 1],
            [1, 0, 105, 0, 1, 1, 82, 1, 1, 0, 105, 0, 1],
            [1, 0, 1, 15, 1, 113, 121, 113, 1, 15, 1, 0, 1],
            [1, 114, 1, 1, 1, 11, 113, 12, 1, 1, 1, 114, 1],
            [1, 0, 0, 113, 1, 1, 83, 1, 1, 113, 0, 0, 1],
            [1, 1, 1, 81, 1, 15, 0, 15, 1, 81, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 88, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ]
    ]

    this.maps = {};
    for (var f = 0; f < map_txt.length; f++) {
        var floorname = 'MT' + f;
        var map = map_txt[f];
        var content = {};
        content['floor'] = f;
        content['title'] = '主塔 ' + f + ' 层';
        content['canFlyTo'] = true;
        var blocks = [];
        for (var i = 0; i < 13; i++) {
            for (var j = 0; j < 13; j++) {
                var id = map[i][j];
                var tmp = {'x': j, 'y': i}
                // 0-9 地形
                if (id == 1) tmp.event = {'cls': 'terrains', 'id': 'yellowWall'}; // 黄墙
                if (id == 2) tmp.event = {'cls': 'terrains', 'id': 'blueWall'}; // 蓝墙
                if (id == 3) tmp.event = {'cls': 'animates', 'id': 'lava', 'animate': 4, 'noPass': true}; // 岩浆
                if (id == 4) tmp.event = {'cls': 'animates', 'id': 'star', 'animate': 4, 'noPass': true}; // 星空
                // if (id==5) tmp.fg = {'cls': 'animates', 'id': 'star', 'animate': 4, 'noPass': true}; // 栅栏
                if (id == 6) tmp.event = {'cls': 'terrains', 'id': 'whiteWall'}; // 白墙

                // 11-50 物品
                if (id == 11) tmp.event = {'cls': 'items', 'id': 'redJewel', 'trigger': 'getItem'}; // 红宝石
                if (id == 12) tmp.event = {'cls': 'items', 'id': 'blueJewel', 'trigger': 'getItem'}; // 蓝宝石
                if (id == 13) tmp.event = {'cls': 'items', 'id': 'greenJewel', 'trigger': 'getItem'}; // 绿宝石
                if (id == 14) tmp.event = {'cls': 'items', 'id': 'yellowJewel', 'trigger': 'getItem'}; // 黄宝石
                if (id == 15) tmp.event = {'cls': 'items', 'id': 'yellowKey', 'trigger': 'getItem'}; // 黄钥匙
                if (id == 16) tmp.event = {'cls': 'items', 'id': 'blueKey', 'trigger': 'getItem'}; // 蓝钥匙
                if (id == 17) tmp.event = {'cls': 'items', 'id': 'redKey', 'trigger': 'getItem'}; // 红钥匙
                if (id == 18) tmp.event = {'cls': 'items', 'id': 'redPotion', 'trigger': 'getItem'}; // 红血瓶
                if (id == 19) tmp.event = {'cls': 'items', 'id': 'bluePotion', 'trigger': 'getItem'}; // 蓝血瓶
                if (id == 20) tmp.event = {'cls': 'items', 'id': 'yellowPotion', 'trigger': 'getItem'}; // 黄血瓶
                if (id == 21) tmp.event = {'cls': 'items', 'id': 'greenPotion', 'trigger': 'getItem'}; // 绿血瓶
                if (id == 22) tmp.event = {'cls': 'items', 'id': 'sword1', 'trigger': 'getItem'}; // 铁剑
                if (id == 23) tmp.event = {'cls': 'items', 'id': 'shield1', 'trigger': 'getItem'}; // 铁盾
                if (id == 24) tmp.event = {'cls': 'items', 'id': 'sword2', 'trigger': 'getItem'}; // 银剑
                if (id == 25) tmp.event = {'cls': 'items', 'id': 'shield2', 'trigger': 'getItem'}; // 银盾
                if (id == 26) tmp.event = {'cls': 'items', 'id': 'sword3', 'trigger': 'getItem'}; // 骑士剑
                if (id == 27) tmp.event = {'cls': 'items', 'id': 'shield3', 'trigger': 'getItem'}; // 骑士盾
                if (id == 28) tmp.event = {'cls': 'items', 'id': 'sword4', 'trigger': 'getItem'}; // 圣剑
                if (id == 29) tmp.event = {'cls': 'items', 'id': 'shield4', 'trigger': 'getItem'}; // 圣盾
                if (id == 30) tmp.event = {'cls': 'items', 'id': 'sword5', 'trigger': 'getItem'}; // 神圣剑
                if (id == 31) tmp.event = {'cls': 'items', 'id': 'shield5', 'trigger': 'getItem'}; // 神圣盾
                if (id == 32) tmp.event = {'cls': 'items', 'id': 'book', 'trigger': 'getItem'}; // 怪物手册
                if (id == 33) tmp.event = {'cls': 'items', 'id': 'fly', 'trigger': 'getItem'}; // 楼层传送器

                // 51-80 NPC
                if (id == 51) tmp.event = {'cls': 'npcs', 'id': 'wood', 'trigger': 'visitNpc', 'npcid': 'man1'};

                if (id == 71) tmp.event = {'cls': 'npcs', 'id': 'shop1', 'trigger': 'openShop', 'npcid': 'shop1'};
                if (id == 72) tmp.event = {'cls': 'npcs', 'id': 'shop1', 'trigger': 'openShop', 'npcid': 'shop2'};

                // 81-100 门
                if (id == 81) tmp.event = {'cls': 'terrains', 'id': 'yellowDoor', 'trigger': 'openDoor'};
                if (id == 82) tmp.event = {'cls': 'terrains', 'id': 'blueDoor', 'trigger': 'openDoor'};
                if (id == 83) tmp.event = {'cls': 'terrains', 'id': 'redDoor', 'trigger': 'openDoor'};
                if (id == 84) tmp.event = {'cls': 'terrains', 'id': 'specialDoor', 'trigger': 'openDoor'};
                if (id == 85) tmp.event = {'cls': 'terrains', 'id': 'shop1-left'}; // 商店左
                if (id == 86) tmp.event = {'cls': 'terrains', 'id': 'shop1-right'}; // 商店左
                if (id == 87) tmp.event = {
                    'cls': 'terrains', 'id': 'upFloor', 'trigger': 'changeFloor', 'noPass': false,
                    'data': {'floorId': 'MT' + (f + 1), 'stair': 'downFloor'}
                };
                if (id == 88) tmp.event = {
                    'cls': 'terrains', 'id': 'downFloor', 'trigger': 'changeFloor', 'noPass': false,
                    'data': {'floorId': 'MT' + (f - 1), 'stair': 'upFloor'}
                };

                // 101-200 怪物
                if (id == 101) tmp.event = {'cls': 'enemys', 'id': 'greenSlime', 'trigger': 'battle'};
                if (id == 102) tmp.event = {'cls': 'enemys', 'id': 'redSlime', 'trigger': 'battle'};
                if (id == 103) tmp.event = {'cls': 'enemys', 'id': 'blackSlime', 'trigger': 'battle'};
                if (id == 104) tmp.event = {'cls': 'enemys', 'id': 'slimelord', 'trigger': 'battle'};
                if (id == 105) tmp.event = {'cls': 'enemys', 'id': 'bat', 'trigger': 'battle'};
                if (id == 106) tmp.event = {'cls': 'enemys', 'id': 'bigBat', 'trigger': 'battle'};
                if (id == 107) tmp.event = {'cls': 'enemys', 'id': 'redBat', 'trigger': 'battle'};
                if (id == 108) tmp.event = {'cls': 'enemys', 'id': 'vampire', 'trigger': 'battle'};
                if (id == 109) tmp.event = {'cls': 'enemys', 'id': 'bluePriest', 'trigger': 'battle'};
                if (id == 110) tmp.event = {'cls': 'enemys', 'id': 'redPriest', 'trigger': 'battle'};
                if (id == 111) tmp.event = {'cls': 'enemys', 'id': 'brownWizard', 'trigger': 'battle'};
                if (id == 112) tmp.event = {'cls': 'enemys', 'id': 'redWizard', 'trigger': 'battle'};
                if (id == 113) tmp.event = {'cls': 'enemys', 'id': 'skeleton', 'trigger': 'battle'};
                if (id == 114) tmp.event = {'cls': 'enemys', 'id': 'skeletonSoilder', 'trigger': 'battle'};
                if (id == 115) tmp.event = {'cls': 'enemys', 'id': 'skeletonCaptain', 'trigger': 'battle'};
                if (id == 116) tmp.event = {'cls': 'enemys', 'id': 'ghostSkeleton', 'trigger': 'battle'};
                if (id == 117) tmp.event = {'cls': 'enemys', 'id': 'zombie', 'trigger': 'battle'};
                if (id == 118) tmp.event = {'cls': 'enemys', 'id': 'zombieKnight', 'trigger': 'battle'};
                if (id == 119) tmp.event = {'cls': 'enemys', 'id': 'rock', 'trigger': 'battle'};
                if (id == 120) tmp.event = {'cls': 'enemys', 'id': 'slimeMan', 'trigger': 'battle'};
                if (id == 121) tmp.event = {'cls': 'enemys', 'id': 'yellowGuard', 'trigger': 'battle'};
                if (id == 122) tmp.event = {'cls': 'enemys', 'id': 'blueGuard', 'trigger': 'battle'};
                if (id == 123) tmp.event = {'cls': 'enemys', 'id': 'redGuard', 'trigger': 'battle'};
                if (id == 124) tmp.event = {'cls': 'enemys', 'id': 'swordsman', 'trigger': 'battle'};
                if (id == 125) tmp.event = {'cls': 'enemys', 'id': 'soldier', 'trigger': 'battle'};
                if (id == 126) tmp.event = {'cls': 'enemys', 'id': 'yellowKnight', 'trigger': 'battle'};
                if (id == 127) tmp.event = {'cls': 'enemys', 'id': 'redKnight', 'trigger': 'battle'};
                if (id == 128) tmp.event = {'cls': 'enemys', 'id': 'darkKnight', 'trigger': 'battle'};
                if (id == 129) tmp.event = {'cls': 'enemys', 'id': 'redKing', 'trigger': 'battle'};
                if (id == 130) tmp.event = {'cls': 'enemys', 'id': 'whiteKing', 'trigger': 'battle'};
                if (id == 131) tmp.event = {'cls': 'enemys', 'id': 'blackMagician', 'trigger': 'battle'};
                if (id == 132) tmp.event = {'cls': 'enemys', 'id': 'silverSlime', 'trigger': 'battle'};
                if (id == 133) tmp.event = {'cls': 'enemys', 'id': 'poisonSkeleton', 'trigger': 'battle'};
                if (id == 134) tmp.event = {'cls': 'enemys', 'id': 'poisonBat', 'trigger': 'battle'};
                if (id == 135) tmp.event = {'cls': 'enemys', 'id': 'steelRock', 'trigger': 'battle'};
                if (id == 136) tmp.event = {'cls': 'enemys', 'id': 'poisonZombie', 'trigger': 'battle'};
                if (id == 137) tmp.event = {'cls': 'enemys', 'id': 'blackKing', 'trigger': 'battle'};
                if (id == 138) tmp.event = {'cls': 'enemys', 'id': 'yellowKing', 'trigger': 'battle'};
                if (id == 139) tmp.event = {'cls': 'enemys', 'id': 'greenKing', 'trigger': 'battle'};
                if (id == 140) tmp.event = {'cls': 'enemys', 'id': 'blueKnight', 'trigger': 'battle'};

                // 200+ 特殊

                if (id > 0) blocks.push(tmp);
            }
        }

        content['blocks'] = blocks;
        this.maps[floorname] = content;
    }
}

maps.prototype.getMaps = function (mapName) {
    if (mapName == undefined) {
        for (var floorname in this.maps) {
            var blocks = this.maps[floorname]['blocks'];
            blocks.forEach(function (t) {
                if (t.event == undefined) return;
                if (t.event.noPass == undefined) {
                    if (t.event.cls=='enemys' || t.event.cls=='terrains' || t.event.cls=='npcs') {
                        t.event.noPass = true;
                    }
                }
                if (t.event.animate == undefined) {
                    if (t.event.cls=='enemys' || t.event.cls=='npcs') {
                        t.event.animate = 2;
                    }
                }
            });
        }
        return this.maps;
    }
    return this.maps[mapName];
}

main.instance.maps = new maps();