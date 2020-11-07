(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.projects_en = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_21 = function() {
		this.stop();
	}
	this.frame_32 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(11).call(this.frame_32));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ALzryIAAXlI3lAAIAA3lIXlAA").cp();
	var mask_graphics_1 = new cjs.Graphics().p("AryryIXlAAIAAXlI3lAAIAA3l").cp();
	var mask_graphics_2 = new cjs.Graphics().p("AryryIXlAAIAAXlI3lAAIAA3l").cp();
	var mask_graphics_3 = new cjs.Graphics().p("AryryIXlAAIAAXlI3lAAIAA3l").cp();
	var mask_graphics_4 = new cjs.Graphics().p("AryryIXlAAIAAXlI3lAAIAA3l").cp();
	var mask_graphics_5 = new cjs.Graphics().p("AryryIXlAAIAAXlI3lAAIAA3l").cp();
	var mask_graphics_6 = new cjs.Graphics().p("AryryIXlAAIAAXlI3lAAIAA3l").cp();
	var mask_graphics_7 = new cjs.Graphics().p("AryryIXlAAIAAXlI3lAAIAA3l").cp();
	var mask_graphics_8 = new cjs.Graphics().p("AryryIXlAAIAAXlI3lAAIAA3l").cp();
	var mask_graphics_9 = new cjs.Graphics().p("AryryIXlAAIAAXlI3lAAIAA3l").cp();
	var mask_graphics_10 = new cjs.Graphics().p("AryryIXlAAIAAXlI3lAAIAA3l").cp();
	var mask_graphics_11 = new cjs.Graphics().p("AryryIXlAAIAAXlI3lAAIAA3l").cp();
	var mask_graphics_12 = new cjs.Graphics().p("AryryIXlAAIAAXlI3lAAIAA3l").cp();
	var mask_graphics_13 = new cjs.Graphics().p("AryryIXlAAIAAXlI3lAAIAA3l").cp();
	var mask_graphics_14 = new cjs.Graphics().p("ALzryIAAXlI3lAAIAA3lIXlAA").cp();

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:75.5,y:-75.4}).wait(1).to({graphics:mask_graphics_1,x:75.5,y:-64.6}).wait(1).to({graphics:mask_graphics_2,x:75.5,y:-53.8}).wait(1).to({graphics:mask_graphics_3,x:75.5,y:-43}).wait(1).to({graphics:mask_graphics_4,x:75.5,y:-32.3}).wait(1).to({graphics:mask_graphics_5,x:75.5,y:-21.5}).wait(1).to({graphics:mask_graphics_6,x:75.5,y:-10.7}).wait(1).to({graphics:mask_graphics_7,x:75.5,y:0}).wait(1).to({graphics:mask_graphics_8,x:75.5,y:10.8}).wait(1).to({graphics:mask_graphics_9,x:75.5,y:21.6}).wait(1).to({graphics:mask_graphics_10,x:75.5,y:32.4}).wait(1).to({graphics:mask_graphics_11,x:75.5,y:43.1}).wait(1).to({graphics:mask_graphics_12,x:75.5,y:53.9}).wait(1).to({graphics:mask_graphics_13,x:75.5,y:64.7}).wait(1).to({graphics:mask_graphics_14,x:75.5,y:75.5}).wait(19));

	// Layer 3
	this.instance = new lib.boxP();
	this.instance.setTransform(184.5,184.5,1,1,0,0,0,184.5,184.5);
	this.instance.cache(-1,-1,155,155);

	this.instance.mask = mask;
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(33));

	// Layer 4
	this.instance_1 = new lib.tekstP();
	this.instance_1.setTransform(74.7,75.2,1,1,0,0,0,37.6,12.9);

	this.instance_1.mask = mask;
	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(33));

	// Layer 6
	this.instance_2 = new lib.liniaP();
	this.instance_2.setTransform(76,43.5,0.045,1,0,0,0,0,0.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({scaleX:1},14,cjs.Ease.get(1)).wait(16));

	// Layer 5
	this.instance_3 = new lib.liniaP();
	this.instance_3.setTransform(76,112.5,0.045,1,0,0,0,0,0.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},0).to({scaleX:1},14,cjs.Ease.get(1)).wait(12));

	// Layer 8
	this.instance_4 = new lib.box2();
	this.instance_4.setTransform(184.5,184.5,1,1,0,0,0,184.5,184.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;
	this.instance_4.cache(-1,-1,155,155);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(22).to({_off:false},0).to({alpha:0.711},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,151,151);


// symbols:
(lib.tekst = function() {
	this.initialize(img.tekst);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,151,151);


(lib.tekstP = function() {
	this.initialize();

	// Layer 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAFAF4").s().p("ABVh+QAGACADADQAEADACAEQABAEAAAFIAAAEQAAADgBADQgBAEgCADQgCADgDACQgDACgDACIAVAmIgMAAIgVgkIgIAAQgCAAgEAAIAAAkIgLAAIAAhWQAFAAAGAAQAGAAAFAAQAIAAAGABIAAAAABahmIAAgCQAAgHgEgEQgEgDgLAAQgCAAgDAAQgDAAgDAAIAAAfQAEAAADAAQACAAADAAQAKAAAEgEQAEgEAAgHIAAAAAAXgvQgHAIgOAAQgMAAgHgHQgHgHAAgOIAAg7IALAAIAAA8QAAAJAEAEQAFAEAGAAQAIAAAEgEQAEgEAAgJIAAg8IALAAIAAA6QAAAOgGAHIAAAAAAvAxQgDAAgCAAIAAAfQAEAAACABQADAAACAAQAKAAAEgEQAFgEAAgHIAAgDQAAgHgFgDQgEgEgKAAQgCAAgEAAIAAAAABDAqQAFABAEADQADADACAEQACAEAAAGIAAADQAAAEgBADQgBADgCADQgCADgDADQgDACgEABIAWAnIgNAAIgUglIgIAAQgDAAgDAAIAAAlIgLAAIAAhWQAFgBAGAAQAFAAAGAAQAIAAAGACIAAAAABxAqIAAApIAfgpIANAAIghApIAkAsIgOAAIghgqIAAAqIgLAAIAAhVIALAAAg6h9QAFABADAEQAEAEABAFQACAFAAAGIAAAhQAAAGgCAGQgBAFgEADQgDAEgFACQgGACgHAAQgIAAgFgCQgGgCgDgEQgDgDgCgFQgCgGAAgGIAAghQAAgGACgFQACgFADgEQADgEAGgBQAFgCAIAAQAHAAAGACIAAAAAg6hxQgFgFgIAAQgJAAgEAFQgFAEAAAIIAAAjQAAAIAFAFQAEAEAJAAQAIAAAFgEQAEgFAAgIIAAgjQAAgIgEgEIAAAAAhkAqIASBJIAPhJIAMAAIgUBVIgOAAIgShJIgSBJIgPAAIgThVIAMAAIAPBJIARhJIAPAAAgqA4QACgFADgDQAEgEAFgCQAGgCAHAAQAIAAAFACQAEACADAEQADADACAFQACAGAAAGIAAAgQAAAHgCAFQgCAFgDAEQgDADgEACQgFACgIAAQgHAAgGgCQgFgCgEgDQgDgEgCgFQgBgFAAgHIAAggQAAgGABgGIAAAAAgCA2QgEgEgJAAQgIAAgFAEQgEAFAAAIIAAAjQAAAIAEAEQAFAFAIAAQAJAAAEgFQACgEAAgIIAAgjQAAgIgCgFIAAAA").cp();
	this.shape.setTransform(38.4,14.9);

	// Layer 7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAFAF4").s().p("ABeh5QAEADACAEQABAEAAAFIAAAEQAAADgBADQgBAEgCADQgCADgDACQgDACgDACIAVAmIgMAAIgVgkIgIAAQgCAAgEAAIAAAkIgLAAIAAhWQAFAAAGAAQAGAAAFAAQAIAAAGABQAGACADADIAAAAABHh2QgCAAgDAAQgDAAgDAAIAAAfQAEAAADAAQACAAADAAQAKAAAEgEQAEgEAAgHIAAgCQAAgHgEgEQgEgDgLAAIAAAAAAXgvQgHAIgOAAQgMAAgHgHQgHgHAAgOIAAg7IALAAIAAA8QAAAJAEAEQAFAEAGAAQAIAAAEgEQAEgEAAgJIAAg8IALAAIAAA6QAAAOgGAHIAAAAAA1AxQgCAAgEAAQgDAAgCAAIAAAfQAEAAACABQADAAACAAQAKAAAEgEQAFgEAAgHIAAgDQAAgHgFgDQgEgEgKAAIAAAAABDAqQAFABAEADQADADACAEQACAEAAAGIAAADQAAAEgBADQgBADgCADQgCADgDADQgDACgEABIAWAnIgNAAIgUglIgIAAQgDAAgDAAIAAAlIgLAAIAAhWQAFgBAGAAQAFAAAGAAQAIAAAGACIAAAAABxAqIAAApIAfgpIANAAIghApIAkAsIgOAAIghgqIAAAqIgLAAIAAhVIALAAAg6hxQgFgFgIAAQgJAAgEAFQgFAEAAAIIAAAjQAAAIAFAFQAEAEAJAAQAIAAAFgEQAEgFAAgIIAAgjQAAgIgEgEIAAAAAg6h9QAFABADAEQAEAEABAFQACAFAAAGIAAAhQAAAGgCAGQgBAFgEADQgDAEgFACQgGACgHAAQgIAAgFgCQgGgCgDgEQgDgDgCgFQgCgGAAgGIAAghQAAgGACgFQACgFADgEQADgEAGgBQAFgCAIAAQAHAAAGACIAAAAAhkAqIASBJIAPhJIAMAAIgUBVIgOAAIgShJIgSBJIgPAAIgThVIAMAAIAPBJIARhJIAPAAAglAwQAEgEAFgCQAGgCAHAAQAIAAAFACQAEACADAEQADADACAFQACAGAAAGIAAAgQAAAHgCAFQgCAFgDAEQgDADgEACQgFACgIAAQgHAAgGgCQgFgCgEgDQgDgEgCgFQgBgFAAgHIAAggQAAgGABgGQACgFADgDIAAAAAgPAyQgIAAgFAEQgEAFAAAIIAAAjQAAAIAEAEQAFAFAIAAQAJAAAEgFQACgEAAgIIAAgjQAAgIgCgFQgEgEgJAAIAAAA").cp();
	this.shape_1.setTransform(38.4,14.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(22.4,1.8,32.1,26);


(lib.liniaP = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5F4E9").s().p("ABuAFIjbAAIAAgJIDbAAIAAAJ").cp();
	this.shape_2.setTransform(0,0.5);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.9,0,22,1);


(lib.boxP = function() {
	this.initialize();

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5F4E9").s().p("AAArKIrKLBILKLUILLrUIrLrBAAAryILzLpIrzL8Iryr8ILyrp").cp();
	this.shape_3.setTransform(75.5,75.5);

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,151,151);


(lib.box2 = function() {
	this.initialize();

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(255,255,255,0.502)","rgba(255,255,255,0)"],[0,1],-0.4,74.5,0,-0.4,74.5,127.1).s().p("AryAQILiLjIMDsDIrgriIsFMC").cp();
	this.shape_4.setTransform(75.5,75.5);

	this.addChild(this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,151,151);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;