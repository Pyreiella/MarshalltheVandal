const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.bound,
		C3.Behaviors.scrollto,
		C3.Plugins.Tilemap,
		C3.Plugins.TiledBg,
		C3.Behaviors.jumpthru,
		C3.Behaviors.solid,
		C3.Plugins.Keyboard,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Behaviors.Platform.Cnds.OnMove,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Behaviors.Platform.Cnds.OnStop
	];
};
self.C3_JsPropNameTable = [
	{Platform: 0},
	{BoundToLayout: 0},
	{ScrollTo: 0},
	{Marshall: 0},
	{Wall: 0},
	{Jumpthru: 0},
	{TVStand: 0},
	{Solid: 0},
	{TiledBackground: 0},
	{TV: 0},
	{Keyboard: 0},
	{Bookshelf: 0},
	{CatTower1: 0},
	{CatTower2: 0},
	{CatTower3: 0}
];

self.InstanceType = {
	Marshall: class extends self.ISpriteInstance {},
	Wall: class extends self.ITilemapInstance {},
	TVStand: class extends self.ITiledBackgroundInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	TV: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	Bookshelf: class extends self.ISpriteInstance {},
	CatTower1: class extends self.ISpriteInstance {},
	CatTower2: class extends self.ISpriteInstance {},
	CatTower3: class extends self.ISpriteInstance {}
}