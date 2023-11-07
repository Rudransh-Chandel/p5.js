function preload()
{
}

function setup()
{
    canvas = createCanvas(630, 470);
    canvas.position(110, 250);
    video = createCapture(VIDEO)
    video.hide();
    tintcolor = "";
}

function apply_filter()
{
    tintcolor = document.getElementById("filterEnter").value;
}

function draw()
{
image(video, 0,0,630,470);
tint(tintcolor);
}

function take_snapshot()
{
    save("tintphoto.png");
}