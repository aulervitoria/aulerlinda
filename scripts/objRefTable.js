const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.bound,
		C3.Plugins.Text,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Behaviors.Platform.Cnds.IsOnFloor,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.System.Cnds.Compare,
		C3.Behaviors.Platform.Exps.VectorX,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText
	];
};
self.C3_JsPropNameTable = [
	{Sólido: 0},
	{chão: 0},
	{lava: 0},
	{Plataforma: 0},
	{CentrarEm: 0},
	{RestritoAoLayout: 0},
	{jogador: 0},
	{chave: 0},
	{fundo: 0},
	{Texto: 0},
	{vida: 0}
];

self.InstanceType = {
	chão: class extends self.ISpriteInstance {},
	lava: class extends self.ISpriteInstance {},
	jogador: class extends self.ISpriteInstance {},
	chave: class extends self.ISpriteInstance {},
	fundo: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {}
}